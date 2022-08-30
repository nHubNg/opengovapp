// import headerPic from "../assets/header.png";
import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  const content = [
    {
      id: 1,
      header: "The Agricultural Hub of Nigeria",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#FFFFFFA6]",
      img: "emojione-monotone:tractor",
      itemList: [
        { id: 1, name: "Only state growing and exporting Rose flowers" },
        { id: 2, name: "Largest producer of Irish Potatoes in Nigeria" },
        {
          id: 3,
          name: "Only State suitable for temperate crops and exotic fruits",
        },
        { id: 4, name: "Best state suited for growing coffee in Nigeria" },
        { id: 5, name: "Largest producers of Nigeria’s Fonio grain (Acha)" },
      ],
    },
    {
      id: 2,
      header: "Major Hub of Mineral Resources",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#02A75ABF] text-white",
      img: "mdi:pickaxe",
      itemList: [
        {
          id: 1,
          name: "The State has over 25 mineral deposits classified into base minerals, industrial minerals and gemstones, with large deposits in Tin and Columbite, which forms about 50% of Nigeria’s total reserve.",
        },
      ],
    },
    {
      id: 3,
      header: "Accessibility",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "text-white",
      img: "bi:truck",
      itemList: [
        {
          id: 1,
          name: "Close proximity to multiple large markets and International Airports",
        },
        {
          id: 2,
          name: "Centrally located in the middle belt of Nigeria, which naturally bridges access to major markets of the northern and southern regions.",
        },
      ],
    },
    {
      id: 4,
      header: "Climate",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#003B49BF] text-white",
      img: "akar-icons:cloud",
      itemList: [
        {
          id: 1,
          name: "Favorable weather conditions for living (average temperature between 13 and 22 C)",
        },
      ],
    },
  ];

  const secondContent = [
    {
      id: 1,
      header: "Competitive and Productive Workforce",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#003B49BF] text-white",
      img: "akar-icons:people-group",
      itemList: [
        {
          id: 1,
          name: "Young and growing labor force with approximately 50% of about 4 million inhabitants less than 15 years.",
        },
      ],
    },
    {
      id: 2,
      header: "Favourable Business Regulatory Environment",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "text-white",
      img: "bi:building",
      itemList: [
        {
          id: 1,
          name: "Plateau State is one of the convenient places to do business and one of Nigeria’s fastest growing economies that has experienced significant progress in the attainment and consolidation of Growth",
        },
      ],
    },
    {
      id: 3,
      header: "Peace an Security",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#02A75ABF] text-white",
      img: "carbon:group-security",
      itemList: [
        {
          id: 1,
          name: "Plateau has growing peaceful conditions, that is sustained through the creation of the Plateau Peace Building Agency and has recently attracted a range of private investments.",
        },
      ],
    },
    {
      id: 4,
      header: "Abundant Natural Resources",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error ea minus nemo vero aliquam aperiam, porro eaque repellat similique facilis ullam atque tempore rerum? Aliquam perferendis est corporis rem!",
      background: "bg-[#FFFFFFA6]",
      img: "fluent-emoji-high-contrast:rock",
      itemList: [
        {
          id: 1,
          name: "Vast arable land and favorable soil condition to grow traditional and specialized crops not found elsewhere in Nigeria.",
        },
        {
          id: 2,
          name: "Abundant rivers and rainfall for hydro-power generation and irrigation.",
        },
        {
          id: 3,
          name: "Varied natural landscape, rich in unique outdoor features (e.g. waterfalls, rock formations)",
        },
      ],
    },
  ];
  return (
    <div className="w-screen">
      <Navbar className="w-screen" />
      <div className="h-auto bg-white flex items-center">
        <div className="content py-28 ">
          <div className="text">
            <h1 className=" capitalize text-4xl font-bold text-center">
              Why{" "}
              <span className="text-secondary text-4xl pt-2 font-bold">
                Plateau...{" "}
              </span>{" "}
            </h1>
            <p className="pt-6 text-lg leading-6 text-center text-[#7D7D7D]">
              Plateau State is the twelfth largest state in the country with a
              unique geographical location. Her wide range of natural resources
              and rich soil has been a major source of revenue generation for
              many years. The state records a large number of Micro, Small and
              Medium business owners with fantastic growth records with time.
              Plateau state contains a people dedicated to growth and
              development in business and investment and has a large export of
              great minds to other parts of the country.
            </p>

            {/* <div className="mt-8">
                <a
                  href="/auth/"
                  class="bg-secondary2 shadow-md text-primary capitalize   text-sm font-semibold  hover:text-primary  px-4 py-3 rounded-one "
                >
                  Login / Register
                </a>
              </div> */}
          </div>

          {/* Content */}
          <section className="w-full bg-img2 bg-cover grid grid-cols-1">
            {content.map((item) => (
              <div
                key={item.id}
                className={`${item.background} opacity-80 h-full p-10 grid grid-cols-2`}
              >
                <div>
                  <Icon icon={item.img} width="100" />
                  <h2 className="text-center text-2xl font-bold">
                    {item.header}
                  </h2>
                </div>

                <ul>
                  {item.itemList.map((list) => (
                    <li key={list.id}>{list.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Content */}
          <section className="w-full bg-img2 bg-cover grid grid-cols-1">
            {secondContent.map((item) => (
              <div
                key={item.id}
                className={`${item.background} opacity-80 h-full p-10 grid grid-cols-2`}
              >
                <div>
                  <Icon icon={item.img} width="100" />
                  <h2 className="text-center text-2xl font-bold">
                    {item.header}
                  </h2>
                </div>
                <ul>
                  {item.itemList.map((list) => (
                    <li key={list.id}>{list.name}</li>
                  ))}
                </ul>

                {/* <p className="text-center">{item.body}</p> */}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
