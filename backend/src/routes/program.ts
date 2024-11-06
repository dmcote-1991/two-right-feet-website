import express, { Request, Response } from 'express';
import Program from '../models/Program.js';

const router = express.Router();

// Create a new program
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, category, description } = req.body;
    const program = new Program({ title, category, description });
    await program.save();
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : 'An error occurred' });
  }
});

// Get all programs
router.get('/', async (req: Request, res: Response) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error instanceof Error ? error.message : 'An error occurred'});
  }
});

// Get all programs with optional category filter
// router.get('/', async (req: Request, res: Response) => {
//   try {
//     const { category } = req.query; // Get category from query parameters
//     const query = category ? { category } : {}; // Build the query object
//     const programs = await Program.find(query); // Use the query to find programs
//     res.json(programs);
//   } catch (error) {
//     res.status(500).json({ message: error instanceof Error ? error.message : 'An error occurred'});
//   }
// });

export default router;
