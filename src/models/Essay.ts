import mongoose from 'mongoose';

const EssaySchema = new mongoose.Schema({
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
    required: [true, 'Please provide content'],
  },
  excerpt: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  category: {
    type: String, // religion, country, politics, life
    required: true,
  },
  author: {
    type: String,
    default: 'Muhammed Navar',
  },
  published: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Essay || mongoose.model('Essay', EssaySchema);
