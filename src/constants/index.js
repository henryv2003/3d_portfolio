import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    jobit,
    tripguide,
    threejs,
    thai,
  } from "../assets";
  
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: " ",  //"Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: " ",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore est recusandae minus",
        "illo voluptatem dolores rerum laborum, distinctio in sunt nulla nobis?",
        "Quo nostrum hic sit reprehenderit! Voluptatem, beatae?",
        /*"Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",*/
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: " ",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore est recusandae minus",
        "illo voluptatem dolores rerum laborum, distinctio in sunt nulla nobis?",
        "Quo nostrum hic sit reprehenderit! Voluptatem, beatae?",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: " ",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore est recusandae minus",
        "illo voluptatem dolores rerum laborum, distinctio in sunt nulla nobis?",
        "Quo nostrum hic sit reprehenderit! Voluptatem, beatae?",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: " ",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore est recusandae minus",
        "illo voluptatem dolores rerum laborum, distinctio in sunt nulla nobis?",
        "Quo nostrum hic sit reprehenderit! Voluptatem, beatae?",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore est recusandae minus",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore est recusandae minus",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore est recusandae minus",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Thai Koket",
      description:
        "Thai Food Restaurant in the Swedish Lapland",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: thai,
      source_code_link: "https://github.com/henryv2003/thaikoketkalix.github.io",
      live_link: "https://thaikoketkalix.se/",
    },
    {
      name: "Job IT",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore est recusandae minus,illo voluptatem",
       //"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        //"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore est recusandae minus,illo voluptatem",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };