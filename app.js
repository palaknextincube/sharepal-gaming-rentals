/**
 * SharePal Gaming Gadgets on Rent Web Application
 * Full-Stack Frontend connected to Backend REST API & Database
 */

// Global State
const state = {
  city: 'Bangalore',
  rentalDays: 3,
  discountPercent: 15,
  activeFilter: 'all',
  searchQuery: '',
  hideOutOfStock: false,
  sortBy: 'trending',
  cart: [],
  coupon: null,
  products: [],
  reviews: [],
  faqs: [],
  portalVotes: 10000,
  hasVotedPortal: false,
  apiConnected: false
};

// Fallback initial products
const FALLBACK_PRODUCTS = [
  {
    id: 18273,
    name: "PS5 + Games (100+) + 1 Controller",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-100-games-with-1-controller/ps5-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
    rating: 4.6,
    booked_count: 649,
    tag: "Trending",
    per_day_rent: 200,
    out_of_stock: false,
    category: "ps5",
    controllers: 1,
    has_games: true,
    description: "Experience next-gen 4K 120FPS gaming with ultra-high speed SSD, ray tracing, 3D audio, and 100+ preloaded blockbuster titles ready to play.",
    included: ["PS5 Console (825GB/1TB SSD)", "1x DualSense Wireless Controller", "High-Speed HDMI 2.1 Cable", "Power Cable & USB-C Cable", "100+ PS Plus Deluxe Games Pre-installed", "Shockproof Travel Carrying Case"]
  },
  {
    id: 20242,
    name: "PS5 All in one Combo + 2 Controllers",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-with-100-games-with-2-controllers/ps5-with-2-controllers-with-ea-play-with-ps-plus-deluxe-subscription-combo-on-rent-sharepal-1.webp",
    rating: 4.5,
    booked_count: 604,
    tag: "Trending",
    per_day_rent: 440,
    out_of_stock: false,
    category: "ps5",
    controllers: 2,
    has_games: true,
    description: "The ultimate couch co-op gaming package. Includes 2 controllers, 100+ PS Plus Deluxe games, plus EA Play subscription (FIFA, NFS, Battlefield).",
    included: ["PS5 Console", "2x DualSense Wireless Controllers", "EA Play All-Access Pass", "100+ Deluxe PS Plus Titles", "HDMI 2.1 & Dual Charging Station", "Padded Carry Bag"]
  },
  {
    id: 18255,
    name: "PS5 + Games (100+) + 2 Controllers",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-100-games-with-2-controllers/ps5-with-100-games-with-2-controllers-on-rent-sharepal-1.webp",
    rating: 4.8,
    booked_count: 397,
    tag: "Trending",
    per_day_rent: 260,
    out_of_stock: false,
    category: "ps5",
    controllers: 2,
    has_games: true,
    description: "Most popular weekend party setup. 2 wireless haptic controllers and complete access to 100+ games for multiplayer fun with friends and family.",
    included: ["PS5 Console", "2x DualSense Controllers", "100+ Preloaded Games", "HDMI 2.1 & Cables", "Safety Carry Case"]
  },
  {
    id: 20105,
    name: "FC25 + 2 Controllers Combo",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-fc25/ps5-with-fc25-with-100-games-with-2-controllerS-on-rent-sharepal-1.webp",
    rating: 4.8,
    booked_count: 209,
    tag: "Trending",
    per_day_rent: 165,
    out_of_stock: false,
    category: "fc26",
    controllers: 2,
    has_games: true,
    description: "Compete with friends on EA SPORTS FC 25 with 2 DualSense controllers. Features HyperMotionV technology and updated rosters.",
    included: ["PS5 Console", "EA Sports FC 25 (Full Version)", "2x DualSense Controllers", "100+ Extra PS Plus Games", "HDMI 2.1 & Travel Bag"]
  },
  {
    id: 8185,
    name: "PS5 + 1 Controller (Disc or Digital) (No Games Included)",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-1-controller/ps5-console-with-1-controller-on-rent-sharepal-1.webp",
    rating: 4.8,
    booked_count: 236,
    tag: "",
    per_day_rent: 160,
    out_of_stock: false,
    category: "ps5",
    controllers: 1,
    has_games: false,
    description: "Budget-friendly console rental. Ideal if you already have your own PlayStation Network account or physical discs.",
    included: ["PS5 Console", "1x DualSense Controller", "HDMI 2.1 & Power Cord", "Padded Carry Bag"]
  },
  {
    id: 18117,
    name: "PS5 + EA Play + 2 Controllers",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-combo-with-2-controllers/ps5-ea-play-combo-with-2-controllers-on-rent-sharepal-1.webp",
    rating: 4.8,
    booked_count: 167,
    tag: "",
    per_day_rent: 260,
    out_of_stock: true,
    category: "ps5",
    controllers: 2,
    has_games: true,
    description: "Includes access to EA Play top franchises like Need for Speed, Battlefield, Star Wars Jedi, and Madden.",
    included: ["PS5 Console", "2x DualSense Controllers", "EA Play Pass", "High-Speed HDMI & Power Cable"]
  },
  {
    id: 19716,
    name: "PS5 All in one Combo + 1 Controller",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-with-100-games-with-1-controller/ps5-with-controller-with-ea-play-with-ps-plus-deluxe-subscription-combo-on-rent-sharepal-1.webp",
    rating: 4.5,
    booked_count: 187,
    tag: "Trending",
    per_day_rent: 260,
    out_of_stock: true,
    category: "ps5",
    controllers: 1,
    has_games: true,
    description: "Single-player powerhouse combo. Comes with 1 controller, full PS Plus Deluxe vault, and EA Play catalog.",
    included: ["PS5 Console", "1x DualSense Controller", "PS Plus Deluxe + EA Play", "Cables & Travel Case"]
  },
  {
    id: 19680,
    name: "PS5 + 2 Controllers (Disc or Digital) (No Games Included)",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-2%20controllers/ps5-console-with-2-controllers-on-rent-sharepal-1.webp",
    rating: 4.2,
    booked_count: 210,
    tag: "",
    per_day_rent: 200,
    out_of_stock: false,
    category: "ps5",
    controllers: 2,
    has_games: false,
    description: "PS5 hardware with two wireless controllers for those who have their own game library or subscriptions.",
    included: ["PS5 Console", "2x DualSense Controllers", "HDMI 2.1 & Power Cables", "Travel Bag"]
  },
  {
    id: 17795,
    name: "God Of War Ragnarök + 1 Controller (Digital Game)",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-god-of-war-ragnarok/ps5-with-god-of-war-ragnarok-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
    rating: 4.6,
    booked_count: 164,
    tag: "",
    per_day_rent: 200,
    out_of_stock: false,
    category: "ps5",
    controllers: 1,
    has_games: true,
    description: "Journey through the Nine Realms as Kratos and Atreus in this critically acclaimed Norse myth adventure.",
    included: ["PS5 Console", "God of War Ragnarök (Full Digital)", "1x Controller", "100+ Bonus Games", "Cables & Case"]
  },
  {
    id: 18055,
    name: "PS5 + EA Play + 1 Controller",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-combo-with-1-controller/ps5-with-controller-with-ea-play-combo-on-rent-sharepal-1.webp",
    rating: 4.5,
    booked_count: 211,
    tag: "",
    per_day_rent: 180,
    out_of_stock: false,
    category: "ps5",
    controllers: 1,
    has_games: true,
    description: "Great value single player package featuring EA Play games including It Takes Two, Dead Space Remake, and Star Wars.",
    included: ["PS5 Console", "1x DualSense Controller", "EA Play Pass", "Cables & Travel Case"]
  },
  {
    id: 20104,
    name: "Uncharted Series + 1 Controller (Digital Game)",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-uncharted/ps5-with-uncharted-legacy-of-thieves-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
    rating: 4.6,
    booked_count: 171,
    tag: "",
    per_day_rent: 200,
    out_of_stock: false,
    category: "ps5",
    controllers: 1,
    has_games: true,
    description: "Includes Uncharted: Legacy of Thieves Collection in remastered 4K 60FPS. Experience Nathan Drake's globe-trotting escapades.",
    included: ["PS5 Console", "Uncharted Collection", "1x Controller", "100+ Preloaded Games", "HDMI 2.1 Cable"]
  },
  {
    id: 20103,
    name: "Cricket 24 + 2 Controllers (Digital Game)",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-cricket-24/ps5-with-cricket-24-with-100-games-with-2-controllerS-on-rent-sharepal-1.webp",
    rating: 4.8,
    booked_count: 186,
    tag: "",
    per_day_rent: 200,
    out_of_stock: false,
    category: "ps5",
    controllers: 2,
    has_games: true,
    description: "Official game of the Ashes and World Cricket. Play head-to-head with a friend on 2 DualSense controllers.",
    included: ["PS5 Console", "Cricket 24 (Full Edition)", "2x DualSense Controllers", "100+ Games Vault", "Cables & Travel Bag"]
  },
  {
    id: 36028,
    name: "PS5 + FC26 + 1 Controller",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa26-1-controller/ps5-with-fifa-26-with-1-controller-on-rent-sharepal-1.webp",
    rating: 4.8,
    booked_count: 2527,
    tag: "New",
    per_day_rent: 310,
    out_of_stock: false,
    category: "fc26",
    controllers: 1,
    has_games: true,
    description: "Brand new EA Sports FC 26 package! Jump into the latest football mechanics, Career Mode, and Ultimate Team.",
    included: ["PS5 Console", "EA Sports FC 26 (Latest)", "1x Controller", "100+ Deluxe PS Plus Games", "Cables & Case"]
  },
  {
    id: 20102,
    name: "Ghost of Tsushima + 1 Controller (Digital Game)",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ghost-of-tsushima/ps5-with-ghost-of-tsushima-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
    rating: 4.6,
    booked_count: 140,
    tag: "",
    per_day_rent: 200,
    out_of_stock: false,
    category: "ps5",
    controllers: 1,
    has_games: true,
    description: "Wield the katana as Jin Sakai across breathtaking feudal Japan. Enhanced with PS5 3D audio and DualSense haptics.",
    included: ["PS5 Console", "Ghost of Tsushima Director's Cut", "1x Controller", "100+ Deluxe Games", "HDMI 2.1 & Bag"]
  },
  {
    id: 20224,
    name: "PS5 Mega Racing Wheel Combo",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-mega-racing-combo/ps5-with-controller-with-ps-plus-deluxe-subscription-with-ea-play-with-wheel-combo-on-rent-sharepal-1%20(1).webp",
    rating: 4.8,
    booked_count: 139,
    tag: "",
    per_day_rent: 310,
    out_of_stock: true,
    category: "racing",
    controllers: 1,
    has_games: true,
    description: "Logitech TrueForce Force Feedback Racing Wheel + Pedals combo with Gran Turismo 7 and F1 for realistic simulation.",
    included: ["PS5 Console", "Logitech G29/G923 Racing Wheel & Pedals", "1x DualSense Controller", "Gran Turismo 7 & F1", "Mounting Clamp & Cables"]
  },
  {
    id: 36039,
    name: "PS5 + FC26 + 2 Controllers",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa26-2-controllers/ps5-with-fifa-26-with-2-controllers-on-rent-sharepal-1.webp",
    rating: 4.8,
    booked_count: 1524,
    tag: "New",
    per_day_rent: 310,
    out_of_stock: false,
    category: "fc26",
    controllers: 2,
    has_games: true,
    description: "Top pick for tournament nights! Comes with EA Sports FC 26, 2 wireless controllers, and 100+ co-op games.",
    included: ["PS5 Console", "EA Sports FC 26", "2x DualSense Controllers", "100+ Bonus Games", "HDMI 2.1 & Carry Bag"]
  },
  {
    id: 20098,
    name: "FC24 + 2 Controllers (Digital Game)",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-fc24/ps5-with-fc24-with-100-games-with-2-controllerS-on-rent-sharepal-1.webp",
    rating: 4.8,
    booked_count: 165,
    tag: "",
    per_day_rent: 200,
    out_of_stock: true,
    category: "fc26",
    controllers: 2,
    has_games: true,
    description: "Play EA Sports FC 24 with 2 controllers. Great for couch matches and friendly rivalries.",
    included: ["PS5 Console", "EA Sports FC 24", "2x Controllers", "100+ Games", "Cables & Case"]
  },
  {
    id: 36050,
    name: "PS5 + FC26 + 4 Controllers",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa26-4-controllers/ps5-with-fifa-26-with-4-controllers-on-rent-sharepal-1.webp",
    rating: 4.8,
    booked_count: 1224,
    tag: "New",
    per_day_rent: 310,
    out_of_stock: false,
    category: "fc26",
    controllers: 4,
    has_games: true,
    description: "The ultimate 4-player party machine! 4 DualSense wireless controllers, FC 26, and 4-player multiplayer hits.",
    included: ["PS5 Console", "EA Sports FC 26", "4x DualSense Wireless Controllers", "Multi-charging dock", "100+ Games", "Travel Bag"]
  },
  {
    id: 20100,
    name: "Spider-Man Miles Morales + 1 Controller (Digital Game)",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-spiderman-miles-morales/ps5-with-spiderman-miles-morales-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
    rating: 4.6,
    booked_count: 123,
    tag: "",
    per_day_rent: 200,
    out_of_stock: false,
    category: "ps5",
    controllers: 1,
    has_games: true,
    description: "Swing through snowy Manhattan as Miles Morales with instant fast travel and adaptive triggers.",
    included: ["PS5 Console", "Marvel's Spider-Man: Miles Morales", "1x Controller", "100+ Deluxe Titles", "Cables & Bag"]
  },
  {
    id: 37512,
    name: "PS5 + FC27 + 2 Controllers",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa27-2-controllers/ps5-with-fifa-27-with-2-controllers-on-rent-sharepal-1.webp",
    rating: 4.9,
    booked_count: 652,
    tag: "New",
    per_day_rent: 300,
    out_of_stock: false,
    category: "fc26",
    controllers: 2,
    has_games: true,
    description: "Next-gen sports simulation edition with dual haptic controllers for competitive gaming.",
    included: ["PS5 Console", "FC27 Edition", "2x DualSense Controllers", "100+ Games", "Cables & Case"]
  },
  {
    id: 37501,
    name: "PS5 + FC27 + 1 Controller",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa27-1-controller/ps5-with-fifa-27-with-1-controller-on-rent-sharepal-1.webp",
    rating: 4.9,
    booked_count: 658,
    tag: "New",
    per_day_rent: 250,
    out_of_stock: false,
    category: "fc26",
    controllers: 1,
    has_games: true,
    description: "Single player edition with FC27 and access to PS Plus deluxe catalogue.",
    included: ["PS5 Console", "FC27 Edition", "1x Controller", "100+ Games", "Cables & Case"]
  },
  {
    id: 37534,
    name: "PS5 + FC27 + 4 Controllers",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa27-4-controllers/ps5-with-fifa-27-with-4-controllers-on-rent-sharepal-1.webp",
    rating: 4.9,
    booked_count: 651,
    tag: "New",
    per_day_rent: 350,
    out_of_stock: false,
    category: "fc26",
    controllers: 4,
    has_games: true,
    description: "Full squad edition with 4 controllers, FC27, and co-op favorites for big gatherings.",
    included: ["PS5 Console", "FC27 Edition", "4x Controllers", "Charging Dock", "100+ Games", "Case"]
  },
  {
    id: 37616,
    name: "PlayStation Portal Remote Player",
    image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps-portal-remote-player/ps-portal-on-rent-1.webp",
    rating: 4.7,
    booked_count: 10000,
    tag: "Vote to Launch",
    per_day_rent: 158.25,
    out_of_stock: false,
    category: "racing",
    controllers: 1,
    has_games: false,
    description: "Play your PS5 console games over home Wi-Fi with console-quality controls on an 8-inch 1080p 60fps LCD screen.",
    included: ["PlayStation Portal Remote Player", "USB-C Charging Cable", "Padded Case", "Screen Guard"]
  }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
  state.products = [...FALLBACK_PRODUCTS];
  initLucideIcons();
  setupEventListeners();
  setupDateInputsDefault();

  // Load from Backend REST API
  await loadDataFromBackend();
});

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Fetch live data from Database via REST API
async function loadDataFromBackend() {
  try {
    const healthRes = await fetch('/api/health');
    if (healthRes.ok) {
      state.apiConnected = true;
      console.log('[API] Backend database is connected and online.');
    }
  } catch (e) {
    console.log('[API] Running in client mode with local fallback data.');
  }

  // Load Products
  try {
    const res = await fetch('/api/products');
    if (res.ok) {
      const data = await res.json();
      if (data.products && data.products.length > 0) {
        state.products = data.products;
      }
    }
  } catch (err) {}

  // Load Reviews
  try {
    const revRes = await fetch('/api/reviews');
    if (revRes.ok) {
      const revData = await revRes.json();
      state.reviews = revData.reviews || [];
    }
  } catch (err) {}

  // Load FAQs
  try {
    const faqRes = await fetch('/api/faqs');
    if (faqRes.ok) {
      const faqData = await faqRes.json();
      state.faqs = faqData.faqs || [];
    }
  } catch (err) {}

  // Load Portal Votes
  try {
    const voteRes = await fetch('/api/votes/portal');
    if (voteRes.ok) {
      const voteData = await voteRes.json();
      if (voteData.votes) state.portalVotes = voteData.votes;
    }
  } catch (err) {}

  renderProducts();
  renderReviews();
  renderFAQs();
  updateCategoryCounts();
}

