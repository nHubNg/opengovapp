import logo from "../assets/Frame 6.png";

const Footer = () => {
  return (
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
                <a href="/">Facebook</a>
              </p>
              <p className="pt-2 text-sm">
                {" "}
                <a href="/">Instagram</a>
              </p>
              <p className="pt-2 text-sm">
                {" "}
                <a href="/">Twitter</a>
              </p>
              {/* <p className="pt-2 text-sm">
                    {" "}
                    <a href="/">Gender Commitment</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="/">Peace and Security</a>
                  </p>{" "} */}
            </div>
          </div>
          <div className="card flex flex-col items-start">
            <h1 className="text-primary text-2xl text-center">Events</h1>
            <div className="link pt-4">
              <p className="pt-2 text-sm">
                <a href="/">E-news Letters</a>
              </p>
              <p className="pt-2 text-sm">
                {" "}
                <a href="/">Gallery</a>
              </p>
              <p className="pt-2 text-sm">
                {" "}
                <a href="/">Investment News</a>
              </p>
              {/* <p className="pt-2 text-sm">
                    {" "}
                    <a href="/">Approved Reports</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="/">Reports</a>
                  </p>{" "} */}
            </div>
          </div>
          <div className="card flex flex-col items-start">
            <h1 className="text-primary text-2xl text-center">Quick LInks</h1>
            <div className="link pt-4">
              <p className="pt-2 text-sm">
                <a href="/">Why Plateau</a>
              </p>
              <p className="pt-2 text-sm">
                {" "}
                <a href="/">Investors Highlights</a>
              </p>
              <p className="pt-2 text-sm">
                {" "}
                <a href="/">OSIC</a>
              </p>
              {/* <p className="pt-2 text-sm ">
                    {" "}
                    <a href="/">Open Contracting</a>
                  </p>
                  <p className="pt-2 text-sm">
                    {" "}
                    <a href="/">All Downloads</a>
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
  );
};

export default Footer;
