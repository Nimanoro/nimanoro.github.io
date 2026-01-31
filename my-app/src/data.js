// content.js (or whatever you call this file)
// Goals:
// - Outcome-first, but believable
// - Consistent fields + consistent tone
// - Private projects handled cleanly (no "#")
// - Stacks accurate + scannable

// ─── Proof strip (home hero) ─────────────────────────────────────────────
export const proofStrip = {
  users: "500+",
  projectsShipped: "3+ products",
  domains: "Backend · ML · Computer Vision · Systems · Full-stack",
};

// ─── Now section ─────────────────────────────────────────────────────────
export const now = {
  building: "LiftIQ (AI strength feedback) as part of Entrepreneurship coop with UBC",
  seeking: "Summer 2026 SWE (Backend / Mobile / Full-Stack)",
  learning: "real-time feedback loops, product fundamentals",
  latestShip: "LiftIQ - working prototype",
};

// ─── Testimonials (2 is enough) ───────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "Nima consistently delivered clear explanations and went above and beyond in office hours.",
    source: "UBC CS TA feedback",
    role: "Course Assistant",
  },
  {
    quote: "This saved me time. Everything is where I expect it to be.",
    source: "StretchFlow early user",
    role: "Beta tester",
  },
];

// ─── Tier A: Flagship case studies (3–4 big cards + detail pages) ────────
export const flagshipCaseStudies = [
  {
    slug: "liftiq",
    title: "LiftIQ",
    oneLiner: "AI-powered strength training feedback using real-time pose analysis.",
    outcome: "Working prototype; early gym user testing and iteration in progress.",
    built:
      "End-to-end system for exercise form feedback using video input, pose estimation, rep segmentation, and actionable cues.",
    hardPart:
      "Reliable rep detection, noisy pose data, defining useful biomechanical metrics, and keeping feedback fast enough to feel real-time.",
    result:
      "Functional prototype delivering form feedback; expanding exercise coverage and validation with real users.",
    stack: [
      "Python",
      "MediaPipe / MoveNet",
      "Pose estimation",
      "Signal processing",
      "React (dashboard)",
    ],
    image:
    "/Pictures/LiftIQ.png",
    links: {
      live: null,
      github: null, // private / early-stage is fine
      writeup: null, // future case study page
    },
    date: "2025 – Present",
    tags: ["ML", "Fitness", "Computer Vision", "Product"],
    visibility: "private",
  }
,  
  {
    slug: "stretchflow",
    title: "StretchFlow",
    oneLiner: "A no-friction stretching routine app with voice guidance and habit tracking.",
    outcome: "300+ users in the first week; waitlist growing.",
    built:
      "React Native app with voice-guided routines, onboarding that gets you moving fast, and a freemium model.",
    hardPart:
      "Retention (onboarding + habit loop), purchases that don’t feel sketchy, and cross-platform behavior staying consistent.",
    result:
      "Shipped a usable beta fast, then iterated based on real user behavior.",
    stack: ["React Native", "Expo", "TypeScript", "RevenueCat"],
    image:
      "Pictures/stretchflow.png",
    links: {
      live: "https://stretchflow.app",
      github: "https://github.com/Nimanoro/stretchflow",
      writeup: null, // add later: "/work/stretchflow" or a Notion link
    },
    date: "Apr 2025 – Present",
    tags: ["Mobile", "Product", "Shipping"],
    visibility: "public",
  },
  {
    slug: "discover-music",
    title: "Discover Music",
    oneLiner:
      "Personalized music discovery using Spotify listening data, audio features, and generative AI.",
    outcome:
      "Shipped full-stack product with real users; premium mode deployed with AI-generated playlist names and artwork.",
    built:
      "End-to-end music discovery platform integrating Spotify OAuth, backend data aggregation, recommendation logic, and a responsive web UI.",
    hardPart:
      "Managing Spotify OAuth tokens at scale, designing meaningful scoring over noisy audio features, and keeping the product fast and reliable under real user traffic.",
    result:
      "Production deployment with personalized playlist generation, GPT-based naming, and DALL·E cover art uploaded directly to Spotify.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Spotify Web API",
      "OpenAI (GPT, DALL·E)",
      "OAuth 2.0",
    ],
    image: "Pictures/discover_music.jpeg",
    links: {
      live: null, // or your live URL if you want it public
      github: null, // private is totally fine here
      writeup: null, // later: /work/discover-music
    },
    date: "Mar 2024 – Nov 2024",
    tags: ["Full-stack", "Product", "APIs", "ML-adjacent"],
    visibility: "public",
  },
  {
    slug: "koole",
    title: "Koole",
    oneLiner:
      "Social trip planning platform for organizing, tracking, and sharing group travel experiences.",
    outcome:
      "Built and shipped a working MVP; project discontinued after early validation due to cofounder misalignment.",
    built:
      "Full-stack web platform for creating trips, managing participants, tracking progress, and sharing visual summaries.",
    hardPart:
      "Designing flexible data models for trips and participants, handling permissions and roles, and keeping the UX simple despite complex flows.",
    result:
      "End-to-end product shipped with real users; learned hard lessons around founder alignment and early-stage product scope.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "Authentication",
      "Product Design",
    ],
    image: "Pictures/koole.png",
    links: {
      live: null,
      github: null,
      writeup: null,
    },
    date: "Late 2024 – Early 2025",
    tags: ["Full-stack", "Product", "Startups"],
    visibility: "private",
  }
    
];

// ─── Tier B: Shipped experiments (smaller grid, still with screenshot) ─────
export const shippedExperiments = [

  {
    slug: "sign-language-detection",
    title: "Sign Language Detection",
    oneLiner: "Real-time hand sign detection pipeline with a webcam loop.",
    outcome: "Working demo with real-time inference; extensible pipeline.",
    built:
      "Webcam capture + hand landmark detection + classifier for mapping gestures to labels.",
    hardPart:
      "Occlusion, jitter, and balancing vocabulary size against accuracy.",
    result:
      "A practical demo and a base for expanding gesture sets.",
    stack: ["Python", "MediaPipe", "OpenCV", "Scikit-learn"],
    image:
      "https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/signlang.png?raw=true",
    links: {
      live: null,
      github: "https://github.com/Nimanoro/Sign-language-detection",
      writeup: null,
    },
    date: "Jul 2024",
    tags: ["ML", "CV", "Realtime"],
    visibility: "public",
  },
  {
    slug: "number-detector",
    title: "Number Detector",
    description: "Digit classifier with a live drawing UI (train → test → iterate).",
    image:
      "Pictures/number_detector.png",
    links: {
      github: "https://github.com/Nimanoro/number-detector",
      live: null,
    },
    stack: ["Python", "OpenCV", "Sklearn"],
    date: "Jan 2024",
    tags: ["ML"],
    visibility: "public",
  },
  {
    slug: "soccer-club-manager",
    title: "Soccer Club Manager",
    description: "Soccer management sim: team upgrades, league system, match mechanics.",
    image:
      "https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Soccer.png?raw=true",
    links: {
      github: "https://github.com/Nimanoro/Soccer-Club-Manager",
      live: null,
    },
    stack: ["Java", "Swing", "JUnit"],
    date: "Jul 2023 – Present",
    tags: ["Systems", "Game"],
    visibility: "public",
  },
  {
    slug: "self-driving-car-sim",
    title: "Self-Driving Car Simulation",
    description: "2D driving sim with neural network control, collisions, and a browser loop.",
    image:
      "Pictures/carsimulations.png",
    links: {
      github: "https://github.com/Nimanoro/Self-driving-car",
      live: null,
    },
    stack: ["JavaScript", "HTML5 Canvas", "Neural Nets"],
    date: "Jul 2024",
    tags: ["Simulation", "ML"],
    visibility: "public",
  },
  {
    slug: "translink-tracker",
    title: "TransLink Tracker",
    description: "Real-time bus tracker for Vancouver transit (API + search + simple UI).",
    image:
      "https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Translink.png?raw=true",
    links: {
      github: "https://github.com/Nimanoro/translink-project",
      live: null,
    },
    stack: ["Python", "Public APIs"],
    date: "Jan 2023",
    tags: ["Backend", "Data"],
    visibility: "public",
  },
  {
    slug: "stock-portfolio-analyzer",
    title: "Stock Portfolio Analyzer",
    description: "Portfolio simulation + indicators (RSI, MACD, Bollinger) with per-stock charts.",
    image:
      "Pictures/stock-portfolio.png",
    links: {
      github: "https://github.com/Nimanoro/Stock-portfolio",
      live: null,
    },
    stack: ["Python", "Pandas", "Matplotlib"],
    date: "Jan 2024",
    tags: ["Data", "Tools"],
    visibility: "public",
  },
];

