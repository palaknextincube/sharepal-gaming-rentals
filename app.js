/**
 * SharePal Multi-Category Catalog & State Engine
 * Supports: Gaming Gadgets, Photography, Outdoor Gears, Entertainment
 */

// Super-category configurations
const SUPER_CATEGORIES = {
  gaming: {
    name: "Gaming Gadgets",
    slug: "gaming",
    titlePrefix: "Gaming Consoles & Gadgets on Rent in",
    subtitle: "Rent the latest gaming gadgets from PS5, Xbox Series X, Meta Quest 3 VR, Logitech Racing Wheel combos preloaded with 100+ blockbuster titles.",
    heroBadge: "Next-Gen Console Rentals",
    heroImage: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-100-games-with-2-controllers/ps5-with-100-games-with-2-controllers-on-rent-sharepal-1.webp",
    heroPrice: "₹158",
    badgeLabel: "100+ Games Ready to Play",
    subcategories: [
      { id: 'all', label: 'All Gaming' },
      { id: 'ps5', label: 'PS5 Consoles' },
      { id: 'fc26', label: 'FC26 / FC25 Combos' },
      { id: 'controllers', label: 'Multi-Controller Combos' },
      { id: 'racing', label: 'Racing Wheels & VR' },
      { id: 'new', label: 'New Launches' }
    ]
  },
  photography: {
    name: "Photography",
    slug: "photography",
    titlePrefix: "Cameras, Drones & Photography Gear on Rent in",
    subtitle: "Rent GoPro Hero 12, Insta360 X4, DJI 4K Drones, Sony Alpha Full-Frame Mirrorless Cameras, Gimbals & Wireless Mics with zero deposit.",
    heroBadge: "Pro Creator & Travel Gear",
    heroImage: "https://images.sharepal.in/super-categories/camera-right.webp",
    heroPrice: "₹200",
    badgeLabel: "4K 60FPS Pro Quality Tested",
    subcategories: [
      { id: 'all', label: 'All Cameras' },
      { id: 'action', label: 'Action & 360 Cameras' },
      { id: 'mirrorless', label: 'DSLR & Mirrorless' },
      { id: 'drones', label: 'DJI Drones & Gimbals' },
      { id: 'vlogging', label: 'Mics & Vlogging Gear' }
    ]
  },
  outdoor: {
    name: "Outdoor Gears",
    slug: "outdoor",
    titlePrefix: "Trekking, Riding & Camping Gear on Rent in",
    subtitle: "Rent sanitized sub-zero trekking jackets, Quechua camping tents, CE Level-2 riding gear, and waterproof travel accessories with doorstep delivery.",
    heroBadge: "Adventure & High-Altitude Ready",
    heroImage: "https://images.sharepal.in/super-categories/Category+Card+Image.webp",
    heroPrice: "₹90",
    badgeLabel: "-15°C Cold & Rain Tested",
    subcategories: [
      { id: 'all', label: 'All Outdoor Gear' },
      { id: 'trekking', label: 'Trekking Jackets & Boots' },
      { id: 'camping', label: 'Camping Tents & Sleeping Bags' },
      { id: 'riding', label: 'Riding Jackets & Helmets' },
      { id: 'accessories', label: 'Backpacks & Binoculars' }
    ]
  },
  entertainment: {
    name: "Entertainment",
    slug: "entertainment",
    titlePrefix: "4K Projectors, VR & Audio Gear on Rent in",
    subtitle: "Turn your living room into an IMAX theater! Rent 4K Smart Projectors, 120-inch screens, Meta Quest 3 VR headsets & JBL party sound systems.",
    heroBadge: "Home Theater & Event Setups",
    heroImage: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps-portal-remote-player/ps-portal-on-rent-1.webp",
    heroPrice: "₹180",
    badgeLabel: "Dolby Atmos & 4K HDR",
    subcategories: [
      { id: 'all', label: 'All Entertainment' },
      { id: 'projectors', label: 'Smart 4K Projectors' },
      { id: 'vr', label: 'VR Headsets (Quest 3)' },
      { id: 'audio', label: 'JBL Party Speakers & Soundbars' },
      { id: 'mics', label: 'Karaoke & Wireless Mics' }
    ]
  }
};

// Global State
const state = {
  superCategory: 'gaming',
  city: 'Bangalore',
  rentalDays: 3,
  discountPercent: 15,
  activeFilter: 'all',
  searchQuery: '',
  hideOutOfStock: false,
  sortBy: 'trending',
  cart: [],
  coupon: null,
  allProducts: {},
  reviews: [],
  faqs: [],
  portalVotes: 10000,
  hasVotedPortal: false
};

