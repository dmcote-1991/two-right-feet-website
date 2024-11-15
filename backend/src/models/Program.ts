import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true }
});

const ProgramModel = mongoose.model('Program', programSchema);

export default ProgramModel;
