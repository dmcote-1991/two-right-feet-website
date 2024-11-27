import mongoose from 'mongoose';

// Article schema
const articleSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  content: mongoose.Schema.Types.Mixed // For React components or HTML content
});

// Create the Article model
const Article = mongoose.model('Article', articleSchema);

export default Article;
