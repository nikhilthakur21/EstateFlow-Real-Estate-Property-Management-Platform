import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  X,
  ChevronUp,
  ChevronDown,
  RotateCcw,
  MapPin,
  Calendar,
  IndianRupee,
  Home,
} from "lucide-react";
import axios from "axios";
import FluidSkeleton from "../components/FluidSkeleton";

const Flat = () => {

   const navigate = useNavigate(); 

  /* -------------------------------------------------------------------------- */

  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  /* ------------------------------ FETCH DATA  -------------------------------------------- */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://6960932fe7aa517cb79669e1.mockapi.io/FlatData",
        );

        const data = Array.isArray(res.data) ? res.data : [];
        setAllProperties(data);
      } catch (err) {
        console.error("API Error:", err);
        setAllProperties([]);
      } finally {
        setTimeout(() => setLoading(false), 600);
      }
    };

    fetchData();
  }, []);

  /* ----------------------------------    PRICE PARSING     ---------------------------------------- */

  const parsePrice = (price) => {
    if (!price) return 0;

    const value = String(price).replace(/[^0-9.]/g, "");
    const num = parseFloat(value);

    if (isNaN(num)) return 0;

    const lower = String(price).toLowerCase();

    if (lower.includes("cr")) return num * 100; // Cr → Lakh
    return num; // Lakh
  };

  const formatPrice = (price) => {
    const lakh = parsePrice(price);

    if (lakh >= 100) return `₹ ${(lakh / 100).toFixed(2)} Cr`;
    return `₹ ${lakh} L`;
  };

  /* ----------------------------------   FILTER + SORT (OPTIMIZED)  ---------------------------------------- */

  const displayedItems = useMemo(() => {
    let list = [...allProperties];

    // SEARCH
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((item) => item.location?.toLowerCase().includes(q));
    }

    // SORT
    if (sortOrder === "low-to-high") {
      list.sort(
        (a, b) =>
          parsePrice(a?.pricing?.[0]?.price) -
          parsePrice(b?.pricing?.[0]?.price),
      );
    }

    if (sortOrder === "high-to-low") {
      list.sort(
        (a, b) =>
          parsePrice(b?.pricing?.[0]?.price) -
          parsePrice(a?.pricing?.[0]?.price),
      );
    }

    return list;
  }, [allProperties, searchQuery, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-12"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-4xl font-black flex items-center gap-3">
            <Home className="text-orange-500" /> Exclusive Listings
          </h1>
          <p className="text-gray-500 mt-2">
            Search by location to find your dream home
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow mb-10 flex flex-col lg:flex-row gap-5 sticky top-24 z-40">
          {/* SEARCH */}
          <div className="relative w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search location..."
              className="w-full pl-14 pr-12 py-4 bg-gray-50 rounded-2xl font-semibold"
            />
            {searchQuery && (
              <X
                className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setSearchQuery("")}
              />
            )}
          </div>

          {/* SORT */}
          <div className="flex bg-gray-100 p-1 rounded-2xl">
            <button
              onClick={() => setSortOrder("low-to-high")}
              className={`px-5 py-3 rounded-xl text-xs font-bold ${
                sortOrder === "low-to-high"
                  ? "bg-orange-500 text-white"
                  : "text-gray-500"
              }`}
            >
              Price ↑
            </button>

            <button
              onClick={() => setSortOrder("high-to-low")}
              className={`px-5 py-3 rounded-xl text-xs font-bold ${
                sortOrder === "high-to-low"
                  ? "bg-orange-500 text-white"
                  : "text-gray-500"
              }`}
            >
              Price ↓
            </button>

            <button
              onClick={() => {
                setSortOrder("default");
                setSearchQuery("");
              }}
              className="px-4"
            >
              <RotateCcw />
            </button>
          </div>
        </div>

        {/* COUNT */}
        <p className="text-xs text-gray-400 mb-6">
          {displayedItems.length} Properties Found
        </p>

        {loading ? (
          <FluidSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {displayedItems.length ? (
              displayedItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`} // FIXED UNIQUE KEY
                  className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition flex flex-col sm:flex-row"
                >
                  <div className="w-full sm:w-56 h-56">
                    <img
                      src={item.image || "https://via.placeholder.com/400"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-orange-500 font-bold flex gap-1">
                        <MapPin size={12} /> {item.location}
                      </p>
                      <h3 className="text-xl font-black">{item.title}</h3>
                    </div>

                    <div className="flex gap-6 py-4 border-y">
                      {Array.isArray(item.pricing) &&
                        item.pricing.slice(0, 2).map((p, i) => (
                          <div key={`${item.id}-price-${i}`}>
                            <p className="text-xs text-gray-400">{p.type}</p>
                            <p className="font-black">
                              <IndianRupee size={14} className="inline" />
                              {formatPrice(p.price)}
                            </p>
                          </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400 flex gap-1">
                        <Calendar size={14} />
                        {item.completionDate}
                      </p>
                      <button className="bg-gray-900 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-orange-500" onClick={() => navigate("/PropertyEnquiryForm")}>
                        BOOK TOUR
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-3xl">
                <Search size={40} className="mx-auto text-gray-300" />
                <h3 className="text-xl font-black mt-4">No Properties Found</h3>
                <p className="text-gray-500">Try another location</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Flat;
