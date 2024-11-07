import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import { GridFSBucket } from 'mongodb';
import ImageModel from '../models/Image.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Use Express.Multer.File from express
interface CustomFile extends Express.Multer.File {
  id: string;  // Extend to include 'id'
}

// Set up multer-gridfs-storage to store files directly in GridFS
const storage = new GridFsStorage({
  url: process.env.MONGODB_URI,
  file: (req: Request, file: Express.Multer.File) => {
    return {
      bucketName: 'images', // Name of the GridFS bucket
      filename: file.originalname,
      contentType: file.mimetype
    };
  }
});

const upload = multer({ storage });

// Route for uploading an image
router.post('/upload', upload.single('image'), async (req: Request, res: Response): Promise<void> => {
  const file = req.file as CustomFile;  // Cast to CustomFile

  if (!file) {
    res.status(400).json({ error: 'No file uploaded' });
    return;
  }

  const { originalname, mimetype, id } = file;

  try {
    // Save the image metadata in the "images" collection in MongoDB
    const image = new ImageModel({
      filename: originalname,
      contentType: mimetype,
      fileId: id
    });

    await image.save();

    res.status(200).json({
      message: 'Image uploaded successfully',
      imageId: image._id,
      filename: image.filename
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
    console.error(error);
    res.status(500).json({ error: 'Error fetching image', details: error });
  }
});

export default router;
