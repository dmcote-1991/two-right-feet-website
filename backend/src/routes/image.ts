import express, { Request, Response } from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import { GridFSBucket } from 'mongodb';
import ImageModel from '../models/Image.js';

const router = express.Router();

// Set up multer storage to store file in memory (as a buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route for uploading an image
router.post('/upload', upload.single('image'), async (req: Request, res: Response): Promise<void> => {
  if (!req.file) {
    res.status(400).json({ error: 'No file uploaded' });
    return;
  }

  const { originalname, mimetype, buffer } = req.file;

  try {
    const db = mongoose.connection.db;

    // Check if db connection is available
    if (!db) {
      res.status(500).json({ error: 'Database connection not available' });
      return;
    }

    const gfs = new GridFSBucket(db, { bucketName: 'images' });

    // Upload the image to GridFS
    const uploadStream = gfs.openUploadStream(originalname, {
      contentType: mimetype,
    });

    uploadStream.end(buffer); // Write the buffer to GridFS

    // Once the upload is done, save image metadata in the "image" collection
    const image = new ImageModel({
      filename: originalname,
      contentType: mimetype,
      fileId: uploadStream.id,
    });

    await image.save();

    res.status(200).json({
      message: 'Image uploaded successfully',
      imageId: image._id,
      filename: image.filename,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error uploading image', details: error });
  }
});

// Route for getting an image by ID
router.get('/image/:fileId', async (req: Request, res: Response): Promise<void> => {
  const fileId = req.params.fileId;

  if (!fileId) {
    res.status(400).json({ error: 'File ID is required' });
    return;
  }

  try {
    const db = mongoose.connection.db;

    // Check if db connection is available
    if (!db) {
      res.status(500).json({ error: 'Database connection is not available' });
      return;
    }

    const gfs = new GridFSBucket(db, { bucketName: 'images' });

    // Fetch the image metadata from the database
    const image = await ImageModel.findOne({ fileId: new mongoose.Types.ObjectId(fileId) });
    
    if (!image) {
      res.status(404).json({ error: 'Image not found' });
      return;
    }

    // Stream the image from GridFS and pipe it to the response
    const downloadStream = gfs.openDownloadStream(image.fileId);

    downloadStream.on('file', (file) => {
      res.set('Content-Type', file.contentType);
    });
    
    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching image', details: error });
  }
});

export default router;
