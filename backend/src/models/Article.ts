import mongoose, { Schema, Document } from 'mongoose';

// Define the Article interface
interface IArticle extends Document {
  title: string;
  author: string;
  category: string;
  content: string;
}

// Define the Article schema
const ArticleSchema = new Schema<IArticle>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
});

// Create the Article model
const Article = mongoose.model<IArticle>('Article', ArticleSchema);

export default Article;
