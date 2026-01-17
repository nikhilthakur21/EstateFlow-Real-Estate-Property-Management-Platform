import { NavLink, useNavigate } from "react-router-dom";
import Property from "./Property";
import bgImage from "../assets/bg4.jpg";
import UpcomingProjects from "./UpcomingProjects";
import {
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Layers,
  Sparkles,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  // For New Launched Card Data
  const newlyLaunched = [
    {
      id: 1,
      name: "Godrej Eden Estate",
      location: "Hinjewadi, Pune",
      price: "1.49 - 4.13 Cr",
      type: "Premium Land",
      tag: "Limited Selection",
      growth: "10.3%",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20240601/pngtree-real-estate-luxury-building-sale-property-background-images-image_15851318.jpg",
    },
    {
      id: 2,
      name: "Skyi Park",
      location: "Bhukum, Pune",
      price: "63 - 77 L",
      type: "2, 3 BHK Sky-Homes",
      tag: "Eco-Friendly",
      growth: "14.3%",
      image:
        "https://urbtechindia.com/wp-content/uploads/2020/09/Amenities-for-Modern-Real-Estate-Projects.jpg",
    },
    {
      id: 3,
      name: "Amanora Gateway",
      location: "Hadapsar, Pune",
      price: "2.10 - 5.50 Cr",
      type: "Luxury Penthouses",
      tag: "Best Seller",
      growth: "12.5%",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // For Bhk Card Data
  const bhkCards = [
    {
      title: "1 RK/1 BHK",
      count: "1,300+ Properties",
      path: "/search/1-bhk",
      icon: "fa-house-chimney-window",
    },
    {
      title: "2 BHK",
      count: "6,100+ Properties",
      path: "/search/2-bhk",
      icon: "fa-house-flag",
    },
    {
      title: "3 BHK",
      count: "4,500+ Properties",
      path: "/search/3-bhk",
      icon: "fa-city",
    },
  ];

  return (
    <>
      <header>
        <div
          className="w-full border-b border-gray-300 shadow-lg bg-cover bg-center bg-no-repeat mt-[70px]
             aspect-video md:aspect-[21/9] lg:aspect-[4/1]  "
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        <div
          className="max-w-4xl  w-full mx-auto border border-gray-300 rounded-2xl shadow-lg flex-wrap
                        flex items-center justify-center gap-6 md:gap-3 px-6 py-10 bg-white -mt-13"
        >
          <NavLink
            to={"/LuxuryPenthouses"}
            className="text-[#0f2a4d] uppercase font-black text-base hover:text-[#b0169b] hover:scale-105 transition-all duration-300 ease-in-out inline-block"
          >
            Luxury Penthouses
          </NavLink>
          <span className="text-gray-300 text-2xl hidden md:block">|</span>
          <NavLink
            to={"/Flat"}
            className="text-[#0f2a4d] uppercase font-black text-base  hover:text-[#b0169b] hover:scale-105 transition-all duration-300 ease-in-out inline-block"
          >
            The Executive Suite (1/2 BHK)
          </NavLink>
          <span className="text-gray-300 text-2xl hidden md:block">|</span>
          <NavLink
            to={"/NewLaunches"}
            className="text-[#0f2a4d] uppercase font-black text-base hover:text-[#b0169b] hover:scale-105 transition-all duration-300 ease-in-out inline-block"
          >
            New Launches
          </NavLink>{" "}
          <span className="text-gray-300 text-2xl hidden md:block">|</span>
          <div
            className="bg-white px-3 py-0.5 rounded-full inline-flex  cursor-pointer
                        items-center gap-2 shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300 "
            onClick={() => navigate("/Postproperty")}
          >
            <span className="text-[#001430] text-xl flex  items-center font-semibold tracking-tight">
              Post property
            </span>

            <span className="bg-gradient-to-r from-[#28a745] to-[#1e7e34] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase leading-tight">
              Free
            </span>
          </div>
        </div>
      </header>

      {/*******************************************************************************************/}
      <Property />
      {/*******************************************************************************************/}

      {/************************************NEW LAUNCHED*******************************************/}

      <section className="py-10 mt-10 px-6 bg-[#f8fafc] ">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                  The Collection
                </span>
              </div>
              <h2 className="text-4xl font-black text-[#0f172a]">
                Newly Launched Projects
              </h2>
              <p className="text-slate-500 mt-2">
                Invest in properties with the highest projected capital
                appreciation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {newlyLaunched.map((item) => (
              <div key={item.id} className="group relative">
                <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                      <ShieldCheck size={14} className="text-orange-500" />
                      <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                        RERA Certified
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-32 left-6 z-20">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-xs font-black flex items-center gap-1 shadow-lg">
                      <TrendingUp size={14} /> +{item.growth}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                <div className="relative -mt-24 mx-4 bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] shadow-xl border border-white/50 z-30 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-3">
                    <div className="bg-gray-400 text-white-700 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider">
                      {item.tag}
                    </div>
                    <Layers size={18} className="text-slate-300" />
                  </div>

                  <h3 className="text-xl font-black text-[#0f172a] group-hover:text-orange-500 transition-colors cursor-pointer">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                    <MapPin size={14} className="text-orange-500" />
                    {item.location}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        Pricing From
                      </p>
                      <p className="text-lg font-black text-[#0f172a]">
                        ₹{item.price}
                      </p>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white 
                                    hover:bg-orange-500 transition-all cursor-pointer shadow-lg shadow-black/20"
                      onClick={() => navigate("/NewLaunches")}
                    >
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="flex items-center gap-3 bg-black text-white px-10 py-5 rounded-2xl font-bold 
            hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-200 transition-all duration-300 group"
              onClick={() => navigate("/NewLaunches")}
            >
              Explore All Properties
              <Sparkles
                size={20}
                className="text-white group-hover:rotate-12 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      {/************************************* BHK CARD **************************************************/}

      <hr className="text-gray-200 mt-5" />

      <section className="w-full py-12 px-6">
        <div className="max-w-7xl mx-auto p-5 rounded-lg bg-[#FFF8E7] ">
          {/* Header Area */}
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center">
              <i className="fa-solid fa-bed text-amber-500 text-2xl"></i>
            </div>
            <div>
              <h2 className="text-[#0D2441] text-2xl font-bold tracking-tight">
                BHK choice in mind?
              </h2>
              <p className="text-gray-500 text-sm">
                Browse by no. of bedrooms in the house
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 ">
            {bhkCards.map((card, index) => (
              <div
                key={index}
                onClick={() => navigate("/Flat")}
                className="group cursor-pointer bg-white border  border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-amber-200"
              >
                <div className="mb-6">
                  <i
                    className={`fa-solid ${card.icon} text-3xl text-blue-500 group-hover:text-amber-500 transition-colors duration-300`}
                  ></i>
                </div>

                <h3 className="text-gray-900 text-lg font-bold mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium whitespace-nowrap">
                  {card.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/****************************************** Pune Property Snapshot **********************************/}

      <hr className="text-gray-200 mt-5" />

      <section>
        <div className="w-full bg-[#FFFFFF] p-8">
          <div className="mb-8">
            <h2 className="text-[#091e42] text-2xl font-bold mb-1 tracking-tight">
              Pune Property Snapshot
            </h2>
            <div className="w-14 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
            <p className="text-gray-600 text-sm leading-relaxed mb-10 text-justify max-w-5xl">
              Pune, often referred to as the "Oxford of the East," stands as
              Maharashtra's vibrant cultural and IT hub. With its pleasant
              climate and high quality of life, the city attracts a massive
              influx of professionals and students. From the sprawling tech
              parks in{" "}
              <span className="font-semibold text-gray-800">Hinjewadi</span> to
              the upscale avenues of
              <span className="font-semibold text-gray-800">
                {" "}
                Koregaon Park
              </span>
              , Pune's real estate market continues to show resilient growth and
              high demand for residential and commercial spaces.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
              {/* Item 1 */}
              <div className="relative pl-4 border-l-2 border-gray-100 hover:border-[#FFB800] transition-colors duration-300">
                <h3 className="text-[#1A1A1A] text-2xl font-extrabold">
                  1,240+
                </h3>
                <p className="text-gray-500 text-[11px] uppercase font-bold tracking-widest mt-1 whitespace-nowrap">
                  Low Budget Flats <br />{" "}
                  <span className="text-gray-400">in Pune</span>
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative pl-4 border-l-2 border-gray-100 hover:border-[#FFB800] transition-colors duration-300">
                <h3 className="text-[#1A1A1A] text-2xl font-extrabold">
                  45,210+
                </h3>
                <p className="text-gray-500 text-[11px] uppercase font-bold tracking-widest mt-1 whitespace-nowrap">
                  Properties for Sale <br />{" "}
                  <span className="text-gray-400">in Pune</span>
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative pl-4 border-l-2 border-gray-100 hover:border-[#FFB800] transition-colors duration-300">
                <h3 className="text-[#1A1A1A] text-2xl font-extrabold">215+</h3>
                <p className="text-gray-500 text-[11px] uppercase font-bold tracking-widest mt-1 whitespace-nowrap">
                  Residential Property <br />{" "}
                  <span className="text-gray-400">Agents in Pune</span>
                </p>
              </div>

              {/* Item 4 */}
              <div className="relative pl-4 border-l-2 border-gray-100 hover:border-[#FFB800] transition-colors duration-300">
                <h3 className="text-[#1A1A1A] text-2xl font-extrabold">
                  1,850+
                </h3>
                <p className="text-gray-500 text-[11px] uppercase font-bold tracking-widest mt-1 whitespace-nowrap">
                  Residential Projects <br />{" "}
                  <span className="text-gray-400">in Pune</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="text-gray-200 mt-5" />
      {/*********************************************************************************************/}
      <UpcomingProjects />
      {/*********************************************************************************************/}
    </>
  );
};

export default Home;
