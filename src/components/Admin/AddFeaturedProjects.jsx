import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFeaturedProjects = () => {
  const [formData, setFormData] = useState({
    listingName: "",
    layout: "",
    area: "",
    cost: "",
    displayImage: "",
    brandCode: "",
    subText: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://695ea1592556fd22f678fa68.mockapi.io/EstateGallery",
        formData
      );

      console.log("Success:", res.data);
      toast.success("Listing published successfully!");

      setFormData({
        listingName: "",
        layout: "",
        area: "",
        cost: "",
        displayImage: "",
        brandCode: "",
        subText: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Error saving listing");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl ">
      <ToastContainer theme="dark" />

      <div className="mb-8">
        <h2 className="text-white text-2xl font-bold flex items-center gap-3">
          <span className="w-1.5 h-8 bg-orange-500 rounded-full"></span>
          Property Listing Portal
        </h2>
        <p className="text-zinc-500 text-sm mt-1 ml-4">
          Enter project details for web display.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-zinc-400 text-xs font-semibold ml-1">
              Listing Name
            </label>
            <input
              required
              name="listingName"
              value={formData.listingName}
              onChange={handleChange}
              placeholder="e.g. Vanaha Verdant"
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition-all"
            />
          </div>
          <div className="space-y-1">
            <label className="text-zinc-400 text-xs font-semibold ml-1">
              Area / Location
            </label>
            <input
              required
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="e.g. Lavale"
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-zinc-400 text-xs font-semibold ml-1">
              Brand Code
            </label>
            <input
              name="brandCode"
              value={formData.brandCode}
              onChange={handleChange}
              placeholder="VANAHA"
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition-all uppercase"
            />
          </div>
          <div className="space-y-1">
            <label className="text-zinc-400 text-xs font-semibold ml-1">
              Sub Text
            </label>
            <input
              name="subText"
              value={formData.subText}
              onChange={handleChange}
              placeholder="VERDANT"
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition-all uppercase"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-zinc-400 text-xs font-semibold ml-1">
              Layout Configuration
            </label>
            <input
              name="layout"
              value={formData.layout}
              onChange={handleChange}
              placeholder="2, 3 BHK Apartment"
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition-all"
            />
          </div>
          <div className="space-y-1">
            <label className="text-zinc-400 text-xs font-semibold ml-1">
              Cost Range
            </label>
            <input
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              placeholder="₹ 1.05 - 1.5 Cr"
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-zinc-400 text-xs font-semibold ml-1">
            Display Image URL
          </label>
          <input
            name="displayImage"
            value={formData.displayImage}
            onChange={handleChange}
            placeholder="https://images.unsplash.com/..."
            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-3 text-white focus:border-orange-500 outline-none transition-all text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-900/30 mt-4 active:scale-95"
        >
          Publish Property
        </button>
      </form>
    </div>
  );
};

export default AddFeaturedProjects;
