import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import ImageModel from '../models/Image.js';
import { GridFSBucket } from 'mongodb';

const imageRouter = express.Router();

// Get the bucket and upload instance from app locals
const bucket = (req: Request): GridFSBucket => req.app.locals.bucket;

// Test Upload:
imageRouter.post('/test-upload', (req: Request, res: Response): void => {
  const upload = req.app.locals.upload as multer.Multer;

  upload.single('image')(req, res, (err: any) => { // Call the middleware manually
    if (err) {
      res.status(400).json({ error: 'No file uploaded.' });
      return;
    }
    res.status(200).json({ file: req.file });
  });
});


// Route for uploading an image
imageRouter.post('/upload', async (req: Request, res: Response): Promise<void> => {
  const upload = req.app.locals.upload as multer.Multer;

  upload.single("image")(req, res, async (err: any) => {
    if (err) {
      res.status(400).json({ error: 'No file uploaded.' });
      return;
    }

    const currentBucket = bucket(req);

    if (!currentBucket) {
      res.status(503).send('MongoDB is not connected. Try again later.');
      return;
    }

    if (!req.file) {
      console.error('No file uploaded');
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    const file = req.file as Express.Multer.File & { id?: mongoose.Types.ObjectId };

    try {
      // Save file metadata into MongoDB
      const newImage = new ImageModel({
        filename: file.originalname,
        contentType: file.mimetype,
        fileId: file.id, // GridFS file ID
      });

      await newImage.save();

      res.status(201).json({
        message: 'File uploaded successfully',
        fileId: file.id,
        filename: file.originalname
      });
    } catch (error) {
      console.error('Error during file upload:', error);
      res.status(500).json({ error: 'Failed to save file metadata' });
    }
  });
});

// Route for getting an image by ID
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
