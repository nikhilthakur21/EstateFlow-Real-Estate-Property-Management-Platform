import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FluidSkeleton from "../components/FluidSkeleton";

import {
  Heart,
  ChevronRight,
  Building2,
  Factory,
  Home,
  Construction,
  Zap,
  Leaf,
  TrendingUp,
} from "lucide-react";

const Property = () => {
  const [loading, setLoading] = useState(true);
  // For Loding Effect

  const scrollRef = useRef(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 380,
        behavior: "smooth",
      });
    }
  };

  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [dwellings, setDwellings] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://695ea1592556fd22f678fa68.mockapi.io/PropertySection"
        );

        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching data with axios:", err);
      } finally {
        setTimeout(() => setLoading(false), 400);
      }
    };

    getProperties();
  }, []);

  useEffect(() => {
    const fetchDwellings = async () => {
      try {
        setLoading(true);
        const response2 = await axios.get(
          "https://695ea1592556fd22f678fa68.mockapi.io/EstateGallery"
        );
        setDwellings(response2.data);
      } catch (err) {
        console.error("Error fetching dwelling data:", err);
      } finally {
        setTimeout(() => setLoading(false), 400);
      }
    };

    fetchDwellings();
  }, []);

  const developers = [
    {
      id: "d1",
      name: "Kohinoor Group Pune",
      totalProjects: 51,
      cityProjects: 26,
      color: "bg-blue-50",
      icon: <Building2 className="text-blue-500" size={32} />,
    },
    {
      id: "d2",
      name: "Rohan Builders",
      totalProjects: 40,
      cityProjects: 19,
      color: "bg-orange-50",
      icon: <Home className="text-orange-500" size={32} />,
    },
    {
      id: "d3",
      name: "Kolte Patil",
      totalProjects: 90,
      cityProjects: 28,
      color: "bg-green-50",
      icon: <Factory className="text-green-500" size={32} />,
    },
    {
      id: "d4",
      name: "Godrej Properties",
      totalProjects: 189,
      cityProjects: 22,
      color: "bg-purple-50",
      icon: <Construction className="text-purple-500" size={32} />,
    },
  ];

  return (
    <>
      <section className="mt-5 px-4">
        <hr className="text-gray-100" />
        <div className="flex w-full  h-[80vh] overflow-hidden mt-4">
          {/* 70% SCROLLABLE SIDE */}
          <div className="w-full md:w-[70%] h-full overflow-y-auto no-scrollbar  p-4 bg-white">
            <h1 className="text-[#091e42] text-3xl font-bold tracking-tight md:text-3xl text-xl">
              Apartments, Villas and more
            </h1>
            <p className="text-slate-500 text-lg">in Pune </p>
            <div className="flex flex-col gap-6 mt-5">
              {loading ? (
                <FluidSkeleton />
              ) : (
                <div className=" gap-3 flex flex-row  overflow-x-auto no-scrollbar pb-4 cursor-pointer">
                  {properties.map((item) => (
                    <div
                      onClick={() => navigate("/Flat")}
                      key={item.id}
                      className="w-full max-w-[257px] aspect-[257/341] rounded-2xl  overflow-hidden flex flex-col shadow-sm shrink-0"
                      style={{ backgroundColor: item.color }}
                    >
                      <div className="pt-10 px-6 pb-6">
                        <h2 className="text-[#3d516d] text-2xl font-bold leading-tight tracking-tight">
                          {item.title}
                        </h2>
                        <p className="text-[#93a1b0] text-base mt-3 font-medium">
                          {item.count} Properties
                        </p>
                      </div>
                      <div className="mt-auto w-full h-[50%] mt-[-1]">
                        <img
                          src={item.imageUrl}
                          className="w-full h-full object-cover"
                          alt={item.title}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <hr className="text-gray-200 mt-5" />

            {/********************************************************************************/}
            <section className="mt-5 relative group">
              <h1 className="text-[#091e42] text-3xl font-bold tracking-tight md:text-3xl text-xl">
                Handpicked Projects
              </h1>
              <p className="text-slate-500 text-lg">
                Featured Projects in Pune West
              </p>

              <div className="flex flex-col gap-6 mt-7 relative">
                {/* RIGHT SCROLL BUTTON */}
                <button
                  onClick={scrollNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white hover:border-gray-500 p-3 
                             rounded-full shadow-2xl border border-gray-100 transition-all hover:scale-110 active:scale-95 hidden md:flex"
                  aria-label="Scroll Right"
                >
                  <ChevronRight size={32} className="text-[#091e42]" />
                </button>

                {loading ? (
                  <FluidSkeleton />
                ) : (
                  <div className="w-full py-3">
                    <div
                      ref={scrollRef}
                      className="flex flex-row gap-6 cursor-pointer overflow-x-auto no-scrollbar px-4 md:px-10 pb-10 snap-x scroll-smooth"
                    >
                      {dwellings.map((unit) => (
                        <div
                          onClick={() => navigate("/LuxuryPenthouses")}
                          key={unit.id}
                          className="w-[360px] h-[380px] shrink-0 snap-start bg-white rounded-[24px] shadow-xl overflow-hidden font-sans flex flex-col group relative"
                        >
                          <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
                            <img
                              src={unit.displayImage}
                              alt={unit.listingName}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {unit.isFeatured && (
                              <div className="absolute top-4 left-0 bg-[#b0169b] text-white text-[10px] font-bold px-3 py-1.5 rounded-r-sm z-10">
                                Featured
                              </div>
                            )}
                            <div className="absolute top-4 right-4 text-white drop-shadow-lg cursor-pointer hover:scale-110 transition-transform z-10">
                              <Heart
                                size={28}
                                strokeWidth={2}
                                className="hover:fill-red-500 hover:stroke-red-500 transition-colors"
                              />
                            </div>
                          </div>

                          <div className="relative flex-1 px-7 pt-12 bg-white">
                            <div className="absolute -top-12 left-7 w-24 h-24 bg-white rounded-full p-1.5 shadow-lg border border-gray-50 flex items-center justify-center z-20">
                              <div className="flex flex-col items-center text-center px-1">
                                <span className="text-[#2d5a27] text-[9px] font-bold tracking-widest leading-tight">
                                  {unit.brandCode}
                                </span>
                                <div className="w-10 h-[0.5px] bg-[#2d5a27] my-1 opacity-30"></div>
                                <span className="text-[#2d5a27] text-[6px] font-medium tracking-tighter uppercase opacity-80">
                                  {unit.subText}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col space-y-1">
                              <h3 className="text-[#0f2a4d] text-[22px] font-bold leading-tight group-hover:text-[#b0169b] transition-colors">
                                {unit.listingName}
                              </h3>
                              <p className="text-gray-400 text-sm font-medium">
                                {unit.layout}, {unit.area}
                              </p>
                              <div className="pt-4 text-[#0f2a4d] text-2xl font-extrabold">
                                {unit.cost}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
            <hr className="text-gray-200" />

            {/********************************************************************************/}

            <section className="mt-5">
              <h1 className="text-[#091e42] text-3xl font-bold tracking-tight md:text-3xl text-xl">
                Popular builders
              </h1>
              <p className="text-slate-500 text-lg">In Pune</p>

              <section className="w-full flex justify-center py-5">
                <div className="flex flex-row gap-5 overflow-x-auto no-scrollbar pb-6 snap-x">
                  {developers.map((dev) => (
                    <div
                      key={dev.id}
                      className={`min-w-[380px] h-[120px] ${dev.color} border border-white rounded-2xl shadow-sm flex items-center px-6 shrink-0 snap-start transition-transform hover:scale-[1.02] cursor-pointer`}
                    >
                      <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                        {dev.icon}
                      </div>

                      <div className="ml-6 flex flex-col">
                        <h3 className="text-[#0f2a4d] text-lg font-bold leading-tight">
                          {dev.name}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1 font-medium">
                          {dev.totalProjects} Total Projects |{" "}
                          {dev.cityProjects} in this city
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </section>
          </div>

          {/* 30% SIDEBAR - The 'hidden' class removes the entire element from the DOM flow */}
          <div className="hidden md:flex md:w-[30%] h-full bg-gray-50 rounded-lg p-4 flex-col ms-2">
            <div className="sticky top-0">
              <div className="w-full max-w-[350px] h-[200px] bg-[#120d1d] rounded-[24px] p-5 shadow-2xl border border-white/10 flex flex-col justify-between overflow-hidden group">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-sm font-black tracking-widest uppercase opacity-80">
                    Why Pune<span className="text-[#b0169b]">?</span>
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-[#b0169b] animate-pulse"></div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="bg-white/5 p-3 rounded-2xl border border-white/5 flex flex-col gap-2">
                    <Zap size={16} className="text-yellow-400" />
                    <span className="text-white text-[11px] font-bold leading-none">
                      10m to IT Parks
                    </span>
                  </div>

                  <div className="bg-white/5 p-3 rounded-2xl border border-white/5 flex flex-col gap-2">
                    <Leaf size={16} className="text-green-400" />
                    <span className="text-white text-[11px] font-bold leading-none">
                      70% Open Space
                    </span>
                  </div>

                  <div className="col-span-2 bg-[#b0169b]/10 p-3 rounded-2xl border border-[#b0169b]/20 flex items-center gap-3">
                    <TrendingUp size={18} className="text-[#b0169b]" />
                    <div>
                      <span className="text-white text-[12px] font-extrabold block">
                        High ROI Zone
                      </span>
                      <span className="text-[#b0169b] text-[9px] font-bold uppercase tracking-tighter">
                        Top Appreciating Zone
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full rounded-xl border border-gray-100 bg-gradient-to-br from-[#f8fdfb] via-[#f8fdfb] to-[#d6ede4] p-5 mt-8 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold leading-tight text-[#1a2e44]">
                  Sell or rent faster at <br /> the right price!
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  List your property now
                </p>
              </div>

              <button
                className="w-full sm:w-auto rounded-lg bg-[#121212] px-5 py-2.5 text-sm font-bold text-white 
                                transition-all hover:bg-gray-900 active:scale-95"
                onClick={() => navigate("/Postproperty")}
              >
                Post Property, It's FREE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Property;
