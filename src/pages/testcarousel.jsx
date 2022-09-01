import Slider from "react-slick"
  import 'slick-carousel/slick/slick.css'
  import 'slick-carousel/slick/slick-theme.css'
  import meetTeam from "../assets/db"
const Carousel = () => {

   
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
          <>


            <div className="bg-primary ">
                <h1 className="text-center text-black text-5xl mt-10 font-sans font-bold"> Meet The Team</h1>
                <div className="">

                    <Slider {...settings}>

                    {
                        meetTeam.map((team) => {
                            return (

                                <div key={team.id} className="my-2">

                                  <img src={team.avatar} alt="" />

                                </div>
                            )
                        })
                    }

                    </Slider>

                </div>
            </div>
        </>
    )
}
export default Carousel;