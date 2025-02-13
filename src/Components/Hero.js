import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <section 
      className={`flex items-center justify-center h-screen bg-gray-800 text-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="text-center">
        <h1 
          className={`text-5xl font-bold transform transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-12'}`}
        >
          Hello, I'm Divyang Radadiya
        </h1>

        <p 
          className={`mt-4 text-lg transform transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-12'}`}
        >
          I'm a ReactJs Developer
        </p>

        <a 
          href="#projects" 
          className={`mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg transform transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;