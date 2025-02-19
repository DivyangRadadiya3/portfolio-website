import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Loader from "./Loader";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <img
        class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
        src="https://themewagon.github.io/pinwheel/images/banner-shape.svg"
        alt=""
      />
      <div className="flex-1 flex justify-center items-center overflow-none p-4 sm:p-8">
        <React.Suspense fallback={<Loader />}>
          <Outlet />
        </React.Suspense>
      </div>
    </div>
  );
};

export default memo(Layout);
