import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import 'devicon/devicon.min.css';
import snapweb from "/src/images/snapweb.png";
import Nitj from "/src/images/Nitj.png";
import Blog from "/src/images/Blog.png";
import Sort from "/src/images/Sort.png";
import Whatbytes from "/src/images/Whatbytes.png";
import trello from "/src/images/trello.png";

const projectData = [
  {
    id: 1,
    image: snapweb,
    alt: "SnapTheWeb",
    title: "SnapTheWeb",
    description: "SnapTheWeb is an easy-to-use webpage screenshot generator that allows users to capture full-page or single-page screenshots in formats like PNG, JPG, and PDF. It also includes a convenient copy function, letting users instantly copy the captured image for seamless use.",
    techStack: ["#Reactjs", "#JavaScript", "#TailwindCSS", "#Nodejs", "#Playwright"],
    sourceUrl: "https://github.com/Codinewbie/Webpage-screenshot-generator",
    previewUrl: "https://webpage-screenshot-generator.vercel.app/"
  },
  {
    id: 2,
    image: Blog,
    alt: "Blogging Website",
    title: "Blogging Website",
    description: "A place to read, write, and deepen your understanding. Start reading. On Medium, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world.",
    techStack: ["#TypeScript", "#Reactjs", "#PostgresSQL", "#TailwindCSS", "#JWT", "#Nodejs"],
    sourceUrl: "https://github.com/Codinewbie/Blogging-Website",
    previewUrl: "https://blogging-website-beige.vercel.app/signup"
  },
  {
    id: 3,
    image: trello,
    alt: "Trello-like-Taskboard",
    title: "Trello-Like-Taskboard",
    description: "The Trello-Like Task Board is a dynamic and interactive project management tool built using React.js, Tailwind CSS, and JavaScript. This application enables users to efficiently organize tasks through an intuitive drag-and-drop interface.",
    techStack: ["#ReactJS", "#JavaScript", "#TailwindCSS"],
    sourceUrl: "https://github.com/Codinewbie/trello-like-board",
    previewUrl: "https://trello-like-board-seven.vercel.app/"
    
  },
  {
    id: 4,
    image: Sort,
    alt: "Sorting-Visualizer",
    title: "Sorting-Visualizer",
    description: "The Sorting Visualizer project is an interactive web application designed to visually demonstrate various sorting algorithms in action. By animating the sorting process step by step, users can gain a deeper understanding of how different algorithms work and compare their performance in real-time.",
    techStack: ["#Reactjs", "#TypeScript", "#TailwindCSS"],
    sourceUrl: "https://github.com/Codinewbie/Sorting-Visualizer-using-Typescript",
    previewUrl: "https://codinewbie.github.io/sorting-visualizer/"
  },
  {
    id: 5,
    image: Whatbytes,
    alt: "Shoshin Tech",
    title: "Shoshin Tech - Assignment",
    description: "The Shoshin Tech Dashboard is a sleek and responsive web application designed to provide a seamless user experience. Built with React.js, Tailwind CSS, and JavaScript, this dashboard offers an intuitive interface for managing and navigating key functionalities efficiently.",
    techStack: ["#ReactJS", "#JavaScript", "#TailwindCSS"],
    sourceUrl: "https://github.com/Codinewbie/whatbytes",
    previewUrl: "https://whatbytes-ten.vercel.app/"
    
  },
  {
    id: 6,
    image: Whatbytes,
    alt: "WhatBytes Homepage",
    title: "WhatBytes Homepage",
    description: "The WhatBytes Homepage is a responsive web application built with Next.js, React.js, and Tailwind CSS. It features dynamic tab navigation, a collapsible sidebar, and a toggleable menu optimized for mobile devices, providing an engaging and user-friendly interface.",
    techStack: ["#NextJS", "#JavaScript", "#TailwindCSS"],
    sourceUrl: "https://github.com/Codinewbie/whatbytes",
    previewUrl: "https://whatbytes-ten.vercel.app/"
  },
  {
    id: 7,
    image: Nitj,
    alt: "NITJ-Website Clone",
    title: "NITJ-Website",
    description: "The NITJ website clone is a web application developed using HTML and CSS, replicating the official National Institute of Technology Jalandhar (NITJ) website. This project demonstrates attention to detail in recreating the website's design and structure, showcasing my skills in frontend web development and responsive design.",
    techStack: ["#HTML", "#CSS"],
    sourceUrl: "https://github.com/Codinewbie/NITJ-official-website-clone",
    previewUrl: "https://codinewbie.github.io/NITJ-official-website-clone/"
  },
  
];

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  const renderTechStack = (stack) => stack.map((tech, index) => (
    <span key={index} className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">{tech}</span>
  ));

  const renderProject = (project) => (
    <div key={project.id} className="flex flex-col md:flex-row md:even:flex-row-reverse items-stretch gap-5 p-2.5 md:p-5 border border-neutral-200 rounded-xl shadow-sm bg-white">
      <div className="w-full md:w-1/2 overflow-hidden rounded-lg border border-neutral-200">
        <img src={project.image} alt={project.alt} className="w-full h-full" />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center flex-wrap gap-1 text-xs uppercase mb-5">
          {renderTechStack(project.techStack)}
        </div>
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="mb-5">{project.description}</p>
        <div className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1.5 mt-auto">
          <a href={project.sourceUrl} target="_blank" className="duration-300 px-4 py-2 text-sm uppercase bg-white hover:bg-gray-100 border border-neutral-200 rounded font-bold">
            Source Code <i className="bx bx-git-branch"></i>
          </a>
          <a href={project.previewUrl} target="_blank" className="duration-300 px-4 py-2 text-sm uppercase border border-neutral-200 rounded font-bold border-blue-500 bg-blue-600 hover:bg-blue-700 rounded text-white">
            Preview <i className="bx bx-link-external text-base"></i>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div id="Projects" className="pt-[40px]">
      <h3 className="text-lg uppercase font-extrabold text-blue-600 mb-1">PORTFOLIO</h3>
      <h2 className="text-2xl font-bold mb-16">Each project is a unique piece of development</h2>

      <div className="flex flex-col gap-4">
        {projectData.slice(0, 4).map(renderProject)}

        <div className={`transition-all duration-700 ${showMore ? 'opacity-100' : 'opacity-0'}`}>
          {showMore && projectData.slice(4).map(renderProject)}
        </div>

        <div className="text-center mt-4" id="seeMoreButton">
          <button
            onClick={() => setShowMore(!showMore)}
            className="duration-300 text-lg font-bold text-blue-500 hover:text-blue-700 px-3 rounded-full"
          >
            {showMore ? "Show Less" : "See More"} 
            {showMore ? <i className="bx bx-chevron-up h-5 w-5"></i> : <i className="bx bx-chevron-down h-5 w-5"></i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
