import kareemPic from "/images/kareempic.jpg";
export const navItems = [
  { id: "home", label: "Home" },
  { id: "aboutMe", label: "About" },

  //{ id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  // { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Kareem Drammeh",
  photo: kareemPic,
  title: "Software Developer",
  tagline: "I build clean, functional things for the web.",
  location: "Sweden",
  email: "drammeh.kareem@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/KareemKDX" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kareem-drammeh/" },
  ],
};

export const home = {
  greeting: "Hi, I'm",
  highlightName: "Kareem",
  tagline: "I like turning ideas into simple and useful software.",
  intro:
    "I build web apps with React, Express, SQL and many other tools. Currently looking for an internship (LIA)",
  paragraphs: [
    "I have always had a strong interest in everything related to technology. With a long experience in the consumer electronics retail industry, I bring extensive knowledge of sales, leadership, and teamwork.",
    "I am driven by questions such as: How does it work? Why does it work? How can we make it better?",
    "These questions motivate me to continuously develop my skills and create innovative solutions for the future.",
  ],
};

export const aboutMe = {
  greeting: "Hi, I'm",
  highlightName: "Kareem",
  tagline: "I like turning ideas into simple and useful software.",
  intro:
    "I build web apps with React, Express and databases, and I'm currently looking for an internship (LIA)",
  paragraphs: [
    "I have always had a strong interest in everything related to technology. With a long experience in the consumer electronics retail industry, I bring extensive knowledge of sales, teamwork and understanding the customer. Skills i bring further to the IT industry.",
    "I am driven by questions such as: How does it work? Why does it work? How can we make it better?",
    "These questions  in everyday things motivate me to continuously develop my skills and create innovative solutions for the future.",
  ],
};

export const interests = [
  {
    icon: "curious",
    title: "Curious",
    text: "I like understanding how things work, and I learn best by building and breaking things.",
  },
  {
    icon: "running",
    title: "Running",
    text: "Running clears my head and keeps me consistent, both in training and at work.",
  },
  {
    icon: "music",
    title: "Music production",
    text: "Making electronic music is a big hobby of mine. It puts me in a zen mode where I get recharged for the next day.",
  },
  {
    icon: "coffee",
    title: "Coffee",
    text: "Best ideas and most bugs get fixed with a warm cup of coffee in hand no?",
  },
];
export const skills = [
  { category: "Languages", items: ["JavaScript", "HTML", "CSS", "Python"] },
  {
    category: "Frameworks & Tools",
    items: ["React", "Vite", "Git", "Node.js"],
  },
  { category: "Other", items: ["UI Design", "Problem Solving", "Teamwork"] },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Placeholder Company",
    period: "2024 — Present",
    points: [
      "Built and maintained features for a web application.",
      "Collaborated with a small team using Git and code review.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Another Company",
    period: "2022 — 2024",
    points: [
      "Learned the fundamentals of building for the web.",
      "Worked on small internal tools and websites.",
    ],
  },
];

export const projects = [
  {
    title: "MusicPlate",
    description:
      "A simplified Spotify-inspired music streaming app built with React, TypeScript, Express and PostgreSQL. Browse songs, log in with JWT, manage playlists and switch subscription plans.",
    image: "/images/musicplateimg2.png",
    tags: ["React TS", "Node.js", "Express", "Render"],
    link: "https://musicplate-frontend.onrender.com/",
  },
  {
    title: "Spexah Instruments",
    description:
      "A full-stack e-commerce web application. Allows customers to browse products, manage their shopping cart and place orders, while administrators can manage products and orders through an admin dashboard.",
    image: "/images/spexahinstruments.png",
    tags: ["React TS", "JavaScript", "React", "Vercel"],
    link: "https://eshop-frontend-mauve.vercel.app/",
  },
  {
    title: "Lex Läx",
    description:
      "An interactive learning application designed for children to help them practice and master their schoolwork. The app allows children to input their own assignments.",
    tags: ["React", "Node.js", "Express", "Supabase"],
    image: "/images/lexlaxbild.png",
    link: "https://github.com/Augustlyden/Lex-Lax",
  },
  {
    title: "Community-forum",
    description:
      "A community forum built in PHP and MariaDB where users create groups, start discussions and manage members through roles and invite links.",
    tags: ["PHP", "JavaScript", "MariaDB"],
    image: "/images/commuty-forum-img.png",
    link: "https://github.com/KareemKDX/Community-Forum",
  },
  {
    title: "Foodie-Map",
    description:
      "A responsive restaurant discovery app that helps users find restaurants based on dietary needs. Features include search and filtering, saved favorites, map-based location viewing, and user-submitted restaurant tips.",
    tags: ["React", "Node.js", "Express", "Supabase", "Vercel"],
    image: "/images/foodiemap-img.png",
    link: "https://github.com/shemaakamal00/Foodie-map",
  },
];
