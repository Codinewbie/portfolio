import React from 'react';
import 'boxicons/css/boxicons.min.css';
import about from '/src/images/about.webp';


const About = () => {
  return (
    // <!-- about section start -->
    <div id="About" className="about">
      <div className="grid grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-10 py-[70px] md:py-[100px]">
        {/* <!-- about image --> */}
        <div className="col-span-12 md:col-span-5 rounded-lg">
          <img
          className="w-full md:h-full md:object-cover md:object-center rounded-xl"
            src={about}
            alt="A dedicated Full-Stack Developer from Punjab, India"
          />
        </div>
        {/* <!-- about text content --> */}
        <div className="col-span-12 md:col-span-7 flex flex-col">
          <h3 className="text-lg uppercase font-extrabold text-blue-600 mb-1">About Me</h3>
          <h2 className="text-2xl font-bold mb-5">A dedicated Full-Stack Software Developer from Punjab, India</h2>
          <p className="text-neutral-600 leading-relaxed w-full">I enjoy solving problems and building full-stack web applications. With expertise in HTML, CSS, JavaScript, TypeScript, React, TailwindCSS, Node.js, and Express.js, I focus on creating seamless, user-friendly interfaces and efficient back-end solutions.</p>
        </div>
      </div>
    </div>
    // <!-- about section end -->
  );
};

export default About;

