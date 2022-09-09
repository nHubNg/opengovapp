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
      className="w-full h-[60px] px-4 bg-white flex items-center relative justify-between lg:px-16 lg:justify-around"
    >
      {/* Nav Underlay */}
      <div
        className={`${
          menu > -1 ? "z-[50] opacity-100" : "-z-[50] opacity-0"
        } hidden bg-[#004252] w-full h-[45px] absolute top-[60px] transition ease-in-out lg:block`}
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
          className="lg:hidden text-2xl cursor-pointer"
        />
      ) : (
        <div
          onClick={() => setNavbarOpen(!navbarOpen)}
          class="lg:hidden flex items-center"
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
        } absolute top-[60px] w-full pt-3 h-screen items-start bg-[#004252] flex flex-col z-[15] lg:z-50 lg:items-center lg:flex-row lg:h-full lg:mr-[70px] lg:bg-white lg:static lg:w-max lg:pt-0`}
      >
        {navbarLinks.map((link) => (
          <NavLink
            className={`${
              link.dropdown ? "drop-down relative" : ""
            } font-normal bg-[#004252] py-[10px] w-full flex flex-col text-white lg:flex-row lg:mx-3 lg:pt-2 lg:w-max lg:items-center lg:text-black lg:hover:text-[#004252] lg:h-full lg:bg-white`}
            style={({ isActive }) => ({
              color: isActive && "rgb(2, 167, 90)",
            })}
            to={link.link}
            key={link.id}
            id={link.id}
          >
            <li className={`${link.dropdown ? "drop-down" : ""} ml-3 lg:ml-0`}>
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
                    ? "max-h-[250px] lg:opacity-100 lg:z-[50]"
                    : "max-h-0 lg:opacity-0 lg:-z-[50]"
                } dd-menu bg-white text-black flex flex-col items-start w-full h-max overflow-auto lg:flex-row lg:absolute lg:items-center lg:h-[45px] lg:max-h-max transition ease-in-out delay-75 lg:top-[60px] lg:left-[50%] lg:-translate-x-[50%] lg:bg-[#004252] lg:w-max lg:text-white`}
              >
                {link.dropDownMenu.map((dropItem, index) => (
                  <span
                    onClick={(e) => handleNavigate(e, link.link, dropItem.path)}
                    key={index}
                    className="dd-menu py-2 px-3 lg:py-0 lg:mx-2 hover:text-secondary"
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