// Complete Catalog Database for All 4 Categories
const CATALOG_DATABASE = {
  gaming: [
    {
      id: 18273,
      super_cat: "gaming",
      name: "PS5 + Games (100+) + 1 Controller",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-100-games-with-1-controller/ps5-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
      rating: 4.6,
      booked_count: 649,
      tag: "Trending",
      per_day_rent: 200,
      out_of_stock: false,
      category: "ps5",
      description: "Experience next-gen 4K 120FPS gaming with ultra-high speed SSD, ray tracing, 3D audio, and 100+ preloaded blockbuster titles ready to play.",
      included: ["PS5 Console (825GB/1TB SSD)", "1x DualSense Wireless Controller", "High-Speed HDMI 2.1 Cable", "Power Cable & USB-C Cable", "100+ PS Plus Deluxe Games Pre-installed", "Shockproof Travel Carrying Case"]
    },
    {
      id: 20242,
      super_cat: "gaming",
      name: "PS5 All in one Combo + 2 Controllers",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-with-100-games-with-2-controllers/ps5-with-2-controllers-with-ea-play-with-ps-plus-deluxe-subscription-combo-on-rent-sharepal-1.webp",
      rating: 4.5,
      booked_count: 604,
      tag: "Trending",
      per_day_rent: 440,
      out_of_stock: false,
      category: "ps5",
      description: "The ultimate couch co-op gaming package. Includes 2 controllers, 100+ PS Plus Deluxe games, plus EA Play subscription (FIFA, NFS, Battlefield).",
      included: ["PS5 Console", "2x DualSense Wireless Controllers", "EA Play All-Access Pass", "100+ Deluxe PS Plus Titles", "HDMI 2.1 & Dual Charging Station", "Padded Carry Bag"]
    },
    {
      id: 18255,
      super_cat: "gaming",
      name: "PS5 + Games (100+) + 2 Controllers",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-100-games-with-2-controllers/ps5-with-100-games-with-2-controllers-on-rent-sharepal-1.webp",
      rating: 4.8,
      booked_count: 397,
      tag: "Trending",
      per_day_rent: 260,
      out_of_stock: false,
      category: "ps5",
      description: "Most popular weekend party setup. 2 wireless haptic controllers and complete access to 100+ games for multiplayer fun with friends and family.",
      included: ["PS5 Console", "2x DualSense Controllers", "100+ Preloaded Games", "HDMI 2.1 & Cables", "Safety Carry Case"]
    },
    {
      id: 20105,
      super_cat: "gaming",
      name: "FC25 + 2 Controllers Combo",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-fc25/ps5-with-fc25-with-100-games-with-2-controllerS-on-rent-sharepal-1.webp",
      rating: 4.8,
      booked_count: 209,
      tag: "Trending",
      per_day_rent: 165,
      out_of_stock: false,
      category: "fc26",
      description: "Compete with friends on EA SPORTS FC 25 with 2 DualSense controllers. Features HyperMotionV technology and updated rosters.",
      included: ["PS5 Console", "EA Sports FC 25 (Full Version)", "2x DualSense Controllers", "100+ Extra PS Plus Games", "HDMI 2.1 & Travel Bag"]
    },
    {
      id: 8185,
      super_cat: "gaming",
      name: "PS5 + 1 Controller (Disc or Digital) (No Games Included)",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-1-controller/ps5-console-with-1-controller-on-rent-sharepal-1.webp",
      rating: 4.8,
      booked_count: 236,
      tag: "",
      per_day_rent: 160,
      out_of_stock: false,
      category: "ps5",
      description: "Budget-friendly console rental. Ideal if you already have your own PlayStation Network account or physical discs.",
      included: ["PS5 Console", "1x DualSense Controller", "HDMI 2.1 & Power Cord", "Padded Carry Bag"]
    },
    {
      id: 18117,
      super_cat: "gaming",
      name: "PS5 + EA Play + 2 Controllers",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-combo-with-2-controllers/ps5-ea-play-combo-with-2-controllers-on-rent-sharepal-1.webp",
      rating: 4.8,
      booked_count: 167,
      tag: "",
      per_day_rent: 260,
      out_of_stock: true,
      category: "ps5",
      description: "Includes access to EA Play top franchises like Need for Speed, Battlefield, Star Wars Jedi, and Madden.",
      included: ["PS5 Console", "2x DualSense Controllers", "EA Play Pass", "High-Speed HDMI & Power Cable"]
    },
    {
      id: 19716,
      super_cat: "gaming",
      name: "PS5 All in one Combo + 1 Controller",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-with-100-games-with-1-controller/ps5-with-controller-with-ea-play-with-ps-plus-deluxe-subscription-combo-on-rent-sharepal-1.webp",
      rating: 4.5,
      booked_count: 187,
      tag: "Trending",
      per_day_rent: 260,
      out_of_stock: true,
      category: "ps5",
      description: "Single-player powerhouse combo. Comes with 1 controller, full PS Plus Deluxe vault, and EA Play catalog.",
      included: ["PS5 Console", "1x DualSense Controller", "PS Plus Deluxe + EA Play", "Cables & Travel Case"]
    },
    {
      id: 19680,
      super_cat: "gaming",
      name: "PS5 + 2 Controllers (Disc or Digital) (No Games Included)",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-2%20controllers/ps5-console-with-2-controllers-on-rent-sharepal-1.webp",
      rating: 4.2,
      booked_count: 210,
      tag: "",
      per_day_rent: 200,
      out_of_stock: false,
      category: "ps5",
      description: "PS5 hardware with two wireless controllers for those who have their own game library or subscriptions.",
      included: ["PS5 Console", "2x DualSense Controllers", "HDMI 2.1 & Power Cables", "Travel Bag"]
    },
    {
      id: 17795,
      super_cat: "gaming",
      name: "God Of War Ragnarök + 1 Controller (Digital Game)",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-god-of-war-ragnarok/ps5-with-god-of-war-ragnarok-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
      rating: 4.6,
      booked_count: 164,
      tag: "",
      per_day_rent: 200,
      out_of_stock: false,
      category: "ps5",
      description: "Journey through the Nine Realms as Kratos and Atreus in this critically acclaimed Norse myth adventure.",
      included: ["PS5 Console", "God of War Ragnarök (Full Digital)", "1x Controller", "100+ Bonus Games", "Cables & Case"]
    },
    {
      id: 18055,
      super_cat: "gaming",
      name: "PS5 + EA Play + 1 Controller",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-combo-with-1-controller/ps5-with-controller-with-ea-play-combo-on-rent-sharepal-1.webp",
      rating: 4.5,
      booked_count: 211,
      tag: "",
      per_day_rent: 180,
      out_of_stock: false,
      category: "ps5",
      description: "Great value single player package featuring EA Play games including It Takes Two, Dead Space Remake, and Star Wars.",
      included: ["PS5 Console", "1x DualSense Controller", "EA Play Pass", "Cables & Travel Case"]
    },
    {
      id: 20104,
      super_cat: "gaming",
      name: "Uncharted Series + 1 Controller (Digital Game)",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-uncharted/ps5-with-uncharted-legacy-of-thieves-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
      rating: 4.6,
      booked_count: 171,
      tag: "",
      per_day_rent: 200,
      out_of_stock: false,
      category: "ps5",
      description: "Includes Uncharted: Legacy of Thieves Collection in remastered 4K 60FPS. Experience Nathan Drake's globe-trotting escapades.",
      included: ["PS5 Console", "Uncharted Collection", "1x Controller", "100+ Preloaded Games", "HDMI 2.1 Cable"]
    },
    {
      id: 20103,
      super_cat: "gaming",
      name: "Cricket 24 + 2 Controllers (Digital Game)",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-cricket-24/ps5-with-cricket-24-with-100-games-with-2-controllerS-on-rent-sharepal-1.webp",
      rating: 4.8,
      booked_count: 186,
      tag: "",
      per_day_rent: 200,
      out_of_stock: false,
      category: "ps5",
      description: "Official game of the Ashes and World Cricket. Play head-to-head with a friend on 2 DualSense controllers.",
      included: ["PS5 Console", "Cricket 24 (Full Edition)", "2x DualSense Controllers", "100+ Games Vault", "Cables & Travel Bag"]
    },
    {
      id: 36028,
      super_cat: "gaming",
      name: "PS5 + FC26 + 1 Controller",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa26-1-controller/ps5-with-fifa-26-with-1-controller-on-rent-sharepal-1.webp",
      rating: 4.8,
      booked_count: 2527,
      tag: "New",
      per_day_rent: 310,
      out_of_stock: false,
      category: "fc26",
      description: "Brand new EA Sports FC 26 package! Jump into the latest football mechanics, Career Mode, and Ultimate Team.",
      included: ["PS5 Console", "EA Sports FC 26 (Latest)", "1x Controller", "100+ Deluxe PS Plus Games", "Cables & Case"]
    },
    {
      id: 20102,
      super_cat: "gaming",
      name: "Ghost of Tsushima + 1 Controller (Digital Game)",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ghost-of-tsushima/ps5-with-ghost-of-tsushima-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
      rating: 4.6,
      booked_count: 140,
      tag: "",
      per_day_rent: 200,
      out_of_stock: false,
      category: "ps5",
      description: "Wield the katana as Jin Sakai across breathtaking feudal Japan. Enhanced with PS5 3D audio and DualSense haptics.",
      included: ["PS5 Console", "Ghost of Tsushima Director's Cut", "1x Controller", "100+ Deluxe Games", "HDMI 2.1 & Bag"]
    },
    {
      id: 20224,
      super_cat: "gaming",
      name: "PS5 Mega Racing Wheel Combo",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-mega-racing-combo/ps5-with-controller-with-ps-plus-deluxe-subscription-with-ea-play-with-wheel-combo-on-rent-sharepal-1%20(1).webp",
      rating: 4.8,
      booked_count: 139,
      tag: "",
      per_day_rent: 310,
      out_of_stock: true,
      category: "racing",
      description: "Logitech TrueForce Force Feedback Racing Wheel + Pedals combo with Gran Turismo 7 and F1 for realistic simulation.",
      included: ["PS5 Console", "Logitech G29/G923 Racing Wheel & Pedals", "1x DualSense Controller", "Gran Turismo 7 & F1", "Mounting Clamp & Cables"]
    },
    {
      id: 36039,
      super_cat: "gaming",
      name: "PS5 + FC26 + 2 Controllers",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa26-2-controllers/ps5-with-fifa-26-with-2-controllers-on-rent-sharepal-1.webp",
      rating: 4.8,
      booked_count: 1524,
      tag: "New",
      per_day_rent: 310,
      out_of_stock: false,
      category: "fc26",
      description: "Top pick for tournament nights! Comes with EA Sports FC 26, 2 wireless controllers, and 100+ co-op games.",
      included: ["PS5 Console", "EA Sports FC 26", "2x DualSense Controllers", "100+ Bonus Games", "HDMI 2.1 & Carry Bag"]
    },
    {
      id: 20098,
      super_cat: "gaming",
      name: "FC24 + 2 Controllers (Digital Game)",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-fc24/ps5-with-fc24-with-100-games-with-2-controllerS-on-rent-sharepal-1.webp",
      rating: 4.8,
      booked_count: 165,
      tag: "",
      per_day_rent: 200,
      out_of_stock: true,
      category: "fc26",
      description: "Play EA Sports FC 24 with 2 controllers. Great for couch matches and friendly rivalries.",
      included: ["PS5 Console", "EA Sports FC 24", "2x Controllers", "100+ Games", "Cables & Case"]
    },
    {
      id: 36050,
      super_cat: "gaming",
      name: "PS5 + FC26 + 4 Controllers",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa26-4-controllers/ps5-with-fifa-26-with-4-controllers-on-rent-sharepal-1.webp",
      rating: 4.8,
      booked_count: 1224,
      tag: "New",
      per_day_rent: 310,
      out_of_stock: false,
      category: "fc26",
      description: "The ultimate 4-player party machine! 4 DualSense wireless controllers, FC 26, and 4-player multiplayer hits.",
      included: ["PS5 Console", "EA Sports FC 26", "4x DualSense Wireless Controllers", "Multi-charging dock", "100+ Games", "Travel Bag"]
    },
    {
      id: 20100,
      super_cat: "gaming",
      name: "Spider-Man Miles Morales + 1 Controller (Digital Game)",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-spiderman-miles-morales/ps5-with-spiderman-miles-morales-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
      rating: 4.6,
      booked_count: 123,
      tag: "",
      per_day_rent: 200,
      out_of_stock: false,
      category: "ps5",
      description: "Swing through snowy Manhattan as Miles Morales with instant fast travel and adaptive triggers.",
      included: ["PS5 Console", "Marvel's Spider-Man: Miles Morales", "1x Controller", "100+ Deluxe Titles", "Cables & Bag"]
    },
    {
      id: 37512,
      super_cat: "gaming",
      name: "PS5 + FC27 + 2 Controllers",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa27-2-controllers/ps5-with-fifa-27-with-2-controllers-on-rent-sharepal-1.webp",
      rating: 4.9,
      booked_count: 652,
      tag: "New",
      per_day_rent: 300,
      out_of_stock: false,
      category: "fc26",
      description: "Next-gen sports simulation edition with dual haptic controllers for competitive gaming.",
      included: ["PS5 Console", "FC27 Edition", "2x DualSense Controllers", "100+ Games", "Cables & Case"]
    },
    {
      id: 37501,
      super_cat: "gaming",
      name: "PS5 + FC27 + 1 Controller",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa27-1-controller/ps5-with-fifa-27-with-1-controller-on-rent-sharepal-1.webp",
      rating: 4.9,
      booked_count: 658,
      tag: "New",
      per_day_rent: 250,
      out_of_stock: false,
      category: "fc26",
      description: "Single player edition with FC27 and access to PS Plus deluxe catalogue.",
      included: ["PS5 Console", "FC27 Edition", "1x Controller", "100+ Games", "Cables & Case"]
    },
    {
      id: 37534,
      super_cat: "gaming",
      name: "PS5 + FC27 + 4 Controllers",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa27-4-controllers/ps5-with-fifa-27-with-4-controllers-on-rent-sharepal-1.webp",
      rating: 4.9,
      booked_count: 651,
      tag: "New",
      per_day_rent: 350,
      out_of_stock: false,
      category: "fc26",
      description: "Full squad edition with 4 controllers, FC27, and co-op favorites for big gatherings.",
      included: ["PS5 Console", "FC27 Edition", "4x Controllers", "Charging Dock", "100+ Games", "Case"]
    },
    {
      id: 37616,
      super_cat: "gaming",
      name: "PlayStation Portal Remote Player",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps-portal-remote-player/ps-portal-on-rent-1.webp",
      rating: 4.7,
      booked_count: 10000,
      tag: "Vote to Launch",
      per_day_rent: 158.25,
      out_of_stock: false,
      category: "racing",
      description: "Play your PS5 console games over home Wi-Fi with console-quality controls on an 8-inch 1080p 60fps LCD screen.",
      included: ["PlayStation Portal Remote Player", "USB-C Charging Cable", "Padded Case", "Screen Guard"]
    }
  ],

  photography: [
    {
      id: 50101,
      super_cat: "photography",
      name: "GoPro HERO 12 Black with Waterproof Housing & Dual Battery",
      image: "https://images.sharepal.in/super-categories/camera-left.webp",
      rating: 4.9,
      booked_count: 1840,
      tag: "Trending",
      per_day_rent: 250,
      out_of_stock: false,
      category: "action",
      description: "5.3K 60FPS video, HyperSmooth 6.0 stabilization, waterproof up to 60m with housing. Includes floating hand grip and 128GB high-speed SD card.",
      included: ["GoPro Hero 12 Black", "2x Enduro Batteries", "60m Waterproof Housing", "Floating Handler & Mounts", "SanDisk Extreme 128GB MicroSD", "Protective Case"]
    },
    {
      id: 50102,
      super_cat: "photography",
      name: "Insta360 X4 8K 360 Action Camera",
      image: "https://images.sharepal.in/super-categories/camera-right.webp",
      rating: 4.8,
      booked_count: 1220,
      tag: "Trending",
      per_day_rent: 350,
      out_of_stock: false,
      category: "action",
      description: "Capture immersive 8K 360° videos with invisible selfie stick effect, FlowState stabilization, and AI editing features.",
      included: ["Insta360 X4 Camera", "Invisible Selfie Stick (114cm)", "Lens Guards", "2x Batteries & Dual Hub", "128GB V30 SD Card", "Carry Case"]
    },
    {
      id: 50103,
      super_cat: "photography",
      name: "DJI Mini 4 Pro Fly More Combo with RC 2 Screen Controller",
      image: "https://images.sharepal.in/super-categories/Category+Card+Image.webp",
      rating: 4.9,
      booked_count: 980,
      tag: "New",
      per_day_rent: 650,
      out_of_stock: false,
      category: "drones",
      description: "Sub-249g ultra-lightweight drone with omnidirectional obstacle sensing, 4K/60fps HDR true vertical shooting, and up to 34 min flight time per battery.",
      included: ["DJI Mini 4 Pro Drone", "DJI RC 2 Screen Remote", "3x Intelligent Flight Batteries", "Two-Way Charging Hub", "Shoulder Bag", "128GB High-Speed MicroSD"]
    },
    {
      id: 50104,
      super_cat: "photography",
      name: "Sony Alpha A7 IV Full-Frame Mirrorless + 24-70mm F2.8 GM Lens",
      image: "https://images.sharepal.in/super-categories/camera-right.webp",
      rating: 4.9,
      booked_count: 750,
      tag: "Trending",
      per_day_rent: 750,
      out_of_stock: false,
      category: "mirrorless",
      description: "33MP Full-Frame Exmor R sensor, 4K 60p 10-bit 4:2:2 video, real-time eye autofocus, paired with flagship Sony G Master 24-70mm F2.8 zoom lens.",
      included: ["Sony A7 IV Body", "Sony FE 24-70mm F2.8 GM Lens", "2x NP-FZ100 Batteries", "Dual Battery Charger", "64GB UHS-II V90 SD Card", "Padded Camera Bag"]
    },
    {
      id: 50105,
      super_cat: "photography",
      name: "DJI Osmo Pocket 3 Creator Combo (4K 120fps)",
      image: "https://images.sharepal.in/super-categories/camera-left.webp",
      rating: 4.9,
      booked_count: 1450,
      tag: "New",
      per_day_rent: 320,
      out_of_stock: false,
      category: "vlogging",
      description: "1-inch CMOS sensor, 4K 120fps video, 2-inch rotatable OLED touchscreen, 3-axis mechanical stabilization, and DJI Mic 2 transmitter included.",
      included: ["DJI Pocket 3", "DJI Mic 2 Transmitter + Windscreen", "Battery Handle", "Mini Tripod", "Wide-Angle Lens", "Carrying Bag"]
    },
    {
      id: 50106,
      super_cat: "photography",
      name: "DJI RS3 Pro 3-Axis Camera Gimbal Stabilizer",
      image: "https://images.sharepal.in/super-categories/camera-right.webp",
      rating: 4.7,
      booked_count: 530,
      tag: "",
      per_day_rent: 300,
      out_of_stock: false,
      category: "drones",
      description: "Carbon fiber construction, 4.5kg tested payload capacity, automated axis locks, and LiDAR focusing compatibility.",
      included: ["DJI RS3 Pro Gimbal", "BG30 Battery Grip", "Quick-Release Plate", "Briefcase Handle", "Focus Motor (2022)", "Carrying Case"]
    },
    {
      id: 50107,
      super_cat: "photography",
      name: "Rode Wireless PRO Dual-Channel Wireless Microphone System",
      image: "https://images.sharepal.in/super-categories/camera-left.webp",
      rating: 4.8,
      booked_count: 670,
      tag: "",
      per_day_rent: 200,
      out_of_stock: false,
      category: "vlogging",
      description: "32-bit float on-board recording, GainAssist technology, timecode sync, 260m transmission range. Includes 2 transmitters and smart charge case.",
      included: ["2x Rode Wireless Transmitters", "1x Dual Receiver", "Smart Charging Case", "2x Lavalier II Mics", "Magnetic Mounts", "Audio Cables (3.5mm, USB-C, Lightning)"]
    },
    {
      id: 50108,
      super_cat: "photography",
      name: "Sony FE 200-600mm F/5.6-6.3 G Master Wildlife & Birding Lens",
      image: "https://images.sharepal.in/super-categories/camera-right.webp",
      rating: 4.8,
      booked_count: 410,
      tag: "",
      per_day_rent: 450,
      out_of_stock: true,
      category: "mirrorless",
      description: "Super-telephoto zoom lens with built-in Optical SteadyShot, internal zoom mechanism, and rapid autofocus for wildlife and sports.",
      included: ["Sony 200-600mm Lens", "Lens Hood", "Tripod Collar", "Front & Rear Caps", "Padded Lens Bag"]
    }
  ],

  outdoor: [
    {
      id: 60101,
      super_cat: "outdoor",
      name: "Waterproof Sub-Zero Trekking Jacket (-10°C High Altitude)",
      image: "https://images.sharepal.in/super-categories/Category+Card+Image.webp",
      rating: 4.9,
      booked_count: 2150,
      tag: "Trending",
      per_day_rent: 120,
      out_of_stock: false,
      category: "trekking",
      description: "Triple-layer windproof, waterproof & breathable alpine jacket rated for sub-zero Himalayan treks (Kedarkantha, Chadar, Roopkund).",
      included: ["Thermal Down Trekking Jacket", "Detachable Storm Hood", "Fleece Inner Layer", "Sanitized & Sealed Pack"]
    },
    {
      id: 60102,
      super_cat: "outdoor",
      name: "High-Ankle Waterproof Trekking Snow Boots with Grip",
      image: "https://images.sharepal.in/super-categories/Category+Card+Image.webp",
      rating: 4.8,
      booked_count: 1820,
      tag: "Trending",
      per_day_rent: 140,
      out_of_stock: false,
      category: "trekking",
      description: "Vibram sole deep lugs for mud and snow traction, waterproof membrane, high ankle support to prevent sprains on rocky trails.",
      included: ["1 Pair Waterproof Trekking Boots (All Sizes)", "Microspikes / Crampons Included", "Freshly Sanitized"]
    },
    {
      id: 60103,
      super_cat: "outdoor",
      name: "Quechua 2-Person Waterproof Camping Tent + Carry Bag",
      image: "https://images.sharepal.in/super-categories/Category+Card+Image.webp",
      rating: 4.8,
      booked_count: 1420,
      tag: "",
      per_day_rent: 150,
      out_of_stock: false,
      category: "camping",
      description: "Easy 5-minute setup dome tent with 2000mm waterproof PU coating, mosquito mesh, wind resistance up to 50km/h.",
      included: ["2-Person Dome Tent", "Aluminum Poles & Ground Pegs", "Waterproof Rainfly", "Compact Carry Bag"]
    },
    {
      id: 60104,
      super_cat: "outdoor",
      name: "High-Altitude Down Sleeping Bag (-15°C Extreme Comfort)",
      image: "https://images.sharepal.in/super-categories/Category+Card+Image.webp",
      rating: 4.9,
      booked_count: 1100,
      tag: "Trending",
      per_day_rent: 130,
      out_of_stock: false,
      category: "camping",
      description: "700 Fill-Power duck down mummy sleeping bag with draft collar, water-repellent ripstop shell, lightweight 1.2kg.",
      included: ["Down Sleeping Bag", "Compression Sack", "Hygiene Cotton Liner", "Sanitized"]
    },
    {
      id: 60105,
      super_cat: "outdoor",
      name: "Rynox Stealth Air Pro CE Level-2 Motorcycle Riding Jacket",
      image: "https://images.sharepal.in/super-categories/Category+Card+Image.webp",
      rating: 4.9,
      booked_count: 940,
      tag: "New",
      per_day_rent: 220,
      out_of_stock: false,
      category: "riding",
      description: "Knox CE Level 2 armors on shoulders, elbows, back and chest. Heavy duty Cordura mesh for maximum airflow on long tours.",
      included: ["Rynox Riding Jacket", "Internal Thermal Liner", "External Rain Jacket", "CE Level 2 Full Armors"]
    },
    {
      id: 60106,
      super_cat: "outdoor",
      name: "Motorcycle Waterproof Saddle Bags 60L (Pair)",
      image: "https://images.sharepal.in/super-categories/Category+Card+Image.webp",
      rating: 4.7,
      booked_count: 620,
      tag: "",
      per_day_rent: 140,
      out_of_stock: false,
      category: "riding",
      description: "Universal fit saddle bags with heat-resistant bottoms, roll-top closure, and 100% waterproof storm covers.",
      included: ["2x 30L Saddle Bags", "Mounting Straps & Bungees", "Hi-Vis Rain Covers"]
    },
    {
      id: 60107,
      super_cat: "outdoor",
      name: "Celestron 10x50 High Power Binoculars for Stargazing & Safaris",
      image: "https://images.sharepal.in/super-categories/Category+Card+Image.webp",
      rating: 4.7,
      booked_count: 510,
      tag: "",
      per_day_rent: 110,
      out_of_stock: false,
      category: "accessories",
      description: "Large 50mm objective lens for maximum light transmission in low-light bird watching, wildlife safaris, and stargazing.",
      included: ["Celestron Binoculars", "Neck Strap & Lens Caps", "Carrying Case", "Lens Cleaning Cloth"]
    }
  ],

  entertainment: [
    {
      id: 70101,
      super_cat: "entertainment",
      name: "4K Ultra HD Home Cinema Smart Projector (3500 Lumens)",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps-portal-remote-player/ps-portal-on-rent-1.webp",
      rating: 4.9,
      booked_count: 1680,
      tag: "Trending",
      per_day_rent: 450,
      out_of_stock: false,
      category: "projectors",
      description: "Native 4K HDR10, Android TV built-in with Netflix/Prime Video, auto-keystone correction, 20W Harmon Kardon sound.",
      included: ["4K Smart Projector", "Smart Bluetooth Remote", "HDMI 2.1 Cable", "Power Adapter", "Padded Carry Bag"]
    },
    {
      id: 70102,
      super_cat: "entertainment",
      name: "Meta Quest 3 128GB Standalone VR Headset (10+ Games Installed)",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps-portal-remote-player/ps-portal-on-rent-1.webp",
      rating: 4.8,
      booked_count: 1420,
      tag: "New",
      per_day_rent: 420,
      out_of_stock: false,
      category: "vr",
      description: "Full-color passthrough mixed reality, pancake optics, 4K+ infinite display, Touch Plus haptic controllers. Preloaded with Beat Saber, Superhot, Eleven Table Tennis.",
      included: ["Meta Quest 3 Headset", "2x Touch Plus Controllers", "Silicone Facial Interface", "Fast Charger & Cable", "Hard Shell Carry Case"]
    },
    {
      id: 70103,
      super_cat: "entertainment",
      name: "JBL PartyBox 310 Wireless Party Speaker with Bass Boost & RGB Lights",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps-portal-remote-player/ps-portal-on-rent-1.webp",
      rating: 4.9,
      booked_count: 1310,
      tag: "Trending",
      per_day_rent: 380,
      out_of_stock: false,
      category: "audio",
      description: "240W RMS output, synchronized dynamic light show, 18-hour battery backup, telescopic handle & smooth glide wheels.",
      included: ["JBL PartyBox 310", "Power Cable", "AUX & Bluetooth Ready"]
    },
    {
      id: 70104,
      super_cat: "entertainment",
      name: "120-Inch Portable Anti-Crease Projector Screen with Tripod Stand",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps-portal-remote-player/ps-portal-on-rent-1.webp",
      rating: 4.7,
      booked_count: 910,
      tag: "",
      per_day_rent: 150,
      out_of_stock: false,
      category: "projectors",
      description: "16:9 HD 4K screen with 160° wide viewing angle, height-adjustable tripod stand, indoor and outdoor setup in 3 mins.",
      included: ["120\" Matte White Screen", "Aluminum Tripod Stand", "Ground Spikes & Ropes", "Carry Bag"]
    },
    {
      id: 70105,
      super_cat: "entertainment",
      name: "Dual Wireless Karaoke Microphone Set with Digital Echo Receiver",
      image: "https://images.sharepal.in/categories/gaming-consoles/ps5/ps-portal-remote-player/ps-portal-on-rent-1.webp",
      rating: 4.8,
      booked_count: 760,
      tag: "",
      per_day_rent: 180,
      out_of_stock: false,
      category: "mics",
      description: "UHF dual wireless metallic handheld microphones with built-in DSP chip for vocal clarity, 60m range, connects to any speaker or TV.",
      included: ["2x UHF Wireless Mics", "1x Rechargeable Receiver (6.35mm & 3.5mm)", "Mic Foam Covers & Anti-Roll Rings", "Charging Cable"]
    }
  ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  state.allProducts = { ...CATALOG_DATABASE };
  initLucideIcons();
  setupEventListeners();
  setupDateInputsDefault();
  renderSuperCategoryUI();
});

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Switch Active Super-Category (Gaming, Photography, Outdoor, Entertainment)
window.switchSuperCategory = function(catSlug) {
  if (!SUPER_CATEGORIES[catSlug]) return;
  state.superCategory = catSlug;
  state.activeFilter = 'all';
  state.searchQuery = '';

  const searchInput = document.getElementById('global-search-input');
  if (searchInput) searchInput.value = '';
  const mobileSearchInput = document.getElementById('mobile-search-input');
  if (mobileSearchInput) mobileSearchInput.value = '';

  // Update nav tabs
  document.querySelectorAll('.super-tab-item').forEach(tab => {
    const isCurrent = tab.dataset.category === catSlug;
    tab.classList.toggle('active', isCurrent);
  });

  renderSuperCategoryUI();
  showToast(`✨ Switched to ${SUPER_CATEGORIES[catSlug].name}`, 'info');
};

