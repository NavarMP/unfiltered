import mongoose from 'mongoose';

const PosterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug'],
    unique: true,
  },
  content: {
    type: String,
  },
  theme: {
    type: String, // e.g., 'dark', 'light', 'custom'
  },
  assets: [{
    type: String, // Cloudinary URLs
  }],
  interactiveElements: {
    type: Object, // Custom config for animations/3D
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Poster || mongoose.model('Poster', PosterSchema);
