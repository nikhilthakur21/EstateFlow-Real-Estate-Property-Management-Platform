import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AddFlat = () => {
  const [formData, setFormData] = useState({
    id: "",
    pointId: "",
    title: "",
    location: "",
    image: "",
    completionDate: "",
    flatType: "1 BHK",
    price: "",
    nearby: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Formatting data for the API
    const finalData = {
      ...formData,
      nearby: formData.nearby.split(",").map((item) => item.trim()),
      // Wrapping into an array to match your previous JSON structure if needed
      pricing: [{ type: formData.flatType, price: formData.price }],
    };

    try {
      await axios.post(
        "https://6960932fe7aa517cb79669e1.mockapi.io/FlatData",
        finalData
      );
      console.log("Submitting:", finalData);
      toast.success("Flat details saved!");
    } catch (err) {
      toast.error("Failed to save data");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-xl ">
      <ToastContainer theme="dark" />

      <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-6 bg-orange-500 rounded-full"></span>
        Add Flat Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            name="id"
            onChange={handleChange}
            placeholder="Internal ID (P-01)"
            className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white outline-none focus:border-orange-500"
          />
          <input
            name="pointId"
            onChange={handleChange}
            placeholder="Point ID (10245)"
            className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white outline-none focus:border-orange-500"
          />
        </div>

        <input
          name="title"
          onChange={handleChange}
          placeholder="Project Name (VTP Cygnus)"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white outline-none focus:border-orange-500"
        />

        <input
          name="location"
          onChange={handleChange}
          placeholder="Location (Manjri, Pune)"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white outline-none focus:border-orange-500"
        />

        <div className="grid grid-cols-2 gap-4 bg-zinc-950 p-4 rounded-xl border border-zinc-800">
          <div>
            <label className="text-zinc-500 text-[10px] uppercase font-bold block mb-1">
              Select Type
            </label>
            <select
              name="flatType"
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-2 text-white outline-none"
            >
              <option value="1 BHK">1 BHK</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="Shop">Shop/Commercial</option>
            </select>
          </div>
          <div>
            <label className="text-zinc-500 text-[10px] uppercase font-bold block mb-1">
              Price
            </label>
            <input
              name="price"
              onChange={handleChange}
              placeholder="₹45 L"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-2 text-white outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <input
          name="nearby"
          onChange={handleChange}
          placeholder="Nearby Landmarks (Comma separated)"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white outline-none focus:border-orange-500"
        />

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-orange-900/20"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddFlat;
