import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const circleStyle =
    "group relative flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-1";
  const rippleEffect =
    "absolute inset-0 rounded-full border-2 border-white/0 transition-all duration-500 group-hover:scale-150 group-hover:border-white/20 group-hover:opacity-0";

  const linkStyle =
    "text-slate-300 hover:text-white transition-colors duration-200 text-sm  block";
  return (
    <>
      <footer className="bg-[#0a0a0a] border-t border-zinc-800 pt-16 pb-8 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-building-shield text-white text-sm"></i>
                </div>
                <span className="text-white font-black text-xl tracking-tighter uppercase">
                  Estate Flow
                </span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                The next generation of luxury real estate management. We provide
                the tools for elite agents to showcase the world's most
                prestigious penthouses.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                Navigation
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                <li>
                  <NavLink
                    to="/"
                    className="text-zinc-400 hover:text-orange-500 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-orange-500 transition-colors"></span>
                    Browse Properties
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/NewLaunches"
                    className="text-zinc-400 hover:text-orange-500 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-orange-500 transition-colors"></span>
                    Featured Listings
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Postproperty"
                    className="text-zinc-400 hover:text-orange-500 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-orange-500 transition-colors"></span>
                    Post Propety
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Contact"
                    className="text-zinc-400 hover:text-orange-500 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-orange-500 transition-colors"></span>
                    Support & Help
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/Contact"
                    className="text-zinc-400 hover:text-orange-500 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-orange-500 transition-colors"></span>
                    Help Center
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to=""
                    className="text-zinc-400 hover:text-orange-500 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-orange-500 transition-colors"></span>
                    Pricing Plans
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to=""
                    className="text-zinc-400 hover:text-orange-500 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-orange-500 transition-colors"></span>
                    Privacy Policy
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to=""
                    className="text-zinc-400 hover:text-orange-500 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-orange-500 transition-colors"></span>
                    Careers
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Stay Updated
              </h4>
              <p className="text-zinc-500 text-xs">
                Get the latest luxury listings in your inbox.
              </p>
              <div className="flex bg-zinc-900 border border-zinc-800 rounded-xl p-1 focus-within:border-orange-500/50 transition-all">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-none text-white text-xs p-2 outline-none w-full"
                />
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-orange-500 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <h6 className="text-zinc-500 text-xs font-medium order-2 md:order-1">
              © 2026 ESTATE FLOW. BUILT FOR THE MODERN ARCHITECT.
            </h6>

            <div className="flex items-center gap-4 order-1 md:order-2">
              <a
                href="https://www.facebook.com/"
                className={`${circleStyle} bg-[#3b5998] hover:shadow-[0_0_20px_rgba(59,89,152,0.4)] scale-90`}
              >
                <i className="fa-brands fa-facebook-f text-base"></i>
                <span className={rippleEffect}></span>
              </a>

              <a
                href="https://x.com/"
                className={`${circleStyle} bg-black border border-zinc-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-90`}
              >
                <i className="fa-brands fa-x-twitter text-base"></i>
                <span className={rippleEffect}></span>
              </a>

              <a
                href="https://www.linkedin.com/in/nikhil-thakur-9195282b7/"
                className={`${circleStyle} bg-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.4)] scale-90`}
              >
                <i className="fa-brands fa-linkedin-in text-base"></i>
                <span className={rippleEffect}></span>
              </a>

              <a
                href="https://www.youtube.com/embed/VKAKbueezMk?si=h8OP3mchF_iId1pP"
                className={`${circleStyle} bg-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] scale-90`}
              >
                <i className="fa-brands fa-youtube text-base"></i>
                <span className={rippleEffect}></span>
              </a>

              <a
                href="https://www.instagram.com/nikhil_Thakur_Patil"
                className={`${circleStyle} bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:shadow-[0_0_20px_rgba(238,42,123,0.4)] scale-90`}
              >
                <i className="fa-brands fa-instagram text-base"></i>
                <span className={rippleEffect}></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
