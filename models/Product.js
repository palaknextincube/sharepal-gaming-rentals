const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 4.8 },
  booked_count: { type: Number, default: 0 },
  tag: { type: String, default: '' },
  per_day_rent: { type: Number, required: true },
  out_of_stock: { type: Boolean, default: false },
  category: { type: String, default: 'ps5' },
  controllers: { type: Number, default: 1 },
  has_games: { type: Boolean, default: true },
  description: { type: String, default: '' },
  included: [{ type: String }]
}, {
  timestamps: true
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
