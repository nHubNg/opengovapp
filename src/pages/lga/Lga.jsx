import LgaCard from "../../components/lgaCard";
import "./lga.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Lga() {
  return (
    <div className="flex h-[100vh] w-full">
      <div className="flex-[4] h-full bg-white overflow-y-scroll">
        {/* wrapper div */}
        <div className="p-3">
          <h3 className="py-3 font-semibold text-[#6B7280]">
            Local Government Areas
          </h3>
          <hr className="border-none h-[1px] bg-[#E5E7EB]" />
          <LgaCard />
          <LgaCard />
          <LgaCard />
          <LgaCard />
        </div>
      </div>
      <div className="flex-[5] h-full bg-slate-400"></div>
    </div>
  );
}
