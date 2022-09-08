import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Frame 6.png";
import { MdKeyboardArrowDown, MdOutlineClose } from "react-icons/md";
import { navbarLinks } from "../data/navbarLinks";
import { motion } from "framer-motion";

export default function Navbar() {
  let navigate = useNavigate();
  const [menu, setMenu] = useState(-1);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavigate = (e, link, sublink) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`${link}/${sublink}`);
  };

  const handleHover = (e) => {
    if (
      e.target.classList.contains("drop-down") ||
      e.target.classList.contains("dd-menu")
    ) {
      if (e.target.id || e.target.parentElement.id) {
        let id = +e.target.id || +e.target.parentElement.id;
        setMenu(id);
      }
    } else {
      setMenu(-1);
    }
  };

  const handleDropDown = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (menu === id) {
      setMenu(-1);
    } else {
      setMenu(id);
    }
  };

  return (
    <nav
      onMouseOver={handleHover}
      onMouseLeave={() => setMenu(-1)}
      className="w-full h-[60px] px-4 bg-white flex items-center relative justify-between md:px-16 md:justify-around"
    >
      {/* Nav Underlay */}
      <div
        className={`${
          menu > -1 ? "z-[50] opacity-100" : "-z-[50] opacity-0"
        } hidden bg-[#004252] w-full h-[45px] absolute top-[60px] transition ease-in-out md:block`}
      ></div>
      {/* Nav Logo */}
      <Link to="/">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      {/* Hamburger Icon */}
      {navbarOpen ? (
        <MdOutlineClose
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden text-2xl cursor-pointer"
        />
      ) : (
        <div
          onClick={() => setNavbarOpen(!navbarOpen)}
          class="md:hidden flex items-center"
        >
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
      )}
      {/* Nav Links */}
      <motion.ul
        animate={{ left: navbarOpen ? 0 : "-100%" }}
        className={`${
          navbarOpen ? "left-0" : "-left-full"
        } absolute top-[60px] w-full pt-3 h-screen items-start bg-[#004252] flex flex-col z-[15] md:z-50 md:items-center md:flex-row md:h-full md:mr-[70px] md:bg-white md:static md:w-max md:pt-0`}
      >
        {navbarLinks.map((link) => (
          <NavLink
            className={`${
              link.dropdown ? "drop-down relative" : ""
            } font-normal bg-[#004252] py-[10px] w-full flex flex-col text-white md:flex-row md:mx-3 md:pt-2 md:w-max md:items-center md:text-black md:hover:text-[#004252] md:h-full md:bg-white`}
            style={({ isActive }) => ({
              color: isActive && "rgb(2, 167, 90)",
            })}
            to={link.link}
            key={link.id}
            id={link.id}
          >
            <li className={`${link.dropdown ? "drop-down" : ""} ml-3 md:ml-0`}>
              {link.name}
              {link.dropdown && (
                <MdKeyboardArrowDown
                  onClick={(e) => handleDropDown(e, link.id)}
                  className={`${link.dropdown ? "drop-down" : ""} ${
                    menu === link.id ? "rotate-180" : ""
                  } ml-2 inline-block transition`}
                />
              )}
            </li>
            {/* Dropdown Menu */}
            {link.dropdown && (
              <div
                className={`${
                  menu === link.id
                    ? "max-h-[250px] md:opacity-100 md:z-[50]"
                    : "max-h-0 md:opacity-0 md:-z-[50]"
                } dd-menu bg-white text-black flex flex-col items-start w-full h-max overflow-auto md:flex-row md:absolute md:items-center md:h-[45px] md:max-h-max transition ease-in-out delay-75 md:top-[60px] md:left-[50%] md:-translate-x-[50%] md:bg-[#004252] md:w-max md:text-white`}
              >
                {link.dropDownMenu.map((dropItem, index) => (
                  <span
                    onClick={(e) => handleNavigate(e, link.link, dropItem.path)}
                    key={index}
                    className="dd-menu py-2 px-3 md:py-0 md:mx-2 hover:text-secondary"
                  >
                    {dropItem.pathname}
                  </span>
                ))}
              </div>
            )}
          </NavLink>
        ))}
      </motion.ul>
    </nav>
  );
}
