import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import glogo from "../assets/open-global.png";

import logo from "../assets/logo.png";


export default () => (
  <nav className=" ">
    <div className="first-nav flex justify-between w-3/4 mx-auto py-4 bg-white">
    <div className="logo items-center flex ">
              <img class="block h-8 w-auto mr-2" src={glogo} alt="Workflow" />
              <img class="block w-8 h-8 " src={logo} alt="Workflow" />

              <h1 className="font-bold text-secondary text-xl">
                pen
                <span className="text-primary text-center mt-auto">
                  Government Partnership
                </span>
              </h1>
            </div>
      <div class="hidden sm:block sm:ml-6 pt-1 pl-3">
        <div class="flex space-x-4">
          <a
            href="#"
            class="  hover:text-white px-3 py-2 rounded-md text-sm  font-semibold"
            aria-current="page"
          >
            Home
          </a>

          <a
            href="#"
            class=" hover:underline underline-offset-8    text-sm font-semibold  hover:text-white px-3 py-2 rounded-md "
          >
            Report
          </a>

          <a
            href="#"
            class="   text-sm font-semibold  hover:text-white px-3 py-2 rounded-md "
          >
            About
          </a>

          <Link
            to="/auth"
            class="bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one "
          >
            Login / Register
          </Link>
        </div>
      </div>
    </div>

    <div className="second-nav bg-primary py-2 mt-4 shadow-2xl">
      <div className="nav-links  mx-48 ">
        <a
          href="#"
          class=" text-secondary  text-sm font-semibold  hover:text-white px-3 py-2 rounded-md "
        >
          Pages
        </a>
        <a
          href="#"
          class=" text-white pl-8 text-sm font-semibold  hover:text-white px-3 py-2 rounded-md "
        >
          About
        </a>
        <a
          href="#"
          class=" text-white pr-8  text-sm font-semibold  hover:text-white px-3 py-2 rounded-md "
        >
          Dashbaord
        </a>
      </div>
    </div>
  </nav>
);
