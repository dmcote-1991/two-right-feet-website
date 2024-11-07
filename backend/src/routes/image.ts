import express, { Request, Response } from 'express';
import ImageModel from '../models/Image.js';
import multer from 'multer';
import { GridFSBucket } from 'mongodb';
import mongoose from 'mongoose';

interface File {
  filename: string;
  contentType: string;
  _id: mongoose.Types.ObjectId;
}

const router = express.Router();
const upload = multer();

router.post('/upload-gridfs', upload.single('image'), async (req: Request, res: Response): Promise<void> => {
  const db = mongoose.connection.db;
  if (!db) {
    res.status(500).json({ error: 'Database connection not available' });
    return;
  }

  const gfs = new GridFSBucket(db, { bucketName: 'images' });
  const { originalname, mimetype } = req.file || {};

  if (!req.file) {
    res.status(400).json({ error: 'No file uploaded' });
    return;
  }

  const writeStream = gfs.openUploadStream(originalname || 'file', {
    contentType: mimetype
  });

  writeStream.write(req.file.buffer);

  writeStream.end();

  writeStream.on('finish', async (file: File) => {
    const newImage = new ImageModel({
      filename: file.filename,
      contentType: file.contentType,
      fileId: file._id
    });

    try {
      await newImage.save();
      res.status(201).json({ message: 'Image uploaded successfully', fileId: file._id });        
    } catch (error) {
      res.status(500).json({ error: 'Failed to save image metadata', details: error });
    }
  });

  writeStream.on('error', (error) => {
    res.status(500).json({ error: 'Error uploading file', details: error });
  });
});

export default router;