// Update entire UI according to active super category
function renderSuperCategoryUI() {
  const config = SUPER_CATEGORIES[state.superCategory];
  if (!config) return;

  // 1. Update Hero Banner
  const heroTag = document.querySelector('.hero-tag-pill');
  if (heroTag) {
    heroTag.innerHTML = `<span class="pulse-dot"></span> ${config.heroBadge}`;
  }

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = `${config.titlePrefix} <span class="city-highlight" id="hero-city-title">${state.city}</span>`;
  }

  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    heroSubtitle.textContent = config.subtitle;
  }

  const heroImg = document.querySelector('.hero-console-img');
  if (heroImg) {
    heroImg.src = config.heroImage;
  }

  const badgeGames = document.querySelector('.badge-games span');
  if (badgeGames) {
    badgeGames.textContent = config.badgeLabel;
  }

  const badgePrice = document.querySelector('.badge-price .price');
  if (badgePrice) {
    badgePrice.innerHTML = `${config.heroPrice}<small>/day</small>`;
  }

  // 2. Update Breadcrumb
  const breadcrumbActive = document.querySelector('.breadcrumb-list li.active');
  if (breadcrumbActive) {
    breadcrumbActive.textContent = `${config.name} on Rent`;
  }

  // 3. Update Subcategory Filter Pills
  const subnavContainer = document.getElementById('category-subnav-pills');
  if (subnavContainer) {
    const currentProducts = state.allProducts[state.superCategory] || [];
    subnavContainer.innerHTML = config.subcategories.map((sub, idx) => {
      let count = 0;
      if (sub.id === 'all') {
        count = currentProducts.length;
      } else {
        count = currentProducts.filter(p => p.category === sub.id || p.tag === sub.id).length;
      }

      const isActive = state.activeFilter === sub.id;
      return `
        <button class="subnav-pill ${isActive ? 'active' : ''}" data-filter="${sub.id}" onclick="setSubFilter('${sub.id}')">
          <span>${sub.label}</span>
          <span class="pill-count">${count}</span>
        </button>
      `;
    }).join('');
  }

  renderProducts();
  initLucideIcons();
}

