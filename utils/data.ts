import { FiGithub } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import Quran from "../public/quran.png";
import BwaStore from "../public/bwa-store.png";
import CmsBlog from "../public/cms_blog.png";
import elearning from "../public/elearning.png";
import { Experience, List, Social } from "./model";

export const list: List[] = [
  {
    link: "about",
  },
  {
    link: "experience",
  },
  {
    link: "work",
  },
  {
    link: "contact",
  },
];
export const experience: Experience[] = [
  {
    id: 0,
    title: "Kampus Merdeka",
    date: "2022",
    story:
      "●	Developing Website on 1 new product swithin 6 months with Operations and Tech Team. Creating product research, competitive analysis, positioning and differentiation in current market to expand visibility. Researched competitive solutions and maintained competitive market comparisons and evaluations",
  },
  {
    id: 1,
    title: "Freelance",
    date: "December 2021",
    story:
      "I have experience working as a freelance web developer, where I helped clients create websites to display online food menus. This experience has taught me the importance of attention to detail and the ability to work closely with clients to ensure their vision is realized.",
  },
];
export const social: Social[] = [
  {
    icon: FiGithub,
    link: "https://github.com/mnfadill",
    title: "Github",
  },
  {
    icon: FiLinkedin,
    link: "https://www.linkedin.com/in/fatah-robbysalam/",
    title: "Linkedin",
  },
  {
    icon: AiOutlineMail,
    email: "mnfadillah19@gmail.com",
    link: "mailto:mnfadillah19@gmail.com",
    title: "Email",
  },
];

export const project = [
  {
    title: "CMS Blog",
    desc: "Build CMS Blog, this CMS Blog is used to artikel, and manage artikel, and manage users. This dashboard is built using PHP, and Bootstrap-CSS.",
    tech: ["PHP", "Bootstrap-CSS", "Mysql"],
    link: "http://fadil-cms.infinityfreeapp.com/index.php",
    image: CmsBlog,
    live: "http://fadil-cms.infinityfreeapp.com/index.php",
  },
  {
    title: "Toko Online",
    desc: "This project is from BWA class, This project is the create a marketplace application (users as sellers and buyers). This dashboard is built using Laravel, and Bootstrap.",
    tech: ["PHP", "Laravel", "Bootstrap", "Mysql"],
    link: "https://github.com/mnfadill/bwa-store-final",
    image: BwaStore,
    live: "",
  },
  {
    title: "E-leaning",
    desc: "Build E-learning, this E-learning is used for online learning at SMP Negeri 2 Subang, and managing learning materials, as well as managing users. This dashboard was created using Codeigniter, and Bootstrap.",
    tech: ["Codeigniter", "Bootstrap", "Mysql"],
    link: "https://github.com/mnfadill/e-learning",
    image: elearning,
    live: "",
  },
  // {
  //   title: "Alquran-Online",
  //   desc: "Al-Quran application online, this application can make it easier for users to be able to read the Quran anywhere and anytime.",
  //   tech: ["Vue", "Tailwind", "Netlify"],
  //   link: "https://github.com/Zeddnyx/timeTrackingDashboard",
  //   image: Quran,
  //   // live: "https://zedd-dashboard-time.netlify.app",
  // },
];

// export const otherProject = [
//   {
//     id: 0,
//     title: "Ztools",
//     desc: "Ztools is simplistic yet highly functional web app that I have created to provide a variety of useful tools.",
//     tech: ["React", "Tailwind", "Vercel"],
//     link: "https://github.com/Zeddnyx/Ztools",
//     live: "https://ztools.vercel.app",
//   },
//   {
//     id: 1,
//     title: "Dashboard App",
//     desc: "A dashboard app built with React and Tailwind CSS. This fully responsive app uses context to manage state, authentication. With a sleek and intuitive user interface.",
//     tech: ["React", "Tailwind", "Context", "Vercel"],
//     link: "https://github.com/Zeddnyx/Dashboard",
//     live: "https://dashboard-zeddnyx.vercel.app",
//   },
//   {
//     id: 2,
//     title: "News App",
//     desc: "News App is challanges from FrontendMentor, and this challanges is to make a grid system with responsive design, and get the data using API from NYTIMES",
//     tech: ["React", "Tailwind", "Netlify"],
//     link: "https://github.com/Zeddnyx/News",
//     live: "https://zedd-news.netlify.app/",
//   },
//   {
//     id: 3,
//     title: "Url Shortly",
//     desc: "A URL shortener built with React and API. With this app, you can quickly and easily shorten any URL to make it more manageable and shareable.",
//     tech: ["React", "Tailwind", "Netlify"],
//     link: "https://github.com/Zeddnyx/urlShortly",
//     live: "https://zedd-url-shortly.netlify.app/",
//   },
// ];
