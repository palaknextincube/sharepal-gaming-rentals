const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  product_id: { type: Number, default: 37616 },
  count: { type: Number, default: 10000 }
}, {
  timestamps: true
});

module.exports = mongoose.models.Vote || mongoose.model('Vote', voteSchema);
