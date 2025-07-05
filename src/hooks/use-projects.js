import majnaStore from "../assets/majna-ecommerce.png";
import eduPlay from "../assets/EduPlay.png";
import nxtCrud from "../assets/posts-crud-next.js-fulstack.png";
import amazonClone from "../assets/amazon-clone.png";
import notesCrud from "../assets/post-crud.png";
import nodeEcommerce from "../assets/backend-node-js.png";

function UseProjects() {
  const projects = [
    {
      title: "Majna Store E-commerce",
      description:
        "A multilingual e-commerce platform with role-based features for buyers and sellers, offering seamless product browsing, secure account management, and full order and inventory control.",
      technologies: [
        "React",
        "Axios",
        "Swiper",
        "Formik & Yup",
        "Framer-Motion",
        "Material-UI",
        "React-Redux & Redux Toolkit",
      ],
      image: majnaStore,
      github: "https://github.com/mahmoudAliaboElhassan/Majna-E-Commerce",
      demo: "https://majna-e-commerce.vercel.app/",
    },
    {
      title: "EduPlay Graduation-Project",
      description:
        "Platform that gamifies the learning experience. This educational platform allows students to solve questions, earn points, compete in rankings, while providing an engaging and interactive interface for both educational and entertainment content.",
      technologies: ["React", "TypeScript", "Material-UI", "Formik & Yup"],
      image: eduPlay,
      github: "https://github.com/mahmoudAliaboElhassan/Graduation-Project",
      demo: "https://graduation-project-sage.vercel.app/",
    },
    {
      title: "Next.js Posts CRUD",
      description:
        "a web-based platform where users can view, add, edit, and delete posts and comments. It also supports searching for posts, pagination, and managing user authentication using JWT tokens.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Postgress",
        "Prisma",
        "Zod",
        "JWT",
      ],
      image: nxtCrud,
      github: "https://github.com/mahmoudAliaboElhassan/posts-crud-fullstack",
      demo: "https://posts-crud-fullstack.vercel.app/",
    },
    {
      title: "Amazon Clone",
      description:
        "A fully responsive e-commerce website mimicking Amazon's core features, including product browsing, shopping cart, secure checkout, and user authentication, built with React and modern web technologies",
      technologies: [
        "React",
        "Tailwind css",
        "Formik & Yup",
        "Swiper",
        "React icons",
        "React hot toast",
      ],
      image: amazonClone,
      github: "https://github.com/mahmoudAliaboElhassan/Amazon-Clone",
      demo: "https://amazon-clone-chi-beryl.vercel.app/",
    },
    {
      title: "Notes CRUD",
      description:
        "allows users to manage Notes by creating, reading, updating, and deleting them. Users can navigate through pages of Notes, filter them by category, and perform actions like editing or deleting, Website is in both dark and light modes and supports internationalization",
      technologies: [
        "React",
        "Bootstrap & React-Bootstrap",
        "Formik & Yup",
        "Axios",
        "Framer-Motion",
        "Swiper",
        "React icons",
        "React hot toast",
      ],
      image: notesCrud,
      github: "https://github.com/mahmoudAliaboElhassan/Posts-Crud",
      demo: "https://amazon-clone-chi-beryl.vercel.app/",
    },
    {
      title: "Scalable Node.js Backend for Modern E-commerce Platforms",
      description:
        "A powerful Node.js eCommerce API supporting user registration and authentication, secure password management, full CRUD for products, order processing with status updates, AI-powered endpoints for future enhancements, pagination and filtering, and comprehensive error handling with detailed validation.",
      technologies: [
        "Node.js",
        "Express.js",
        "Cookie-parser",
        "MongoDB with Mongoose",
        "Express-validator",
        "Cors",
        "dotenv",
        "dotenv",
      ],
      image: nodeEcommerce,
      github:
        "https://github.com/mahmoudAliaboElhassan/Node.js-E-commerce-Project",
      demo: "https://node-js-e-commerce-project.vercel.app/",
    },
  ];

  return { projects };
}

export default UseProjects;
