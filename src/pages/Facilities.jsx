import {
  Waves,
  Dumbbell,
  Baby,
  Flower2,
  Mic2,
  Trophy,
  PersonStanding,
  ChevronRight,
} from "lucide-react";

const facilities = [
  {
    id: 1,
    name: "Swimming Pool",
    icon: Waves,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    id: 2,
    name: "Gymnasium",
    icon: Dumbbell,
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    id: 3,
    name: "Children's Play Area",
    icon: Baby,
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    id: 4,
    name: "Landscape Garden",
    icon: Flower2,
    color: "bg-green-50 text-green-600 border-green-100",
  },
  {
    id: 5,
    name: "Amphitheatre",
    icon: Mic2,
    color: "bg-yellow-50 text-yellow-600 border-yellow-100",
  },
  {
    id: 6,
    name: "Badminton Court",
    icon: Trophy,
    color: "bg-sky-50 text-sky-600 border-sky-100",
  },
  {
    id: 7,
    name: "Yoga/Meditation",
    icon: PersonStanding,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
];

const Facilities = () => {
  return (
    <>
      <section className="py-12 px-4 bg-white max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Top Facilities 
            </h2>
            <p className="text-slate-500 mt-5 max-w-xxl">
              Presenting an exclusive opportunity to own a stunning home with
              world-class amenities.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-8 gap-4">
          {facilities.map((item) => (
            <div
              data-aos="zoom-in"
              key={item.id}
              className={`group flex flex-col items-center justify-center p-6 rounded-3xl border transition-all duration-500 cursor-pointer 
              ${item.color} hover:shadow-xl hover:shadow-current/10 hover:-translate-y-2 active:scale-95`}
            >
              {/* Icon Wrapper */}
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <item.icon size={36} strokeWidth={1.5} />
              </div>

              {/* Label */}
              <span className="text-center text-[11px] font-black uppercase tracking-wider leading-tight text-slate-700 group-hover:text-inherit">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>
       <hr className="text-gray-200 mt-5" />
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Compact Heading Area */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                EstateFlow Visibility in Pune
              </h2>
            </div>
            <p className="text-slate-500 text-sm md:text-base max-w-xl font-medium leading-relaxed">
              With over 7 million unique visitors monthly, your property gets
              maximum visibility in the Pune market.
            </p>
          </div>

          {/* Slim Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 border-t border-gray-100 pt-10">
            {/* Stat 1 */}
            <div className="flex flex-col items-center md:items-start group">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                OVER
              </span>
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-extrabold text-[#002147] group-hover:text-orange-500 transition-colors duration-300">
                  12,500
                </span>
                <span className="text-xl font-bold text-orange-500 ml-0.5">
                  +
                </span>
              </div>
              <p className="text-slate-600 text-sm font-semibold mt-2">
                Property Listings
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center md:items-start group border-y md:border-y-0 md:border-x border-gray-100 py-6 md:py-0 md:px-12">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                OVER
              </span>
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-extrabold text-[#002147] group-hover:text-orange-500 transition-colors duration-300">
                  85
                </span>
                <span className="text-xl font-bold text-orange-500 ml-0.5">
                  K+
                </span>
              </div>
              <p className="text-slate-600 text-sm font-semibold mt-2">
                Monthly Searches
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center md:items-start group">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                OVER
              </span>
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-extrabold text-[#002147] group-hover:text-orange-500 transition-colors duration-300">
                  4,200
                </span>
                <span className="text-xl font-bold text-orange-500 ml-0.5">
                  +
                </span>
              </div>
              <p className="text-slate-600 text-sm font-semibold mt-2">
                Owners Advertising Monthly
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
