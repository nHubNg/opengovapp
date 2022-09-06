import React from "react";
import Navbar from "../components/Navbar";

const Gallery = () => {
  const images = [
    {
      id: 1,
      link: "https://images.unsplash.com/photo-1627897495484-229b29feb0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 2,
      link: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      link: "https://images.unsplash.com/photo-1591848478625-de43268e6fb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      link: "https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      link: "https://images.unsplash.com/photo-1505421031134-e57263cae630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=845&q=80",
    },
    {
      id: 6,
      link: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      id: 7,
      link: "https://images.unsplash.com/photo-1529245019870-59b249281fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-full">
        <div className="w-full h-[70px] bg-gradient-to-r from-brand2 to-brand1 py-5 text-white">
          <div className="w-3/4 mx-auto">
            <h1 className="text-2xl font-bold">Photo Gallery</h1>
          </div>
        </div>
        <div className="flex flex-wrap py-5 w-3/4 mx-auto justify-evenly">
          {images.map((item) => (
            <img src={item.link} className="h-[min-content] w-full my-auto p-2 rounded-2xl lg:w-1/3 md:w-1/2" alt="" key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
