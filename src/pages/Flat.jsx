import React, { useEffect, useState } from "react";
import { Heart, Smartphone, Download, CheckCircle, Boxes } from "lucide-react";
import axios from "axios";
import FluidSkeleton from "../components/FluidSkeleton";

const Flat = () => {
  const [loading, setLoading] = useState(true);
    // For Loding Effect

  const [properties, setproperties] = useState([]);

  const fetchData = async () => {
    try {
       setLoading(true);
      const res = await axios.get(
        "https://6960932fe7aa517cb79669e1.mockapi.io/FlatData"
      );

      console.log(res);
      setproperties(res.data);
    } catch (err) {
      console.log(err);
    }finally {
      
      setTimeout(() => setLoading(false), 400);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className=" Flat  ">
      <div className=" mt-[70px] pt-5  ">
        <h2 className="text-[#0D2441] text-2xl font-bold  md:ms-14 ms-2  ">
          | Flats in Pune West for Sale
        </h2>

        <div
          className="max-w-6xl mx-auto bg-white border-2 border-slate-300 px-6 py-10 mt-8
                     transition-colors rounded-2xl duration-300 shadow-sm"
        >
          <div
            className="Option mx-auto bg-gray-900 w-full gap-5 border-slate-300 py-1 flex flex-col md:flex-row items-center justify-center   md:p-0.3 transition-colors rounded-3xl md:rounded-full duration-300 shadow-sm "
          >
            <button
              className="bg-slate-50 text-slate-600 px-10 py-0.3 hover:border-orange-100 cursor-pointer 
                            rounded-full border border-slate-100 hover:scale-[1.03] transition-all duration-300 ease-in-out"
            >
              NEW LAUNCH{" "}
              <span>
                <i class="fa-solid fa-wand-magic-sparkles"></i>
              </span>
            </button>
            <button
              className="bg-slate-50 text-slate-600 px-10 py-0.3 hover:border-orange-100 cursor-pointer 
                            rounded-full border border-slate-100 hover:scale-[1.03] transition-all duration-300 ease-in-out "
            >
              Price Low to High{" "}
              <span>
                <i class="fa-solid fa-angles-up"></i>
              </span>
            </button>
            <button
              className="bg-slate-50 text-slate-600 px-10 py-0.3 hover:border-orange-100 cursor-pointer 
                            rounded-full border border-slate-100 hover:scale-[1.03] transition-all duration-300 ease-in-out"
            >
              Price High to Low{" "}
              <span>
                <i class="fa-solid fa-angles-down"></i>
              </span>
            </button>
            <button
              className="bg-slate-50 text-slate-600 px-10 py-0.3 hover:border-orange-100 cursor-pointer 
                            rounded-full border border-slate-100 hover:scale-[1.03] transition-all duration-300 ease-in-out"
            >
              Under construction
              <span>
                <i class="fa-solid fa-brush"></i>{" "}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/*************************************************************************************************************/}

      <div className="max-w-[1200px] mx-auto  px-4 py-10">
        {loading ? (
          <FluidSkeleton
          />
        ) :
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 justify-items-center w-full">
          {properties.map((property) => (
            <div
              key={property.id}
              className="w-full md:w-[550px] h-[280px] bg-white border-2 border-slate-200 rounded-2xl p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:border-orange-500 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.3)] group"
            >
              <div className="flex gap-4 h-full">
                <div className="relative w-[42%] h-full rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={property.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={property.title}
                  />

                  <div className="absolute top-2 left-2">
                    <span className="bg-[#121212]/80 text-white text-[10px] px-2 py-1 rounded font-bold tracking-tight backdrop-blur-sm">
                      ZERO BROKERAGE
                    </span>
                  </div>

                  <div className="absolute top-2 right-2 text-white hover:text-red-500 transition-colors">
                    <Heart size={20} className="drop-shadow-md" />
                  </div>

                  <div className="absolute bottom-0 w-full bg-[#121212]/70 text-white text-[10px] py-2 px-3 backdrop-blur-md font-medium">
                    Under Construction • {property.completionDate}
                  </div>
                </div>

                {/* Right Side: Content Section */}
                <div className="w-[58%] flex flex-col py-1">
                  {/* Header Row */}
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1">
                      <h2 className="text-[20px] font-bold text-[#121212] leading-tight group-hover:text-[#D4AF37] transition-colors truncate">
                        {property.title}
                      </h2>
                      <p className="text-sm text-slate-500 font-medium mt-0.5">
                        Flats in{" "}
                        <span className="text-blue-600 font-semibold">
                          {property.location}
                        </span>
                      </p>
                    </div>
                    <span className="bg-blue-50 text-blue-700 text-[9px] font-black px-2 py-1 rounded uppercase flex-shrink-0">
                      New 
                    </span>
                  </div>

                  {/* Pricing Section */}
                  <div className="flex mt-4 border-b border-slate-100 pb-3">
                    {property.pricing.map((item, index) => (
                      <div
                        key={index}
                        className={`flex-1 ${
                          index > 0 ? "border-l border-slate-100 pl-4" : ""
                        }`}
                      >
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight mb-0.5">
                          {item.type}
                        </p>
                        <p className="text-lg font-extrabold text-[#121212] leading-none">
                          {item.price}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Nearby & Point ID Section */}
                  <div className="mt-3 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase whitespace-nowrap">
                        Nearby:
                      </span>
                      <div className="flex gap-1 overflow-hidden">
                        {property.nearby.map((place, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-50 text-slate-600 text-[10px] px-2 py-0.5 rounded-full border border-slate-100 whitespace-nowrap"
                          >
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Added Point ID Here */}
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        Property ID:
                      </span>
                      <span className="text-[10px] font-bold text-[#D4AF37]">
                        {property.pointId}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex gap-2">
                    <button className="flex-[1.2] flex items-center justify-center gap-2 bg-[#121212] text-white rounded-lg py-2 text-xs font-bold hover:bg-black shadow-lg transition-all">
                      View Number
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>}
      </div>
    </section>
  );
};

export default Flat;
