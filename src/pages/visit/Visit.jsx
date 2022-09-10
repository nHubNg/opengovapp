import Navbar from "../../components/Navbar";
import { visit } from "../../data/data";
import "./visit.css";
const VisitOur = () => {
  return (
    <>
      <Navbar />
      <div className="h-full bg-img bg-cover py-[80px]">
        <p className="font-sans text-center text-3xl text-white font-bold">
          Our Partners
        </p>
        <ul className="honeycomb my-[80px]">
          {visit.map((item) => {
            return (
              <a href={item.link}>
                <li className=" honeycomb-cell">
                  <img
                    src={require(`../../assets/Visit/${item.logo}`)}
                    alt="Org Logo chek"
                    className="honeycomb-cell_img "
                  />
                  <div className="honeycomb-cell_title">{item.title}</div>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default VisitOur;
