import React, { useState } from 'react';
import { Link } from 'react-scroll';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'Home' },
    { name: 'About', to: 'About' },
    { name: 'Projects', to: 'Projects' },
    { name: 'Contact', to: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 mx-4 bg-white border-b border-neutral-200 z-[1000]">
      <div className="flex items-center justify-between py-2 md:py-4">
        {/* Logo */}
        <Link
          to="Home"
          smooth={true}
          duration={500}
          className="duration-300 text-xl font-bold uppercase hover:text-blue-600 cursor-pointer"
        >
          Aman.Dev
        </Link>

        {/* Hamburger Menu */}
        <button
          type="button"
          title="Toggle Menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-2xl px-2 py-1 border border-neutral-200 rounded md:hidden"
        >
          <i className="bx bx-menu"></i>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-white text-center md:static md:flex md:w-auto md:items-center`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 py-6 md:py-0">
            {navItems.map((item) => (
              <li key={item.to} className="font-semibold">
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="duration-300 hover:text-blue-600 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
