import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbLocationFilled } from "react-icons/tb";
import { BsCalendar3EventFill } from "react-icons/bs";
import { GrFlagFill } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp, FaDiscord } from "react-icons/fa6";
import img1 from "@/public/tigsaw.png";
import fullstack2 from "@/public/full-stack-media-app.png";
import img2 from "@/public/removeq.png";
import img3 from "@/public/posture.png";
import img4 from "@/public/dollerpe.png";
import img5 from "@/public/tour.png";
import css1 from "@/public/css1.png";
import css2 from "@/public/css2.png";
import javascript1 from "@/public/javascript-to-do-list.png";
import javascript2 from "@/public/javascript-typing-speed.png";
import javascript3 from "@/public/javascript-quiz.png";
import javascript4 from "@/public/javascript-e-commerce.png";
import javascript5 from "@/public/javascript-memory-game.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },

  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Blog",
    hash: "/docs",
  },
] as const;

export const aboutCards = [
  {
    icon: React.createElement(GrFlagFill),
    title: "Nationality",
    describe: "Bangladeshi",
  },
  {
    icon: React.createElement(TbLocationFilled),
    title: "Address",
    describe: "Manikganj, Dhaka",
  },
  {
    icon: React.createElement(BsCalendar3EventFill),
    title: "Support",
    describe: "24/7 -- online",
  },
] as const;

export const experiencesData = [
  {
    title: "Tech Lead",
    location: "EYWINK — Remote",
    description:
      "Leading a 3-member development team, managing sprints and reviewing 20+ pull requests weekly. Built an AI-powered posture analysis platform using MediaPipe, automated Binance P2P operations saving 6–7 hours/day, and mentored 3 junior developers reducing feature delivery time by ~25%.",
    icon: React.createElement(CgWorkAlt),
    date: "2026 - Present",
  },
  {
    title: "Full-Stack Web Developer",
    location: "RemoveQ Technology Pvt. Ltd. — Remote (India)",
    description:
      "Built 30+ reusable UI components, developed 15+ RESTful APIs, and integrated PayPal & Razorpay payment gateways. Pioneered a no-code visual editor that reduced manual design efforts by 80%. Integrated Supabase Auth and built a scalable AWS S3 file storage system.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Web Development Course (Level 1 & 2)",
    location: "Programming Hero",
    description:
      "Built a strong foundation in full-stack development — mastering React, Next.js, Redux, Node.js, Express, MongoDB, PostgreSQL, Prisma, and TypeScript through structured coursework and projects.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
  {
    title: "BSS (Hons)",
    location: "Govt. Debendro College",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - Present",
  },
] as const;
export const fullStackProjectData = [
  {
    id: 1,
    title: "Tigsaw (SaaS Platform)",
    imgUrl: img1,
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "ShadCN",
      "Tailwind CSS",
      "Framer Motion",
      "PayPal",
      "Razorpay",
      "REST API",
    ],
    client: "",
    server: "",
    live: "https://tigsaw.com",
    name: "Tigsaw",
  },
  {
    id: 2,
    title: "RemoveQ (Analytics Platform)",
    imgUrl: img2,
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "AWS S3",
      "Tailwind CSS",
      "ShadCN",
      "REST API",
      "JWT",
    ],
    client: "",
    server: "",
    live: "https://removeq.com",
    name: "RemoveQ",
  },
  {
    id: 3,
    title: "AI Posture Analysis Platform",
    imgUrl: img3,
    tags: [
      "React.js",
      "TypeScript",
      "MediaPipe",
      "Node.js",
      "REST API",
      "Tailwind CSS",
    ],
    client: "",
    server: "",
    live: "",
    name: "AI Posture Analysis",
  },
  {
    id: 4,
    title: "Binance P2P Automation",
    imgUrl: img4,
    tags: ["Node.js", "TypeScript", "Express.js", "REST API", "Automation"],
    client: "",
    server: "",
    live: "",
    name: "Binance P2P Automation",
  },
] as const;

