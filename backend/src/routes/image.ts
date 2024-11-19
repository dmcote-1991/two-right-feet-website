import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { GridFSBucket } from 'mongodb';
import multer from 'multer';
import ImageModel from '../models/Image.js';

const imageRouter = express.Router();

const storage = multer.memoryStorage(); // Store files in memory temporarily
const upload = multer({ storage });

// Get the bucket and upload instance from app locals
const bucket = (req: Request): GridFSBucket => req.app.locals.bucket;

// Route for uploading images to MongoDB
imageRouter.post('/upload', upload.single('image'), async (req: Request, res: Response): Promise<void> => {
  const currentBucket = bucket(req);

  if (!currentBucket) {
    res.status(503).send('MongoDB is not connected. Try again later.');
    return;
  }

  try {
    const file = req.file; // Get the uploaded file
    if (!file) {
      res.status(400).send('No file uploaded');
      return;
    }

    const uploadStream = currentBucket.openUploadStream(file.originalname, {
      contentType: file.mimetype,
    });
    uploadStream.end(file.buffer); // Write file buffer to GridFS

    // Save metadata to database
    const newImage = new ImageModel({
      filename: file.originalname,
      contentType: file.mimetype,
      fileId: uploadStream.id, // GridFS file ID
    });

    await newImage.save();

    res.status(200).json({ message: 'Image uploaded successfully', fileId: uploadStream.id });
  } catch (error) {
    console.error('Error during image upload:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// Route for retrieving image by ID
imageRouter.get('/image/:id', async (req: Request, res: Response): Promise<void> => {
  const currentBucket = bucket(req);

  if (!currentBucket) {
    res.status(503).send('MongoDB is not connected. Try again later.');
    return;
  }

  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const fileStream = currentBucket.openDownloadStream(id);
    fileStream.on('error', (error: Error) => {
      console.error('Error retrieving file:', error);
      res.status(404).send('File not found');
    });
    fileStream.pipe(res);
  } catch (error) {
    console.error('Error during image retrieval:', error);
    res.status(500).send('Error retrieving image');
  }
});

export default imageRouter;
