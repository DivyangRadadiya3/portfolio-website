import React from "react";
import { HashLink } from "react-router-hash-link";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

const ThemeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-9 h-9 
    hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-100 dark:hover:text-white"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <AiOutlineSun className="h-4 w-4" />
      ) : (
        <AiOutlineMoon className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

const MobileMenuToggle = ({ isOpen, setIsOpen }) => {
  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeToggle />
      <button
        className="p-2"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu h-6 w-6"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = React.useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  bg-transparent  backdrop-blur-xl shadow-sm dark:shadow-slate-900">
      <div className="max-w-7xl bg-opacity-80 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <HashLink
            to="#"
            className="text-2xl font-bold  text-purple-600 dark:text-purple-400"
          >
            Divyang Radadiya
          </HashLink>
          <nav className="hidden md:flex items-center gap-6 dark:text-white">
            <HashLink
              to="#about"
              className="text-muted-foreground hover:text-primary dark:hover:text-green-300 transition-colors"
            >
              About
            </HashLink>
            <HashLink
              to="#projects"
              className="text-muted-foreground hover:text-primary dark:hover:text-green-300 transition-colors"
            >
              Projects
            </HashLink>
            <HashLink
              to="#contact"
              className="text-muted-foreground hover:text-primary dark:hover:text-green-300 transition-colors"
            >
              Contact
            </HashLink>
            <ThemeToggle
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </nav>
          <MobileMenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-gray-100 dark:bg-gray-900  backdrop-blur-xl bg-opacity-80 border-b animate-fade-in-up ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 p-4">
              <HashLink
                to="#about"
                className="text-muted-foreground hover:text-primary transition-colors hover:text-green-600 w-full"
                onClick={(e) => {
                  setIsOpen(false);
                }}
              >
                About
              </HashLink>
              <HashLink
                to="#projects"
                className="text-muted-foreground hover:text-primary transition-colors hover:text-green-600 w-full"
                onClick={(e) => {
                  setIsOpen(false);
                }}
              >
                Projects
              </HashLink>
              <HashLink
                to="#contact"
                className="text-muted-foreground hover:text-primary transition-colors hover:text-green-600 w-full"
                onClick={(e) => {
                  setIsOpen(false);
                }}
              >
                Contact
              </HashLink>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
