import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import program from './routes/program.js';
import imageRoutes from './routes/image.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Allow CORS for requests from the frontend on port 5173
app.use(cors({
  origin: 'http://localhost:5173',
}));

// Load environment variables
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());
app.use('/api/programs', program);
app.use('/api/images', imageRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Two Right Feet API!');
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
