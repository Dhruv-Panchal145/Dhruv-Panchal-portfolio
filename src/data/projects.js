// Central project data — edit here to add/update projects, no component changes needed.

const projects = [
  {
    slug: "nexagpt",
    name: "NexaGPT",
    tag: "AI Chat Platform · CI/CD",
    status: "Live",
    year: "2026",
    summary:
      "A full-stack AI chat platform inspired by ChatGPT, built on the MERN stack with an automated CI/CD pipeline and a multi-repo architecture.",
    description:
      "NexaGPT is a full-stack AI chat application that pairs a React front end with an Express/MongoDB backend and the Groq API for near-instant model responses. The project was built around a real deployment workflow rather than a single throwaway repo: separate frontend and backend services, GitHub Actions running verification on every push, and CORS/auth configured the way a production API would be, not a demo one.",
    features: [
      "Automated CI/CD pipeline with GitHub Actions for deployment verification on every push",
      "High-performance AI responses via the Groq API for near-instant completions",
      "Persistent chat threads with user-specific session history stored in MongoDB",
      "Markdown rendering with syntax-highlighted code blocks for structured AI replies",
      "Secure authentication with a locked-down, environment-specific CORS policy",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Groq API",
      "JWT",
      "GitHub Actions",
      "Vercel",
      "Render",
    ],
    links: {
      github: "https://github.com/Dhruv-Panchal145/nexagpt-frontend",
      githubSecondary: "https://github.com/Dhruv-Panchal145/nexagpt-backend",
      githubSecondaryLabel: "Backend repo",
      live: "https://nexagpt-frontend-one.vercel.app",
    },
    accent: "cyan",
  },
  {
    slug: "zerodha-clone",
    name: "Zerodha Clone",
    tag: "Trading Platform",
    status: "Live",
    year: "2025",
    summary:
      "A full-stack stock trading platform clone, split into frontend, dashboard and backend services with cookie-based JWT auth.",
    description:
      "A MERN-stack recreation of Zerodha's trading platform, built as three independent services — a marketing frontend, an authenticated dashboard, and a backend API — to mirror how a real fintech product is actually split up. Every dashboard route checks the session before rendering, and orders, holdings and funds are tracked with live-feeling updates on buy and sell.",
    features: [
      "JWT-based authentication stored in secure httpOnly cookies",
      "Protected dashboard routes — unauthorized access redirects straight to login",
      "Real-time buy/sell order management",
      "Holdings, positions and funds tracked and updated on every trade",
      "Responsive UI matched closely to Zerodha's own dashboard layout",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    links: {
      github: "https://github.com/Dhruv-Panchal145/zerodha-frontend",
      githubSecondary: "https://github.com/Dhruv-Panchal145/zerodha-dashboard",
      githubSecondaryLabel: "Dashboard repo",
      githubTertiary: "https://github.com/Dhruv-Panchal145/zerodha-backend-",
      githubTertiaryLabel: "Backend repo",
      live: "https://zerodha-frontend-lovat.vercel.app",
      liveSecondary: "https://zerodha-dashboard-two-orpin.vercel.app",
      liveSecondaryLabel: "Dashboard demo",
    },
    accent: "amber",
  },
  {
    slug: "wanderlust",
    name: "Wanderlust",
    tag: "Property Booking · Airbnb Clone",
    status: "Live",
    year: "2025",
    summary:
      "A full-stack property listing and booking platform with session auth, image uploads, reviews and geocoded search.",
    description:
      "Wanderlust is a full-stack rental listing platform built with Node.js, Express, MongoDB and EJS. It follows a proper MVC structure — listing owners can create, edit and delete their own properties, guests can leave reviews and ratings, and every route is protected by role-based checks so only an owner can touch their own listing.",
    features: [
      "Session-based authentication via Passport.js — signup, login, logout",
      "Role-based authorization — only listing owners can edit or delete",
      "Full CRUD for property listings with image uploads via Cloudinary",
      "Review and rating system on every listing",
      "Geocoding integration for location-based search",
      "Category-based filtering and search",
      "Server-side validation with Joi and custom error-handling middleware",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
      "EJS",
      "Cloudinary",
      "Joi",
      "AWS Location Service",
    ],
    links: {
      github: "https://github.com/Dhruv-Panchal145/wanderlust",
      live: "https://wanderlust-sqgw.onrender.com",
    },
    accent: "cyan",
  },
];

export default projects;
