const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  display_order: { type: Number, default: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.models.Faq || mongoose.model('Faq', faqSchema);
