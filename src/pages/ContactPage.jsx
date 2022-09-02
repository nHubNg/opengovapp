// import { Link } from "react-router-dom";
// import header from "../assets/header.png";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Map from "./Map";

const ContactPage = () => {
  return (
    <div>
      <div className="fixed bg-white z-20 top-0 left-0 w-full shadow-lg">
        <Navbar />
      </div>

      <div className="h-screen bg-img bg-cover flex items-center mt-10">

        <div className=" grid grid-cols-1 md:grid-cols-2 w-[70%] md:mx-auto md:h-[80%] shadow-2xl">
          <div className="bg-white text-slate-800 flex flex-col justify-center p-10">
            <h1 className="text-secondary text-2xl text-center font-bold">Contact Us</h1>
            <form className="mt-5">
              <div className="mb-6">
                <Input type="text" placeholder="Name" />
              </div>
              <div className="mb-6">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        shadow-sm
        m-0
        focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none
      "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="What do you want to say?"
                ></textarea>
              </div>
              {/* <div className="form-group form-check text-center mb-6">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-secondary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="Check87"
                  checked
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  for="exampleCheck87"
                >
                  Send me a copy of this message
                </label>
              </div> */}
              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-secondary text-white font-medium text-xs
      leading-tight
      uppercase
      rounded
      shadow-lg
      hover:bg-secondary hover:shadow-lg
      focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-secondary active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                SEND
              </button>
            </form>
          </div>
          <div className="bg-img2 bg-cover"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};


const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        shadow-sm
        m-0
        focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none"
      id="exampleInput8"
      placeholder={placeholder}
    />
  );
};

export default ContactPage;
