import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const LuxuryPenthouses = () => {
  // for Selection
  const [selectedPenthouse, setSelectedPenthouse] = useState(null);

  const penthouses = [
    {
      id: 1,
      title: "Skyline Zenith",
      location: "Manjri, Pune",
      area: "4500 sqft",
      price: "₹ 8.5 Cr",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
      brand: "VTP",
    },
    {
      id: 2,
      title: "The Obsidian Suite",
      location: "Lavale",
      area: "5200 sqft",
      price: "₹ 12.0 Cr",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      brand: "VANAHA",
    },
    {
      id: 3,
      title: "Azure Heights",
      location: "Kharadi",
      area: "3800 sqft",
      price: "₹ 6.2 Cr",
      image: "https://wallpaperset.com/w/full/9/d/7/176022.jpg",
      brand: "PANCHSHIL",
    },
    {
      id: 4,
      title: "Elysian Duplex",
      location: "Baner",
      area: "4100 sqft",
      price: "₹ 7.8 Cr",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974",
      brand: "KOLTE PATIL",
    },
    {
      id: 5,
      title: "Royal Crown Penthouse",
      location: "Koregaon Park",
      area: "6000 sqft",
      price: "₹ 18.5 Cr",
      image:
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070",
      brand: "VTP",
    },
    {
      id: 6,
      title: "The Onyx Vista",
      location: "Hinjewadi",
      area: "3500 sqft",
      price: "₹ 5.5 Cr",
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070",
      brand: "LODHA",
    },
    {
      id: 7,
      title: "Gilded Terrace",
      location: "Viman Nagar",
      area: "4800 sqft",
      price: "₹ 9.1 Cr",
      image: "https://wallpaperset.com/w/full/9/2/2/175910.jpg",
      brand: "GODREJ",
    },
    {
      id: 8,
      title: "Velvet Sky Pad",
      location: "Magarpatta",
      area: "4300 sqft",
      price: "₹ 8.2 Cr",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1892",
      brand: "VANAHA",
    },
    {
      id: 9,
      title: "Imperial Peak",
      location: "Wakad",
      area: "3900 sqft",
      price: "₹ 6.9 Cr",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
      brand: "VTP",
    },
    {
      id: 10,
      title: "Titanium Loft",
      location: "Balewadi",
      area: "5500 sqft",
      price: "₹ 14.5 Cr",
      image:
        "http://media.architecturaldigest.com/photos/5899fac3cf4c8b7525f1da4f/master/pass/0114-AD-ROCK-13.jpg",
      brand: "SHAPOORJI",
    },
    {
      id: 11,
      title: "The Glass Manor",
      location: "Boat Club Road",
      area: "6200 sqft",
      price: "₹ 21.0 Cr",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      brand: "TRUMP TOWERS",
    },
    {
      id: 12,
      title: "Aura Sky Mansion",
      location: "Senapati Bapat Road",
      area: "4800 sqft",
      price: "₹ 11.2 Cr",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      brand: "AMANORA",
    },
  ];

  const handleInterested = (p) => {
    setSelectedPenthouse(p);
  };

  return (
    <div className="bg-black min-h-screen p-8 mt-[70px]">
      <ToastContainer />

      {/* Header */}
      <div
        className="max-w-7xl mx-auto mb-12"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="text-4xl font-black text-white tracking-tight uppercase">
          Elite <span className="text-amber-500">Penthouses</span>
        </h1>
        <p className="text-zinc-500 mt-2">
          Curated luxury listings for the modern man.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {penthouses.map((p) => (
          <div
            key={p.id}
            className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-amber-500 border border-amber-500/30 uppercase tracking-widest">
                {p.brand} Luxury
              </div>
              {/* For That half img effect */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {p.title}
                </h3>
                <span className="text-amber-500 font-black text-lg">
                  {p.price}
                </span>
              </div>

              <p className="text-zinc-400 text-sm mb-6 flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-zinc-600"></i>{" "}
                {p.location}
              </p>

              <div className="flex items-center gap-4 py-4 border-y border-zinc-800 mb-6">
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                  <i className="fa-solid fa-vector-square text-amber-500"></i>{" "}
                  {p.area}
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                  <i className="fa-solid fa-crown text-amber-500"></i> Top Floor
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleInterested(p)}
                className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                I'm Interested
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interest Modal (Simulated) */}
      {selectedPenthouse && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl max-w-sm w-full text-center">
            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-user-tie text-amber-500 text-3xl"></i>
            </div>
            <h2 className="text-white text-2xl font-bold mb-2">
              Exclusive Access
            </h2>
            <p className="text-zinc-500 text-sm mb-6 font-medium leading-relaxed">
              To view the brochure of{" "}
              <span className="text-white">"{selectedPenthouse.title}"</span>,
              please contact our relationship manager.
            </p>
            <div className="space-y-3">
              <div className="bg-black p-4 rounded-xl border border-zinc-800">
                <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">
                  Agent Name
                </p>
                <p className="text-white font-bold italic">Mr. Vikram Sharma</p>
              </div>
              <div className="bg-black p-4 rounded-xl border border-zinc-800">
                <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">
                  Direct Line
                </p>
                <p className="text-amber-500 font-mono font-bold text-lg">
                  +91 98230 45XXX
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedPenthouse(null)}
              className="mt-8 text-zinc-500 hover:text-white text-xs font-bold uppercase tracking-widest"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LuxuryPenthouses;
