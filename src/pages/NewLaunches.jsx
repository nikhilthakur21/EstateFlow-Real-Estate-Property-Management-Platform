import {
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Layers,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewLaunches = () => {
  const navigate = useNavigate();

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
    {
      id: 4,
      name: "Lodha Belmondo",
      location: "Gahunje, Pune",
      price: "1.10 - 3.20 Cr",
      type: "Golf View Condos",
      tag: "Luxury Living",
      growth: "11.2%",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Kolte Patil Life Republic",
      location: "Marunji, Pune",
      price: "45 - 95 L",
      type: "Smart 1 & 2 BHK",
      tag: "Hot Property",
      growth: "15.8%",
      image:
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "VTP Blue Waters",
      location: "Mahalunge, Pune",
      price: "78 L - 1.65 Cr",
      type: "Riverside Homes",
      tag: "New Launch",
      growth: "9.7%",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                The Premier Collection
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">
              New Launches
            </h2>
            <p className="text-slate-500 mt-3 text-lg">
              Experience the future of living with our latest curated property
              launches.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
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
                  <div className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                    {item.tag}
                  </div>
                  <Layers size={18} className="text-slate-300" />
                </div>

                <h3 className="text-xl font-black text-[#0f172a] group-hover:text-orange-500 transition-colors cursor-pointer truncate">
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
                  <button
                    onClick={() => navigate("/Contact")}
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-orange-500 transition-all cursor-pointer shadow-lg shadow-black/20"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewLaunches;
