import React from "react";
import Navbar from "../components/Navbar";

import file from "../files/doc.pdf";

const Resources = () => {
  return (
    <div>
      <Navbar />
      <div className=" h-screen px-20 py-14 bg-img bg-cover">
      <h1 className="font-bold text-white text-2xl mb-5">Plateau State Strategy Plan 2019-2024</h1>
      <object data={file} className="w-[70%] h-[75%]"> 
        </object>
        <a href={file} download>
          <button className="bg-secondary mt-5 text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 md:px-11 py-3 rounded-one">
            Download Document
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resources;
