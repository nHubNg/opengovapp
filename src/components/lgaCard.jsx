export default function LgaCard({ name, tags, info, img }) {
  return (
    <div className="mb-3 py-5 border-b-[1px] border-[#E5E7EB] cursor-pointer">
      <div className="w-full flex justify-between">
        <img
          className="w-[220px] h-[140px] object-cover rounded-xl mr-5"
          src={require(`../assets/opgov/lga3.png`)}
          alt="lga-img"
        />
        <div className="">
          <h3 className="text-[#6B7280]">Local Government</h3>
          <h2 className="text-2xl font-semibold text-[#374151]">{name}</h2>
          <hr className="my-3 border-none h-[3px] bg-[#E5E7EB] w-[12%]" />
          <p className="text-sm">{info}</p>
          <hr className="my-3 border-none h-[3px] bg-[#E5E7EB] w-[12%]" />
          <div className="flex">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs p-[6px] flex justify-center items-center rounded-[66.7px] mr-3 border cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}