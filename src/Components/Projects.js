import React from "react";
import { HashLink } from "react-router-hash-link";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 space-y-10">
        <h3 className="text-3xl font-bold my-5 text-center text-purple-600 dark:text-purple-400">
          My Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              title: "E-commerce Platform",
              description:
                "A full-stack e-commerce platform built with React and Node.js.",
              image:
                "https://storage.googleapis.com/a1aa/image/xDjWxUMUz3Du3GJW3X7a345P-reaxPmURhtSGwBk1Rc.jpg",
              techStack: [
                { name: "React", color: "blue" },
                { name: "Node.js", color: "green" },
                { name: "MongoDB", color: "orange" },
                { name: "Express", color: "purple" },
              ],
            },
            {
              title: "E-commerce Platform",
              description:
                "A full-stack e-commerce platform built with React and Node.js.",
              image:
                "https://storage.googleapis.com/a1aa/image/xDjWxUMUz3Du3GJW3X7a345P-reaxPmURhtSGwBk1Rc.jpg",
              techStack: [
                { name: "React", color: "blue" },
                { name: "Node.js", color: "green" },
                { name: "MongoDB", color: "orange" },
                { name: "Express", color: "purple" },
              ],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 dark:border dark:border-blue-300 rounded-lg overflow-hidden xs:w-full"
            >
              <img
                className="h-50 w-full object-cover object-end"
                src={project.image}
                alt={project.title}
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:bg-gray-700 text-secondary dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-4">
                  <HashLink
                    to="#"
                    className="px-4 py-2 border border-purple-600 hover:text-purple-800 dark:text-purple-200 rounded-md btn-bg flex items-center"
                  >
                    <FaGithub className="mr-2" /> View Code
                  </HashLink>
                  <HashLink
                    to="#"
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </HashLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
