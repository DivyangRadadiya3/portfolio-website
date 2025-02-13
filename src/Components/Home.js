import React from "react";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <section className="relative px-6 lg:px-8 py-24 lg:py-32 h-[90vh] bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl opacity-100 translate-x-0 translate-y-0">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-purple-600 dark:text-purple-400">
            Hi, I'm Divyang Radadiya
          </h1>
          <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-200">
            A passionate ReactJs developer specializing in building exceptional
            digital experiences.
          </p>
          <div className="mt-8 space-x-4">
            <HashLink
              to="#projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-300 hover:border hover:border-green-600 dark:hover:bg-gray-700"
            >
              View Projects
            </HashLink>
            <HashLink
              to="#contact"
              className="px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-md hover:bg-purple-700 dark:hover:bg-purple-600"
            >
              Contact Me
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
