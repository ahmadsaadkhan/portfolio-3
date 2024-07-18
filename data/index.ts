export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Book Store (Next.js, TypeScript, Sanity.)",
    des: "A modern e-book store built with Next.js, TypeScript, and Sanity for seamless and dynamic content management.",
    img: "/portfolio/e-book-store.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "sanity.svg"],
    link: "https://e-book-store-saad.vercel.app/",
    github: "https://github.com/ahmadsaadkhan/e-book-store"
  },
  {
    id: 2,
    title: "Portfolio for a Animator (Next.js)",
    des: "A sleek and responsive portfolio for an animator, crafted with Next.js for optimal performance and interactivity.",
    img: "/portfolio/portfolio-shahan.png",
    iconLists: ["/next.svg", "/tail.svg"],
    link: "https://portfolio-shahan.vercel.app/",
    github: ""
  },
  {
    id: 3,
    title: "Threads (Next.js, TypeScript",
    des: "A dynamic social media platform built with Next.js 13 and TypeScript, leveraging the MERN stack for robust, full-stack development.",
    img: "portfolio/threads.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://threads-clone-saad.vercel.app/",
    github: "https://github.com/ahmadsaadkhan/threads-clone"
  },
  {
    id: 4,
    title: "Web 3.0 Crypto Etherum Transfer (Solidity, Smart Contract, React)",
    des: "A Web 3.0 application enabling Ethereum transfers via Solidity smart contracts, with a React frontend for a seamless user experience.",
    img: "/portfolio/crypto.png",
    iconLists: ["/re.svg", "solidity.svg", "nodejs.svg"],
    link: "https://crypto-app-saad.netlify.app/",
    github: "https://github.com/ahmadsaadkhan/Crypto-Ethereum-App"
  },
  {
    id: 5,
    title: "Memories Project (React, Redux, MERN Stack)",
    des: "A memories-sharing platform built with React and Redux, leveraging the MERN stack for a robust and scalable full-stack solution.",
    img: "/portfolio/memories-project.jpg",
    iconLists: ["/re.svg", "redux.svg", "nodejs.svg"],
    link: "https://memories-app-saad.netlify.app/posts",
    github: "https://github.com/ahmadsaadkhan/project_mern_memories"
  },
  {
    id: 6,
    title: "Food App (React JS)",
    des: "A user-friendly food ordering and delivery app built with React JS for seamless and interactive user experience.",
    img: "/portfolio/food-app.jpg",
    iconLists: ["/re.svg"],
    link: "https://food-app-saad.netlify.app/",
    github: "https://github.com/ahmadsaadkhan/react-food-app"
  },
  {
    id: 7,
    title: "Book Store (React JS, Redux)",
    des: "An interactive book store application built with React JS and Redux for efficient state management and seamless user experience.",
    img: "/portfolio/book-store.jpg",
    iconLists: ["/re.svg", "redux.svg"],
    url: "https://book-store-saad.netlify.app/",
    github: "https://github.com/ahmadsaadkhan/react-book-store"
  },
  {
    id: 8,
    title: "Airbnb Clone (Next JS, Tailwind CSS)",
    des: "A sleek and responsive Airbnb clone built with React JS, Next.js, and Tailwind CSS for modern design and seamless user experience.",
    img: "/portfolio/air-bnb.jpg",
    iconLists: ["/next.svg", "/tail.svg"],
    url: "https://airbnb-clone-teal-eta.vercel.app/",
    github: "https://github.com/ahmadsaadkhan/Airbnb-demo"
  },
  {
    id: 9,
    title: "Client Project App (React, GraphQL, Apollo)",
    des: "A client project management app built with React, GraphQL, and Apollo for efficient data fetching and real-time updates.",
    img: "/portfolio/project-app.png",
    iconLists: ["/re.svg", "/tail.svg", "graphql.svg"],
    url: "https://project-app-saad.netlify.app/",
    github: "https://github.com/ahmadsaadkhan/react-graphql"
  },
  {
    id: 10,
    title: "Shopping Cart App (React, TypeScript, useContext)",
    des: "A robust shopping cart app built with React, TypeScript, and useContext for efficient state management and type safety.",
    img: "/portfolio/cart-app.png",
    iconLists: ["/re.svg", "/ts.svg"],
    url: "https://cart-app-saad.netlify.app/",
    github: "https://github.com/ahmadsaadkhan/React-TypeScript-Shopping-Cart"
  }

];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    job: "FULL STACK ENGINEER",
    title: "BARBARIANS",
    desc: "I work remotely as a Full Stack Engineer specializing in React, Next.js, MERN Stack, and Node.js/Laravel for the backend, with Barbarians Inc. as my employer. My location is in Pakistan.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    location: "REMOTE, PAKISTAN",
    years: "JULY 2022 – CURRENT",
  },
  {
    id: 2,
    job: "FULL STACK ENGINEER",
    title: "TECH TRACK AND ROYAL COMMISSION",
    desc: "Working as a full stack engineer in Moodle LMS, React, Node, MERN Stack, and Next JS on the frontend in Jubail, Saudi Arabia.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
    location: "JUBAIL, SAUDIA ARABIA",
    years: "DECEMBER 2019 – MAY 2022",
  },
  {
    id: 3,
    job: "CODEIGNITER ANGULAR JS DEVELOPER",
    title: "OSMIS Education",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
    location: "ISLAMABAD, PAKISTAN",
    years: "MARCH 2019 – NOVEMBER 2019",
  },
  {
    id: 4,
    job: "FULL STACK WEB DEVELOPER",
    className: "md:col-span-2",
    title: "DYAD",
    desc: "Selected for a fellowship program by provincial government to travel to China for 6 months to enhance my skills and abilities in an international multi culture environment, worked in Shanghai as Full Stack Developer at Dyad.(References available).",
    thumbnail: "/exp4.svg",
    location: "SHANGHAI CHINA",
    years: "MAY 2018– OCTOBER 2018",
  },
  {
    id: 5,
    job: "CODEIGNITER ANGULAR JS DEVELOPER",
    className: "md:col-span-2",
    title: "OSMIS EDUCATION",
    desc: "An Islamabad based startup working on education management web based application develops backend in Codeigniter and frontend in Angular JS.",
    thumbnail: "/exp1.svg",
    location: "ISLAMABAD, PAKISTAN",
    years: "MARCH 2017 – FEBURARY 2018",
  },
  {
    id: 6,
    job: "CODEIGNITER ANGULAR JS DEVELOPER",
    className: "md:col-span-2",
    company: "DIGITECH UK",
    title: "PHP WEB DEVELOPER",
    desc: "Worked as a remote developer for a UK based airport parking company manage their front end backend development and PayPal and World Pay payment integration.",
    thumbnail: "/exp4.svg",
    location: "REMOTE",
    years: "DECEMBER 2015 – MARCH 2017",

  },
  {
    id: 7,
    title: "HOME ARENA",
    job: "PHP WEB DEVELOPER",
    location: "ISLAMABAD, PAKISTAN",
    years: "FEBURARY 2014 – NOVEMBER 2015",
    desc: "Started as an intern here and moved to mid - level developer position manages Ecommerce development in Magneto, website and blog development.",
    thumbnail: "/exp1.svg",
    className: "md:col-span-2",

  },
];

export const socialMedia = [
  {
    id: 1,
    title: "Github",
    img: "/git.svg",
    link: "https://github.com/ahmadsaadkhan",
  },
  {
    id: 2,
    title: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ahmadsaadkhan",
  },
];