// Setup Event Listeners
function setupEventListeners() {
  // Sticky Header Scroll effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // City Selector Modal
  const cityTrigger = document.getElementById('city-selector-trigger');
  const cityModal = document.getElementById('city-modal-overlay');
  const cityClose = document.getElementById('city-modal-close');
  
  if (cityTrigger && cityModal) {
    cityTrigger.addEventListener('click', () => cityModal.classList.add('open'));
    cityClose.addEventListener('click', () => cityModal.classList.remove('open'));
    cityModal.addEventListener('click', (e) => {
      if (e.target === cityModal) cityModal.classList.remove('open');
    });

    document.querySelectorAll('.city-card').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.city-card').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const selectedCity = btn.dataset.city;
        state.city = selectedCity;
        
        document.getElementById('current-city-name').textContent = selectedCity;
        document.getElementById('hero-city-title').textContent = selectedCity;
        document.getElementById('breadcrumb-city').textContent = selectedCity;
        document.getElementById('cart-city-label').textContent = selectedCity;
        
        cityModal.classList.remove('open');
        showToast(`📍 Location updated to ${selectedCity}`, 'info');
        renderProducts();
      });
    });
  }

  // Duration Options Selector
  document.querySelectorAll('.duration-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const days = parseInt(btn.dataset.days, 10);
      const discount = parseInt(btn.dataset.discount, 10);
      setRentalDuration(days, discount);
    });
  });

  // Header & Mobile Date picker triggers
  const dateTrigger = document.getElementById('date-picker-trigger');
  const mobileDateBtn = document.getElementById('mobile-date-btn');
  const dateModal = document.getElementById('date-modal-overlay');
  const dateClose = document.getElementById('date-modal-close');
  const confirmDatesBtn = document.getElementById('confirm-dates-btn');

  const openDateModal = () => {
    dateModal.classList.add('open');
    initLucideIcons();
  };

  if (dateTrigger) dateTrigger.addEventListener('click', openDateModal);
  if (mobileDateBtn) mobileDateBtn.addEventListener('click', openDateModal);
  if (dateClose) dateClose.addEventListener('click', () => dateModal.classList.remove('open'));
  if (dateModal) {
    dateModal.addEventListener('click', (e) => {
      if (e.target === dateModal) dateModal.classList.remove('open');
    });
  }

  // Presets in date modal
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const days = parseInt(btn.dataset.days, 10);
      const discount = getDiscountForDays(days);

      document.getElementById('modal-selected-days').textContent = days;
      const modalInfo = document.querySelector('#modal-discount-info p');
      if (discount > 0) {
        modalInfo.innerHTML = `You unlocked a <strong>${discount}% slab discount</strong> on daily rental rates!`;
      } else {
        modalInfo.innerHTML = `Standard daily rental rate applied.`;
      }

      document.querySelectorAll('.duration-btn').forEach(b => {
        if (parseInt(b.dataset.days, 10) === days) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      setRentalDuration(days, discount);
    });
  });

  if (confirmDatesBtn) {
    confirmDatesBtn.addEventListener('click', () => {
      dateModal.classList.remove('open');
      showToast(`📅 Rental duration set to ${state.rentalDays} Days (${state.discountPercent}% OFF)`, 'success');
    });
  }

  // Subcategory Pills Filter
  document.querySelectorAll('.subnav-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.subnav-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeFilter = pill.dataset.filter;
      renderProducts();
    });
  });

  // Global Search Inputs
  const searchInput = document.getElementById('global-search-input');
  const mobileSearchInput = document.getElementById('mobile-search-input');
  const clearSearchBtn = document.getElementById('search-clear-btn');

  const handleSearch = (val) => {
    state.searchQuery = val.trim().toLowerCase();
    if (clearSearchBtn) {
      clearSearchBtn.style.display = state.searchQuery.length > 0 ? 'flex' : 'none';
    }
    renderProducts();
  };

  if (searchInput) searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  if (mobileSearchInput) mobileSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (mobileSearchInput) mobileSearchInput.value = '';
      handleSearch('');
    });
  }

  // Stock toggle
  const oosToggle = document.getElementById('hide-oos-toggle');
  if (oosToggle) {
    oosToggle.addEventListener('change', (e) => {
      state.hideOutOfStock = e.target.checked;
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById('reset-filters-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.activeFilter = 'all';
      state.searchQuery = '';
      state.hideOutOfStock = false;
      state.sortBy = 'trending';
      if (searchInput) searchInput.value = '';
      if (mobileSearchInput) mobileSearchInput.value = '';
      if (oosToggle) oosToggle.checked = false;
      if (sortSelect) sortSelect.value = 'trending';
      document.querySelectorAll('.subnav-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.filter === 'all');
      });
      renderProducts();
    });
  }

  // Cart Drawer
  const cartTrigger = document.getElementById('cart-drawer-trigger');
  const mobileCartBtn = document.getElementById('mobile-cart-btn');
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const cartClose = document.getElementById('cart-drawer-close');

  const openCart = () => {
    cartDrawerOverlay.classList.add('open');
    renderCart();
    initLucideIcons();
  };

  if (cartTrigger) cartTrigger.addEventListener('click', openCart);
  if (mobileCartBtn) mobileCartBtn.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', () => cartDrawerOverlay.classList.remove('open'));
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) cartDrawerOverlay.classList.remove('open');
    });
  }

  // Coupon apply
  const applyCouponBtn = document.getElementById('apply-coupon-btn');
  if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', handleApplyCoupon);
  }

  // Checkout Button
  const checkoutBtn = document.getElementById('btn-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', handleCheckout);
  }

  // Success Modal
  const successModal = document.getElementById('success-modal-overlay');
  const successCloseBtn = document.getElementById('success-modal-close-btn');
  if (successCloseBtn && successModal) {
    successCloseBtn.addEventListener('click', () => successModal.classList.remove('open'));
  }

  // Product Modal Close
  const productModal = document.getElementById('product-modal-overlay');
  const productModalClose = document.getElementById('product-modal-close');
  if (productModalClose && productModal) {
    productModalClose.addEventListener('click', () => productModal.classList.remove('open'));
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) productModal.classList.remove('open');
    });
  }
}

