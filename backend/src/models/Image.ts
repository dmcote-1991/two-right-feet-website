import mongoose, { Schema, Document } from 'mongoose';

interface Image extends Document {
  filename: string;
  contentType: string;
  fileId: mongoose.Types.ObjectId;
}

const imageSchema = new Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  fileId: { type: mongoose.Types.ObjectId, required: true }
});

// Create and export the Image model
const ImageModel = mongoose.model<Image>('Image', imageSchema);

export default ImageModel;
