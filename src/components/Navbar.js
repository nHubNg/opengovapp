import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import glogo from "../assets/open-global.png";

import logo from "../assets/Frame 6.png";
import jwt_decode from "jwt-decode";
// import { NavItem } from "react-bootstrap";
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
  // const [hover, setHover] = useState(false);

  // hover function
  // const isHover = () => {
  //   setHover(!hover);
  // };

  const navItem = [
    {
      id: 1,
      name: "Home",
      link: "/",
      dropdown: false
    },
    {
      id: 2,
      name: "About us",
      link: "#",
      dropdown: true
    },
    {
      id: 3,
      name: "Invest in Plateau",
      link: "#",
      dropdown: false
    },
    {
      id: 4,
      name: "Investors Highlight",
      link: "/lga",
      dropdown: false
    },
    {
      id: 4,
      name: "Media and Events",
      link: "#",
      dropdown: false
    },
    {
      id: 5,
      name: "Contact",
      link: "/ContactPage",
      dropdown: false
    },
    {
      id: 6,
      name: "Team",
      link: "/team",
      dropdown: false
    }
  ]

  return (
    <nav className=" ">
      <div className="first-nav flex justify-between items-center mx-8 md:w-3/4 md:mx-auto py-2 bg-white">
        <div className="logo items-center flex ">
          {/* <img class="block h-8 w-auto mr-2" src={glogo} alt="Workflow" /> */}

          <Link to="/">
            <img class="block w-25 h-12 " src={logo} alt="Workflow" />
          </Link>

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
            {navItem.map((item) => (
              <NavLink to={item.link} className={`hover:underline hover:underline-offset-8 text-sm font-semibold hover:text-primary px-3 py-2 rounded-md active:text-secondary ${({isActive}) => isActive && "text-secondary"} `} key={item.id}>
              {item.name}
            </NavLink>
            ))}
          </div>
          {/* 
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
                  to="/Regiser"
                  class="bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one "
                >
                  Login / Register
                </Link>
              )
            ) : (
              <Link
                to="/Register"
                class="bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one "
              >
                Login / Register
              </Link>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
}
