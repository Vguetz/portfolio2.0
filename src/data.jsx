import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Bienesraices from "./assets/bienesraices.png";
import IntelliExtract from "./assets/IntelliExtract.png";
import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Cebador from "./assets/cebador.png";
import HadalaShop from "./assets/hadala.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Lucas",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Gómez",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Uruguayan,<br />Spanish",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Montevideo, UY",
  },

  {
    id: 7,
    title: "Email : ",
    description: "gomezlucas712@gmail.com",
  },

  {
    id: 8,
    title: "Discord : ",
    description: "voguetz",
  },

  {
    id: 9,
    title: "Languages : ",
    description: "Spanish, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "6+",
    title: "Completed <br /> Projects",
  },
];

export const resume = [
  {
    id: 0,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023 - PRESENT",
    title: "Bachelor of Computer Science <span> ORT </span>",
    desc: "Student of Computer Science, I am currently studying the 2nd year of the career.",
  },
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - PRESENT",
    title: "FreeLancer <span> Dev </span>",
    desc: "Im currently doing job as FreeLancer Dev, trying to improve as developer and make the best.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - 2022",
    title: "Administrative Advisor <span> Vic2 </span>",
    desc: "Customer Support, advice to clients with government procedures",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 - 2022",
    title: "Delivery Driver <span> ZonaLogistica </span>",
    desc: "Distribution of mobile phones, medicines and miscellaneous items. I had employees in charge.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021-Present",
    title: "Full-Stack Dev <span> Udemy and self-taught</span>",
    desc: "I started studying programming as a self-taught person, then I decided to buy courses on Udemy and search every possible site to improve day by day by doing projects.",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "DBA Administrator <span> Focan Spain </span>",
    desc: "Data Base Analyst (SQL,NoSQL,FireBase, Apache, MER).",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019",
    title: "Bachelor Degree <span> Liceo Empalme Olmos </span>",
    desc: "High school economics student",
  },
];

export const skills = [
  {
    id: 2,
    title: "TypeScript / JavaScript",
    percentage: "100",
  },

  {
    id: 3,
    title: "ExpressJS / NodeJS",
    percentage: "100",
  },

  {
    id: 4,
    title: "Laravel / PHP",
    percentage: "100",
  },

  {
    id: 5,
    title: "React / NextJS",
    percentage: "100",
  },

  {
    id: 6,
    title: ".NET ",
    percentage: "100",
  },

  {
    id: 7,
    title: "Flutter",
    percentage: "90",
  },
  {
    id: 8,
    title: "Python",
    percentage: "90",
  },
];

export const portfolio = [
  {
    id: 1,
    img: HadalaShop,
    title: "Hadala Shop",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "WebApp",
      },
      {
        icon: <FiUser />,
        title: "Project : ",
        desc: "Client Website",
      },
      {
        icon: <FaCode />,
        title: "Languages & FrameWorks : ",
        desc: "NextJS, TypeScript, TailwindCSS, MongoDB, PayloadCMS, .NET Core, C#",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://hadalashop.com/",
      },
    ],
  },
  {
    id: 3,
    img: Cebador,
    title: "Cebador",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Project Social Media",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "NextJS, TypeScript, Prisma, OAuth, TailwindCSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://cebador-v-1-0.vercel.app/",
      },
    ],
  },
  {
    id: 4,
    img: IntelliExtract,
    title: "intelliExtract",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "WebApp",
      },
      {
        icon: <FiUser />,
        title: "Project : ",
        desc: "Personal Project",
      },
      {
        icon: <FaCode />,
        title: "Languages & FrameWorks : ",
        desc: "NextJS, TypeScript, TailwindCSS, Prisma",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://intelli-extract-one.vercel.app/",
      },
    ],
  },

  {
    id: 5,
    img: Work2,
    title: "Personal Portfolio",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Astro, TailwindCSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://lucasgomez.netlify.app/",
      },
    ],
  },

  {
    id: 6,
    img: Work3,
    title: "KND-Weather",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "WebApp",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "ReactJS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://kndweather.netlify.app/",
      },
    ],
  },
  {
    id: 7,
    img: Bienesraices,
    title: "Bienes Raices (Real State)",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "WebApp",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript, Sass",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "(In Progress)",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
