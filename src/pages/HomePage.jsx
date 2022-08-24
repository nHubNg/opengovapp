import Navbar from "../components/Navbar";

import banner_pic from "../assets/Group 2063.png";
import img_2 from "../assets/[GetPaidStock 3.png";
import img_3 from "../assets/british.jpg";
import img_4 from "../assets/british2.jpg";
import img_5 from "../assets/british3.webp";
import headerPic from "../assets/header.png";
import logo from "../assets/Frame 6.png";

import img_logo from "../assets/logo.png";
import glogo from "../assets/open-global.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="wrapper overflow-x-hidden">
      <div className="header">
        <Navbar />
        <div className="h-auto md:min-h-[603px] bg-img md:relative">
          {/* Header img */}
          <img
            src={headerPic}
            className="hidden lg:block absolute z-20 ml-10 mt-[30px] w-[120px]"
            alt=""
          />
          <div className="content py-28 md:w-3/4 md:mx-48 md:flex md:flex-col md:items-center mx-4">
            <h1 className="text-white text-2xl md:text-5xl font-extrabold capitalize text-center">
              Plateau State-One <br /> Stop Investment Centre
            </h1>
            <p className="text-white leading-6 font-light text-lg pt-10 md:w-2/4 text-center">
              The official platform for Plateau state Investment. Bringing
              investors closer to their soon-to-be investments.
            </p>
            <div className="heder-btns pt-10">
              <Link
                to="/auth"
                class="bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 md:px-11 py-3 rounded-one"
              >
                Investors Highlights
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="post md:mx-48 md:absolute md:top-80 md:pt-64">
          <div className="card grid grid-cols-1 md:grid-cols-2">
            <div className="card shadow-2xl bg-white flex py-4 px-4 ">
              <div className="rounded-full h-8 w-auto bg-white">
                <img
                  src={glogo}
                  alt=""
                  className="rounded-full object-fit w-full"
                  style={{ maxHeight: "150px" }}
                />
              </div>
              <div className="content px-10">
                <h1 className="text-primary capitalize text-lg font-extrabold">
                  Open government partnership
                </h1>
                <p className="pt-2 text-sm leading-6 font-light">
                  OGP, Open Government Partnership is a global partnership made
                  up of people from different works of life including;
                  government, civil society, business, non-profits, and more.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.opengovpartnership.org/about/who-we-are/"
                    className="uppercase text-secondary text-extrabold text-xs"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="card shadow-2xl bg-primary flex py-4 px-4">
              <div className="rounded-full h-8 w-auto bg-primary">
                <img
                  src={img_logo}
                  alt=""
                  className="rounded-full object-fit w-full"
                  style={{ maxHeight: "150px" }}
                />
              </div>
              <div className="content px-10">
                <h1 className="text-white capitalize text-lg font-extrabold">
                  Open government partnership Plateau, Nigeria
                </h1>
                <p className="pt-2 text-white text-sm leading-2 font-light">
                  Plateau State joined OGP as part of the 2020 cohort. We are
                  currently implementing six commitments from our 2021-2023
                  action plan.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.opengovpartnership.org/about/who-we-are/"
                    className="uppercase text-secondary text-extrabold text-xs"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="citizen-engament md:mt-80 mx-10 mt-20 md:mb-32 mb-10 md:mx-48 ">
          <div className="content grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text">
              <h1 className=" capitalize text-3xl font-medium">Why </h1>
              <h1 className="text-secondary text-3xl pt-2 font-medium">
                Plateau...{" "}
              </h1>
              <p className="pt-6 text-sm leading-6">
                Plateau State is the twelfth largest state in the country with a
                unique geographical location. Her wide range of natural
                resources and rich soil has been a major source of revenue
                generation for many years. The state records a large number of
                Micro, Small and Medium business owners with fantastic growth
                records with time. Plateau state contains a people dedicated to
                growth and development in business and investment and has a
                large export of great minds to other parts of the country.
              </p>

              {/* <div className="mt-8">
                <a
                  href="/auth/"
                  class="bg-secondary2 shadow-md text-primary capitalize   text-sm font-semibold  hover:text-primary  px-4 py-3 rounded-one "
                >
                  Login / Register
                </a>
              </div> */}
            </div>
            <div className="img bg-primary h-auto">
              <img src={banner_pic} alt="" width="100%" height="" />
            </div>
          </div>
        </div>

        <section className="bg-secondary2">
          <div className="current-action md:mx-48 mx-10 pt-20 pb-20">
            <div className="heading">
              <h1 className="capitalize text-3xl font-medium">
                Our <span className="text-secondary font-medium">Services</span>
              </h1>
              {/* <p className="pt-4 text-sm leading-6">
                Plateau joined OGP as part of the 2020 cohort. We are currently
                executing our first action plan centerd
              </p> */}
            </div>
            <div className="cards mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card shadow-2xl bg-primary py-4 px-4  ">
                <div className="content px-5 py-8">
                  <h1 className="text-white capitalize text-lg font-extrabold">
                    Investment Promotiona & Facilitation
                  </h1>
                  <p className="pt-6 text-sm leading-6 font-light text-white">
                    To provide capacity building for development of online
                    investment guides
                  </p>
                  {/* <h4
                    style={{
                      color: "white",
                      fontWeight: "bolder",
                      textDecoration: "underline",
                      marginTop: "1.5rem",
                    }}
                  >
                    Commitment
                  </h4> */}
                  <ul class="pt-2">
                    <li
                      class="p-2 text-white text-sm font-light"
                      style={{ listStyleType: "disc" }}
                    >
                      Advisory services
                    </li>

                    <li
                      class="p-2 text-white text-sm font-light"
                      style={{ listStyleType: "disc" }}
                    >
                      Training
                    </li>

                    <li
                      class="p-2 text-white text-sm font-light"
                      style={{ listStyleType: "disc" }}
                    >
                      Capacity building
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card shadow-2xl bg-primary py-4 px-4  ">
                <div className="content px-5 py-8">
                  <h1 className="text-white capitalize text-lg font-extrabold">
                    Aftercare Services
                  </h1>
                  <p className="pt-6 text-sm leading-6 font-light text-white">
                    Post-investment customer services to follow up and earn
                    customer's trust on
                  </p>
                  {/* <h4
                    style={{
                      color: "white",
                      fontWeight: "bolder",
                      textDecoration: "underline",
                      marginTop: "1.5rem",
                    }}
                  >
                    Commitment
                  </h4> */}
                  <ul class="pt-2">
                    <li
                      class="p-2 text-white text-sm font-light"
                      style={{ listStyleType: "disc" }}
                    >
                      Communications
                    </li>

                    <li
                      class="p-2 text-white text-sm font-light"
                      style={{ listStyleType: "disc" }}
                    >
                      Actions
                    </li>

                    <li
                      class="p-2 text-white text-sm font-light"
                      style={{ listStyleType: "disc" }}
                    >
                      Processes
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card shadow-2xl bg-primary py-4 px-4  ">
                <div className="content px-5 py-8">
                  <h1 className="text-white capitalize text-lg font-extrabold">
                    Business Development Services
                  </h1>
                  <p className="pt-6 text-sm leading-6 font-light text-white">
                    Non-financial services used by entrepreneurs to help improve
                    business
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-cards md:w-2/4 md:mx-auto mx-10  py-10">
            <div className="cards  grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card border-4 border-t-0 border-x-0 border-b-secondary shadow-2xl bg-white py-4 px-4  ">
                <div className="content px-5 py-8">
                  <h1 className="text-black capitalize text-lg font-extrabold">
                    Policy Advocacy
                  </h1>
                  <p className="pt-6 text-sm leading-6 font-light text-black">
                    To create, reform and change policies and ensure that
                    policies are well implemented
                  </p>

                  <ul class="pt-2">
                    <li
                      class="p-2 text-black text-sm font-light"
                      style={{ listStyleType: "disc" }}
                    >
                      Build
                    </li>

                    <li
                      class="p-2 text-black text-sm font-light"
                      style={{ listStyleType: "disc" }}
                    >
                      Engage
                    </li>

                    <li
                      class="p-2 text-black text-sm font-light"
                      style={{ listStyleType: "disc" }}
                    >
                      Influence
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card shadow-2xl bg-white py-4 px-4 border-4 border-t-0 border-x-0 border-b-secondary  ">
                <div className="content px-5 py-8">
                  <h1 className="text-black capitalize text-lg font-extrabold">
                    Provision of Informations on Investment Opportunities
                  </h1>
                  <p className="pt-6 text-sm leading-6 font-light text-black">
                    Prividing prompt and updated informations on investment
                    opportunities for collaboration and growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-10">
          <div className="citizen-engament pt-5 md:mx-48 mx-10">
            <div className="content grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text">
                <h1 className=" text-white font-extrabold capitalize text-3xl">
                  Investment
                </h1>
                <h1 className="text-secondary font-extrabold text-3xl pt-1">
                  News
                </h1>
                <p className="pt-6 text-sm text-white leading-6">
                  We are working to provide reliable updates and informations on
                  profitable investments and requirements for investors and
                  MSMEs.
                </p>

                <div className="bg-secondary mt-4">
                  <p className="pt-6 text-sm text-white leading-6 py-6 px-6">
                    Equiping our audience with essential information on
                    invstments, investors and relevant stakeholders. Following
                    up on funding opportunities, funding activities and
                    providing esssential updates on networking opportunities to
                    scale businesses in different stages
                  </p>
                </div>
              </div>
              <div className="img bg-white h-auto">
                <img src={img_2} alt="" width="100%" height="100" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="current-action md:mx-48 mx-10 pt-20 pb-20">
            <div className="heading">
              <h1 className=" capitalize text-2xl">
                Our <span className="text-secondary">Mandate</span>
              </h1>
            </div>
            <div className="cards mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card relative shadow-2xl bg-white ">
                <div className="content">
                  <h4 className="mt-6 text-center text-gray-600 font-semibold">
                    Boost affordable business
                  </h4>

                  <p className="pt-6 px-5 py-8 text-sm leading-6 font-light text-black">
                    To reduce cost of doing business in Plateau state through
                    transparent dealings with MSME's and investors.
                  </p>
                </div>
              </div>

              <div className="card relative shadow-2xl bg-white  ">
                <div className="content">
                  <h4 className="mt-6 text-center text-gray-600 font-semibold">
                    Pioneer reforms & easy admin procedures
                  </h4>
                  <p className="pt-6 px-5 py-8 text-sm leading-6 font-light text-black">
                    To trigger reforms in the public sector by advocating and
                    following up the adoption of best practices.To also simplify
                    administrative proceess for issuing licences and permits
                  </p>
                </div>
              </div>

              <div className="card relative shadow-2xl bg-white">
                <div className="content">
                  <h4 className="mt-6 text-center text-gray-600 font-semibold">
                    Foster smooth investing
                  </h4>

                  <p className="pt-6 px-5 py-8 text-sm leading-6 font-light text-black">
                    To remove the challenges faced by MSME's and investors in
                    establishing and running their business and provide
                    efficiancy and transparency in business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer bg-secondary2  py-20 h-auto underline-offset-4 ">
          <div className="section md:mx-48 mx-10">
            <div className="content grid grid-cols-1 font-semi-bold md:grid-cols-4 gap-8">
              <div className="card">
                {/* <h1 className="text-primary text-2xl text-center">
                  OGP Plateau
                </h1> */}
                <img src={logo} alt="" />
              </div>

              <div className="card flex flex-col items-start">
                <h1 className="text-primary text-2xl text-center">Socials</h1>
                <div className="link pt-4 flex flex-col items-start">
                  <p className="pt-2 text-sm">
                    <a href="">Facebook</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Instagram</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Twitter</a>
                  </p>
                  {/* <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Gender Commitment</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Peace and Security</a>
                  </p>{" "} */}
                </div>
              </div>
              <div className="card flex flex-col items-start">
                <h1 className="text-primary text-2xl text-center">Events</h1>
                <div className="link pt-4">
                  <p className="pt-2 text-sm">
                    <a href="">E-news Letters</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Gallery</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Investment News</a>
                  </p>
                  {/* <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Approved Reports</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Reports</a>
                  </p>{" "} */}
                </div>
              </div>
              <div className="card flex flex-col items-start">
                <h1 className="text-primary text-2xl text-center">
                  Quick LInks
                </h1>
                <div className="link pt-4">
                  <p className="pt-2 text-sm">
                    <a href="">Why Plateau</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Investors Highlights</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">OSIC</a>
                  </p>
                  {/* <p className="pt-2 text-sm ">
                    {" "}
                    <a href="">Open Contracting</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">All Downloads</a>
                  </p>{" "} */}
                </div>
              </div>
            </div>
            <hr className="mt-10 border-2 bg-inputcolor" />
            <p className="text-center text-sm">
              Copyright © <span>{new Date().getFullYear()}</span> PS-OSIC. All
              Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
