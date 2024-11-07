import mongoose, { Schema, Document } from 'mongoose';

interface Image extends Document {
  fileId: mongoose.Types.ObjectId;
}

const imageSchema = new Schema({
  fileId: { type: mongoose.Types.ObjectId, required: true }
});

// Create and export the Image model
const ImageModel = mongoose.model<Image>('Image', imageSchema);

export default ImageModel;
