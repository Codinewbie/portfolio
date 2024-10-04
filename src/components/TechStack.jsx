import React from 'react';
import 'devicon/devicon.min.css';
import 'boxicons/css/boxicons.min.css';
const TechStack = () => {
  return (
 
    <div className="">
      <div className="flex flex-col px-2 md:flex-row text-center md:text-left items-center gap-2 md:gap-10 py-10">
        <h2 className="font-bold text-lg">Tech Stack</h2>
        <div className="w-[100px] h-0.5 md:h-[20px] md:w-0.5 bg-neutral-800 mb-5 md:mb-0"></div>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
          <div className="w-[50px] h-[50px] inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-300 shadow-sm text-2xl cursor-pointer duration-200 hover:ring-4" title="HTML">
            <i className="devicon-html5-plain colored max-w-full"></i>
          </div>
          <div className="w-[50px] h-[50px] inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-300 shadow-sm text-2xl cursor-pointer duration-200 hover:ring-4" title="CSS">
            <i className="devicon-css3-plain colored max-w-full"></i>
          </div>
          <div className="w-[50px] h-[50px] inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-300 shadow-sm text-2xl cursor-pointer duration-200 hover:ring-4" title="JavaScript">
            <i className="devicon-javascript-plain colored max-w-full"></i>
          </div>
          <div className="w-[50px] h-[50px] inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-300 shadow-sm text-2xl cursor-pointer duration-200 hover:ring-4" title="TypeScript">
            <i className="devicon-typescript-plain colored max-w-full"></i>
          </div>
          <div className="w-[50px] h-[50px] inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-300 shadow-sm text-2xl cursor-pointer duration-200 hover:ring-4" title="React JS">
            <i className="devicon-react-original colored max-w-full"></i>
          </div>
          <div className="w-[50px] h-[50px] inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-300 shadow-sm text-2xl cursor-pointer duration-200 hover:ring-4" title="TailwindCSS">
            <i className="devicon-tailwindcss-original colored max-w-full"></i>
          </div>
          <div className="w-[50px] h-[50px] inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-300 shadow-sm text-2xl cursor-pointer duration-200 hover:ring-4" title="Node JS">
            <i className="devicon-nodejs-plain colored max-w-full"></i>
          </div>
          <div className="w-[50px] h-[50px] inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-300 shadow-sm text-2xl cursor-pointer duration-200 hover:ring-4" title="Express JS">
            <i className="devicon-express-original colored max-w-full"></i>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default TechStack;
