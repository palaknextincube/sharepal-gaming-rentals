const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  daily_rate: Number,
  total_price: Number
}, { _id: false });

const orderSchema = new mongoose.Schema({
  order_ref: { type: String, required: true, unique: true },
  customer_name: { type: String, default: 'Verified Gamer' },
  customer_phone: { type: String, default: '+91 9876543210' },
  city: { type: String, default: 'Bangalore' },
  rental_days: { type: Number, required: true },
  start_date: { type: String },
  end_date: { type: String },
  items: [orderItemSchema],
  subtotal: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  total_amount: { type: Number, required: true },
  security_deposit: { type: Number, default: 0 },
  payment_mode: { type: String, default: 'Pay on Delivery (Zero Deposit)' },
  status: { type: String, default: 'CONFIRMED' }
}, {
  timestamps: true
});

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);
