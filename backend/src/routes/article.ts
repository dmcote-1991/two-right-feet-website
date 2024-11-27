import express, { Request, Response } from 'express';
import Article from '../models/Article.js';

const articleRouter = express.Router();

// Add a new article
articleRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { title, author, category, content } = req.body;
    const article = new Article({ title, author, category, content });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).send('Error creating article');
  }
});

// Fetch all articles
articleRouter.get('/', async (req: Request, res: Response) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).send('Error fetching articles');
  }
});

export default articleRouter;
