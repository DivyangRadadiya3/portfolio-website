import React, { useState, useEffect, useCallback, memo } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineSun,
  AiOutlineMoon,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const ThemeToggle = memo(({ isDarkMode, toggleDarkMode }) => (
  <button
    className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors focus:outline-none border border-gray-400 w-9 h-9 
    hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-100 dark:hover:text-white"
    onClick={toggleDarkMode}
  >
    {isDarkMode ? <AiOutlineSun className="h-4 w-4" /> : <AiOutlineMoon className="h-4 w-4" />}
    <span className="sr-only">Toggle theme</span>
  </button>
));

const MobileMenuToggle = memo(({ isOpen, setIsOpen, isDarkMode, toggleDarkMode }) => (
  <div className="md:hidden flex items-center gap-2">
    <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    <button
      className="p-2 text-slate-900 dark:text-slate-100"
      aria-label="Toggle menu"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
    </button>
  </div>
));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => JSON.parse(localStorage.getItem("darkMode")) || false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => setIsDarkMode((prev) => !prev), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl shadow-sm dark:shadow-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            Divyang Radadiya
          </NavLink>
          <nav className="hidden md:flex items-center gap-6 dark:text-white">
            {["about", "projects", "contact"].map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className="relative capitalize hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </NavLink>
            ))}
            <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </nav>
          <MobileMenuToggle isOpen={isOpen} setIsOpen={setIsOpen} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>

      <div
        className={`absolute top-full left-0 right-0 bg-white/90 dark:bg-black/90 border-b transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 py-4">
          {["about", "projects", "contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className="relative w-full capitalize text-center py-2 hover:text-green-700 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full dark:text-white dark:hover:text-green-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default memo(Navbar);