// ─── Tier C: Lab / prototypes (everything else) ───────────────────────────
export const labPrototypes = [
  {
    slug: "rl-2d-control-acrobot",
    title: "RL 2D Control (Acrobot)",
    description: "RL agents balancing Acrobot (Gymnasium + PyTorch experiments).",
    image:
      "https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/rl-acrobot.png?raw=true",
    links: {
      github: "https://github.com/Nimanoro/RL-2DControl-gymnasium",
      live: null,
    },
    stack: ["Gymnasium", "PyTorch", "Reinforcement Learning"],
    date: "Jan 2024",
    tags: ["RL"],
    visibility: "public",
  },
  {
    slug: "fsm-playground",
    title: "Finite State Machine Playground",
    description: "FSM visualizer and simulator (DFAs, NFAs, ε-transitions).",
    image:
      "https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/fsm.png?raw=true",
    links: {
      github: "https://github.com/Nimanoro/Finite-state-machine",
      live: null,
    },
    stack: ["Python", "Graphviz", "Automata"],
    date: "Oct 2024",
    tags: ["Theory", "Tools"],
    visibility: "public",
  },
  {
    slug: "pybullet-walker",
    title: "PyBullet Walker",
    description: "Custom biped setup with sensors + control hooks (built for RL environment work).",
    image:
      "https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/pybullet.png?raw=true",
    links: {
      github: "https://github.com/Nimanoro/PyBullet-walker",
      live: null,
    },
    stack: ["PyBullet", "Robotics", "Simulation"],
    date: "Oct 2024",
    tags: ["Robotics"],
    visibility: "public",
  },
  {
    slug: "roguelike-private",
    title: "Rogue-Like Adventure Game (Private)",
    description: "2D rogue-like prototype with combat, enemies, and level structure.",
    image:
      "https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/roguelike.png?raw=true",
    links: { github: null, live: null },
    stack: ["Pygame", "OOP", "Game systems"],
    date: "Dec 2024",
    tags: ["Game"],
    visibility: "private",
  },
  {
    slug: "apple-music-db",
    title: "Apple Music Listener DB",
    description: "Parse Apple Music history → SQLite; analyze listening taste over time.",
    image:
      "https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Screen%20Shot%202023-07-23%20at%208.45.05%20PM.png?raw=true",
    links: {
      github: "https://github.com/Nimanoro/Apple-music-listened-to-Database",
      live: null,
    },
    stack: ["Python", "XML", "SQLite"],
    date: "Mar 2023",
    tags: ["Data"],
    visibility: "public",
  },
  {
    slug: "leetcode-solutions",
    title: "LeetCode Solutions",
    description: "Algorithm practice: DP, graphs, backtracking, math, and the usual suffering.",
    image:
      "Pictures/leetcode.png",
    links: {
      github: "https://github.com/Nimanoro/LeetCode-Soln",
      live: null,
    },
    stack: ["Python"],
    date: "Ongoing",
    tags: ["Algorithms"],
    visibility: "public",
  },
];

// Legacy: flat list for /projects "everything else" page (Tier B + C combined)
export const projects = [...shippedExperiments, ...labPrototypes];
