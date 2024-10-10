import React from 'react';
import 'boxicons/css/boxicons.min.css';
import 'devicon/devicon.min.css';
import Project1 from "/src/images/Project1.png";
import Project2 from "/src/images/Project2.png";
import Project3_12 from "/src/images/Project3_12.png";
const Portfolio = () => {
  return (
 
    
    <div id="Projects" >
      <div className="py-[70px] md:py-[100px] ">
        <h3 className="text-lg uppercase font-extrabold text-blue-600 mb-1">
        PORTFOLIO
        </h3>
        <h2 className="text-2xl font-bold mb-16">Each project is a unique piece of development</h2>

    
        <div className="flex flex-col gap-5">


          {/*Project1*/}
          <div className="flex flex-col md:flex-row md:odd:flex-row-reverse items-stretch gap-5 p-2.5 md:p-5 border border-neutral-200 rounded-xl shadow-sm bg-white">
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
              <img src={Project2} alt="Blogging Website" className="w-full h-full" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex items-center flex-wrap gap-1 text-xs uppercase mb-5">
                <span className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">#TypeScript</span>
                <span className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">#Reactjs</span>
                <span className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">#PostgresSQL</span>
                <span className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">#TailwindCSS</span>
                <span className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">#JWT</span>
                <span className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">#Postman</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Blogging Website</h2>
              <p className="mb-5">A place to read, write, and deepen your understanding. Start reading. On Medium, anyone can
              share insightful perspectives, useful knowledge, and life wisdom with the world.</p>

              <div className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1.5 mt-auto">
                <a
                  href="https://github.com/Codinewbie/Blogging-Website"
                  target="_blank"
                  className="duration-300 px-4 py-2 text-sm uppercase bg-white hover:bg-gray-100 border border-neutral-200 rounded font-bold"
                  >Source Code <i className="bx bx-git-branch"></i>
                </a>
                <a
                  href="https://blogging-website-beige.vercel.app/signup"
                  target="_blank"
                  className="duration-300 px-4 py-2 text-sm uppercase border border-neutral-200 rounded font-bold border-blue-500 bg-blue-600 hover:bg-blue-700 rounded text-white"
                  >Preview <i className="bx bx-link-external text-base"></i>
                </a>
              </div>
            </div>
          </div>
           {/* project1 ends */}

           {/* Project2*/}
           <div className="flex flex-col md:flex-row md:odd:flex-row-reverse items-stretch gap-5 p-2.5 md:p-5 border border-neutral-200 rounded-xl shadow-sm bg-white">
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
              <img src={Project3_12} alt="Sorting-Visualizer" className="w-full h-full" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex items-center flex-wrap gap-1 text-xs uppercase mb-5">
                <span className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">#Reactjs</span>
                <span className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">#TypeScript</span>
                <span className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">#TailwindCSS</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Sorting-Visualizer</h2>
              <p className="mb-5">The Sorting Visualizer project is an interactive web application designed to visually demonstrate various sorting algorithms in action. By animating the sorting process step by step, users can gain a deeper understanding of how different algorithms work and compare their performance in real-time.</p>
              <div className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1.5 mt-auto">
                <a
                  href="https://github.com/Codinewbie/Sorting-Visualizer-using-Typescript"
                  target="_blank"
                  className="duration-300 px-4 py-2 text-sm uppercase bg-white hover:bg-gray-100 border border-neutral-200 rounded font-bold"
                  >Source Code <i className="bx bx-git-branch"></i>
                </a>
                <a
                  href="https://codinewbie.github.io/sorting-visualizer/"
                  target="_blank"
                  className="duration-300 px-4 py-2 text-sm uppercase border border-neutral-200 rounded font-bold border-blue-500 bg-blue-600 hover:bg-blue-700 rounded text-white"
                  >Preview <i className="bx bx-link-external text-base"></i>
                </a>
              </div>
            </div>
          </div>
          {/* project2 ends */}

          {/* Project3*/}
          <div className="flex flex-col md:flex-row md:odd:flex-row-reverse items-stretch gap-5 p-2.5 md:p-5 border border-neutral-200 rounded-xl shadow-sm bg-white">
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
              <img src={Project1} alt="NITJ-Website Clone" className="w-full h-full" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex items-center flex-wrap gap-1 text-xs uppercase mb-5">
                <span className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">#HTML</span>
                <span className="px-2 py-1 border border-neutral-200 inline-block rounded-sm">#CSS</span>
              </div>
              <h2 className="text-xl font-bold mb-2">NITJ-Website</h2>
              <p className="mb-5">The NITJ website clone is a web application developed using HTML and CSS, replicating the official National Institute of Technology Jalandhar (NITJ) website. This project demonstrates attention to detail in recreating the website's design and structure, showcasing my skills in frontend web development and responsive design.</p>
              <div className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1.5 mt-auto">
                <a
                  href="https://github.com/Codinewbie/NITJ-official-website-clone"
                  target="_blank"
                  className="duration-300 px-4 py-2 text-sm uppercase bg-white hover:bg-gray-100 border border-neutral-200 rounded font-bold"
                  >Source Code <i className="bx bx-git-branch"></i>
                </a>
                <a
                  href="https://codinewbie.github.io/NITJ-official-website-clone/"
                  target="_blank"
                  className="duration-300 px-4 py-2 text-sm uppercase border border-neutral-200 rounded font-bold border-blue-500 bg-blue-600 hover:bg-blue-700 rounded text-white"
                  >Preview <i className="bx bx-link-external text-base"></i>
                </a>
              </div>
            </div>
          </div>
          {/* project3 ends */}
        </div>
      </div>
    </div>

  );
};

export default Portfolio;
