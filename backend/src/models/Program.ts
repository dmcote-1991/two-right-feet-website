import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true }
});

const Program = mongoose.model('Program', programSchema);

export default Program;