// Setup Date Inputs default
function setupDateInputsDefault() {
  const startInput = document.getElementById('start-date-input');
  const endInput = document.getElementById('end-date-input');
  
  if (startInput && endInput) {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 1);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 3);

    startInput.value = startDate.toISOString().split('T')[0];
    endInput.value = endDate.toISOString().split('T')[0];
    startInput.min = today.toISOString().split('T')[0];

    startInput.addEventListener('change', () => {
      const s = new Date(startInput.value);
      const e = new Date(s);
      e.setDate(s.getDate() + state.rentalDays);
      endInput.value = e.toISOString().split('T')[0];
    });

    endInput.addEventListener('change', () => {
      const s = new Date(startInput.value);
      const e = new Date(endInput.value);
      const diffTime = Math.abs(e - s);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 0) {
        setRentalDuration(diffDays, getDiscountForDays(diffDays));
      }
    });
  }
}

function getDiscountForDays(days) {
  if (days >= 30) return 60;
  if (days >= 15) return 45;
  if (days >= 7) return 30;
  if (days >= 3) return 15;
  return 0;
}

function setRentalDuration(days, discount) {
  state.rentalDays = days;
  state.discountPercent = discount;

  const headerDisplay = document.getElementById('header-date-display');
  if (headerDisplay) {
    headerDisplay.textContent = discount > 0 ? `${days} Days (Save ${discount}%)` : `${days} Day(s)`;
  }

  const mobileDurationText = document.getElementById('mobile-duration-text');
  if (mobileDurationText) {
    mobileDurationText.textContent = `${days} Days`;
  }

  const activeSlabBadge = document.getElementById('active-slab-badge');
  if (activeSlabBadge) {
    activeSlabBadge.textContent = discount > 0 ? `${discount}% Savings Applied` : `Standard Rate`;
  }

  const cartDurationLabel = document.getElementById('cart-duration-label');
  if (cartDurationLabel) {
    cartDurationLabel.textContent = `${days} Days Duration`;
  }

  renderProducts();
  renderCart();
}

