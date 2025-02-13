import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const TechnicalSkills = () => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-4">
        Technical Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {[
          {
            name: "JavaScript",
            icon: <FaJsSquare className="text-6xl text-yellow-500" />,
            description: "Dynamic programming language for web development.",
          },
          {
            name: "React",
            icon: <FaReact className="text-6xl text-blue-500" />,
            description: "A JavaScript library for building user interfaces.",
          },
          {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="text-6xl text-teal-500" />,
            description:
              "Utility-first CSS framework for rapid UI development.",
          },
          {
            name: "Node.js",
            icon: <FaNodeJs className="text-6xl text-green-500" />,
            description:
              "JavaScript runtime for building server-side applications.",
          },
          {
            name: "Git",
            icon: <FaGitAlt className="text-6xl text-orange-500" />,
            description: "Version control system for tracking changes in code.",
          },
          {
            name: "HTML & CSS",
            icon: <FaCode className="text-6xl text-indigo-500" />,
            description: "The building blocks of web development.",
          },
        ].map((skill, index) => (
          <div
            key={index}
            className="relative mb-8 flex flex-col rounded-2xl border border-blue-300 bg-white p-8 shadow-lg dark:border-gray-600 dark:bg-gray-800 lg:mb-4 transform transition duration-500 hover:scale-110"
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <p className="mb-4 text-xl font-semibold text-blue-900 dark:text-white">
              {skill.name}
            </p>
            <p className="text-blue-700 dark:text-gray-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorkExperience = () => {
  return (
    <div className="">
      <h3 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-4">
        Work Experience
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        {[
          {
            title: "Senior Full Stack Developer",
            company: "Tech Solutions Inc.",
            duration: "2020 - Present",
            points: [
              "Led development of enterprise-scale React applications",
              "Implemented CI/CD pipelines reducing deployment time by 40%",
              "Mentored junior developers and conducted code reviews",
            ],
          },
          {
            title: "Full Stack Developer",
            company: "Digital Innovations Ltd",
            duration: "2018 - 2020",
            points: [
              "Built and maintained multiple client-facing web applications",
              "Developed RESTful APIs using Node.js and Express",
              "Optimized database queries improving performance by 30%",
            ],
          },
        ].map((experience, index) => (
          <div
            key={index}
            className="card text-left bg-white dark:bg-gray-700 hover:border hover:border-green-700 dark:hover:border dark:hover:border-green-500 p-6 rounded-lg shadow-lg ring-1 ring-black/10 transform transition duration-500 hover:scale-105"
          >
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {experience.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {experience.company}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {experience.duration}
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdditionalSkills = () => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-4">
        Additional Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        {[
          {
            title: "Problem Solving",
            description:
              "Strong analytical skills in debugging and optimizing applications. Experienced in implementing efficient algorithms and data structures to solve complex technical challenges.",
          },
          {
            title: "Modern Technologies",
            description:
              "Staying current with the latest web technologies and best practices. Expert in modern frameworks and tools for efficient development.",
          },
        ].map((skill, index) => (
          <div
            key={index}
            className="card bg-white dark:bg-gray-700 hover:border hover:border-green-700 dark:hover:border dark:hover:border-green-500 p-6 rounded-lg shadow-lg ring-1 ring-black/10 transform transition duration-500 hover:scale-105"
          >
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {skill.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-4">
        Education
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        {[
          {
            title: "Bachelor of Computer Science",
            university: "University Name",
            duration: "2018 - 2022",
            description:
              "Specialized in Software Engineering with focus on web technologies and distributed systems. Graduated with honors.",
          },
          {
            title: "Full Stack Development Certification",
            university: " Tech Academy",
            duration: "2022",
            description:
              "Intensive program covering modern web development stack including React, Node.js, and cloud technologies.",
          },
        ].map((education, index) => (
          <div
            key={index}
            className="card bg-white dark:bg-gray-700 hover:border hover:border-green-700 dark:hover:border dark:hover:border-green-500 p-6 rounded-lg shadow-lg ring-1 ring-black/10 transform transition duration-500 hover:scale-105"
          >
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {education.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {education.university}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {education.duration}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {education.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/50 dark:bg-gray-900">
      <div className="container mx-auto px-4 space-y-20">
        <div>
          <h2 className="text-4xl font-bold text-center text-purple-600 dark:text-purple-400 mb-8">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-200 text-lg text-left  max-w-3xl mx-auto mb-8">
            I'm a passionate ReactJs developer with expertise in modern web
            technologies. My core strengths lie in JavaScript development,
            building responsive interfaces with React, crafting beautiful UI
            with Tailwind CSS, and developing robust backend solutions with
            Node.js. With strong proficiency in HTML & CSS fundamentals and
            version control using Git, I bring ideas to life through clean,
            efficient, and maintainable code.
          </p>
        </div>
        <div className="text-center">
          <button
            // href="path/to/your/resume.pdf"
            // target="_black"
            className="px-6 py-3 border border-purple-600 text-purple-600 hover:text-black dark:hover:text-white  rounded-md "
          >
            Download Resume
          </button>
        </div>
        <TechnicalSkills />
        <WorkExperience />
        <AdditionalSkills />
        <Education />
      </div>
    </section>
  );
};

export default About;
