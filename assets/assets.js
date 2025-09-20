import user_image from "./shreyash-side-profile.png";
import profile_img from "./shreyash-front.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon_light from "./edu-icon-light.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon_light from "./project-icon-light.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import github from "./github.png"
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./shreyash-light-logo.png";
import logo_dark from "./shreyash-dark-logo.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";


import frontend_light from "./frontend-light.png";
import frontend_dark from "./frontend-dark.png";
import backend_light from "./backend-light.png";
import backend_dark from "./backend-dark.png";
import ai_tools_light from "./ai-tools-light.png";
import ai_tools_dark from "./ai-tools-dark.png";
import database_light from "./database-light.png";
import database_dark from "./database-dark.png";
import devops_others_light from "./devops-others-light.png";
import devops_others_dark from "./devops-others-dark.png";
import cs_algo_light from "./cs-algo-light.png";
import cs_algo_dark from "./cs-algo-dark.png";

import web_dev from "./world-wide-web.png";
import android from "./android.png";
import fs_mvp from "./mvp.png";
import dev_ops from "./devops.png";

export const assets = {
  // Services
  web_dev,
  android,
  fs_mvp,
  dev_ops,

  // About me
  frontend_light,
  frontend_dark,
  backend_light,
  backend_dark,
  ai_tools_light,
  ai_tools_dark,
  database_light,
  database_dark,
  devops_others_light,
  devops_others_dark,
  cs_algo_dark,
  cs_algo_light,

  // Default
  user_image,
  profile_img,
  code_icon,
  code_icon_dark,
  edu_icon_light,
  edu_icon_dark,
  project_icon_light,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  github,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "NeoVerse.ai",
    description: "Full-stack + AI",
    bgImage: "/NeoVerse-ai.png",
    isLive: true,
    live_link: "https://neoverse-ai.vercel.app/",
    github: "https://github.com/Shreyash-patil/NeoVerseAI",
  },
  {
    title: "EchoChat",
    description: "MERN, Socket.io",
    bgImage: "/echoChat.jpg",
    isLive: false,
    live_link: "",
    github: "https://github.com/Shreyash-patil/EchoChat",
  },
  {
    title: "MediConnect-blogs",
    description: "React.js, Firebase",
    bgImage: "/MediConnect-blogs.jpg",
    isLive: false,
    live_link: "",
    github: "https://github.com/Shreyash-patil/mediconnect-blogs",
  },
  {
    title: "Amazon-clone",
    description: "React.js, Firebase",
    bgImage: "/amazon-clone.jpg",
    isLive: false,
    live_link: "",
    github: "https://github.com/Shreyash-patil/amazon-clone",
  },
  {
    title: "Dotes",
    description: "React Native(Expo)",
    bgImage: "/Dotes.png",
    isLive: false,
    live_link: "",
    github: "https://github.com/Shreyash-patil/Dotes",
  },
];

export const serviceData = [
  {
    icon: assets.web_dev,
    title: "Web Development",
    description:
      "Build fast, SEO-friendly interfaces and SPAs with Next.js & React. Deliver responsive, accessible UIs and ship demos quickly.",
    link: "",
  },
  {
    icon: assets.backend_dark,
    title: "Backend & APIs",
    description:
      "Design and implement REST APIs and server-side logic with Node/Express.   Secure data flows and integrate databases like MongoDB.",
    link: "",
  },
  {
    icon: assets.frontend_dark,
    title: "UI / Responsive Design",
    description:
      "Convert Figma into pixel-accurate, responsive pages using Tailwind. Focus on accessibility, performance and smooth interactions.",
    link: "",
  },
  {
    icon: assets.fs_mvp,
    title: "Full-stack MVPs",
    description:
      "Turn ideas into working MVPs — frontend, backend and DB. Ship features fast, iterate on user feedback, deploy demos.",
    link: "",
  },
  {
    icon: assets.android,
    title: "Mobile app (React Native / Expo)",
    description:
      "Build cross-platform mobile apps with Expo & local-first storage. Deliver polished UX, offline support and easy updates.",
    link: "",
  },
  {
    icon: assets.dev_ops,
    title: "Deployment & Maintenance",
    description:
      "Deploy to Vercel, setup CI/CD and monitor app health. Provide fixes, updates, and incremental improvements post-launch.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.frontend_light,
    iconDark: assets.frontend_dark,
    title: "Frontend & UI",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },

  {
    icon: assets.backend_light,
    iconDark: assets.backend_dark,
    title: "Backend & Services",
    description: "Node.js/Express, Python, Django REST API, Socket.io",
  },
  {
    icon: assets.database_light,
    iconDark: assets.database_dark,
    title: "Databases",
    description: "MySQL, PostgreSQL, Oracle, MongoDB, Mongoose, Firebase",
  },
  {
    icon: assets.cs_algo_light,
    iconDark: assets.cs_algo_dark,
    title: "CS Core",
    description: "Data structures, Algorithm, OOPs",
  },
  {
    icon: assets.ai_tools_light,
    iconDark: assets.ai_tools_dark,
    title: "AI Tools",
    description:
      "ChatGPT (OpenAI), Claude, Grok, v0 (Vercel), Bolt.ai, DeepSeek",
  },
  {
    icon: assets.devops_others_light,
    iconDark: assets.devops_others_dark,
    title: "DevOps & Others",
    description: "Git, Docker, Agile, teamwork",
  },

  {
    icon: assets.edu_icon_light,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description:
      "Bachelors of Computer Applications, Masters of Computer Applications",
  },

  {
    icon: assets.project_icon_light,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
