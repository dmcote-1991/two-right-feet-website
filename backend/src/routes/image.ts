import express, { Request, Response } from 'express';
import ImageModel from '../models/Image.js';
import { GridFSBucket } from 'mongodb';
import mongoose from 'mongoose';

const router = express.Router();

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
      res.status(500).json({ error: 'Database connecction is not available' });
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
