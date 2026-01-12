import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const circleStyle =
    "group relative flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-1";
  const rippleEffect =
    "absolute inset-0 rounded-full border-2 border-white/0 transition-all duration-500 group-hover:scale-150 group-hover:border-white/20 group-hover:opacity-0";

const linkStyle = "text-slate-300 hover:text-white transition-colors duration-200 text-sm  block";
  return (
    <>
      <footer className="mt-30">
        <div className="w-[100%] h-[auto] bg-[#121212] flex align-center md:flex-row  flex-col justify-around p-4 gap-5">
          <div className=" h-auto border md:w-[30%] w-[100%] p-5">
            <h3 className="text-white text-lg font-bold">About EstateFlow</h3>
            <p className="text-align:justify text-gray-500 my-3">
              It simplifies real estate management with seamless digital
              workflows. Empowering agents and owners to track leads, manage
              listings , and close deals faster an intuitive , all-in-one
              professional cloud platform.
            </p>
          </div>

          <div className="md:w-[30%] w-[100%] h-auto border">
            <div className="w-full bg-[#121212] p-6">
      <div className="
        grid 
        grid-cols-2       /* 2 columns for Mobile */
        lg:grid-cols-3    /* 3 columns for Laptop/Desktop */
        gap-y-6 
        gap-x-10 
        max-w-6xl 
        mx-auto
      ">
        
        {/* Row 1 */}
        <NavLink to="/browse-properties" className={linkStyle}>
          About
        </NavLink>
        <NavLink to="/featured-listings" className={linkStyle}>
          Featured Listings
        </NavLink>
        <NavLink to="/property-valuation" className={linkStyle}>
          Property Valuation
        </NavLink>

        {/* Row 2 */}
        <NavLink to="/agent-dashboard" className={linkStyle}>
          Contact
        </NavLink>
        <NavLink to="/lead-management" className={linkStyle}>
          Help Center
        </NavLink>
         <NavLink to="/market-insights" className={linkStyle}>
          Market Insights
        </NavLink>
        <NavLink to="/pricing-plans" className={linkStyle}>
          Pricing Plans
        </NavLink>

        {/* Row 3 */}
        <NavLink to="/help-center" className={linkStyle}>
          Careers
        </NavLink>
       
        <NavLink to="/privacy-policy" className={linkStyle}>
          PrivacyPolicy
        </NavLink>

      </div>
    </div>
            
          </div>

          <div className=" md:w-[30%] w-[100%] h-auto border p-2 flex flex-col align-center justify-center text-center  ">
            <div className="flex items-center gap-4 p-1 align-center justify-center">
              {/* Facebook */}
              <a
                href="#"
                className={`${circleStyle} bg-[#3b5998] hover:shadow-[0_0_20px_rgba(59,89,152,0.6)]`}
              >
                <i className="fa-brands fa-facebook-f text-lg"></i>
                <span className={rippleEffect}></span>
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                className={`${circleStyle} bg-black hover:shadow-[0_0_20px_rgba(0,0,0,0.6)]`}
              >
                <i className="fa-brands fa-x-twitter text-lg"></i>
                <span className={rippleEffect}></span>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className={`${circleStyle} bg-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.6)]`}
              >
                <i className="fa-brands fa-linkedin-in text-lg"></i>
                <span className={rippleEffect}></span>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className={`${circleStyle} bg-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]`}
              >
                <i className="fa-brands fa-youtube text-lg"></i>
                <span className={rippleEffect}></span>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className={`${circleStyle} bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:shadow-[0_0_20px_rgba(238,42,123,0.6)]`}
              >
                <i className="fa-brands fa-instagram text-lg"></i>
                <span className={rippleEffect}></span>
              </a>
            </div>
            <h6 className="text-slate-400 text-sm p-2">
              All Rights Reserved. © Copyright 2026
            </h6>
          </div>
          {/******************************************************************************************************/}
        </div>
      </footer>
    </>
  );
};

export default Footer;
