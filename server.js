/**
 * SharePal Backend Server & REST API with MongoDB Support
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ==================== REST API ROUTES ====================

// 1. Health check & DB Status
app.get('/api/health', async (req, res) => {
  const products = await db.getProducts();
  const orders = await db.getOrders();
  res.json({
    status: 'online',
    database: db.isMongoConnected ? 'MongoDB (Connected)' : 'File-Backed Fallback (Active)',
    mongo_connected: db.isMongoConnected,
    products_count: products.length,
    orders_count: orders.length,
    timestamp: new Date().toISOString()
  });
});

// 2. Products API
app.get('/api/products', async (req, res) => {
  try {
    const { category, search, hideOos, sort } = req.query;
    const products = await db.getProducts({ category, search, hideOos, sort });
    res.json({
      success: true,
      total: products.length,
      products
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await db.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/products/:id', async (req, res) => {
  try {
    const updated = await db.updateProduct(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.json({ success: true, product: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Orders API (Persists to MongoDB)
app.post('/api/orders', async (req, res) => {
  try {
    const orderData = req.body;
    if (!orderData || !orderData.items || orderData.items.length === 0) {
      return res.status(400).json({ success: false, error: 'Order must contain items' });
    }

    const order = await db.createOrder(orderData);
    console.log(`[Database] Placed new order: ${order.order_ref} | City: ${order.city} | Amount: ₹${order.total_amount}`);
    
    res.status(201).json({
      success: true,
      message: 'Order created successfully and saved to database',
      order
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await db.getOrders();
    res.json({
      success: true,
      total: orders.length,
      orders
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Reviews API
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await db.getReviews();
    res.json({
      success: true,
      total: reviews.length,
      reviews
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const { name, city, category, text, rating } = req.body;
    if (!name || !text) {
      return res.status(400).json({ success: false, error: 'Name and review text are required' });
    }

    const review = await db.addReview({ name, city, category, text, rating });
    res.status(201).json({ success: true, review });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. FAQs API
app.get('/api/faqs', async (req, res) => {
  try {
    const faqs = await db.getFaqs();
    res.json({
      success: true,
      total: faqs.length,
      faqs
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 6. Votes API
app.get('/api/votes/portal', async (req, res) => {
  try {
    const votes = await db.getPortalVotes();
    res.json({ success: true, votes });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/votes/portal', async (req, res) => {
  try {
    const newCount = await db.votePortal();
    res.json({
      success: true,
      message: 'Vote recorded',
      votes: newCount
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Admin Database GUI Dashboard
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Fallback to index.html for SPA routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 SharePal Full-Stack App running at http://localhost:${PORT}`);
  console.log(`📦 Database Engine: MongoDB + Mongoose Schemas Loaded`);
  console.log(`🔗 REST API endpoints available at http://localhost:${PORT}/api/products`);
  console.log(`=======================================================`);
});
