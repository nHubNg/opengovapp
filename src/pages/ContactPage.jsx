import { Link } from "react-router-dom";
import header from "../assets/header.png";
import Navbar from "../components/Navbar";
import Map from "./Map";

const ContactPage = () => {
  return (
    <div>
      <div className=" fixed bg-white z-20 top-0 left-0 w-full shadow-lg">
        <Navbar />
      </div>
      <div className="flex">
        <div className="w-full md:w-[40%] absolute z-10 col-span-2 bg-gradient-to-r from-brand1 to-brand2 flex justify-center h-screen items-center">
          <div className=" absolute left-5  z-10 opacity-75">
            <img src={header} alt="" />
          </div>
          <div className="block p-6 py-10 rounded shadow-lg bg-white max-w-md z-20 w-[60%]">
            <form>
              <div className="mb-6">
                <Input type="text" placeholder="Enter Name" />
              </div>
              <div className="mb-6">
                <Input type="email" placeholder="Email address" />
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
        m-0
        focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none
      "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group form-check text-center mb-6">
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
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-secondary text-white font-medium text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-secondary hover:shadow-lg
      focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-secondary active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="hidden md:block col-span-3  h-screen w-[60%] absolute right-0 top-0">
          <Map />
        </div>
      </div>
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
        m-0
        focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none"
      id="exampleInput8"
      placeholder={placeholder}
    />
  );
};

export default ContactPage;
