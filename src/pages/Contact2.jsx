// import { Link } from "react-router-dom";
// import header from "../assets/header.png";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Map from "./Map";

const Contact2 = () => {
  const contacts = [
    {
      id: 1,
      name: "",
      icon: "carbon:phone-ip",
    },
    {
      id: 2,
      name: "",
      icon: "fluent:contact-card-16-regular",
    },
    {
      id: 3,
      name: "",
      icon: "bx:message-detail",
    },
  ];
  return (
    <div>
      <div className="fixed bg-white w-screen z-20 top-0 left-0 shadow-lg">
        <Navbar />
      </div>

      <div className="h-screen bg-img bg-cover flex items-center justify-end md:relative top-0 md:top-[60px]">
        <div className="flex md:justify-between md:mx-auto md:h-full md:items-center">
          <div className=" text-white flex flex-col justify-start p-10 md:ml-[80px]">
            <h1 className="text-xl font-bold">
              Location <span className="text-secondary">Address</span>
            </h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus magnam odit amet laborum officiis delectus illum vitae
              natus consequatur quo unde repellat ipsam minima porro, enim
              itaque eum dicta eius.
            </p>

            <div className="w-full text-sm mt-[40px]">
              {contacts.map((item) => (
                <div className="flex" key={item.id}>
                  <div className="h-full flex items-center mr-5 md:mr-10">
                    <div className="rounded-full flex items-centerjustify-center border-[2px] border-secondary p-2 h-[min-content] w-[min-content]">
                      <Icon icon={item.icon} width="30" />
                    </div>
                  </div>

                  <div>
                    <p className="mb-3">Primary: Lorem ipsum dolor sit ame</p>
                    <p className="mb-4">Secondary: Lorem ipsum dolor sit ame</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5525900249636!2d8.875239921859038!3d9.88785191057405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10537398edec2763%3A0x1c35e78b0923f86b!2sJordan%20Eye%20Hospital!5e0!3m2!1sen!2sng!4v1662121104573!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{
                border: "0",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact2;
