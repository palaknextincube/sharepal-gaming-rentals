/**
 * SharePal MongoDB & Mongoose Database Engine
 * Connects to MongoDB with automatic schema seeding and operations
 */

require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const Product = require('./models/Product');
const Order = require('./models/Order');
const Review = require('./models/Review');
const Faq = require('./models/Faq');
const Vote = require('./models/Vote');

const DB_FILE = path.join(__dirname, 'sharepal_db.json');
const INITIAL_PRODUCTS_FILE = path.join(__dirname, 'product-list.json');

const defaultReviews = [
  { name: "Satyaki", city: "Kolkata", category: "Trekking Gear", rating: 5, text: "I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super transparent deposit return policy." },
  { name: "Afrana", city: "Bangalore", category: "Gaming Console", rating: 5, text: "Have used their services twice now. They never disappoint. Quick responses, polite, transparent deposit refund policy. Product was in mint condition. Delivered and picked up without any hassle. Highly recommend!" },
  { name: "Kanthikiran", city: "Bangalore", category: "Riding Gear", rating: 5, text: "It’s an amazing service, starting from the quality of the gear provided to the pickup and delivery experience. Truly hassle-free zero deposit rental." },
  { name: "Amal", city: "Bangalore", category: "Gaming Console", rating: 5, text: "I am a regular customer and order PS5 for weekends. It’s very affordable and booking an order is super easy. Highly satisfied with the games collection." },
  { name: "Pankaj", city: "Mumbai", category: "Action Cameras", rating: 5, text: "The experience with SharePal is awesome. The camera and service provided by them is good. I recommend SharePal to everyone." },
  { name: "Jayaraman", city: "Mumbai", category: "Riding Gear", rating: 5, text: "Great company amazing products at affordable prices and great service. I would recommend SharePal to everyone." },
  { name: "Manish", city: "Mumbai", category: "Gaming Console", rating: 5, text: "I like the way SharePal works and really enjoyed the PS5. Will order again. Thanks SharePal team!" },
  { name: "Rakesh", city: "Mumbai", category: "Trekking Gear", rating: 5, text: "Ordered gear in mint condition, very well sanitized. Timely delivery and seamless pickup." },
  { name: "Shruti", city: "Mumbai", category: "Winter Wear", rating: 5, text: "Right from the time I saw their website, till I got my gear, the entire experience with SharePal was smooth and delightful." },
  { name: "Amit", city: "Delhi", category: "Riding Gear", rating: 5, text: "Awesome experience. Please be the way you are. Received excellent gear in walk-in condition. Keep it up!" }
];

const defaultFaqs = [
  {
    question: "How can I rent from SharePal?",
    answer: "Select your desired gaming console or gadget, choose your rental dates, complete a quick 2-minute digital KYC verification, and place your order with Pay on Delivery or online payment. We deliver right to your doorstep in Bangalore with zero security deposit!"
  },
  {
    question: "If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?",
    answer: "Partial extensions are completely supported! You can easily extend individual products or your entire order directly from your order dashboard or by simply sending a message to our WhatsApp support team."
  },
  {
    question: "When does the rental start?",
    answer: "Your rental period starts on the start date you selected at checkout. We ensure the console is delivered either before or on the morning of your start date so you get the full rental duration to enjoy your gaming sessions."
  },
  {
    question: "What will be the condition of the products at the time of delivery?",
    answer: "All gaming consoles and controllers are 100% tested, deeply sanitized, and packed in shockproof carry bags with all required high-speed HDMI 2.1 cables, power cables, and 100+ preloaded games in excellent condition."
  },
  {
    question: "Why is verification required?",
    answer: "Since SharePal provides zero security deposit rentals on expensive premium gadgets, a simple 2-minute digital KYC (Government ID and address verification) helps us maintain trust and security for our community."
  }
];

class MongoDatabaseManager {
  constructor() {
    this.isMongoConnected = false;
    this.fallbackData = {
      products: [],
      orders: [],
      reviews: defaultReviews,
      faqs: defaultFaqs,
      votes: { portal: 10000 }
    };
    this.initFallback();
    this.connectMongo();
  }

