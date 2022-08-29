// import Getpaid from "../assets/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
import Navbar from "../components/Navbar";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Team = () => {

    const meetTeam = [
        {
            id: "1",
            avatar: "images/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
            position: "Technian",
            name: "John Doe",
            about: "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
            // socials : {FaFacebook}
        }  ,  {
            id: "2",
            avatar: "images/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
            position: "C.E.O",
            name: "Doe John",
            about: "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
            // socials : {FaFacebook}
        } 
        , {
            id: "3",
            avatar: "images/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
            position: "Technian",
            name: "John Doe",
            about: "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
            // socials : {FaFacebook}
        }  ,  {
            id: "4",
            avatar: "images/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
            position: "C.E.O",
            name: "Doe John",
            about: "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
            // socials : {FaFacebook}
        }
    ]


    return (
        <>

            <div className="bg-primary lg:h-screen sm:h-[100%] p-3">
                <Navbar />
                <h1 className="text-center text-white text-5xl mt-10 font-sans font-bold"> Meet The Team</h1>
                <div className="lg:justify-center flex-wrap   lg:flex sm:flex sm:justify-center">

                    {/* <div></div> */}
                {
                    meetTeam.map((team ) => {
                        return(

                            <div key={team.id} className="container m-3 p-5 sm:h-[35rem] lg:h-[22rem] w-1/3 bg-white grid  lg:grid-cols-2   sm:grid-cols-1">
                            
                        <div className=" ">
                            <img src={team.avatar} alt="" className="h-[200px] w-auto rounded-full p-2 " />
                        </div>
                        <div>
                            <h1 className="font-bold font-sans text-[grey] py-3">{team.position}</h1>
                            <h1 className="font-bold font-sans text-3xl py-2">{team.name}</h1>
                            <p className="text-2xl sm:text-[16px] text-[grey]">{team.about}</p>
                            <div className="flex text-2xl text-primary ">
                                <FaFacebook className="mx-2 my-5   text-4xl hover:text-blue-500 transform hover:scale-125 transition delay-150 duration-300 cursor-pointer ease-in-out" />
                                <FaInstagram className="mx-2 my-5  text-4xl hover:text-orange-400 transform hover:scale-125 transition delay-150 duration-300 cursor-pointer ease-in-out " />
                                <FaTwitter className="mx-2 my-5 text-4xl hover:text-blue-700 transform hover:scale-125  transition delay-150 duration-300 cursor-pointer ease-in-out" />
                            </div>
                        </div>

                    </div>
                        )
                    })
                }

                </div>
            </div>
        </>
    )
}
export default Team;