// Filter and Sort Products
function getFilteredAndSortedProducts() {
  let list = [...state.products];

  if (state.searchQuery) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(state.searchQuery) ||
      (p.description && p.description.toLowerCase().includes(state.searchQuery))
    );
  }

  if (state.activeFilter === 'ps5') {
    list = list.filter(p => p.name.includes('PS5') && !p.name.includes('FC26') && !p.name.includes('FC27') && !p.name.includes('Racing'));
  } else if (state.activeFilter === 'fc26') {
    list = list.filter(p => p.name.includes('FC26') || p.name.includes('FC25') || p.name.includes('FC27') || p.name.includes('FC24'));
  } else if (state.activeFilter === 'controllers') {
    list = list.filter(p => p.name.includes('2 Controller') || p.name.includes('4 Controller'));
  } else if (state.activeFilter === 'racing') {
    list = list.filter(p => p.name.includes('Racing') || p.name.includes('Portal'));
  } else if (state.activeFilter === 'new') {
    list = list.filter(p => p.tag === 'New' || p.tag === 'Vote to Launch');
  }

  if (state.hideOutOfStock) {
    list = list.filter(p => !p.out_of_stock);
  }

  if (state.sortBy === 'price-asc') {
    list.sort((a, b) => a.per_day_rent - b.per_day_rent);
  } else if (state.sortBy === 'price-desc') {
    list.sort((a, b) => b.per_day_rent - a.per_day_rent);
  } else if (state.sortBy === 'rating-desc') {
    list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (state.sortBy === 'booked-desc') {
    list.sort((a, b) => b.booked_count - a.booked_count);
  } else {
    list.sort((a, b) => {
      if (a.tag === 'Trending' && b.tag !== 'Trending') return -1;
      if (b.tag === 'Trending' && a.tag !== 'Trending') return 1;
      return b.booked_count - a.booked_count;
    });
  }

  return list;
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const emptyState = document.getElementById('empty-state');
  const resultsCountText = document.getElementById('results-count-text');

  if (!grid) return;

  const products = getFilteredAndSortedProducts();

  if (resultsCountText) {
    resultsCountText.innerHTML = `Showing <strong>${products.length}</strong> gaming gadgets in ${state.city}`;
  }

  if (products.length === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  grid.style.display = 'grid';
  if (emptyState) emptyState.style.display = 'none';

  grid.innerHTML = products.map(product => {
    const discountedRate = Math.round(product.per_day_rent * (1 - state.discountPercent / 100));
    const totalEstimate = Math.round(discountedRate * state.rentalDays);
    const isInCart = state.cart.some(item => item.id === product.id);

    let badgeHtml = '';
    if (product.out_of_stock) {
      badgeHtml = `<span class="badge-tag oos">Out of Stock</span>`;
    } else if (product.tag === 'Trending') {
      badgeHtml = `<span class="badge-tag trending">🔥 Trending</span>`;
    } else if (product.tag === 'New') {
      badgeHtml = `<span class="badge-tag new">✨ New Launch</span>`;
    } else if (product.tag === 'Vote to Launch') {
      badgeHtml = `<span class="badge-tag vote">🚀 Vote to Launch</span>`;
    }

    const ratingHtml = product.rating > 0 ? `
      <div class="rating-booked-row">
        <span class="rating-pill">
          <i data-lucide="star"></i> ${product.rating.toFixed(1)}
        </span>
        <span class="booked-count-text">(${product.booked_count.toLocaleString()} booked)</span>
      </div>
    ` : `
      <div class="rating-booked-row">
        <span class="rating-pill" style="background:#f1f5f9; color:#475569;">
          <i data-lucide="sparkles"></i> New Release
        </span>
        <span class="booked-count-text">(${product.booked_count.toLocaleString()} requested)</span>
      </div>
    `;

    let actionBtnHtml = '';
    if (product.out_of_stock) {
      actionBtnHtml = `
        <button class="btn-card-oos" onclick="handleNotifyMe(${product.id})">
          <i data-lucide="bell"></i> Notify When Available
        </button>
      `;
    } else if (product.tag === 'Vote to Launch') {
      actionBtnHtml = `
        <button class="btn-card-vote" onclick="handleVotePortal(${product.id})">
          <i data-lucide="thumbs-up"></i> Vote to Launch (${state.portalVotes.toLocaleString()})
        </button>
      `;
    } else {
      actionBtnHtml = `
        <button class="btn-card-details" onclick="openProductDetailModal(${product.id})">
          <i data-lucide="eye"></i> Details
        </button>
        <button class="btn-card-rent ${isInCart ? 'in-cart' : ''}" onclick="toggleAddToCart(${product.id})">
          <i data-lucide="${isInCart ? 'check' : 'shopping-bag'}"></i> ${isInCart ? 'Added' : 'Rent Now'}
        </button>
      `;
    }

    return `
      <div class="product-card ${product.out_of_stock ? 'out-of-stock' : ''}" data-id="${product.id}">
        <div class="card-badge-wrap">
          ${badgeHtml}
        </div>

        <div class="card-image-box" onclick="openProductDetailModal(${product.id})">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" onerror="this.src='https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-1-controller/ps5-console-with-1-controller-on-rent-sharepal-1.webp'">
        </div>

        <div class="card-content">
          <h3 class="product-title" onclick="openProductDetailModal(${product.id})" title="${product.name}">
            ${product.name}
          </h3>

          ${ratingHtml}

          <div class="card-pricing-box">
            <div class="price-main-row">
              <span class="rent-rate">₹${discountedRate}</span>
              <span class="rent-unit">/ day</span>
              ${state.discountPercent > 0 ? `<span class="original-rate-strike">₹${product.per_day_rent}</span>` : ''}
            </div>
            <div class="total-estimate-pill">
              Estimated Total: <strong>₹${totalEstimate.toLocaleString()}</strong> for ${state.rentalDays} days
            </div>
          </div>

          <div class="card-actions-group">
            ${actionBtnHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');

  initLucideIcons();
}

function updateCategoryCounts() {
  const countAll = state.products.length;
  const countPs5 = state.products.filter(p => p.name.includes('PS5') && !p.name.includes('FC26') && !p.name.includes('FC27')).length;
  const countFc26 = state.products.filter(p => p.name.includes('FC26') || p.name.includes('FC25') || p.name.includes('FC27')).length;
  const countControllers = state.products.filter(p => p.name.includes('2 Controller') || p.name.includes('4 Controller')).length;
  const countRacing = state.products.filter(p => p.name.includes('Racing') || p.name.includes('Portal')).length;
  const countNew = state.products.filter(p => p.tag === 'New' || p.tag === 'Vote to Launch').length;

  if (document.getElementById('count-all')) document.getElementById('count-all').textContent = countAll;
  if (document.getElementById('count-ps5')) document.getElementById('count-ps5').textContent = countPs5;
  if (document.getElementById('count-fc26')) document.getElementById('count-fc26').textContent = countFc26;
  if (document.getElementById('count-controllers')) document.getElementById('count-controllers').textContent = countControllers;
  if (document.getElementById('count-racing')) document.getElementById('count-racing').textContent = countRacing;
  if (document.getElementById('count-new')) document.getElementById('count-new').textContent = countNew;
}

// Render Customer Reviews Marquee
function renderReviews() {
  const track = document.getElementById('reviews-marquee-track');
  if (!track) return;

  const reviewsList = state.reviews.length > 0 ? state.reviews : [
    { name: "Satyaki", city: "Kolkata", category: "Trekking Gear", text: "I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super transparent deposit return policy." },
    { name: "Afrana", city: "Bangalore", category: "Gaming Console", text: "Have used their services twice now. They never disappoint. Quick responses, polite, transparent deposit refund policy. Product was in mint condition. Delivered and picked up without any hassle. Highly recommend!" },
    { name: "Kanthikiran", city: "Bangalore", category: "Riding Gear", text: "It’s an amazing service, starting from the quality of the gear provided to the pickup and delivery experience. Truly hassle-free zero deposit rental." },
    { name: "Amal", city: "Bangalore", category: "Gaming Console", text: "I am a regular customer and order PS5 for weekends. It’s very affordable and booking an order is super easy. Highly satisfied with the games collection." },
    { name: "Pankaj", city: "Mumbai", category: "Action Cameras", text: "The experience with SharePal is awesome. The camera and service provided by them is good. I recommend SharePal to everyone." }
  ];

  const list = [...reviewsList, ...reviewsList];

  track.innerHTML = list.map((rev) => {
    const initials = (rev.name || 'SP').substring(0, 2).toUpperCase();

    return `
      <div class="review-card">
        <div class="review-card-header">
          <div class="google-icon-box">
            <svg class="google-svg" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53"/>
            </svg>
            <span style="font-size:11px; font-weight:700; color:#475569;">Google Review</span>
          </div>

          <div class="stars-row">
            <i data-lucide="star"></i>
            <i data-lucide="star"></i>
            <i data-lucide="star"></i>
            <i data-lucide="star"></i>
            <i data-lucide="star"></i>
          </div>
        </div>

        <p class="review-quote">“ ${rev.text} ”</p>

        <div class="review-author-row">
          <div class="author-avatar">${initials}</div>
          <div class="author-info">
            <span class="author-name">${rev.name}</span>
            <span class="author-meta">${rev.city} &bull; ${rev.category}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initLucideIcons();
}

// Render FAQs Accordion
function renderFAQs() {
  const container = document.getElementById('faqs-accordion-list');
  if (!container) return;

  const faqsList = state.faqs.length > 0 ? state.faqs : [
    { question: "How can I rent from SharePal?", answer: "Select your desired gaming console, choose rental dates, complete 2-minute KYC, and order with zero deposit!" },
    { question: "When does the rental start?", answer: "Your rental period starts on the start date you selected at checkout. Delivered before or on the morning of your start date." },
    { question: "What will be the condition of the products?", answer: "All gaming gadgets are 100% tested, sanitized, and packed in shockproof carry bags with 100+ preloaded games." }
  ];

  container.innerHTML = faqsList.map((faq, idx) => {
    return `
      <div class="faq-accordion-item ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
        <button class="faq-question-btn" onclick="toggleFaq(${idx})">
          <span>${faq.question}</span>
          <i data-lucide="chevron-down" class="faq-toggle-icon"></i>
        </button>
        <div class="faq-answer-panel" style="${idx === 0 ? 'max-height: 200px;' : ''}">
          <div class="faq-answer-content">
            ${faq.answer}
          </div>
        </div>
      </div>
    `;
  }).join('');

  initLucideIcons();
}

window.toggleFaq = function(idx) {
  const items = document.querySelectorAll('.faq-accordion-item');
  items.forEach((item, i) => {
    const panel = item.querySelector('.faq-answer-panel');
    if (i === idx) {
      const isCurrentlyActive = item.classList.contains('active');
      if (isCurrentlyActive) {
        item.classList.remove('active');
        panel.style.maxHeight = '0px';
      } else {
        item.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + 40 + 'px';
      }
    } else {
      item.classList.remove('active');
      panel.style.maxHeight = '0px';
    }
  });
};

// Cart Management
window.toggleAddToCart = function(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product || product.out_of_stock) return;

  const existingIndex = state.cart.findIndex(i => i.id === productId);
  if (existingIndex > -1) {
    state.cart.splice(existingIndex, 1);
    showToast(`Removed from cart`, 'info');
  } else {
    state.cart.push({ ...product });
    showToast(`🛒 Added ${product.name} to cart!`, 'success');
  }

  updateCartBadges();
  renderProducts();
  renderCart();
};

window.removeFromCart = function(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  updateCartBadges();
  renderProducts();
  renderCart();
  showToast(`Item removed from cart`, 'info');
};

function updateCartBadges() {
  const count = state.cart.length;
  if (document.getElementById('header-cart-badge')) document.getElementById('header-cart-badge').textContent = count;
  if (document.getElementById('mobile-cart-count')) document.getElementById('mobile-cart-count').textContent = count;
  if (document.getElementById('cart-items-count')) document.getElementById('cart-items-count').textContent = count;
}

function renderCart() {
  const cartBody = document.getElementById('cart-items-body');
  const cartFooter = document.getElementById('cart-footer');
  if (!cartBody) return;

  if (state.cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <i data-lucide="shopping-bag"></i>
        <h3>Your rental cart is empty</h3>
        <p style="font-size:13px; margin-top:6px;">Add a PlayStation 5 console or gaming combo to begin your hassle-free zero deposit rental.</p>
      </div>
    `;
    if (cartFooter) cartFooter.style.display = 'none';
    initLucideIcons();
    return;
  }

  if (cartFooter) cartFooter.style.display = 'block';

  let subtotal = 0;
  cartBody.innerHTML = state.cart.map(item => {
    const discountedRate = Math.round(item.per_day_rent * (1 - state.discountPercent / 100));
    const itemTotal = Math.round(discountedRate * state.rentalDays);
    subtotal += itemTotal;

    return `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <span class="cart-item-title">${item.name}</span>
          <span class="cart-item-price">₹${discountedRate}/day &times; ${state.rentalDays} days</span>
          <span class="cart-item-total">₹${itemTotal.toLocaleString()}</span>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove Item">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    `;
  }).join('');

  let couponDiscount = 0;
  if (state.coupon) {
    couponDiscount = Math.round(subtotal * (state.coupon.discountPercent / 100));
  }

  const finalTotal = Math.max(0, subtotal - couponDiscount);

  if (document.getElementById('summary-days')) document.getElementById('summary-days').textContent = state.rentalDays;
  if (document.getElementById('summary-subtotal')) document.getElementById('summary-subtotal').textContent = `₹${subtotal.toLocaleString()}`;
  
  const discountRow = document.getElementById('summary-discount-row');
  if (discountRow) {
    if (couponDiscount > 0) {
      discountRow.style.display = 'flex';
      document.getElementById('summary-discount').textContent = `-₹${couponDiscount.toLocaleString()}`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (document.getElementById('summary-total')) {
    document.getElementById('summary-total').textContent = `₹${finalTotal.toLocaleString()}`;
  }

  initLucideIcons();
}

function handleApplyCoupon() {
  const input = document.getElementById('coupon-input');
  const msg = document.getElementById('coupon-msg');
  if (!input || !msg) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'GAMEON10' || code === 'SHAREPAL10' || code === 'BANGALORE10') {
    state.coupon = { code, discountPercent: 10 };
    msg.className = 'coupon-msg success';
    msg.textContent = `🎉 Coupon "${code}" applied! 10% Extra Discount unlocked.`;
    showToast(`🎉 Coupon ${code} applied successfully!`, 'success');
  } else if (!code) {
    msg.className = 'coupon-msg error';
    msg.textContent = `Please enter a coupon code.`;
  } else {
    msg.className = 'coupon-msg error';
    msg.textContent = `Invalid code. Try "GAMEON10" for 10% off.`;
  }
  renderCart();
}

// Checkout & Save Order to Database via API
async function handleCheckout() {
  if (state.cart.length === 0) return;

  let subtotal = 0;
  const orderedItems = state.cart.map(item => {
    const discountedRate = Math.round(item.per_day_rent * (1 - state.discountPercent / 100));
    const itemTotal = Math.round(discountedRate * state.rentalDays);
    subtotal += itemTotal;
    return {
      id: item.id,
      name: item.name,
      daily_rate: discountedRate,
      total_price: itemTotal
    };
  });

  const couponDiscount = state.coupon ? Math.round(subtotal * (state.coupon.discountPercent / 100)) : 0;
  const finalTotal = subtotal - couponDiscount;

  const orderPayload = {
    customer_name: "Verified Gamer",
    customer_phone: "+91 9876543210",
    city: state.city,
    rental_days: state.rentalDays,
    start_date: document.getElementById('start-date-input')?.value || new Date().toISOString().split('T')[0],
    end_date: document.getElementById('end-date-input')?.value || '',
    items: orderedItems,
    subtotal: subtotal,
    discount: couponDiscount,
    total_amount: finalTotal,
    payment_mode: 'Pay on Delivery (Zero Deposit)'
  };

  let orderRef = `SP-${state.city.substring(0, 3).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;

  // Send to Backend REST API
  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });
    if (res.ok) {
      const data = await res.json();
      if (data.order && data.order.order_ref) {
        orderRef = data.order.order_ref;
        console.log('[API] Order persisted in database:', data.order);
      }
    }
  } catch (e) {
    console.log('[API] Order stored in local state.');
  }

  // Close Cart Drawer
  const cartDrawer = document.getElementById('cart-drawer-overlay');
  if (cartDrawer) cartDrawer.classList.remove('open');

  // Confetti
  if (window.confetti) {
    window.confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // Show Success Modal
  const successModal = document.getElementById('success-modal-overlay');
  if (successModal) {
    document.querySelector('.success-order-id strong').textContent = `#${orderRef}`;
    document.getElementById('success-city').textContent = state.city;
    document.getElementById('success-duration').textContent = `${state.rentalDays} Days`;
    successModal.classList.add('open');
    initLucideIcons();
  }

  // Clear Cart
  state.cart = [];
  updateCartBadges();
  renderProducts();
}

// Product Quick View Modal
window.openProductDetailModal = function(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-modal-overlay');
  const modalBody = document.getElementById('modal-product-body');
  if (!modal || !modalBody) return;

  const discountedRate = Math.round(product.per_day_rent * (1 - state.discountPercent / 100));
  const totalCost = Math.round(discountedRate * state.rentalDays);
  const isInCart = state.cart.some(item => item.id === product.id);

  modalBody.innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-img-wrap">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="modal-details-col">
        <span class="modal-tag">${product.tag || 'PS5 Verified'} &bull; ${state.city}</span>
        <h2 class="modal-title">${product.name}</h2>
        
        <div class="rating-booked-row">
          <span class="rating-pill">
            <i data-lucide="star"></i> ${product.rating ? product.rating.toFixed(1) : '4.8'}
          </span>
          <span class="booked-count-text">(${product.booked_count.toLocaleString()} booked in ${state.city})</span>
        </div>

        <p style="font-size:13.5px; color:#475569; line-height:1.5; margin-bottom:12px;">
          ${product.description}
        </p>

        <div class="modal-pricing-row">
          <div>
            <span class="modal-price">₹${discountedRate}</span>
            <span style="font-size:13px; color:#64748b;">/ day</span>
            ${state.discountPercent > 0 ? `<span class="original-rate-strike" style="margin-left:6px;">₹${product.per_day_rent}</span>` : ''}
          </div>
          <div style="margin-left:auto; font-size:12px; font-weight:700; color:#008299;">
            ₹${totalCost.toLocaleString()} for ${state.rentalDays} Days
          </div>
        </div>

        <div class="modal-box-items">
          <h4>📦 What's Included in the Box:</h4>
          <ul>
            ${product.included ? product.included.map(inc => `<li><i data-lucide="check-circle-2"></i> ${inc}</li>`).join('') : ''}
          </ul>
        </div>

        <div class="modal-actions">
          ${product.out_of_stock ? `
            <button class="btn-primary w-full" style="background:#475569;" onclick="handleNotifyMe(${product.id})">
              <i data-lucide="bell"></i> Notify Me When Available
            </button>
          ` : `
            <button class="btn-primary w-full" onclick="toggleAddToCart(${product.id}); document.getElementById('product-modal-overlay').classList.remove('open');">
              <i data-lucide="${isInCart ? 'check' : 'shopping-bag'}"></i> ${isInCart ? 'Already in Cart' : 'Rent with Zero Deposit'}
            </button>
          `}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  initLucideIcons();
};

// Notify Me & Vote to Launch Handlers
window.handleNotifyMe = function(productId) {
  const product = state.products.find(p => p.id === productId);
  showToast(`🔔 We'll alert you on WhatsApp as soon as "${product?.name}" is restocked!`, 'info');
};

window.handleVotePortal = async function(productId) {
  if (state.hasVotedPortal) {
    showToast(`You have already voted for PlayStation Portal! 🎮`, 'info');
    return;
  }
  state.hasVotedPortal = true;
  state.portalVotes += 1;

  // Persist vote to backend database
  try {
    const res = await fetch('/api/votes/portal', { method: 'POST' });
    if (res.ok) {
      const data = await res.json();
      if (data.votes) state.portalVotes = data.votes;
    }
  } catch (e) {}

  showToast(`🚀 Vote saved to database! You are backer #${state.portalVotes.toLocaleString()}.`, 'success');
  renderProducts();
};

// Toast Notifications
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  initLucideIcons();

  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s ease-in reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
