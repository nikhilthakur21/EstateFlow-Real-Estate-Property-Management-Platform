import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Property from "./Property";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div
          className="w-full border-b border-gray-300 shadow-lg bg-cover bg-center bg-no-repeat mt-[70px]
             aspect-video md:aspect-[21/9] lg:aspect-[4/1]  "
          style={{ backgroundImage: `url('/src/assets/bg4.jpg')` }}
        >
          {/* Content goes here */}
        </div>

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
            to={"/Home"}
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

      <Property/>
      <Footer/>

      
    </>
  );
};

export default Home;
