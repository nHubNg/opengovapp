import LgaCard from "../../components/lgaCard";
// import Map from "../../components/maps/Map";
import Navbar from "../../components/Navbar";
import data from "../../data/data";
import "./lga.css";
import map from "../../assets/opgov/map.png";

export default function Lga() {
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh_-_80px)] w-full">
        <div className="md:block h-full bg-white overflow-y-scroll">
          {/* wrapper div */}
          <div className="p-3">
            <h3 className="py-3 font-semibold text-[#6B7280]">
              Local Government Areas
            </h3>
            <hr className="border-none h-[1px] bg-[#E5E7EB]" />
            {data.map((lga, index) => (
              <LgaCard
                key={index}
                name={lga.lgaName}
                tags={lga.tags}
                info={lga.info}
                img={lga.img}
              />
            ))}
          </div>
        </div>
        <div className="hidden md:block md:h-full md:static absolute left-0 right-0 top-[80px]">
          <img className="w-full h-full object-cover" src={map} alt="map" />
          {/* <Map location={data} /> */}
        </div>
      </div>
    </>
  );
}
