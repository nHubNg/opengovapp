import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Link, useNavigate } from "react-router-dom";
// import glogo from "../assets/open-global.png";

import logo from "../assets/Frame 6.png";
import jwt_decode from "jwt-decode";
// import DropDown from "../components/DropDown"

const token = localStorage.token;
console.log(token);
const decoded =
  token === "undefined" || token === undefined ? "" : jwt_decode(token);

console.log(decoded);

export default function Navbar() {
  const navigate = useNavigate();

  const [navbarOpen, setNavbarOpen] = useState(false);

  const logout = async () => {
    await localStorage.removeItem("token");
    navigate("/auth");
  };

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Dropdown Hover
  const [hover, setHover] = useState(false);

  // hover function
  // const isHover = () => {
  //   setHover(!hover);
  // };

  return (
    <nav className=" ">
      <div className="first-nav flex justify-between mx-8 md:w-3/4 md:mx-auto py-4 bg-white">
        <div className="logo items-center flex ">
          {/* <img class="block h-8 w-auto mr-2" src={glogo} alt="Workflow" /> */}
          <img class="block w-25 h-12 " src={logo} alt="Workflow" />

          {/* <h1 className="font-bold hidden md:block text-secondary text-xs md:text-xl">
            pen
            <span className="text-primary text-center mt-auto ml-2">
              Government Partnership
            </span>
          </h1> */}
        </div>
        <Link to="" onClick={handleToggle}>
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
              <svg
                class="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </Link>

        <div className={` hidden md:block   sm:ml-6 pt-1 pl-3" `}>
          <div class="flex space-x-4 h-full item-center">
            <Link to="/">
              <a
                href="/"
                className={`hover:underline hover:underline-offset-8 text-sm font-semibold hover:text-primary px-3 py-2 rounded-md `}
              >
                Home
              </a>
            </Link>
            {/* <DropDown data={[{ id: 1, name: "test", link: "" }]} /> */}

            <Link to="/lga">
              <a
                href="#"
                class=" hover:underline hover:underline-offset-8 text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
              >
                Investors Highlight
              </a>
            </Link>

            {/* <Link to="/">
              <a
                href="#"
                class=" hover:underline hover:underline-offset-8    text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
              >
                About
              </a>
            </Link> */}

            <div>
            <Link to="/ContactPage">
              <a
                href="#"
                class=" hover:underline hover:underline-offset-8    text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
              >
                Contact
              </a>
            </Link>
          </div>

            {token != undefined || token != "undefined" ? (
              decoded.isLoggedIn ? (
                <Link
                  to="/auth"
                  onClick={logout}
                  class="bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-2 rounded-one "
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to="/auth"
                  class="bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one "
                >
                  Login / Register
                </Link>
              )
            ) : (
              <Link
                to="/auth"
                class="bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one "
              >
                Login / Register
              </Link>
            )}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${navbarOpen ? "  relative block w-full   " : "hidden"
          }`}
      >
        <div class="w-full space-y-8 item-center bg-white  shadow-xl pt-8 px-4 pb-20 h-screen">
          <div>
            <Link to="/">
              <a
                href="#"
                class=" hover:underline hover:underline-offset-8    text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
              >
                Home
              </a>
            </Link>
          </div>

          <div>
            <Link to="/">
              <a
                href="#"
                class=" hover:underline hover:underline-offset-8    text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
              >
                Feeds
              </a>
            </Link>
          </div>
          <div>
            <Link to="/">
              <a
                href="#"
                class=" hover:underline hover:underline-offset-8    text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
              >
                Contact
              </a>
            </Link>
          </div>
          <div>
            <Link to="/">
              <a
                href="#"
                class=" hover:underline hover:underline-offset-8    text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
              >
                About
              </a>
            </Link>
          </div>


          <div>
            {token != undefined || token != "undefined" ? (
              decoded.isLoggedIn ? (
                <Link
                  to="/auth"
                  onClick={logout}
                  class="bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-2 rounded-one "
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to="/auth"
                  class="bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one "
                >
                  Login / Register
                </Link>
              )
            ) : (
              <Link
                to="/auth"
                class="bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one "
              >
                Login / Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
