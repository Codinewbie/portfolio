import React from 'react';
import 'boxicons/css/boxicons.min.css';
import aboutImage from '/src/images/about.webp';

// About section constants
const ABOUT_HEADING = "About Me";
const ABOUT_SUBHEADING = "A dedicated Full-Stack Software Developer from Punjab, India";
const ABOUT_DESCRIPTION = 
  "I enjoy solving problems and building full-stack web applications. With expertise in HTML, CSS, C++, JavaScript, TypeScript, Node.js, Express.js, React.js, Next.js and TailwindCSS. I focus on creating seamless, user-friendly interfaces and efficient back-end solutions.";

const About = () => {
  return (
    <div >
      <div className="grid grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-10 py-[40px]">
        {/* Image Section */}
        <div className="col-span-12 md:col-span-5">
          <img
            className="w-full md:h-full md:object-cover md:object-center rounded-xl"
            src={aboutImage}
            alt={ABOUT_SUBHEADING}
          />
        </div>

        {/* Text Section */}
        <div className="col-span-12 md:col-span-7 flex flex-col">
          <h3 className="text-lg uppercase font-extrabold text-blue-600 mb-1">
            {ABOUT_HEADING}
          </h3>
          <h2 className="text-2xl font-bold mb-5">
            {ABOUT_SUBHEADING}
          </h2>
          <p className="text-neutral-600 leading-relaxed w-full">
            {ABOUT_DESCRIPTION}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

