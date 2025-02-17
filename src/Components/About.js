import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCode
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";

const Card = ({ title, description, icon }) => (
  <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
    {icon && <div className="flex justify-center mb-4">{icon}</div>}
    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
      {title}
    </h4>
    {description && (
      <div className="text-gray-600 dark:text-gray-300">{description}</div>
    )}
  </div>
);

const Section = ({ title, children }) => (
  <div className="text-center mb-12">
    <h3 className="text-4xl font-bold text-purple-600 tracking-wide dark:text-purple-400 mb-6 font-mono">
      {title}
    </h3>
    {children}
  </div>
);

const AboutSection = () => (
  <div className="text-center mx-auto p-6">
    <h2 className="text-4xl font-bold text-purple-600 tracking-wide">
      About Me
    </h2>
    <p className="text-gray-700 dark:text-gray-200 text-lg max-w-3xl mt-4 mx-auto">
      I'm a passionate React developer with expertise in modern web
      technologies. My strengths lie in JavaScript, building responsive
      interfaces with React, styling with Tailwind CSS, and developing robust
      backend solutions with Node.js. I prioritize clean, maintainable, and
      efficient code.
    </p>
    <div className="mt-6 flex item-center justify-center mx-auto">
      <button
        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg flex items-center gap-2 shadow-md hover:bg-purple-700 transition duration-300"
        onClick={() => window.open("Divyang M. Radadiya.pdf", "_blank")}
      >
        <FiDownload className="w-5 h-5" />
        Download Resume
      </button>
    </div>
  </div>
);

const TechnicalSkills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-6xl text-yellow-500" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-6xl text-blue-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-6xl text-teal-500" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-6xl text-green-500" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-6xl text-orange-500" />,
    },
    {
      name: "HTML & CSS",
      icon: <FaCode className="text-6xl text-indigo-500" />,
    },
  ];

  return (
    <Section title="Technical Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} title={skill.name} icon={skill.icon} />
        ))}
      </div>
    </Section>
  );
};

const WorkExperience = () => {
  const experiences = [
    {
      title: "Junior React Developer",
      company: "HK DigiVerse & IT Consultancy",
      duration: "3 months",
      points: [
        "Worked on product-based applications, focusing on scalable and user-centric designs.",
        "Designed and developed core features to improve functionality and usability.",
        "Collaborated with the product team to define requirements and deliver timely solutions.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "CodexByte",
      duration: "6 months",
      points: [
        "Worked on web application projects using React.js and Tailwind CSS.",
        "Improved application performance through optimization techniques.",
        "Participated in code reviews and collaborated with team members to ensure high-quality code.",
      ],
    },
  ];

  return (
    <Section title="Work Experience">
      <div className="flex flex-col md:flex-row gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex-1 bg-white dark:bg-gray-800 p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {exp.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {exp.company} | {exp.duration}
            </p>
            <ul className="list-disc text-left text-gray-600 dark:text-gray-300 mt-3 px-2">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

const AdditionalSkills = () => {
  const skills = [
    {
      title: "Problem Solving",
      description:
        "Strong analytical skills in debugging and optimizing applications. Implementing efficient algorithms and data structures.",
    },
    {
      title: "Modern Technologies",
      description:
        "Staying updated with modern frameworks, best practices, and cloud technologies for efficient development.",
    },
    {
      title: "Version Control",
      description:
        "Proficient in using Git for version control, enabling collaboration and maintaining code integrity across projects.",
    },
    {
      title: "Responsive Design",
      description:
        "Skilled in creating responsive and user-friendly interfaces using CSS frameworks like Tailwind CSS and Bootstrap.",
    },
  ];

  return (
    <Section title="Additional Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </Section>
  );
};

const Education = () => {
  const education = [
    {
      title: "Bachelor of Computer Application",
      university: "S.V.Patel College",
      duration: "2018 - 2022",
      description:
        "Specialized in Frontend developer with a focus on web technologies and distributed systems. Graduated with honors.",
    },
  ];

  return (
    <Section title="Education">
      <div className="mx-auto max-w-xl">
        {education.map((edu, index) => (
          <Card
            key={index}
            title={edu.title}
            description={
              <>
                <p className="font-semibold">{edu.university}</p>
                <p className="text-gray-500 dark:text-gray-300 mb-2">
                  Year : {edu.duration}
                </p>
                <p className="text-gray-500 dark:text-gray-300 text-left">
                  {edu.description}
                </p>
              </>
            }
          />
        ))}
      </div>
    </Section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-0 space-y-16">
        <AboutSection />
        <TechnicalSkills />
        <WorkExperience />
        <AdditionalSkills />
        <Education />
      </div>
    </section>
  );
};

export default About;
