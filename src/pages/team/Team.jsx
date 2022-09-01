// import Getpaid from "../assets/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
import Navbar from "../../components/Navbar";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";
import "./team.css";

const Team = () => {
  const meetTeam = [
    {
      id: "1",
      position: "Technian",
      name: "Jane Doe",
      about:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWsjr7eW9iwWZjXoVuaH5BENvd7BsT8uopg&usqp=CAU",
    },
    {
      id: "2",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrjSRcsg290Iy7hZEFFP8cqMNrO0zzqjzDQ&usqp=CAU",
      position: "C.E.O",
      name: "Janice Doe",
      about:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
    {
      id: "3",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqj0KojjTLTLPX59SEpnvr9pa6qNGt1oEtg&usqp=CAU",
      position: "Technian",
      name: "John Doe",
      about:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
    {
      id: "4",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8r4l348mSm5CE7cistGerTZOdFYWZUbW1g&usqp=CAU",
      position: "C.E.O",
      name: "Jack Doe",
      about:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
  ];
  // console.log(meetTeam.socials)

  return (
    <>
      <Navbar />
      <div className="bg-[white] lg:h-full sm:h-[100%] p-3">
        <h1 className="text-center text-black text-5xl mt-10 font-[600]">
          Meet The Team
        </h1>
        <div className="lg:justify-center flex-wrap lg:flex sm:flex sm:justify-center">
          {/* <div></div> */}
          {meetTeam.map((team) => {
            return (
              <div
                key={team.id}
                className={`team shadow-ts m-[20px] sm:h-[35rem] lg:h-[360px] w-[25%] bg-white relative`}
              >
                {/* <div className="overlay"></div> */}
                <div
                  className={`team-img w-full h-full flex jusify-center items-center opacity-100 absolute top-0 right-0 left-0 rounded-none`}
                >
                  <img
                    src={team.avatar}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="team-info opacity-0 p-3 text-center flex flex-col items-center">
                  <h1 className="font-[600] text-[grey] pt-2">
                    {team.position}
                  </h1>
                  <h1 className="font-[600] text-3xl">{team.name}</h1>
                  <p className="text-2xl sm:text-[16px] text-[grey]">
                    {team.about}
                  </p>
                  <div className="flex text-xl text-primary ">
                    <a href={team.facebook}>
                      <FaFacebook className="mx-2 my-5   text-2xl hover:text-secondary transform hover:scale-125 transition delay-150 duration-100 cursor-pointer ease-in-out" />
                    </a>
                    <a href={team.instagram}>
                      <FaInstagram className="mx-2 my-5  text-2xl hover:text-secondary transform hover:scale-125 transition delay-150 duration-100 cursor-pointer ease-in-out " />
                    </a>
                    <a href={team.twitter}>
                      <FaTwitter className="mx-2 my-5 text-2xl hover:text-secondary transform hover:scale-125  transition delay-150 duration-100 cursor-pointer ease-in-out" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Team;
