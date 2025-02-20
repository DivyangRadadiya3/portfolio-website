import React, { useState, useEffect, useCallback, memo } from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  const handleMount = () => {
    setMounted(true);
  };

  useEffect(() => {
    handleMount();
  }, []);

  const fadeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    onHoverStart: {
      transform: 'scale(1.1)',
    },
    onHoverEnd: {
      transform: 'scale(1)',
    },
  });

  const [backgroundAnimation, setBackgroundAnimation] = useSpring(() => ({
    backgroundPosition: "0% 50%",
    backgroundSize: "200% 200%",
    from: { backgroundPosition: "100% 50%", backgroundSize: "200% 200%" },
    config: { duration: 3000 },
    loop: true,
  }));

  const handleMouseEnter = () => {
    setBackgroundAnimation.start({
      backgroundPosition: "100% 50%",
      backgroundSize: "200% 200%",
    });
  };

  const handleMouseLeave = () => {
    setBackgroundAnimation.start({
      backgroundPosition: "0% 50%",
      backgroundSize: "200% 200%",
    });
  };

  if (!mounted) return null;

  return (
    // <section className="min-h-full py-24 dark:bg-gray-900">
      <animated.section
        className="min-h-full py-24 dark:bg-gray-900"
        style={backgroundAnimation}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="absolute left-0 top-[34rem] -z-[1] -translate-y-1/2"
          src="https://themewagon.github.io/pinwheel/images/icons/feature-shape.svg"
          alt=""
        />
        <div className="text-center container mx-auto">
          <animated.h1
            className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-bold bg-gradient-to-r from-yellow-400 to-green-400 text-wrap text-transparent bg-clip-text whitespace-nowrap leading-snug md:leading-normal lg:leading-relaxed font-mono"
            style={fadeAnimation}
          >
            Hi I'm Divyang Radadiya
          </animated.h1>

          <animated.p
            className="mt-5 text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            style={fadeAnimation}
          >
            A passionate React developer focused on creating high-performance
            web applications.
          </animated.p>
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
          className="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
          src="https://themewagon.github.io/pinwheel/images/banner-shape.svg"
          alt=""
        />
      </animated.section>
    // </section>
  );
};

export default memo(Home);
