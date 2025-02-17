import React, { memo } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = memo(
  ({ title, description, image, techStack, repoLink, demoLink }) => {
    return (
      <div className="flex flex-col items-center p-4 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg transform transition duration-300  ">
        <img
          src={image}
          alt={title}
          className="w-full h-[16rem] object-cover rounded-lg dark:text-gray-300"
        />
        <h2 className="mt-4 text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 ">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm capitalize font-semibold bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap md:flex-nowrap justify-between  gap-2">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 w-full border border-purple-600 text-purple-600 hover:text-purple-800 dark:text-purple-200 rounded-md flex items-center text-nowrap transition duration-300"
          >
            <FaGithub className="mr-2" /> View Code
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 w-full bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center  transition duration-300"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
        </div>
      </div>
    );
  }
);

const Projects = memo(() => {
  const projectData = [
    {
      title: "E-Learning Website",
      description: "An interactive e-learning platform offering a user-friendly interface and multimedia content delivery. It features a course management system, allowing learners to access a variety of courses conveniently, enhancing the educational experience for students of all ages.",
      image: "https://storage.googleapis.com/a1aa/image/sample-portfolio.jpg",
      techStack: ["react", "tailwind css"],
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing projects and skills.",
      image: "https://storage.googleapis.com/a1aa/image/sample-portfolio.jpg",
      techStack: ["react", "tailwind css"],
    },
   
  ];

  return (
    <section id="projects" className="py-16 dark:bg-gray-900">
      <div className="container mx-auto space-y-10">
        <h3 className="text-3xl font-bold my-5 font-mono text-center text-purple-600 dark:text-purple-400">
          My Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  px-6 md:px-0">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
