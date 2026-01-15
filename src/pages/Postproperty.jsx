import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostProperty = () => {
  const [propertyType, setPropertyType] = useState("Sell"); // Sell, Rent, PG
  const [category, setCategory] = useState("Residential"); // Residential, Commercial
  const [subType, setSubType] = useState("Flat/Apartment"); // Sub-types
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleStartNow = (e) => {
    e.preventDefault();

    const propertyData = {
      propertyType,
      category,
      subType,
      phoneNumber,
      timestamp: new Date().toISOString(),
    };

    //Store in Local Storage
    localStorage.setItem("pendingProperty", JSON.stringify(propertyData));

    toast.success(
      <div className="flex flex-col gap-1">
        <span className="font-bold">Progress Saved Successfully!</span>
        <span className="text-xs opacity-80">
          Our agent will call you soon.
        </span>
      </div>,
      {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      }
    );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="min-h-screen bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-20 mt-20 md:mt-1 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side Div */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#002855] leading-tight">
              Sell or Rent Property <br />
              <span className="text-[#0078DB]">online faster</span> with
              EstateFlow
            </h1>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-700 font-medium">
                <span className="text-green-500 text-xl font-bold">✓</span>{" "}
                Advertise for FREE
              </li>
              <li className="flex items-center gap-3 text-zinc-700 font-medium">
                <span className="text-green-500 text-xl font-bold">✓</span> Get
                unlimited enquiries
              </li>
              <li className="flex items-center gap-3 text-zinc-700 font-medium">
                <span className="text-green-500 text-xl font-bold">✓</span> Get
                shortlisted buyers and tenants
              </li>
              <li className="flex items-center gap-3 text-zinc-700 font-medium">
                <span className="text-green-500 text-xl font-bold">✓</span>{" "}
                Assistance in co-ordinating site visits
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[480px] bg-white rounded-2xl shadow-2xl border border-zinc-100 p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Start posting your property, it's free
            </h2>
            <p className="text-zinc-500 text-xs mb-6 font-semibold uppercase tracking-wide">
              Add Basic Details
            </p>

            <form onSubmit={handleStartNow} className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-zinc-600">
                  You're looking to ...
                </label>
                <div className="flex gap-2">
                  {["Sell", "Rent", "PG"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`px-6 py-2 rounded-full border text-sm transition-all ${
                        propertyType === type
                          ? "bg-[#EBF5FF] border-[#0078DB] text-[#0078DB] font-bold"
                          : "border-zinc-200 text-zinc-500"
                      }`}
                    >
                      {type === "Rent" ? "Rent / Lease" : type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-zinc-600">
                  And it's a ...
                </label>
                <div className="flex gap-6 mb-4">
                  {["Residential", "Commercial"].map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 cursor-pointer text-sm font-medium"
                    >
                      <input
                        type="radio"
                        name="cat"
                        checked={category === cat}
                        onChange={() => setCategory(cat)}
                        className="w-4 h-4 accent-[#0078DB]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>

                {/* Sub-type Selection */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Flat/Apartment",
                    "Independent House / Villa",
                    "Independent / Builder Floor",
                    "Plot / Land",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSubType(item)}
                      className={`px-4 py-2 rounded-full border text-xs transition-all ${
                        subType === item
                          ? "border-[#0078DB] bg-blue-50 text-[#0078DB] font-semibold"
                          : "border-zinc-200 bg-white text-zinc-600 hover:border-[#0078DB]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-100">
                <label className="text-sm font-bold text-zinc-700">
                  Your contact details for the buyer to reach you
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm border-r pr-2">
                    +91
                  </span>
                  <input
                    required
                    type="tel"
                    pattern="[0-9]{10}"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full border border-zinc-300 rounded-lg p-3 pl-14 outline-none focus:border-[#0078DB] transition-all placeholder:text-zinc-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#121212] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-gray-900 active:scale-[0.98] transition-all text-lg"
              >
                Start Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/*****************************************************************************************************/}
      {/* 3 Card Divs */}
      <section className=" py-16 px-6">
        <div className="max-w-7xl mx-auto bg-[#FFF8E7] p-10 rounded-2xl">
          <div className="text-center mb-16">
            <h2 className="text-[#002855] text-3xl md:text-4xl font-extrabold mb-4">
              Post Your Property in{" "}
              <span className="text-[#0078DB]">3 Simple Steps</span>
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We make selling or renting your property effortless. Follow these
              steps to get your listing live and start receiving genuine
              enquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border-b-4 border-blue-500">
              <div className="absolute -top-6 left-8 bg-[#0078DB] text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:-translate-y-2 transition-transform">
                01
              </div>
              <div className="mt-4 mb-6 text-[#0078DB] bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-2xl">
                <i className="fa-solid fa-house-chimney-window"></i>
              </div>
              <h3 className="text-[#002855] text-xl font-bold mb-3 font-sans">
                Add Details of Property
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Begin by telling us the few basic details about your property
                like your property type, location, No. of rooms and built-up
                area.
              </p>
            </div>

            <div className="relative group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border-b-4 border-orange-500">
              <div className="absolute -top-6 left-8 bg-orange-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:-translate-y-2 transition-transform">
                02
              </div>
              <div className="mt-4 mb-6 text-orange-500 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center text-2xl">
                <i className="fa-solid fa-camera-retro"></i>
              </div>
              <h3 className="text-[#002855] text-xl font-bold mb-3 font-sans">
                Upload Photos & Videos
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Upload high-quality photos and videos of your property either
                via your desktop device or directly from your mobile phone.
              </p>
            </div>

            <div className="relative group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border-b-4 border-green-500">
              <div className="absolute -top-6 left-8 bg-green-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:-translate-y-2 transition-transform">
                03
              </div>
              <div className="mt-4 mb-6 text-green-600 bg-green-50 w-16 h-16 rounded-full flex items-center justify-center text-2xl">
                <i className="fa-solid fa-file-invoice-dollar"></i>
              </div>
              <h3 className="text-[#002855] text-xl font-bold mb-3 font-sans">
                Add Pricing & Ownership
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Just update your property's ownership details and your expected
                price. Once verified, your property is ready for posting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostProperty;