window.setSubFilter = function(filterId) {
  state.activeFilter = filterId;
  document.querySelectorAll('.subnav-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.filter === filterId);
  });
  renderProducts();
};

// Setup Event Listeners
function setupEventListeners() {
  // Super-Category Tabs Click Handlers
  document.querySelectorAll('.super-tab-item').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = tab.dataset.category;
      if (cat) switchSuperCategory(cat);
    });
  });

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
  const currentList = state.allProducts[state.superCategory] || [];
  let list = [...currentList];

  if (state.searchQuery) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(state.searchQuery) ||
      (p.description && p.description.toLowerCase().includes(state.searchQuery))
    );
  }

  if (state.activeFilter !== 'all') {
    list = list.filter(p => p.category === state.activeFilter || p.tag === state.activeFilter);
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
  const config = SUPER_CATEGORIES[state.superCategory] || SUPER_CATEGORIES.gaming;

  if (resultsCountText) {
    resultsCountText.innerHTML = `Showing <strong>${products.length}</strong> ${config.name.toLowerCase()} in ${state.city}`;
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
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" onerror="this.src='https://images.sharepal.in/super-categories/Category+Card+Image.webp'">
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

// Find product by ID across all categories
function findProductById(id) {
  for (const cat in state.allProducts) {
    const found = state.allProducts[cat].find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

// Cart Management
window.toggleAddToCart = function(productId) {
  const product = findProductById(productId);
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
        <p style="font-size:13px; margin-top:6px;">Add a gaming console, camera, or outdoor gear to begin your hassle-free zero deposit rental.</p>
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

// Checkout Handler
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
    customer_name: "Verified Renter",
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
      }
    }
  } catch (e) {}

  const cartDrawer = document.getElementById('cart-drawer-overlay');
  if (cartDrawer) cartDrawer.classList.remove('open');

  if (window.confetti) {
    window.confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  const successModal = document.getElementById('success-modal-overlay');
  if (successModal) {
    document.querySelector('.success-order-id strong').textContent = `#${orderRef}`;
    document.getElementById('success-city').textContent = state.city;
    document.getElementById('success-duration').textContent = `${state.rentalDays} Days`;
    successModal.classList.add('open');
    initLucideIcons();
  }

  state.cart = [];
  updateCartBadges();
  renderProducts();
}

// Product Quick View Modal
window.openProductDetailModal = function(productId) {
  const product = findProductById(productId);
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
        <span class="modal-tag">${product.tag || 'Verified Gear'} &bull; ${state.city}</span>
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
  const product = findProductById(productId);
  showToast(`🔔 We'll alert you on WhatsApp as soon as "${product?.name}" is restocked!`, 'info');
};

window.handleVotePortal = async function(productId) {
  if (state.hasVotedPortal) {
    showToast(`You have already voted for PlayStation Portal! 🎮`, 'info');
    return;
  }
  state.hasVotedPortal = true;
  state.portalVotes += 1;

  try {
    const res = await fetch('/api/votes/portal', { method: 'POST' });
    if (res.ok) {
      const data = await res.json();
      if (data.votes) state.portalVotes = data.votes;
    }
  } catch (e) {}

  showToast(`🚀 Vote saved! You are backer #${state.portalVotes.toLocaleString()}.`, 'success');
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
