# 🎮 SharePal - Gaming Gadgets on Rent (Bangalore)

> **End-to-End High-Fidelity Frontend & Full-Stack Recreation of [SharePal Bangalore Gaming Gadgets](https://sharepal.in/bangalore/gaming-gadgets-on-rent)**.

---

## 📌 Project Overview
This project is a pixel-perfect, feature-rich recreation of the SharePal gaming gadget rental page in Bangalore. It preserves the authentic SharePal visual language and design system while introducing user-centric enhancements, dynamic pricing algorithms, cart management, and a MongoDB backend.

---

## ✨ Key Features & Pixel-Perfect Recreations

### 1. 🎨 Visual Design & Design System
* **Brand Identity**: Authentic SharePal branding (`sharepal.`), curated color palette (Primary Teal `#008299`, Accent Orange `#f95738`, Success Emerald `#10b981`, and Dark Slate `#0f172a`).
* **Modern Typography**: Integrated Google Fonts (`Inter`, `Outfit`, and `Ubuntu`).
* **Micro-Animations & Transitions**: Smooth hover elevations, glassmorphic floating badges, skeleton states, and modal overlays.

### 2. 🏙️ Sticky Header & Dynamic Location Engine
* **Interactive City Switcher**: Defaults to **Bangalore** with fast 2-hour delivery badge, and allows switching to Mumbai, Delhi NCR, Hyderabad, Pune, Kolkata, Chennai, or Goa with real-time UI localization.
* **Global Search Bar**: Instant real-time search with debounce and one-click clear button.
* **Cart Badge & Slide-out Drawer**: Animated badge counter tracking items in real time.

### 3. ⚡ Dynamic Rental Duration & Slab Discount Engine
* **Interactive Duration Selector**:
  * `1 Day` &rarr; Standard Daily Rate
  * `3 Days (Weekend Special)` &rarr; **15% Slab Discount / day** *(Default)*
  * `7 Days (1 Week)` &rarr; **30% Slab Discount / day**
  * `15 Days` &rarr; **45% Slab Discount / day**
  * `30 Days (1 Month)` &rarr; **60% Slab Discount / day**
* Switching durations dynamically recalculates rates and estimated totals across all 23 product cards and in the checkout summary.

### 4. 📦 Complete Product Catalog & Advanced Filters
* Populated with all 23 official products from `product-list.json`.
* **Sub-category Pills**: *All (23)*, *PS5 Consoles (14)*, *FC26/FC25 Combos (6)*, *Multi-Controller Combos (10)*, *Racing Wheels & Accessories (2)*, *New Launches (5)*.
* **Secondary Filters**: "Hide Out of Stock" toggle switch and sorting (*🔥 Popular/Trending, Price: Low to High, Price: High to Low, Highest Rated, Most Booked*).
* **Product Card Badges**: `🔥 Trending`, `✨ New Launch`, `🚀 Vote to Launch`, and `Out of Stock`.

### 5. 🎮 100+ Games Showcase & Customer Reviews Marquee
* **Infinite Games Ticker**: Highlights preloaded titles (EA FC 25/26, Spider-Man 2, God of War Ragnarök, Cricket 24, GTA V, Ghost of Tsushima, Tekken 8, Hogwarts Legacy).
* **"Served more than 1 Lakh Orders" Marquee**: Authentic Google reviews with 5 golden stars, verified reviewer initials, cities, and categories.
* **Impact Statistics**: ₹250Cr+ Saved Together, 4.5M Kg CO₂e Saved, 100K+ Products in circulation.
* **Interactive FAQ Accordion**: 5 expandable questions matching official SharePal copy.

### 6. 🛒 Cart Drawer & Checkout Experience
* Slide-out cart drawer with item details, duration multiplier, free zero deposit calculation, and promo coupon support (`GAMEON10` for 10% off).
* "Proceed to Book" button with celebratory confetti animation and confirmed order dialog.

### 7. 🗄️ Full-Stack Backend with MongoDB & Database GUI
* **Mongoose Models**: `Product`, `Order`, `Review`, `Faq`, and `Vote`.
* **Database Admin GUI Dashboard**: Visual management panel accessible at `http://localhost:3000/admin`.
* **REST API**: Full CRUD endpoints for Products, Orders, Reviews, and Votes.

---

## 🚀 User Experience (UX) Improvements & Creative Additions
1. **Dynamic Real-Time Slab Calculator**: Instead of static daily prices, users can instantly toggle between 1 to 30 days and see exact savings before adding to cart.
2. **Interactive Quick View Modal**: Users can inspect box contents, included cables, and pre-installed game libraries without navigating away.
3. **Instant "Vote to Launch" Counter**: Interactive community voting counter for the PlayStation Portal.
4. **Restock Alert Subscription**: "Notify When Available" feedback for out-of-stock items.
5. **Built-in Database Admin GUI**: Dedicated dashboard at `/admin` to view database records.

---

## 🛠️ Tech Stack
* **Frontend**: Semantic HTML5, Vanilla CSS3 (Custom Design System, Flexbox/Grid, Glassmorphism, Micro-Animations), Modern JavaScript (ES6+ Modules, Async Fetch, Confetti API, Lucide Icons).
* **Backend**: Node.js, Express 5, CORS, Dotenv.
* **Database**: MongoDB (via Mongoose) with automatic schema seeding and local persistence fallback.

---

## 💻 Local Setup & Running Instructions

### 1. Clone & Install Dependencies
```bash
git clone <your-github-repo-url>
cd sharepal-gaming-rentals
npm install
```

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env` and set your MongoDB URI:
```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/sharepal
```
*(Note: If MongoDB is not running locally, the server automatically uses the built-in persistent fallback without crashing).*

### 3. Start the Server
```bash
node server.js
```

### 4. Open in Browser
* **Storefront**: [http://localhost:3000](http://localhost:3000)
* **Database Admin GUI**: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## ☁️ Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to **GitHub**.
2. Go to [Vercel](https://vercel.com/) &rarr; Click **"Add New Project"**.
3. Import your GitHub repository.
4. Click **Deploy** (the included `vercel.json` automatically configures the server and static routes).

### Deploying to Render / Railway / Netlify
* **Render/Railway**: Set Build Command to `npm install` and Start Command to `node server.js`.
* **Netlify/GitHub Pages**: The frontend `index.html` is fully client-side capable and can be deployed directly as static files.

---

## 📄 License
This project was built for educational and evaluation purposes recreating SharePal's publicly accessible user experience. All product images and brand references belong to **SharePal (SWNAC E-Kiraya Services Pvt Ltd)**.
