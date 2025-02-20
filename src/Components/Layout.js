import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Loader from "./Loader";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      <img
        className="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%] md:max-w-[25%] lg:max-w-[20%] xl:max-w-[15%] 2xl:max-w-[12%] transform transition-all duration-300 hover:scale-105"
        src="https://themewagon.github.io/pinwheel/images/banner-shape.svg"
        alt="Decorative banner shape"
      />

      <div className="flex-1 flex flex-col justify-start items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto">
        <React.Suspense fallback={<Loader />}>
          <Outlet />
        </React.Suspense>
      </div>
    </div>
  );
};

export default memo(Layout);