  initFallback() {
    if (fs.existsSync(DB_FILE)) {
      try {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        this.fallbackData = JSON.parse(raw);
      } catch (e) {}
    } else if (fs.existsSync(INITIAL_PRODUCTS_FILE)) {
      try {
        const seed = JSON.parse(fs.readFileSync(INITIAL_PRODUCTS_FILE, 'utf8'));
        this.fallbackData.products = (seed.products || []).map(p => ({
          ...p,
          description: p.description || "Experience next-gen 4K 120FPS gaming with ultra-high speed SSD, ray tracing, 3D audio, and 100+ preloaded blockbuster titles ready to play.",
          included: p.included || ["PS5 Console", "DualSense Controller", "High-Speed HDMI 2.1 Cable", "Power Cable", "100+ Preloaded Games", "Shockproof Travel Carrying Case"]
        }));
      } catch (e) {}
    }
  }

  saveFallback() {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(this.fallbackData, null, 2), 'utf8');
    } catch (e) {}
  }

  async connectMongo() {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sharepal';
    console.log(`[MongoDB] Connecting to ${mongoUri}...`);

    try {
      await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 2500 });
      this.isMongoConnected = true;
      console.log(`[MongoDB] ✅ Successfully connected to MongoDB database!`);

      await this.seedMongoIfEmpty();
    } catch (err) {
      this.isMongoConnected = false;
      console.log(`[MongoDB] ⚠️ Could not connect to MongoDB server: ${err.message}`);
      console.log(`[MongoDB] 👉 Running in fallback mode. To connect MongoDB, start mongod or paste your MongoDB Atlas URI into .env`);
    }
  }

  async seedMongoIfEmpty() {
    try {
      const count = await Product.countDocuments();
      if (count === 0 && fs.existsSync(INITIAL_PRODUCTS_FILE)) {
        console.log(`[MongoDB] Seeding initial products into MongoDB...`);
        const seed = JSON.parse(fs.readFileSync(INITIAL_PRODUCTS_FILE, 'utf8'));
        const productsToInsert = (seed.products || []).map(p => ({
          ...p,
          description: p.description || "Experience next-gen 4K 120FPS gaming with ultra-high speed SSD, ray tracing, 3D audio, and 100+ preloaded blockbuster titles ready to play.",
          included: p.included || ["PS5 Console", "DualSense Controller", "High-Speed HDMI 2.1 Cable", "Power Cable", "100+ Preloaded Games", "Shockproof Travel Carrying Case"]
        }));
        await Product.insertMany(productsToInsert);
        console.log(`[MongoDB] Inserted ${productsToInsert.length} products.`);
      }

      const revCount = await Review.countDocuments();
      if (revCount === 0) {
        await Review.insertMany(defaultReviews);
      }

      const faqCount = await Faq.countDocuments();
      if (faqCount === 0) {
        await Faq.insertMany(defaultFaqs);
      }

      const voteCount = await Vote.countDocuments();
      if (voteCount === 0) {
        await Vote.create({ product_id: 37616, count: 10000 });
      }
    } catch (e) {
      console.error(`[MongoDB] Seeding error:`, e.message);
    }
  }

  // --- PRODUCTS ---
  async getProducts(filter = {}) {
    if (this.isMongoConnected) {
      const query = {};
      if (filter.search) {
        query.$or = [
          { name: { $regex: filter.search, $options: 'i' } },
          { description: { $regex: filter.search, $options: 'i' } }
        ];
      }
      if (filter.hideOos === 'true' || filter.hideOos === true) {
        query.out_of_stock = false;
      }
      if (filter.category && filter.category !== 'all') {
        if (filter.category === 'ps5') {
          query.name = { $regex: 'PS5', $options: 'i' };
        } else if (filter.category === 'fc26') {
          query.name = { $regex: 'FC2|FIFA', $options: 'i' };
        } else if (filter.category === 'controllers') {
          query.name = { $regex: 'Controller', $options: 'i' };
        } else if (filter.category === 'racing') {
          query.name = { $regex: 'Racing|Portal', $options: 'i' };
        } else if (filter.category === 'new') {
          query.tag = { $in: ['New', 'Vote to Launch'] };
        }
      }

      let sortOption = { booked_count: -1 };
      if (filter.sort === 'price-asc') sortOption = { per_day_rent: 1 };
      if (filter.sort === 'price-desc') sortOption = { per_day_rent: -1 };
      if (filter.sort === 'rating-desc') sortOption = { rating: -1 };

      return await Product.find(query).sort(sortOption).lean();
    }

    // Fallback in-memory / JSON
    let list = [...this.fallbackData.products];
    if (filter.search) {
      const q = filter.search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q)));
    }
    if (filter.hideOos === 'true' || filter.hideOos === true) {
      list = list.filter(p => !p.out_of_stock);
    }
    if (filter.category && filter.category !== 'all') {
      if (filter.category === 'ps5') list = list.filter(p => p.name.includes('PS5'));
      else if (filter.category === 'fc26') list = list.filter(p => p.name.includes('FC2') || p.name.includes('FIFA'));
      else if (filter.category === 'controllers') list = list.filter(p => p.name.includes('2 Controller') || p.name.includes('4 Controller'));
      else if (filter.category === 'racing') list = list.filter(p => p.name.includes('Racing') || p.name.includes('Portal'));
      else if (filter.category === 'new') list = list.filter(p => p.tag === 'New' || p.tag === 'Vote to Launch');
    }
    return list;
  }

  async getProductById(id) {
    if (this.isMongoConnected) {
      return await Product.findOne({ id: parseInt(id, 10) }).lean();
    }
    return this.fallbackData.products.find(p => p.id === parseInt(id, 10));
  }

  async updateProduct(id, updates) {
    if (this.isMongoConnected) {
      return await Product.findOneAndUpdate({ id: parseInt(id, 10) }, updates, { new: true }).lean();
    }
    const idx = this.fallbackData.products.findIndex(p => p.id === parseInt(id, 10));
    if (idx === -1) return null;
    this.fallbackData.products[idx] = { ...this.fallbackData.products[idx], ...updates };
    this.saveFallback();
    return this.fallbackData.products[idx];
  }

  // --- ORDERS ---
  async createOrder(orderData) {
    const orderRef = `SP-${(orderData.city || 'BLR').substring(0, 3).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder = {
      order_ref: orderRef,
      customer_name: orderData.customer_name || 'Verified Gamer',
      customer_phone: orderData.customer_phone || '+91 9876543210',
      city: orderData.city || 'Bangalore',
      rental_days: orderData.rental_days || 3,
      start_date: orderData.start_date || new Date().toISOString().split('T')[0],
      end_date: orderData.end_date || '',
      items: orderData.items || [],
      subtotal: orderData.subtotal || 0,
      discount: orderData.discount || 0,
      total_amount: orderData.total_amount || 0,
      security_deposit: 0,
      payment_mode: orderData.payment_mode || 'Pay on Delivery (Zero Deposit)',
      status: 'CONFIRMED'
    };

    if (this.isMongoConnected) {
      return await Order.create(newOrder);
    }

    this.fallbackData.orders.unshift({ id: this.fallbackData.orders.length + 1, ...newOrder, createdAt: new Date().toISOString() });
    this.saveFallback();
    return newOrder;
  }

  async getOrders() {
    if (this.isMongoConnected) {
      return await Order.find().sort({ createdAt: -1 }).lean();
    }
    return this.fallbackData.orders;
  }

  // --- REVIEWS ---
  async getReviews() {
    if (this.isMongoConnected) {
      return await Review.find().sort({ createdAt: -1 }).lean();
    }
    return this.fallbackData.reviews;
  }

  async addReview(reviewData) {
    if (this.isMongoConnected) {
      return await Review.create(reviewData);
    }
    const newRev = { id: this.fallbackData.reviews.length + 1, ...reviewData, createdAt: new Date().toISOString() };
    this.fallbackData.reviews.unshift(newRev);
    this.saveFallback();
    return newRev;
  }

  // --- FAQS ---
  async getFaqs() {
    if (this.isMongoConnected) {
      return await Faq.find().lean();
    }
    return this.fallbackData.faqs;
  }

  // --- VOTES ---
  async votePortal() {
    if (this.isMongoConnected) {
      const doc = await Vote.findOneAndUpdate(
        { product_id: 37616 },
        { $inc: { count: 1 } },
        { upsert: true, new: true }
      );
      return doc.count;
    }
    this.fallbackData.votes.portal = (this.fallbackData.votes.portal || 10000) + 1;
    this.saveFallback();
    return this.fallbackData.votes.portal;
  }

  async getPortalVotes() {
    if (this.isMongoConnected) {
      const doc = await Vote.findOne({ product_id: 37616 });
      return doc ? doc.count : 10000;
    }
    return this.fallbackData.votes.portal || 10000;
  }
}

module.exports = new MongoDatabaseManager();
