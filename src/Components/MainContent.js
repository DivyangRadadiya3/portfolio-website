import React, { lazy, Suspense } from "react";
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

// const HeroSection = () => {
//   return (
//     <section className="relative px-6 lg:px-8 py-24 lg:py-32 h-[90vh] bg-gray-100 dark:bg-gray-900">
//       <div className="mx-auto max-w-7xl opacity-100 translate-x-0 translate-y-0">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-purple-600 dark:text-purple-400">
//             Hi, I'm Divyang Radadiya
//           </h1>
//           <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-200">
//             A passionate ReactJs developer specializing in building exceptional
//             digital experiences.
//           </p>
//           <div className="mt-8 space-x-4">
//             <HashLink
//               to="#projects"
//               className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-300 hover:border hover:border-green-600 dark:hover:bg-gray-700"
//             >
//               View Projects
//             </HashLink>
//             <HashLink
//               to="#contact"
//               className="px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-md hover:bg-purple-700 dark:hover:bg-purple-600"
//             >
//               Contact Me
//             </HashLink>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-24 bg-muted/50 dark:bg-gray-900">
//       <div className="container mx-auto px-4 space-y-20">
//         <artical>
//           <h2 className="text-4xl font-bold text-center text-purple-600 dark:text-purple-400 mb-8">
//             About Me
//           </h2>
//           <p className="text-gray-600 dark:text-gray-200 text-lg text-left  max-w-3xl mx-auto mb-8">
//             I'm a passionate ReactJs developer with expertise in modern web
//             technologies. My core strengths lie in JavaScript development,
//             building responsive interfaces with React, crafting beautiful UI
//             with Tailwind CSS, and developing robust backend solutions with
//             Node.js. With strong proficiency in HTML & CSS fundamentals and
//             version control using Git, I bring ideas to life through clean,
//             efficient, and maintainable code.
//           </p>
//         </artical>
//         <div className="text-center">
//           <a
//             href="#"
//             className="px-6 py-3 border border-purple-600 text-purple-600 hover:text-black dark:hover:text-white  rounded-md "
//           >
//             Download Resume
//           </a>
//         </div>
//         <TechnicalSkills />
//         <WorkExperience />
//         <AdditionalSkills />
//         <Education />
//       </div>
//     </section>
//   );
// };

