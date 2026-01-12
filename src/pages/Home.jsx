import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Property from "./Property";

const Home = () => {
  const navigate = useNavigate();

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
          style={{ backgroundImage: `url('/src/assets/bg4.jpg')` }}
        ></div>

        <div
          className="max-w-4xl  w-full mx-auto border border-gray-300 rounded-2xl shadow-lg flex-wrap
                        flex items-center justify-center gap-6 md:gap-3 px-6 py-10 bg-white -mt-13"
        >
          <NavLink
            to={"/Home"}
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
            to={"/Home"}
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

          {/* 3x3 Style Grid (Laptop) | 2x2 Style Grid (Mobile) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 ">
            {bhkCards.map((card, index) => (
              <div
                key={index}
                onClick={() => navigate(card.path)}
                className="group cursor-pointer bg-white border  border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-amber-200"
              >
                {/* Font Awesome Icon */}
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

      {/*********************************************************************************************/}

      <hr className="text-gray-200 mt-5" />

      <section>
        <div className="w-full bg-[#FFFFFF] p-8">
          {/* Title Section */}
          <div className="mb-8">
            <h2 className="text-[#091e42] text-2xl font-bold mb-1 tracking-tight">
              Pune Property Snapshot
            </h2>
            <div className="w-14 h-1.5 bg-[#FFB800] rounded-full"></div>
          </div>

          {/* Main Card Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
            {/* Description Text */}
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
              <span className="text-red-600 font-bold cursor-pointer hover:underline ml-1">
                Read more
              </span>
            </p>

            {/* Stats Grid: 2 columns mobile, 4 columns laptop */}
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
      {/*********************************************************************************************/}

     
    </>
  );
};

export default Home;
