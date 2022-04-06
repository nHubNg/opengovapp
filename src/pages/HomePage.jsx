import Navbar from "../components/Navbar";


import banner_pic from "../assets/Group 222.png";
import img_2 from "../assets/[GetPaidStock 3.png";
import img_3 from "../assets/jake-blucker-OJX7gIU3E6U-unsplash (1) 2.png";
import img_logo from "../assets/logo.png";
import glogo from "../assets/open-global.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <Navbar />
        <div className="h-auto bg-primary relative">
          <div className="content py-28 w-3/4 mx-48">
            <h1 className="text-white text-5xl font-extrabold capitalize">
              Plateau state open <br /> government partnership
            </h1>
            <p className="text-white leading-6 font-light text-sm pt-10 w-2/4 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              autem natus ipsam ducimus. Sequi expedita at fugit excepturi, non
              odit quaerat dolorem, nam magni ipsum quia amet! Laborum,
              cupiditate eius.
            </p>
            <div className="heder-btns pt-10">
              <Link
                to="/auth"
                class="bg-secondary text-white capitalize  text-sm font-extrabold  hover:text-primary  px-4 py-3 rounded-one "
              >
                Login / Register
              </Link>

              <a
                href="#"
                class=" ml-8 text-secondary  text-md font-semibold underline underline-offset-8  capitalize  px-4 py-3  "
              >
                support
              </a>
            </div>
          </div>
        </div>

        <div className="post mx-48 absolute top-80 pt-64">
          <div className="card grid grid-cols-1 md:grid-cols-2">
            <div className="card shadow-2xl bg-white flex py-4 px-4 ">
              <div className="rounded-full w-14 h-8 bg-primary">
                <img src={glogo} alt="" className="rounded-full object-fit w-14 h-8" />
              </div>
              <div className="content px-10">
                <h1 className="text-primary capitalize text-lg font-extrabold">
                  Open government partnership
                </h1>
                <p className="pt-2 text-sm leading-6 font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet cumque delectus.
                </p>
                <div className="mt-6">
                  <a
                    className="uppercase text-secondary text-extrabold text-xs "
                    href=""
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="card shadow-2xl bg-primary flex py-4 px-4 ">
              <div className="rounded-full w-14 h-8 bg-white">
              <img src={img_logo} alt="" className="rounded-full object-fit w-14 h-8" />
              </div>
              <div className="content px-10">
                <h1 className="text-white capitalize text-lg font-extrabold">
                  Open government partnership
                </h1>
                <p className="pt-2 text-white text-sm leading-2 font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet cumque delectus.
                </p>
                <div className="mt-6">
                  <a
                    className="uppercase text-secondary text-extrabold text-xs "
                    href=""
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="citizen-engament mt-80 mb-40 mx-48 ">
          <div className="content grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text">
              <h1 className=" capitalize text-4xl">
                Government plus click&tell{" "}
              </h1>
              <h1 className="text-secondary text-4xl pt-4">
                {" "}
                = Citizen engament{" "}
              </h1>
              <p className="pt-6 text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                architecto, recusandae alias ratione dolor odit necessitatibus
                odio sunt! Eum dicta officiis cumque obcaecati quia, voluptatem
                cupiditate fugiat earum temporibus nam.
              </p>

              <div className="mt-8">
                <a
                  href="/auth/"
                  class="bg-secondary2 shadow-md text-primary capitalize   text-sm font-semibold  hover:text-primary  px-4 py-3 rounded-one "
                >
                  Login / Register
                </a>
              </div>
            </div>
            <div className="img bg-primary h-auto">
              <img src={banner_pic} alt=""  width="100%" height=""/>
            </div>
          </div>
        </div>

        <section className="bg-secondary2">
          <div className="current-action mx-48 pt-20 pb-20">
            <div className="heading">
              <h1 className=" capitalize text-4xl">
                Current <span className="text-secondary">Action Plan</span>
              </h1>
              <p className="pt-4 text-sm leading-6">
                Plateau joined OGP as part of the 2020 cohort. They are
                currently implementing five commitments from their 2021-2023
                action <br /> plan. This action plan features commitments
                related to open contracting, public participation, gender, and
                extractive industries.
              </p>
            </div>
            <div className="cards mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card shadow-2xl bg-primary py-4 px-4  ">
                <div className="content px-5 py-8">
                  <h1 className="text-white capitalize text-lg font-extrabold">
                    Fiscal transparency
                  </h1>
                  <p className="pt-6 text-sm leading-6 font-light text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet cumque delectus.
                  </p>

                  <ul class="pt-2">
                    <li class="p-2 text-white text-sm font-light">
                      List Item 1
                    </li>

                    <li class="p-2 text-white text-sm font-light">
                      List Item 1
                    </li>
                    <li class="p-2 text-white text-sm font-light">
                      List Item 1
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card shadow-2xl bg-primary py-4 px-4  ">
                <div className="content px-5 py-8">
                  <h1 className="text-white capitalize text-lg font-extrabold">
                    Citizen engagement
                  </h1>
                  <p className="pt-6 text-sm leading-6 font-light text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet cumque delectus.
                  </p>

                  <ul class="pt-2">
                    <li class="p-2 text-white text-sm font-light">
                      List Item 1
                    </li>

                    <li class="p-2 text-white text-sm font-light">
                      List Item 1
                    </li>
                    <li class="p-2 text-white text-sm font-light">
                      List Item 1
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card shadow-2xl bg-primary py-4 px-4  ">
                <div className="content px-5 py-8">
                  <h1 className="text-white capitalize text-lg font-extrabold">
                    Extractive Transparency{" "}
                  </h1>
                  <p className="pt-6 text-sm leading-6 font-light text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet cumque delectus.
                  </p>

                  <ul class="pt-2">
                    <li class="p-2 text-white text-sm font-light">
                      List Item 1
                    </li>

                    <li class="p-2 text-white text-sm font-light">
                      List Item 1
                    </li>
                    <li class="p-2 text-white text-sm font-light">
                      List Item 1
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-cards w-2/4 mx-auto  py-10">
            <div className="cards  grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card border-4 border-t-0 border-x-0 border-b-secondary shadow-2xl bg-white py-4 px-4  ">
                <div className="content px-5 py-8">
                  <h1 className="text-black capitalize text-lg font-extrabold">
                    Gender Commitments{" "}
                  </h1>
                  <p className="pt-6 text-sm leading-6 font-light text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet cumque delectus.
                  </p>

                  <ul class="pt-2">
                    <li class="p-2 text-black text-sm font-light">
                      List Item 1
                    </li>

                    <li class="p-2 text-black text-sm font-light">
                      List Item 1
                    </li>
                    <li class="p-2 text-black text-sm font-light">
                      List Item 1
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card shadow-2xl bg-white py-4 px-4 border-4 border-t-0 border-x-0 border-b-secondary  ">
                <div className="content px-5 py-8">
                  <h1 className="text-black capitalize text-lg font-extrabold">
                    Gender Commitments{" "}
                  </h1>
                  <p className="pt-6 text-sm leading-6 font-light text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet cumque delectus.
                  </p>

                  <ul class="pt-2">
                    <li class="p-2 text-black text-sm font-light">
                      List Item 1
                    </li>

                    <li class="p-2 text-black text-sm font-light">
                      List Item 1
                    </li>
                    <li class="p-2 text-black text-sm font-light">
                      List Item 1
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-10">
          <div className="citizen-engament pt-5 mx-48 ">
            <div className="content grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text">
                <h1 className=" text-white font-extrabold capitalize text-4xl">
                  Open
                </h1>
                <h1 className="text-secondary font-extrabold text-4xl pt-4">
                  Contracting
                </h1>
                <p className="pt-6 text-sm text-white leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  architecto, recusandae alias ratione dolor odit necessitatibus
                  odio sunt! Eum dicta officiis cumque obcaecati quia,
                  voluptatem cupiditate fugiat earum temporibus nam.
                </p>

                <div className="bg-secondary mt-8">
                  <p className="pt-6 text-sm text-white leading-6 py-6 px-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum architecto, recusandae alias ratione dolor odit
                    necessitatibus odio sunt! Eum dicta officiis cumque
                    obcaecati quia, voluptatem cupiditate fugiat earum
                    temporibus nam.
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
          <div className="current-action mx-48 pt-20 pb-20">
            <div className="heading">
              <h1 className=" capitalize text-2xl">
                Our latest <span className="text-secondary">Projects</span>
              </h1>
            </div>
            <div className="cards mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card relative shadow-2xl bg-white ">
                <div className="content">
                  <div className="card-img  bg-primary h-40">
                    <img src={img_3} alt="" className="object-cover h-40 w-96"/>
                  </div>

                  <div className="location absolute top-28 mt-6 shadow-lg  text-sm  bg-secondary w-20 py-2 ">
                    <p className="text-white text-center">Jos South</p>
                  </div>

                  <p className="pt-6 px-5 py-8 text-sm leading-6 font-light text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet cumque delectus.
                  </p>
                </div>
              </div>

              <div className="card relative shadow-2xl bg-white  ">
                <div className="content">
                  <div className="card-img bg-primary h-40">
                    <img src={img_3} alt="" className="object-cover h-40 w-96"/>
                  </div>

                  <div className="location absolute top-28 mt-6 shadow-lg text-sm  bg-secondary w-20 py-2 ">
                    <p className="text-white text-center">Jos North</p>
                  </div>
                  <p className="pt-6 px-5 py-8 text-sm leading-6 font-light text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet cumque delectus.
                  </p>
                </div>
              </div>

              <div className="card relative shadow-2xl bg-white    ">
                <div className="content">
                  <div className="card-img bg-primary h-40">
                    <img src={img_3} alt="" className="object-cover h-40 w-96"/>
                  </div>

                  <div className="location absolute top-28 mt-6 shadow-lg  text-sm  bg-secondary w-20 py-2 ">
                    <p className="text-white text-center">Bassa</p>
                  </div>
                  <p className="pt-6 px-5 py-8 text-sm leading-6 font-light text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet cumque delectus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer bg-secondary2  py-20 h-auto underline-offset-4 ">
          <div className="section mx-48 ">
            <div className="content grid grid-cols-1 font-semi-bold md:grid-cols-4 gap-8">
              <div className="card">
                <h1 className="text-primary text-2xl">Our Action Plans</h1>
                <p className="pt-8 text-sm">
                  Plateau joined OGP as part of the 2020 cohort. They are
                  currently implementing five commitments from their 2021-2023
                  action plan.
                </p>
              </div>

              <div className="card">
                <h1 className="text-primary text-2xl">Our Action Plans</h1>
                <div className="link pt-4">
                  <p className="pt-2 text-sm">
                    <a href="">Fiscal Transparency</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">CItizen Engagement</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Extractive Tranparency</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Gender Commitment</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Peace and Security</a>
                  </p>{" "}
                </div>
              </div>
              <div className="card">
                <h1 className="text-primary text-2xl">Reports</h1>
                <div className="link pt-4">
                  <p className="pt-2 text-sm">
                    <a href="">Report of Accountant General</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Quarterly Report</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Audit Reports</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Approved Reports</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Reports</a>
                  </p>{" "}
                </div>
              </div>
              <div className="card">
                <h1 className="text-primary text-2xl">Quick LInks</h1>
                <div className="link pt-4">
                  <p className="pt-2 text-sm">
                    <a href="">Plateau State Government</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">Open Government Partnership</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">GovernmentProjects</a>
                  </p>
                  <p className="pt-2 text-sm ">
                    {" "}
                    <a href="">Open Contracting</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="">All Downloads</a>
                  </p>{" "}
                </div>
              </div>
            </div>
            <hr className="mt-10 border-2 bg-inputcolor" />
            <p className="text-center text-sm">
              Copyright © 2021 Designed and Developed by nHub Nigeria. All
              Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
