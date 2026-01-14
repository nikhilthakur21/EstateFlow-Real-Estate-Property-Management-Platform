import logo from "../assets/NLogo.png";
import { NavLink } from "react-router-dom";
import { Home, Headset, UserCircle } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.info("Logged out successfully");
  };

  return (
    <>
      <nav>
        <div
          className="w-full flex fixed top-0 left-0 right-0 z-50 border-b-2 border-white shadow-lg"
          style={{ backgroundColor: "#121212", height: "70px" }}
        >
          <div className=" w-[400px] flex items-center p-4">
            <img src={logo} alt="" className="w-[180px] " />
            
          </div>
          

          <div className=" w-[10%] flex items-center gap-10 justify-end"></div>

          <div className=" w-[60%] flex gap-5 justify-end items-center ">
            <NavLink
              to={"/"}
              className="text-base text-white flex items-center gap-1  hover:scale-105 transition-transform duration-300 hover:text-orange-500  transition-colors duration-300"
            >
              <Home size={20} />{" "}
              <span className="hidden md:block lg:block text-xs font-bold uppercase tracking-widest ">
                Home
              </span>
            </NavLink>

            <NavLink
              to={"/Home"}
              className="text-base text-white  flex items-center gap-1  hover:scale-105 transition-transform duration-300 hover:text-orange-500  transition-colors duration-300"
            >
              <Headset size={20} />
              <span className="hidden md:block lg:block text-xs font-bold uppercase tracking-widest">
                Contact Us
              </span>
            </NavLink>

            <NavLink
              to="/Login"
              className="hover:scale-107 text-base  flex items-center gap-1 text-white transition-transform duration-300 hover:text-orange-500  transition-colors duration-300"
            >
              <UserCircle size={20} />
              <span className="text-xs hidden md:block font-bold uppercase tracking-widest">
                Sign In
              </span>
            </NavLink>

            <div>
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="focus:outline-none flex items-center"
                >
                  <i className="fa-solid fa-bars text-white text-2xl me-4 hover:text-orange-500  transition-colors duration-300"></i>
                </button>

                {isOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsOpen(false)}
                    ></div>

                    <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-3 ring-black ring-opacity-5 z-20">
                      <NavLink
                        to="/Admin-dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Admin Panal
                      </NavLink>

                      <NavLink
                        to="/Flat"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Flats
                      </NavLink>
                      
                      <NavLink
                        to="/Postproperty"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Luxury Penthouses

                      </NavLink>
                      <NavLink
                        to="/Postproperty"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Residential Land
                      </NavLink>
                      <NavLink
                        to="/Postproperty"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Post Property
                      </NavLink>

                      <hr className="my-1" />
                      <button
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        onClick={() => handleLogout()}
                      >
                        Sign out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
