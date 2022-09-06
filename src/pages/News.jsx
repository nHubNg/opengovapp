import Navbar from "../components/Navbar";
import mainHeadLine from "../assets/background.png";

let newsCards = Array(4).fill("crap");
let topStoryCards = Array(6).fill("crap");

export default function News() {
  return (
    <div>
      <Navbar />
      {/* Top Section */}
      <div className="flex py-6 px-12 w-full h-[80vh]">
        {/* Big Image on the left */}
        <div className="pt-3 h-full flex-[3] relative">
          <img
            className="w-full h-full object-cover"
            src={mainHeadLine}
            alt=""
          />
          <div className="p-3 text-white bg-gradient-to-t from-black absolute bottom-0">
            <h1 className="font-bold text-2xl mb-2">
              Putin is "not going to engage" witht Biden's State of the Union
              comments, expert says
            </h1>
            <p className="text-sm opacity-60 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              error ea minus nemo vero aliquam aperiam, porro eaque repellat
              similique facilis ullam atque tempore rerum? Aliquam perferendis
              est corporis rem!
            </p>
          </div>
        </div>
        {/* Top-Right Section */}
        <div className="px-3 flex-[2] h-full">
          {/* Single news card */}
          {newsCards.map((card, index) => (
            <div
              key={index}
              className="py-3 flex w-full border-b border-b-slate-300"
            >
              <div className="flex-[2] h-auto mr-4">
                <img
                  className="w-full h-full object-cover"
                  src={mainHeadLine}
                  alt=""
                />
              </div>
              <div className="flex-[4]">
                <div className="flex items-center justify-between w-full my-3 text-slate-400 font-light text-sm">
                  <span>Nov 15, 2022</span>
                  <span>10 min read</span>
                </div>
                <h2 className="text-lg text-slate-900 font-semibold leading-snug">
                  The top 10 Best Computer Speakers in the Market
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section/Top Stories */}
      <div className="my-3 px-12">
        <h2 className="text-xl text-slate-900 font-bold mb-5">Top Stories</h2>
        <div className="flex flex-wrap items-center gap-5">
          {/* Top Story Card */}
          {topStoryCards.map((card, index) => (
            <div key={index} className="w-[220px] flex flex-col shadow-md">
              <div className="h-32">
                <img
                  className="w-full h-full object-cover"
                  src={mainHeadLine}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h3 className="text-base text-slate-800 font-semibold my-2 leading-tight">
                  The only thing that overcomes hard luck...
                </h3>
                <p className="text-sm mb-2">Lorem ipsum dolor</p>
                <div className="mb-3 text-xs">
                  <span>5 min read</span>
                  <span className="mx-2">2 Days ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// background: linear-gradient(to bottom, rgba(4, 8, 15, 0), #192133 90%);
