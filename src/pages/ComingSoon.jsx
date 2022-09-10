import React from "react";
import Navbar from "../components/Navbar";

const ComingSoon = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-full flex justify-center items-center bg-img bg-cover">
        <h1 className="text-3xl font-bold text-white">Coming Soon!</h1>
      </div>
    </div>
  );
};

export default ComingSoon;
