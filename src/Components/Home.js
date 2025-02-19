import React, { useState, useEffect, useCallback, memo } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  const handleMount = useCallback(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    handleMount();
  }, [handleMount]);

  if (!mounted) return null;

  return (
    <section className="min-h-screen py-24 dark:bg-gray-900 ">
      <img
        class="absolute left-0 top-[28rem] -z-[1] -translate-y-1/2"
        src="https://themewagon.github.io/pinwheel/images/icons/feature-shape.svg"
        alt=""
      />
      <div className="text-center container mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-bold bg-gradient-to-r from-yellow-400 to-green-400 text-wrap text-transparent bg-clip-text whitespace-nowrap leading-snug md:leading-normal lg:leading-relaxed font-mono">
          Hi I'm Divyang Radadiya
        </h1>

        <p className="mt-5 text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          A passionate React developer focused on creating high-performance web
          applications.
        </p>
        <div className="mt-8 flex flex-col sm:flex-col md:flex-row justify-center gap-5 px-6 md:px-0">
          <NavLink
            to="/projects"
            className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-300 hover:border-green-600 hover:text-green-600 dark:hover:bg-gray-700 transition-all"
          >
            View Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all"
          >
            Contact Me
          </NavLink>
        </div>
      </div>
      <img
        class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
        src="https://themewagon.github.io/pinwheel/images/banner-shape.svg"
        alt=""
      />
    </section>
  );
};

export default memo(Home);
