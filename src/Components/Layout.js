import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start fade-out animation
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Match this duration with your fade-out duration

    return () => clearTimeout(timer);
  }, [isVisible]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className={` transition-opacity duration-300 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
