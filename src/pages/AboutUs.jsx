// import headerPic from "../assets/header.png";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div>
        <Navbar />
        <div className="h-auto bg-img bg-cover flex items-center md:relative">
          {/* Header img */}
          {/* <img
            src={headerPic}
            className="hidden lg:block absolute z-20 ml-10 w-[120px]"
            alt=""
          /> */}
          <div className="content py-28 md:w-3/4 md:mx-48 md:flex md:flex-col md:items-start mx-4">
            <h1 className="text-white text-2xl md:text-5xl font-extrabold capitalize">
              About us
            </h1>
    
          </div>
        </div>
    </div>
  )
}

export default AboutUs