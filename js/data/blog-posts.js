/* ========================================================== */
/* ✅ FILE: blog-posts.js – Static Blog Data Store            */
/* ========================================================== */

/* ✅ EXPORT: Blog Post Data Array
--------------------------------------------------------------
• Each blog object contains:
  - id: slug used in query string (for post.html)
  - title, excerpt, content (HTML string)
  - metadata: date, category, author
  - media: authorImage, coverImage
  - link: used to open the post via post.html?id=...
-------------------------------------------------------------- */

export const blogPosts = [
  {
    id: "revolutionizing-green-energy",
    title: "Revolutionizing Green Energy",
    excerpt: "Discover how sustainable innovation is reshaping the future of energy systems...",
    content: `
      <p>Green energy is no longer a buzzword — it’s a global shift. From solar rooftops to national grids, the transition is real and accelerating.</p>
      <p>Here's how the green energy revolution is unfolding:</p>
      <ul>
        <li>✅ <strong>Solar power</strong> is now cheaper than coal in many regions.</li>
        <li>✅ <strong>Wind farms</strong> are expanding offshore globally.</li>
        <li>✅ <strong>Battery storage</strong> is solving the intermittent problem.</li>
      </ul>
      <p>Governments, companies, and individuals all have a role to play.</p>
    `,
    date: "2024-04-22",
    category: "Tech",
    author: "Jordan Lee",
    authorImage: "https://i.pravatar.cc/48?img=8",
    coverImage: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=1080&h=768&q=80",
    link: "post.html?id=revolutionizing-green-energy"
  },
  {
    id: "ai-in-everyday-life",
    title: "AI in Everyday Life",
    excerpt: "From smart assistants to predictive analytics, AI is transforming how we live…",
    content: `
      <p>Artificial Intelligence isn’t just for labs and tech giants — it’s in our pockets and homes.</p>
      <p>Here’s how AI impacts us daily:</p>
      <ul>
        <li>✅ <strong>Voice assistants</strong> streamline tasks.</li>
        <li>✅ <strong>Recommendation engines</strong> personalize our media.</li>
        <li>✅ <strong>Smart home devices</strong> optimize energy use.</li>
      </ul>
    `,
    date: "2025-01-05",
    category: "Tech",
    author: "Avery Brooks",
    authorImage: "https://i.pravatar.cc/48?img=1",
    coverImage: "https://picsum.photos/id/1011/1080/768",
    link: "post.html?id=ai-in-everyday-life"
  },
  {
    id: "nutrition-myths-debunked",
    title: "Nutrition Myths Debunked",
    excerpt: "Separating fact from fiction in popular diet advice…",
    content: `
      <p>Nutritional advice can be confusing. Let’s clear up some common myths.</p>
      <ul>
        <li>✅ <strong>Carbs aren’t the enemy</strong> — balance is key.</li>
        <li>✅ <strong>All fats aren’t bad</strong> — some are essential.</li>
        <li>✅ <strong>Supplements can’t replace</strong> whole foods.</li>
      </ul>
    `,
    date: "2025-01-12",
    category: "Health",
    author: "Riley Chen",
    authorImage: "https://i.pravatar.cc/48?img=2",
    coverImage: "https://picsum.photos/id/1012/1080/768",
    link: "post.html?id=nutrition-myths-debunked"
  },
  {
    id: "exploring-hidden-beaches",
    title: "Exploring Hidden Beaches",
    excerpt: "Discover secluded coastal gems far from the tourist crowds…",
    content: `
      <p>Not all beaches are crowded tourist spots — some are well-hidden gems.</p>
      <ul>
        <li>✅ <strong>Secluded coves</strong> perfect for solitude.</li>
        <li>✅ <strong>Secret access points</strong> known only to locals.</li>
        <li>✅ <strong>Pristine waters</strong> away from the crowds.</li>
      </ul>
    `,
    date: "2025-01-19",
    category: "Travel",
    author: "Morgan Patel",
    authorImage: "https://i.pravatar.cc/48?img=3",
    coverImage: "https://picsum.photos/id/1013/1080/768",
    link: "post.html?id=exploring-hidden-beaches"
  },
  {
    id: "art-of-sourdough",
    title: "The Art of Sourdough",
    excerpt: "Master the craft of sourdough baking with traditional techniques…",
    content: `
      <p>Sourdough isn’t just bread — it’s a craft rooted in tradition.</p>
      <p>Master the essentials:</p>
      <ul>
        <li>✅ <strong>Starter maintenance</strong> for a healthy culture.</li>
        <li>✅ <strong>Proper hydration</strong> for ideal crumb.</li>
        <li>✅ <strong>Scoring techniques</strong> for beautiful loaves.</li>
      </ul>
    `,
    date: "2025-01-26",
    category: "Food",
    author: "Taylor Kim",
    authorImage: "https://i.pravatar.cc/48?img=4",
    coverImage: "https://picsum.photos/id/1014/1080/768",
    link: "post.html?id=art-of-sourdough"
  },
  {
    id: "blockchain-beyond-bitcoin",
    title: "Blockchain Beyond Bitcoin",
    excerpt: "How distributed ledgers are reshaping industries outside of finance…",
    content: `
      <p>Blockchain’s potential extends beyond cryptocurrency transactions.</p>
      <ul>
        <li>✅ <strong>Supply chain</strong> transparency.</li>
        <li>✅ <strong>Digital identity</strong> verification.</li>
        <li>✅ <strong>Secure voting</strong> systems.</li>
      </ul>
    `,
    date: "2025-02-02",
    category: "Tech",
    author: "Alex Murphy",
    authorImage: "https://i.pravatar.cc/48?img=5",
    coverImage: "https://picsum.photos/id/1015/1080/768",
    link: "post.html?id=blockchain-beyond-bitcoin"
  },
  {
    id: "meditation-for-beginners",
    title: "Meditation for Beginners",
    excerpt: "Simple steps to start a mindful meditation practice today…",
    content: `
      <p>Starting a meditation practice can be simple yet transformative.</p>
      <ul>
        <li>✅ <strong>Find a quiet space</strong> free of distractions.</li>
        <li>✅ <strong>Focus on breathing</strong> for mental clarity.</li>
        <li>✅ <strong>Short sessions</strong> are better than none.</li>
      </ul>
    `,
    date: "2025-02-09",
    category: "Health",
    author: "Casey Nguyen",
    authorImage: "https://i.pravatar.cc/48?img=6",
    coverImage: "https://picsum.photos/id/1016/1080/768",
    link: "post.html?id=meditation-for-beginners"
  },
  {
    id: "top-mountain-trails",
    title: "Top Mountain Trails",
    excerpt: "Challenge yourself with these must-hike mountain paths…",
    content: `
      <p>Mountain trails offer breathtaking views and a challenge.</p>
      <ul>
        <li>✅ <strong>Appalachian Trail</strong> for long-distance hikers.</li>
        <li>✅ <strong>Pilot’s Peak</strong> for steep climbs.</li>
        <li>✅ <strong>Sunrise Summit</strong> for early bird vistas.</li>
      </ul>
    `,
    date: "2025-02-16",
    category: "Travel",
    author: "Jamie Gonzalez",
    authorImage: "https://i.pravatar.cc/48?img=7",
    coverImage: "https://picsum.photos/id/1017/1080/768",
    link: "post.html?id=top-mountain-trails"
  },
  {
    id: "vegan-comfort-foods",
    title: "Vegan Comfort Foods",
    excerpt: "Hearty, plant-based recipes that warm the soul…",
    content: `
      <p>Comfort food can be both hearty and vegan-friendly.</p>
      <ul>
        <li>✅ <strong>Chickpea mac ‘n’ cheese</strong> warm and creamy.</li>
        <li>✅ <strong>Lentil shepherd’s pie</strong> with mashed potatoes.</li>
        <li>✅ <strong>Jackfruit tacos</strong> for a meaty texture.</li>
      </ul>
    `,
    date: "2025-02-23",
    category: "Food",
    author: "Dakota Smith",
    authorImage: "https://i.pravatar.cc/48?img=8",
    coverImage: "https://picsum.photos/id/1018/1080/768",
    link: "post.html?id=vegan-comfort-foods"
  },
  {
    id: "5g-and-the-future",
    title: "5G and the Future",
    excerpt: "What next-gen connectivity means for consumers and industries…",
    content: `
      <p>5G technology promises faster speeds and lower latency.</p>
      <ul>
        <li>✅ <strong>Enhanced streaming</strong> experiences.</li>
        <li>✅ <strong>IoT expansion</strong> in smart cities.</li>
        <li>✅ <strong>Autonomous vehicles</strong> communication.</li>
      </ul>
    `,
    date: "2025-03-02",
    category: "Tech",
    author: "Cameron Wright",
    authorImage: "https://i.pravatar.cc/48?img=9",
    coverImage: "https://picsum.photos/id/1019/1080/768",
    link: "post.html?id=5g-and-the-future"
  },
  {
    id: "sleep-hygiene-tips",
    title: "Sleep Hygiene Tips",
    excerpt: "Practical habits for a deeper, more restful sleep…",
    content: `
      <p>Good sleep hygiene is crucial for overall health.</p>
      <ul>
        <li>✅ <strong>Regular schedule</strong> for your body clock.</li>
        <li>✅ <strong>Dark, cool room</strong> to improve rest.</li>
        <li>✅ <strong>Limit screens</strong> before bedtime.</li>
      </ul>
    `,
    date: "2025-03-09",
    category: "Health",
    author: "Peyton Davis",
    authorImage: "https://i.pravatar.cc/48?img=10",
    coverImage: "https://picsum.photos/id/1020/1080/768",
    link: "post.html?id=sleep-hygiene-tips"
  },
  {
    id: "city-nightlife-guide",
    title: "City Nightlife Guide",
    excerpt: "Explore the hottest bars, clubs, and late-night spots…",
    content: `
      <p>Discover the best nightlife scenes in major cities.</p>
      <ul>
        <li>✅ <strong>Rooftop bars</strong> with skyline views.</li>
        <li>✅ <strong>Live music</strong> venues for every taste.</li>
        <li>✅ <strong>Late-night eats</strong> to satisfy cravings.</li>
      </ul>
    `,
    date: "2025-03-16",
    category: "Travel",
    author: "Reese Thompson",
    authorImage: "https://i.pravatar.cc/48?img=11",
    coverImage: "https://picsum.photos/id/1021/1080/768",
    link: "post.html?id=city-nightlife-guide"
  },
  {
    id: "gourmet-meal-prep",
    title: "Gourmet Meal Prep",
    excerpt: "Elevate your weekly meal prep with restaurant-quality dishes…",
    content: `
      <p>Gourmet meal prep brings restaurant flavors home.</p>
      <ul>
        <li>✅ <strong>Pasta primavera</strong> pre-cooked sauces.</li>
        <li>✅ <strong>Grilled salmon</strong> with herb rubs.</li>
        <li>✅ <strong>Seasonal salads</strong> for freshness.</li>
      </ul>
    `,
    date: "2025-03-23",
    category: "Food",
    author: "Finley Clark",
    authorImage: "https://i.pravatar.cc/48?img=12",
    coverImage: "https://picsum.photos/id/1022/1080/768",
    link: "post.html?id=gourmet-meal-prep"
  },
  {
    id: "cybersecurity-essentials",
    title: "Cybersecurity Essentials",
    excerpt: "Basic practices to safeguard your online presence…",
    content: `
      <p>Protecting your digital life starts with basic cybersecurity.</p>
      <ul>
        <li>✅ <strong>Password managers</strong> for secure credentials.</li>
        <li>✅ <strong>Two-factor authentication</strong> everywhere.</li>
        <li>✅ <strong>Regular updates</strong> for software patches.</li>
      </ul>
    `,
    date: "2025-03-30",
    category: "Tech",
    author: "Quinn Rivera",
    authorImage: "https://i.pravatar.cc/48?img=13",
    coverImage: "https://picsum.photos/id/1023/1080/768",
    link: "post.html?id=cybersecurity-essentials"
  },
  {
    id: "yoga-for-flexibility",
    title: "Yoga for Flexibility",
    excerpt: "Enhance your range of motion with these simple poses…",
    content: `
      <p>Flexibility improves with consistent yoga practice.</p>
      <ul>
        <li>✅ <strong>Downward dog</strong> for hamstring stretch.</li>
        <li>✅ <strong>Cat-cow</strong> for spine mobility.</li>
        <li>✅ <strong>Pigeon pose</strong> for hip opening.</li>
      </ul>
    `,
    date: "2025-04-06",
    category: "Health",
    author: "Sydney Turner",
    authorImage: "https://i.pravatar.cc/48?img=14",
    coverImage: "https://picsum.photos/id/1024/1080/768",
    link: "post.html?id=yoga-for-flexibility"
  },
  {
    id: "road-trip-essentials",
    title: "Road Trip Essentials",
    excerpt: "Must-have items to ensure a smooth journey…",
    content: `
      <p>A successful road trip is all about preparation.</p>
      <ul>
        <li>✅ <strong>Emergency kit</strong> for unforeseen issues.</li>
        <li>✅ <strong>Route plan</strong> with rest stops.</li>
        <li>✅ <strong>Playlist</strong> for a great soundtrack.</li>
      </ul>
    `,
    date: "2025-04-13",
    category: "Travel",
    author: "Robin Lee",
    authorImage: "https://i.pravatar.cc/48?img=15",
    coverImage: "https://picsum.photos/id/1025/1080/768",
    link: "post.html?id=road-trip-essentials"
  }
];


