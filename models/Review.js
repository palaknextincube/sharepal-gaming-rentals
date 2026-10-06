const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, default: 'Bangalore' },
  category: { type: String, default: 'Gaming Console' },
  text: { type: String, required: true },
  rating: { type: Number, default: 5 }
}, {
  timestamps: true
});

module.exports = mongoose.models.Review || mongoose.model('Review', reviewSchema);
