import React from 'react';
import 'devicon/devicon.min.css';
import 'boxicons/css/boxicons.min.css';

// Reusable TechIcon Component
const TechIcon = ({ iconClass, title }) => {
  return (
    <div
      className="w-[50px] h-[50px] inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-300 shadow-sm text-2xl cursor-pointer duration-200 hover:ring-4"
      title={title}
    >
      <i className={`${iconClass} colored max-w-full`} />
    </div>
  );
};

const TechStack = () => {
  // List of technologies with corresponding icon class names
  const techList = [
    { icon: 'devicon-html5-plain', title: 'HTML' },
    { icon: 'devicon-css3-plain', title: 'CSS' },
    { icon: 'devicon-javascript-plain', title: 'JavaScript' },
    { icon: 'devicon-typescript-plain', title: 'TypeScript' },
    { icon: 'devicon-react-original', title: 'React JS' },
    { icon: 'devicon-tailwindcss-original', title: 'TailwindCSS' },
    { icon: 'devicon-nodejs-plain', title: 'Node JS' },
    { icon: 'devicon-express-original', title: 'Express JS' }
  ];

  return (
    <section id="About">
      <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-2 md:gap-10 py-10">
        <h2 className="font-bold text-lg">Tech Stack</h2>
        <div className="w-[100px] h-0.5 md:h-[20px] md:w-0.5 bg-neutral-800 mb-5 md:mb-0"></div>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
          {techList.map((tech) => (
            <TechIcon key={tech.title} iconClass={tech.icon} title={tech.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
