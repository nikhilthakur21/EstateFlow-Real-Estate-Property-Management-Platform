import React from "react";
import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const UpcomingProjects = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full">
              <Sparkles size={16} className="text-orange-500" />
              <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">
                Exclusive Launch
              </span>
            </div>
            <h2 className="text-2xl md:text-5xl font-black text-[#0f172a] leading-tight">
              Upcoming <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-zinc-500 max-w-md text-lg">
              Visit these projects and get{" "}
              <span className="text-[#0f172a] font-bold underline decoration-orange-500">
                early bird benefits
              </span>
              .
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-bold text-[#0f172a]">
              Godrej Eden Estate
            </h3>
            <div className="flex items-center justify-end gap-2 text-zinc-500">
              <MapPin size={18} className="text-orange-500" />
              <span>Hinjewadi, Pune</span>
            </div>
          </div>
        </div>

        {/* Video Screen Section */}

        <div className="relative max-w-4xl flex mx-auto aspect-video rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-black mb-16">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/52zosg7f2u8?si=MKmJQd-GG5nPFy3M"
            title="Godrej Eden Estate Preview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-slate-50 rounded-[2rem] border border-slate-100 gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-extrabold text-[#0f172a]">
              Interested in this project by <br />
              <span className="text-orange-600">Godrej Properties?</span>
            </h4>
            <p className="text-zinc-500 text-sm font-medium">
              Limited slots available for the priority site visit.
            </p>
          </div>

          <NavLink
            to="/Contact"
            className="flex items-center gap-3 bg-[#121212] hover:bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-orange-500/20 active:scale-95 group"
          >
            Contact Us
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-transform"
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
