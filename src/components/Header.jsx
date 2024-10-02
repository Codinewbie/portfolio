import React, { useState } from 'react';

import 'boxicons/css/boxicons.min.css';


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="sticky top-0 bg-white border-b border-b-neutral-200 z-[1000]">
      <div className="flex items-center justify-between py-2 md:py-4">
        <a href="/" className="text-xl font-bold uppercase z-[1]">Aman.Dev</a>
        <button
          title="Open Menu"
          type="button"
          onClick={handleMenuToggle}
          className="text-2xl px-2 py-1 border border-neutral-200 rounded md:hidden z-[2]"
          id="menutoggler"
        >
          <i className="bx bx-menu"></i>
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full mt-1 left-0 w-full bg-white md:bg-transparent text-center  md:relative md:flex md:w-auto md:items-center z-[1] md:z-auto`}
        >
        
        <ul className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8 py-6 md:py-0 w-full text-center">
        <li className="font-semibold">
            <a title="Home" href="/#home" className ="duration-300 hover:text-blue-600">
              Home
            </a>
          </li>
        
          <li className="font-semibold">
            <a title="About" href="/#about" className ="duration-300 hover:text-blue-600">
              About
            </a>
          </li>
          <li className="font-semibold">
            <a title="Projects" href="/#portfolio" className ="duration-300 hover:text-blue-600">
              Projects
            </a>
          </li>
          <li className="font-semibold">
            <a title="Contact" href="/#contact" className ="duration-300 hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;



