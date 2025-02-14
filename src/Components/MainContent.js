import React, { lazy, Suspense, memo } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

const MainContent = memo(() => {
  return (
    <main className="">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
});

export default MainContent;
