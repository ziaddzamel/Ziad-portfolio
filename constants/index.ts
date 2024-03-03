import {
  javascript,
  typescript,
  html,
  chakra,
  next,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  Gpt3,
  snapgram,
  threejs,
  bookmark,
  Todo,
  Kasper,
  BrainWave,
  Hoobank,
  AgeCalc,
  Travel,
  Promptopia,
} from "../public";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "chakra ui",
    icon: chakra,
  },
  {
    name: "next.js",
    icon: next,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Snapgram",
    description:
      "Snapgram is a dynamic and engaging social media platform designed for seamless content sharing and connection",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "orange-text-gradient",
      },
      {
        name: "Chakra-Ui",
        color: "blue-text-gradient",
      },
    ],
    image: snapgram,
    source_code_link: "https://github.com/ziaddzamel/snapgram",
    Live_demo_link: "https://snapgrame.vercel.app/",
  },
  {
    name: "Brain Wave",
    description:
      " Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles ",
    tags: [
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: " TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: BrainWave,
    source_code_link: " https://github.com/ziaddzamel/Brainwave",
    Live_demo_link: "https://brrainwavee.netlify.app/",
  },
  {
    name: "HooBank",
    description:
      "HooBank - Modern UI/UX website using React.js & Tailwind CSS ",
    tags: [
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: " TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: Hoobank,
    source_code_link: "https://github.com/ziaddzamel/HooBank",
    Live_demo_link: "https://hoobannkk.netlify.app/",
  },
  {
    name: "GPT-3",
    description:
      "A Modern website where you can know more about GPT-3, about the future. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakra Ui",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: Gpt3,
    source_code_link: "https://github.com/ziaddzamel/GPT3-Page",
    Live_demo_link: "https://modernuiuxgpt3page.netlify.app/",
  },
  {
    name: "Share Prompt",
    description:
      "Develop a Next.js application that highlights the key features of Next.js along with a comprehensive CRUD .",
    tags: [
      {
        name: "Next,js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: Promptopia,
    source_code_link: "https://github.com/ziaddzamel/promptopia",
    Live_demo_link: "https://promptopiiaa.vercel.app/",
  },
  {
    name: "Travel",
    description:
      "Built with Next.js, TailwindCSS, and TypeScript, this landing page not only looks great but also serves as a hands-on project.",
    tags: [
      {
        name: "Next,js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: Travel,
    source_code_link: "https://github.com/ziaddzamel/Travel-Website",
    Live_demo_link: "https://campwebsite.vercel.app/",
  },
  {
    name: "TooDoo App",
    description:
      "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop ",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: " CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: Todo,
    source_code_link: "https://github.com/ziaddzamel/Todo-App-Main",
    Live_demo_link: "https://toddoap.netlify.app/",
  },

  {
    name: "Age Calculator",
    description:
      "The classic Age calculator app Taht View an age in years, months, and days after submitting a valid date through the form ",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: " CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: AgeCalc,
    source_code_link: "https://github.com/ziaddzamel/Age-Calculator-App-Main",
    Live_demo_link: "https://agecalcaapp.netlify.app/",
  },
  {
    name: "Bookmark",
    description:
      "This is a bookmark landing page with pure HTML and CSS, with a few JavaScript enhancements. ",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: " CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: bookmark,
    source_code_link:
      "https://github.com/ziaddzamel/bookmark-landing-page-master",
    Live_demo_link: "https://bookmarckk.netlify.app/",
  },
  {
    name: "Kasper",
    description:
      "This Kasper landing page is crafted with pure HTML and CSS, ensuring full responsiveness. ",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: " CSS",
        color: "blue-text-gradient",
      },
    ],
    image: Kasper,
    source_code_link: "https://github.com/ziaddzamel/Kasper",
    Live_demo_link: "https://kaspeerr.netlify.app/",
  },
];

export { technologies, projects };