// const TechnicalSkills = () => {
//   return (
//     <div className="text-center">
//       <h3 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-4">
//         Technical Skills
//       </h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
//         {[
//           {
//             name: "JavaScript",
//             icon: <FaJsSquare className="text-6xl text-yellow-500" />,
//             description: "Dynamic programming language for web development.",
//           },
//           {
//             name: "React",
//             icon: <FaReact className="text-6xl text-blue-500" />,
//             description: "A JavaScript library for building user interfaces.",
//           },
//           {
//             name: "Tailwind CSS",
//             icon: <SiTailwindcss className="text-6xl text-teal-500" />,
//             description:
//               "Utility-first CSS framework for rapid UI development.",
//           },
//           {
//             name: "Node.js",
//             icon: <FaNodeJs className="text-6xl text-green-500" />,
//             description:
//               "JavaScript runtime for building server-side applications.",
//           },
//           {
//             name: "Git",
//             icon: <FaGitAlt className="text-6xl text-orange-500" />,
//             description: "Version control system for tracking changes in code.",
//           },
//           {
//             name: "HTML & CSS",
//             icon: <FaCode className="text-6xl text-indigo-500" />,
//             description: "The building blocks of web development.",
//           },
//         ].map((skill, index) => (
//           <div
//             key={index}
//             className="relative mb-8 flex flex-col rounded-2xl border border-blue-300 bg-white p-8 shadow-lg dark:border-gray-600 dark:bg-gray-800 lg:mb-4 transform transition duration-500 hover:scale-110"
//           >
//             <div className="flex justify-center mb-4">{skill.icon}</div>
//             <p className="mb-4 text-xl font-semibold text-blue-900 dark:text-white">
//               {skill.name}
//             </p>
//             <p className="text-blue-700 dark:text-gray-300">
//               {skill.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const WorkExperience = () => {
//   return (
//     <div className="">
//       <h3 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-4">
//         Work Experience
//       </h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
//         {[
//           {
//             title: "Senior Full Stack Developer",
//             company: "Tech Solutions Inc.",
//             duration: "2020 - Present",
//             points: [
//               "Led development of enterprise-scale React applications",
//               "Implemented CI/CD pipelines reducing deployment time by 40%",
//               "Mentored junior developers and conducted code reviews",
//             ],
//           },
//           {
//             title: "Full Stack Developer",
//             company: "Digital Innovations Ltd",
//             duration: "2018 - 2020",
//             points: [
//               "Built and maintained multiple client-facing web applications",
//               "Developed RESTful APIs using Node.js and Express",
//               "Optimized database queries improving performance by 30%",
//             ],
//           },
//         ].map((experience, index) => (
//           <div
//             key={index}
//             className="card text-left bg-white dark:bg-gray-700 hover:border hover:border-green-700 dark:hover:border dark:hover:border-green-500 p-6 rounded-lg shadow-lg ring-1 ring-black/10 transform transition duration-500 hover:scale-105"
//           >
//             <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               {experience.title}
//             </h4>
//             <p className="text-gray-600 dark:text-gray-300 mb-2">
//               {experience.company}
//             </p>
//             <p className="text-gray-600 dark:text-gray-300 mb-4">
//               {experience.duration}
//             </p>
//             <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
//               {experience.points.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const AdditionalSkills = () => {
//   return (
//     <div className="text-center">
//       <h3 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-4">
//         Additional Skills
//       </h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
//         {[
//           {
//             title: "Problem Solving",
//             description:
//               "Strong analytical skills in debugging and optimizing applications. Experienced in implementing efficient algorithms and data structures to solve complex technical challenges.",
//           },
//           {
//             title: "Modern Technologies",
//             description:
//               "Staying current with the latest web technologies and best practices. Expert in modern frameworks and tools for efficient development.",
//           },
//         ].map((skill, index) => (
//           <div
//             key={index}
//             className="card bg-white dark:bg-gray-700 hover:border hover:border-green-700 dark:hover:border dark:hover:border-green-500 p-6 rounded-lg shadow-lg ring-1 ring-black/10 transform transition duration-500 hover:scale-105"
//           >
//             <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               {skill.title}
//             </h4>
//             <p className="text-gray-600 dark:text-gray-300">
//               {skill.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Education = () => {
//   return (
//     <div className="text-center">
//       <h3 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-4">
//         Education
//       </h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
//         {[
//           {
//             title: "Bachelor of Computer Science",
//             university: "University Name",
//             duration: "2018 - 2022",
//             description:
//               "Specialized in Software Engineering with focus on web technologies and distributed systems. Graduated with honors.",
//           },
//           {
//             title: "Full Stack Development Certification",
//             university: " Tech Academy",
//             duration: "2022",
//             description:
//               "Intensive program covering modern web development stack including React, Node.js, and cloud technologies.",
//           },
//         ].map((education, index) => (
//           <div
//             key={index}
//             className="card bg-white dark:bg-gray-700 hover:border hover:border-green-700 dark:hover:border dark:hover:border-green-500 p-6 rounded-lg shadow-lg ring-1 ring-black/10 transform transition duration-500 hover:scale-105"
//           >
//             <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               {education.title}
//             </h4>
//             <p className="text-gray-600 dark:text-gray-300 mb-2">
//               {education.university}
//             </p>
//             <p className="text-gray-600 dark:text-gray-300 mb-4">
//               {education.duration}
//             </p>
//             <p className="text-gray-600 dark:text-gray-300">
//               {education.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto px-4 space-y-10">
//         <h3 className="text-3xl font-bold my-5 text-center text-purple-600 dark:text-purple-400">
//           My Projects
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {[
//             {
//               title: "E-commerce Platform",
//               description:
//                 "A full-stack e-commerce platform built with React and Node.js.",
//               image:
//                 "https://storage.googleapis.com/a1aa/image/xDjWxUMUz3Du3GJW3X7a345P-reaxPmURhtSGwBk1Rc.jpg",
//               techStack: [
//                 { name: "React", color: "blue" },
//                 { name: "Node.js", color: "green" },
//                 { name: "MongoDB", color: "orange" },
//                 { name: "Express", color: "purple" },
//               ],
//             },
//             {
//               title: "E-commerce Platform",
//               description:
//                 "A full-stack e-commerce platform built with React and Node.js.",
//               image:
//                 "https://storage.googleapis.com/a1aa/image/xDjWxUMUz3Du3GJW3X7a345P-reaxPmURhtSGwBk1Rc.jpg",
//               techStack: [
//                 { name: "React", color: "blue" },
//                 { name: "Node.js", color: "green" },
//                 { name: "MongoDB", color: "orange" },
//                 { name: "Express", color: "purple" },
//               ],
//             },
//           ].map((project, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 dark:border dark:border-blue-300 rounded-lg overflow-hidden xs:w-full"
//             >
//               <img
//                 className="h-50 w-full object-cover object-end"
//                 src={project.image}
//                 alt={project.title}
//               />
//               <div className="p-6">
//                 <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
//                   {project.title}
//                 </h4>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.techStack.map((tech, index) => (
//                     <div
//                       key={index}
//                       className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:bg-gray-700 text-secondary dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
//                     >
//                       {tech.name}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex justify-center space-x-4">
//                   <HashLink
//                     to="#"
//                     className="px-4 py-2 border border-purple-600 hover:text-purple-800 dark:text-purple-200 rounded-md btn-bg flex items-center"
//                   >
//                     <FaGithub className="mr-2" /> View Code
//                   </HashLink>
//                   <HashLink
//                     to="#"
//                     className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center"
//                   >
//                     <FaExternalLinkAlt className="mr-2" /> Live Demo
//                   </HashLink>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ContactSection = () => {
//   return (
//     <section id="contact" className="py-16 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-center text-4xl  my-5 font-bold text-purple-600 dark:text-purple-400 ">
//           Contact
//         </h2>
//         <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-200">
//           Want to contact us? Choose an option below and we'll be happy to show
//           you how we can transform your company's web experience.
//         </p>
//       </div>
//       <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
//         <div className="space-y-4">
//           <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-200">
//             <div className="flex p-2 items-center justify-center rounded-full bg-green-900 text-gray-300">
//               <FaMapMarkerAlt className="w-5 h-5" />
//             </div>
//             <span>Surat, Gujarat, India</span>
//           </div>
//           <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-200">
//             <div className="flex p-2 items-center justify-center rounded-full bg-green-900 text-gray-300">
//               <FaEnvelope className="w-5 h-5" />
//             </div>
//             <p className="">hello@company.com</p>
//           </div>
//           <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-200">
//             <div className="flex p-2 items-center justify-center rounded-full bg-green-900 text-gray-300">
//               <FaPhone className="w-5 h-5" />
//             </div>
//             <p className="">+91 11111111111</p>
//           </div>
//         </div>
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ring-1 ring-green/20">
//           <form>
//             <input type="checkbox" id="" className="hidden" name="botcheck" />
//             <div className="mb-5">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 autoComplete="false"
//                 className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
//                 name="name"
//               />
//             </div>
//             <div className="mb-5">
//               <label htmlFor="email_address" className="sr-only">
//                 Email Address
//               </label>
//               <input
//                 id="email_address"
//                 type="email"
//                 placeholder="Email Address"
//                 autoComplete="false"
//                 className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
//                 name="email"
//               />
//             </div>
//             <div className="mb-3">
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
//                 name="message"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// const FooterSection = () => {
//   return (
//     <footer class=" dark:bg-gray-900">
//       <hr class=" border-gray-300 sm:mx-auto dark:border-gray-700" />
//       <div class="mx-auto p-6 md:flex md:items-center md:justify-between lg:px-8">
//         <div class="mt-8 md:order-1 md:mt-0">
//           <p class="text-center text-sm text-black dark:text-white">
//             © 2025 Divyang Radadiya. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

const MainContent = () => {
  return (
    <main className="">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default MainContent;
