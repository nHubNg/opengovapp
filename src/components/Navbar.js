import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

import logo from "../assets/Frame 6.png";
import jwt_decode from "jwt-decode";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const token = localStorage.token;
console.log(token);
const decoded =
  token === "undefined" || token === undefined ? "" : jwt_decode(token);

console.log(decoded);

export default function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    await localStorage.removeItem("token");
    navigate("/auth");
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [menu, setMenu] = useState(-1);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navItem = [
    {
      id: 1,
      name: "Home",
      link: "/",
      dropdown: false,
    },
    {
      id: 2,
      name: "About us",
      link: "/about-us",
      dropdown: true,
      dropDownMenu: [
        "Our Principles",
        "Our Governance",
        "Economic Advisory Council",
        "Client Character",
        "MDA partners",
      ],
    },
    {
      id: 3,
      name: "Invest in Plateau",
      link: "/invest",
      dropdown: false,
    },
    {
      id: 4,
      name: "Industries",
      link: "/lga",
      dropdown: true,
      dropDownMenu: ["Investment Resources", "Investors Highlight"],
    },
    {
      id: 5,
      name: "Media and Events",
      link: "/media",
      dropdown: true,
      dropDownMenu: ["News", "Events", "Gallery"],
    },
    {
      id: 6,
      name: "Contact",
      link: "/ContactPage",
      dropdown: true,
      dropDownMenu: ["Enquiries", "Feedback", "Survey", "Contact"],
    },
    {
      id: 7,
      name: "Team",
      link: "/team",
      dropdown: false,
    },
  ];

  const check = (event) => {
    if (
      event.target.classList.contains("drop-down") ||
      event.target.classList.contains("dd-menu")
    ) {
      if (event.target.id) {
        let id = +event.target.id;
        setMenu(id - 1);
      }
    } else {
      setMenu(-1);
    }
  };

  return (
    <nav
      onMouseOver={check}
      onMouseLeave={() => setMenu(-1)}
      className="relative flex h-[64px]"
    >
      <div
        className={`${
          menu > -1 ? "z-10 opacity-100" : "z-0 opacity-0"
        } bg-[#004252] w-full h-[40px] absolute -bottom-[40px] transition ease-in`}
      ></div>
      <div className="first-nav flex justify-between items-center w-full mx-8 md:w-3/4 md:mx-auto bg-white">
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

        <div className={`hidden md:block  sm:ml-6 pt-1 pl-3`}>
          <div class="flex space-x-4 h-full item-center">
            {navItem.map((item) => (
              <NavLink
                to={item.link}
                style={({ isActive }) => ({
                  fontSize: "14px",
                  fontWeight: "600",
                  margin: "0 18px",
                  width: "max-content",
                  color: isActive && "#F78251",
                })}
                className={`hover:text-primary`}
                key={item.id}
              >
                <li
                  className={`${
                    menu === item.id - 1 ? "relative" : ""
                  } list-none flex flex-col justify-center w-full h-full`}
                >
                  <span
                    id={item.id}
                    className={`${
                      item.dropdown ? "drop-down" : ""
                    } flex items-center py-[20px]`}
                  >
                    {item.name}
                    {item.dropdown && <MdKeyboardArrowDown className="ml-1" />}
                  </span>

                  <div
                    className={`${
                      menu === item.id - 1
                        ? "opacity-100 z-10 dd-menu"
                        : "opacity-0 z-0"
                    } bg-[#004252] text-white flex items-center justify-between w-max h-[40px] absolute left-[50%] -bottom-[39px] -translate-x-[50%] transition ease-in delay-100`}
                  >
                    {menu > -1 &&
                      navItem[menu].dropDownMenu.map((link, index) => (
                        <motion.span
                          className="dd-menu mx-4"
                          whileHover={{ color: "#F78251" }}
                          key={index}
                        >
                          {link}
                        </motion.span>
                      ))}
                  </div>
                </li>
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
