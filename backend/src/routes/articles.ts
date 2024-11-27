import express, { Request, Response } from 'express';
import Article from '../models/Article';

const articleRouter = express.Router();

// Fetch all articles
articleRouter.get('/articles', async (req: Request, res: Response) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).send('Error fetching articles');
  }
});

export default articleRouter;