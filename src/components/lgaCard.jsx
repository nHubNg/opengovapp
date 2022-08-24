import lga1 from "../assets/opgov/lga1.png";
// import lga2 from "../assets/opgov/lga2.png";
// import lga3 from "../assets/opgov/lga3.png";
// import lga4 from "../assets/opgov/lga4.png";

export default function LgaCard() {
  return (
    <div className="mb-3 py-5 border-b-[1px] border-[#E5E7EB]">
      <div className="w-full flex justify-between">
        <img
          className="w-[220px] h-[140px] object-cover rounded-xl mr-5"
          src={lga1}
          alt="lga-img"
        />
        <div className="">
          <h3 className="text-[#6B7280]">Local Government</h3>
          <h2 className="text-2xl font-semibold text-[#374151]">Barkin Ladi</h2>
          <hr className="my-3 border-none h-[3px] bg-[#E5E7EB] w-[12%]" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ac
            fermentum elementum porttitor.
          </p>
          <hr className="my-3 border-none h-[3px] bg-[#E5E7EB] w-[12%]" />
          <div className="flex">
            <span className="text-sm p-[6px] flex justify-center items-center rounded-[66.7px] mr-3 border cursor-pointer">
              Profile
            </span>
            <span className="text-sm p-[6px] flex justify-center items-center rounded-[66.7px] mr-3 border cursor-pointer">
              Agriculture
            </span>
            <span className="text-sm p-[6px] flex justify-center items-center rounded-[66.7px] mr-3 border cursor-pointer">
              Mining
            </span>
            <span className="text-sm p-[6px] flex justify-center items-center rounded-[66.7px] mr-3 border cursor-pointer">
              Tourism
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
