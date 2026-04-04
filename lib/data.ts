import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbLocationFilled } from "react-icons/tb";
import { BsCalendar3EventFill } from "react-icons/bs";
import { GrFlagFill } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp, FaDiscord } from "react-icons/fa6";
import img1 from "@/public/auto-x.png";
import fullstack2 from "@/public/full-stack-media-app.png";
import img2 from "@/public/Go-trip.png";
import img3 from "@/public/chat.png";
import img4 from "@/public/phone.png";
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
    title: "Web Development Course",
    location: "Programming Hero",
    description:
      "Through this course, I've cultivated a robust foundation in web development, mastering HTML, CSS, and JavaScript. I specialize in building dynamic, responsive web applications with React.js and server-side development using Express.js, and MongoDB for databases.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Development Course Level 2",
    location: "Programming Hero",
    description:
      "Completed coursework in full-stack development, learning to build fast React apps with Next.js and manage state with Redux Toolkit. Used Mongoose to work with MongoDB and Prisma for database management. Gained skills in designing and querying databases with PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "BSS (Hons)",
    location: "Govt. Debendro College",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - present",
  },
  {
    title: "Youtube - Online Course",
    location: "Online",
    description: "",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const fullStackProjectData = [
  {
    id: 1,
    title: "Auto-X (Car-Rental)",
    imgUrl: img1,
    tags: [
      "Typescript",
      "Next JS",
      "Redux",
      "Shadcn",
      "Express JS",
      "Prisma",
      "Postgres",
      "Es-lint",
      "Prettier",
      "Husky",
    ],
    client: "https://github.com/sabbirchowdhury12/nextjs-auto-X-frontend",
    server: "https://github.com/sabbirchowdhury12/auto-X-backend",
    live: "https://autox-frontend.vercel.app",
    name: "Auto-X ",
    dashboard: {
      name: "Auto-X Admin Account",
      link: "https://autox-frontend.vercel.app/login?role=admin",
    },
  },
  {
    id: 6,
    title: "Media-app",
    imgUrl: fullstack2,
    tags: [
      "Express",
      "Mongoose",
      "MongoDB",
      "React",
      "Redux",
      "Material UI",
      "React Dropzone",
      "Formik",
      "Yup",
    ],
    client:
      "https://github.com/sabbirchowdhury12/mern-stack-social-media-client",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-social-media-server",
    live: "https://mediabook-social-app.vercel.app/",
    name: "Auto-X ",
  },
  {
    id: 2,
    title: "GoTrip (Service Provider Website)",
    imgUrl: img2,
    tags: [
      "Typescript",
      "Express JS",
      "Prisma",
      "Postgres",
      "Next JS",
      "Redux",
      "Material Tailwind",
      "JWT",
    ],
    client:
      "https://github.com/sabbirchowdhury12/full-stack-tourist-service-frontend",
    server:
      "https://github.com/sabbirchowdhury12/full-stack-tourist-service-backend",
    live: "https://full-stack-tourist-service-frontend.vercel.app",
    name: "GoTrip",
  },
  {
    id: 3,
    title: "Chat App",
    imgUrl: img3,
    tags: [
      "Express JS",
      "Mongoose",
      "MongoDB",
      "React JS",
      "Styled-components",
      "Socket.io",
      "Nodemailer",
    ],
    client:
      "https://github.com/sabbirchowdhury12/mern-stack-chat-application-client-side",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-chat-application-server-side",
    live: "https://mern-stack-chat-app.netlify.app",
    name: "Chat Application",
  },
  {
    id: 4,
    title: "Resale Phone",
    imgUrl: img4,
    tags: [
      "Node JS/Express JS",
      "MongoDB CRUD Operation",
      "JWT",
      "Firebase Authentication",
      "React JS",
      "Stripe payment method",
      "Tailwind CSS",
    ],
    client:
      "https://github.com/sabbirchowdhury12/sabbirchowdhury12-mern-stack-repair-resale-phone-client",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-Repair-Resale-Phone-server",
    live: "https://resale-repair-phone.web.app/",
    name: "Resale and Buy Phone",
  },
  {
    id: 5,
    title: "Tour Website",
    imgUrl: img5,
    tags: [
      "Node JS/Express JS",
      "MongoDB",
      "JWT",
      "Firebase Authentication",
      "React JS",
      "Daisy UI",
    ],
    client:
      "https://github.com/sabbirchowdhury12/mern-stack-tourist-service-website-client",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-tourist-service-website-server",
    live: "https://world-tourist-website.web.app/",
    name: "Tour Website",
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
  "React JS",
  "Next.js",
  "BOOTSTRAP",
  "MUI",
  "STYLED-COMPONENTS",
  "SHADCN",
  "Tailwind",
  "Redux",
  "Git",
] as const;

export const backendSkillsData = [
  "TypeScript",
  "Node.js",
  "NEST JS",
  "Prisma",
  "MongoDB",
  "Mongoose",
  "FIREBASE",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "NODEMAILER",
  "JWT",
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
    describe: "+8801989969238",
  },
  {
    icon: React.createElement(FaDiscord),
    title: "Discord",
    describe: "sabbirchowdhury",
  },
] as const;
