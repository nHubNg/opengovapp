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
        <ul className="honeycomb my-[80px] grid grid-cols-2 md:flex md:flex-wrap">
          {visit.map((item) => {
            return (
              <a href={item.link} key={item.id}>
                <li className=" honeycomb-cell w-[110px] h-[80px] md:w-[250px] md:h-[137.5px]">
                  <img
                    src={require(`../../assets/Visit/${item.logo}`)}
                    alt="Org Logo chek"
                    className="honeycomb-cell_img "
                  />
                  <div className="honeycomb-cell_title font-[600] text-[10px] md:font-[700] md:text-[1em]">{item.title}</div>
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
