import React, { memo } from "react";

const Loader = memo(() => (
  <div className="flex justify-center items-center h-screen">
    <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
  </div>
));

export default Loader;
