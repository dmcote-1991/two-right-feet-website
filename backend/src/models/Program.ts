import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
