/* ========================================================== */
/* ✅ FILE: products.js – Static Product Data Store           */
/* ========================================================== */

/* ✅ EXPORT: Product Data Array
--------------------------------------------------------------
• Each product object contains:
  - id: used in query string for product.html?id=...
  - name: display name of the product
  - description: short product summary
  - image: relative path to product image
  - link: full link to the product detail page
-------------------------------------------------------------- */

export const products = [
  {
    id: "knife-set",
    name: "Chef's Knife Set",
    description: "Premium stainless steel knife block with ergonomic handles.",
    image: "/images/S4127_LS1.jpg",
    link: "product.html?id=knife-set"
  },
  {
    id: "cocktail-kit",
    name: "Complete Cocktail Kit",
    description: "Everything you need to start mixing cocktails like a pro.",
    image: "/images/cocktail-kit.jpg",
    link: "product.html?id=cocktail-kit"
  },
  {
    id: "wireless-earbuds",
    name: "Wireless Earbuds",
    description: "High-fidelity sound with noise cancellation and wireless charging case.",
    image: "/images/wireless-earbuds.jpg",
    link: "product.html?id=wireless-earbuds"
  },
  {
    id: "smart-watch",
    name: "Smart Watch",
    description: "Track fitness, receive notifications, and monitor health metrics.",
    image: "/images/smart-watch.jpg",
    link: "product.html?id=smart-watch"
  },
  {
    id: "yoga-mat",
    name: "Eco Yoga Mat",
    description: "Non-slip, biodegradable yoga mat for all types of practice.",
    image: "/images/yoga-mat.jpg",
    link: "product.html?id=yoga-mat"
  },
  {
    id: "espresso-machine",
    name: "Espresso Machine",
    description: "Barista-grade espresso machine with easy-to-use interface.",
    image: "/images/espresso-machine.jpg",
    link: "product.html?id=espresso-machine"
  },
  {
    id: "gaming-chair",
    name: "Gaming Chair",
    description: "Ergonomic chair with lumbar support and adjustable armrests.",
    image: "/images/gaming-chair.jpg",
    link: "product.html?id=gaming-chair"
  },
  {
    id: "portable-blender",
    name: "Portable Blender",
    description: "Rechargeable blender for smoothies on the go.",
    image: "/images/portable-blender.jpg",
    link: "product.html?id=portable-blender"
  },
  {
    id: "fitness-tracker",
    name: "Fitness Tracker",
    description: "Monitor steps, heart rate, and sleep patterns.",
    image: "/images/fitness-tracker.jpg",
    link: "product.html?id=fitness-tracker"
  },
  {
    id: "led-desk-lamp",
    name: "LED Desk Lamp",
    description: "Adjustable brightness and color temperature for optimal lighting.",
    image: "/images/led-desk-lamp.jpg",
    link: "product.html?id=led-desk-lamp"
  },
  {
    id: "sleep-headphones",
    name: "Sleep Headphones",
    description: "Comfortable headband with built-in speakers for bedtime audio.",
    image: "/images/sleep-headphones.jpg",
    link: "product.html?id=sleep-headphones"
  },
  {
    id: "robot-vacuum",
    name: "Robot Vacuum",
    description: "Smart navigation and app control for hands-free cleaning.",
    image: "/images/robot-vacuum.jpg",
    link: "product.html?id=robot-vacuum"
  },
  {
    id: "air-purifier",
    name: "Air Purifier",
    description: "HEPA filtration removes 99.97% of airborne particles.",
    image: "/images/air-purifier.jpg",
    link: "product.html?id=air-purifier"
  },
  {
    id: "electric-toothbrush",
    name: "Electric Toothbrush",
    description: "Multiple cleaning modes and long-lasting battery life.",
    image: "/images/electric-toothbrush.jpg",
    link: "product.html?id=electric-toothbrush"
  },
  {
    id: "travel-backpack",
    name: "Travel Backpack",
    description: "Durable, water-resistant backpack with multiple compartments.",
    image: "/images/travel-backpack.jpg",
    link: "product.html?id=travel-backpack"
  }
];