export const cssProjectData = [
  {
    id: 1,
    title: "CSS Animation Project",
    imgUrl: css1,
    tags: ["HTML", "CSS", "javascript"],
    client: "https://github.com/sabbirchowdhury12/css-animation",
    server: "https://github.com/sabbirchowdhury12/css-animation",
    live: "https://css-javascript-project.netlify.app/",
    name: "Auto-X ",
  },
  {
    id: 2,
    title: "Rice E-commerce",
    imgUrl: css2,
    tags: ["HTML", "CSS", "javascript"],
    client: "https://github.com/sabbirchowdhury12/my-frist-website",
    server: "https://github.com/sabbirchowdhury12/my-frist-website",
    live: "https://sabbirchowdhury12.github.io/my-frist-website/",
    name: "GoTrip",
  },
] as const;

export const javascriptProjectData = [
  {
    id: 1,
    title: "TO-DO List",
    imgUrl: javascript1,
    tags: ["HTML", "CSS", "javascript"],
    client: "https://github.com/sabbirchowdhury12/javascript-to-do-list",
    server: "https://github.com/sabbirchowdhury12/javascript-to-do-list",
    live: "https://javascript-to-do-task-list.netlify.app/",
    name: "Auto-X ",
  },
  {
    id: 2,
    title: "Typing-speed",
    imgUrl: javascript2,
    tags: ["HTML", "CSS", "javascript"],
    client: "https://javascript-typing-speed-tests.netlify.app/",
    server: "https://javascript-typing-speed-tests.netlify.app/",
    live: "https://github.com/sabbirchowdhury12/javascript-typing-speed-test",
    name: "GoTrip",
  },
  {
    id: 3,
    title: "Quizz",
    imgUrl: javascript3,
    tags: ["HTML", "CSS", "javascript"],
    client: "https://github.com/sabbirchowdhury12/javascript-quize-website.git",
    server: "https://github.com/sabbirchowdhury12/javascript-quize-website.git",
    live: "https://javascript-quiz-website.netlify.app/",
    name: "GoTrip",
  },
  {
    id: 4,
    title: "Shopping Cart (local-storage)",
    imgUrl: javascript4,
    tags: ["HTML", "CSS", "javascript"],
    client:
      "https://github.com/sabbirchowdhury12/javascript-e-commerce-website",
    server:
      "https://github.com/sabbirchowdhury12/javascript-e-commerce-website",
    live: "https://javascript-e-commerce.netlify.app/",
    name: "GoTrip",
  },
  {
    id: 5,
    title: "Memory game",
    imgUrl: javascript5,
    tags: ["HTML", "CSS", "javascript"],
    client: "https://github.com/sabbirchowdhury12/javascript-memory-game",
    server: "https://github.com/sabbirchowdhury12/javascript-memory-game",
    live: "https://javascript-memor-game.netlify.app/",
    name: "GoTrip",
  },
] as const;

export const generateProjectData = (name: string) => {
  if (name === "full-stack") return fullStackProjectData;
  if (name === "css") return cssProjectData;
  if (name === "javascript") return javascriptProjectData;
};

export const frontendSkillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "ShadCN",
  "Styled-components",
  "Framer Motion",
  "MUI",
] as const;
export const backendSkillsData = [
  "Node.js",
  "Express.js",
  "Nest.js",
  "Prisma",
  "REST API",
  "JWT",
  "Mongoose",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Supabase",
  "GraphQL",
] as const;
export const contactCards = [
  {
    icon: React.createElement(MdEmail),
    title: "Email",
    describe: "sabbirchowdhury40854@gmail.com",
    link: "mailto:sabbirchowdhury40854@gmail.com",
  },
  {
    icon: React.createElement(FaSquareWhatsapp),
    title: "Whatsapp",
    describe: "+8801617837797",
  },
  {
    icon: React.createElement(FaDiscord),
    title: "Discord",
    describe: "sabbirchowdhury",
  },
] as const;
