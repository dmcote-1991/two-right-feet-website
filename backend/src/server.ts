import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { GridFSBucket } from 'mongodb';
import http from 'http'; // For increasing server timeout
import programRouter from './routes/program.js';
import imageRouter from './routes/image.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const mongoURI = process.env.MONGO_URI as string;

const app = express();
const PORT = process.env.PORT || 5000;

// Allow CORS for requests from the frontend on port 5173
app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use('/api/programs', programRouter);
app.use('/api/images', imageRouter);

// MongoDB connection and GrisFS setup
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully');
    const db = mongoose.connection.db;
    if (!db) {
      console.error('Database connection not available');
      return;
    }

    // Initialize GrisFSBucket with the connected database
    const bucket = new GridFSBucket(db, { bucketName: 'images' });

    // Pass the bucket to the imageRouter
    app.locals.bucket = bucket;
    })
    .catch((err) => {
      console.error('MongoDB connection failed:', err);
      process.exit(1); // Stop the process if connection fails
    });

// Increase server timeout
const server = http.createServer(app);
server.setTimeout(300000); // Sets timeout to 5 minutes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
