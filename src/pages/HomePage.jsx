import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import banner_pic from "../assets/Group 2063.png";
import img_2 from "../assets/[GetPaidStock 3.png";
// import img_3 from "../assets/british.jpg";
// import img_4 from "../assets/british2.jpg";
// import img_5 from "../assets/british3.webp";
import headerPic from "../assets/header.png";

// import img_logo from "../assets/logo.png";
// import glogo from "../assets/open-global.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import { content } from "../../tailwind.config";

const HomePage = () => {
  const content = [
    {
      id: 1,
      header: "The Agricultural Hub of Nigeria",
      // body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#FFFFFFA6]",
      img: "emojione-monotone:tractor",
    },
    {
      id: 2,
      header: "Major Hub of Mineral Resources",
      // body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#02A75ABF] text-white",
      img: "mdi:pickaxe",
    },
    {
      id: 3,
      header: "Accessibility",
      // body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "text-white",
      img: "bi:truck",
    },
    {
      id: 4,
      header: "Climate",
      // body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#003B49BF] text-white",
      img: "akar-icons:cloud",
    },
  ];

  const secondContent = [
    {
      id: 1,
      header: "Competitive and Productive Workforce",
      // body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#003B49BF] text-white",
      img: "akar-icons:people-group",
    },
    {
      id: 2,
      header: "Favourable Business Regulatory Environment",
      // body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "text-white",
      img: "bi:building",
    },
    {
      id: 3,
      header: "Peace an Security",
      // body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#02A75ABF] text-white",
      img: "carbon:group-security",
    },
    {
      id: 4,
      header: "Abundant Natural Resources",
      // body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#FFFFFFA6]",
      img: "fluent-emoji-high-contrast:rock",
    },
  ];

  const icons = [
    {
      id: 1,
      class: "fa6-solid:map-location-dot",
      text: "lorem ipsum",
    },
    {
      id: 2,
      class: "fluent-emoji-high-contrast:globe-showing-europe-africa",
      text: "lorem ipsum",
    },
    {
      id: 3,
      class: "fluent:people-16-filled",
      text: "lorem ipsum",
    },
    {
      id: 4,
      class: "fa6-solid:hill-rockslide",
      text: "lorem ipsum",
    },
    {
      id: 5,
      class: "ic:baseline-grass",
      text: "lorem ipsum",
    },
    {
      id: 6,
      class: "emojione-monotone:kiwi-fruit",
      text: "lorem ipsum",
    },
  ];
  return (
    <div className="wrapper overflow-x-hidden">
      <div className="header w-screen">
        <Navbar />
        <div className="h-auto md:h-screen bg-img bg-cover flex items-center md:relative">
          {/* Header img */}
          <img
            src={headerPic}
            className="hidden lg:block absolute z-20 ml-10 w-[120px]"
            alt=""
          />
          <div className="content py-28 md:w-3/4 md:mx-48 md:flex md:flex-col md:items-start mx-4">
            <h1 className="text-white text-2xl md:text-5xl font-extrabold capitalize">
              Plateau State-One <br /> Stop Investment Centre
            </h1>
            <p className="text-white leading-6 font-light text-lg pt-10 md:w-2/4">
              The official platform for Plateau state Investment. Bringing
              investors closer to their soon-to-be investments.
            </p>
            <div className="heder-btns pt-10 flex justify-center">
              <Link
                to="/lga"
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

        <div className="grid grid-cols-2 md:grid-cols-3 md:max-w-[800px] md:mx-auto h-screen text-secondary">
          {icons.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{
                  opacity: 1,
                }}
                initial={{
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Icon icon={item.class} width="80" />
              </motion.div>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="citizen-engament md:mt-55 mx-10 mt-20 md:mb-32 mb-10 md:mx-48 ">
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

        <div className="h-screen flex flex-col">
          {/* Content */}
          <section className="w-full h-full bg-img2 grid grid-cols-1 md:grid-cols-4">
            {content.map((item) => (
              <div
                key={item.id}
                className={`${item.background} opacity-80 flex flex-col items-center justify-center h-full p-10`}
              >
                <Icon icon={item.img} width="100" />
                <h2 className="text-center text-2xl font-bold">
                  {item.header}
                </h2>
                <p className="text-center">{item.body}</p>
              </div>
            ))}
          </section>

          {/* Content */}
          <section className="w-full h-full bg-img2 grid grid-cols-1 md:grid-cols-4">
            {secondContent.map((item) => (
              <div
                key={item.id}
                className={`${item.background} opacity-80 flex flex-col items-center justify-center h-full p-10`}
              >
                <Icon icon={item.img} width="100" />
                <h2 className="text-center text-2xl font-bold">
                  {item.header}
                </h2>
                <p className="text-center">{item.body}</p>
              </div>
            ))}
          </section>
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
                    investment guides.
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
                    customer's trust on;
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
                    policies are well implemented.
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
                    Providing prompt and updated informations on investment
                    opportunities for collaboration and growth.
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
                    scale businesses in different stages.
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
                    administrative proceess for issuing licences and permits.
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
                    efficiency and transparency in business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
