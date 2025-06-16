import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full bg-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 px-6 py-4 shadow-md"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-green-400 font-bold text-2xl tracking-tight">
          Nima Norouzi
        </div>

        {/* Hamburger */}
        <button
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <ul
          className={`flex-col sm:flex-row sm:flex gap-6 text-white text-lg font-medium transition-all duration-300 ${
            isOpen ? "flex mt-6 sm:mt-0" : "hidden sm:flex"
          }`}
        >
          {["Home", "Projects", "About", "Contact"].map((label) => (
            <li key={label}>
              <a
                href={`#/${label === "Home" ? "" : label}`}
                className="hover:text-green-400 relative group transition duration-200"
              >
                {label}
                <span className="block h-[2px] w-0 group-hover:w-full bg-green-400 transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
