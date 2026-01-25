import { Home, Headset, UserCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import AddFlat from "./AddFlat";
import React, { useState } from "react";
import AddFeaturedProjects from "./AddFeaturedProjects";
import ViewUsers from "./ViewUsers";
import ViewFlat from "./ViewFlat";
import ViewPostedProperty from "./ViewPostedProperty";
import ViewInquiries from "./ViewInquiries";

const Admindashboard = () => {
  // For Seting Active Tab
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <>
      <section className="mt-[70px] h-full bg-gray-700 pt-5 ">
        <header>
          <div
            className="max-w-6xl mx-auto rounded-full py-2   flex  shadow-lg flex justify-start align-center items-center justify-center "
            style={{ backgroundColor: "#1f273b76" }}
          >
            <h1 className="text-white text-2xl font-bold ms-10 ">
              {" "}
              <i class="fa-solid fa-house"></i> Admin Panel{" "}
            </h1>
          </div>
        </header>

        {/*********************************************************************************/}

        <section>
          <div className="w-full  h-full flex mx-auto align-center justify-center gap-4 mt-2 p-2 flex flex-col md:flex-row">
            <div className="md:w-[25%] w-[100%] border-5 p-2 shadow-lg border-gray-500  bg-white shadow-lg  rounded-xl  ">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab("ViewInquiries")}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === "ViewInquiries"
                        ? "bg-zinc-800 text-white shadow-md border border-zinc-700"
                        : "text-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
                    }`}
                  >
                    <i
                      className={`fa-solid fa-clipboard-question text-lg ${
                        activeTab === "ViewInquiries" ? "text-orange-500" : ""
                      }`}
                    ></i>
                    <span className="font-medium">View Inquiries</span>
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActiveTab("ViewFlat")}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === "ViewFlat"
                        ? "bg-zinc-800 text-white shadow-md border border-zinc-700"
                        : "text-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
                    }`}
                  >
                    <i
                      className={`fa-solid fa-bed  text-lg ${
                        activeTab === "ViewFlat" ? "text-orange-500" : ""
                      }`}
                    ></i>
                    <span className="font-medium">View Flat</span>
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActiveTab("addFlat")}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === "addFlat"
                        ? "bg-zinc-800 text-white shadow-md border border-zinc-700"
                        : "text-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
                    }`}
                  >
                    <i
                      className={`fa-solid fa-bed  text-lg ${
                        activeTab === "addFlat" ? "text-orange-500" : ""
                      }`}
                    ></i>
                    <span className="font-medium">Add Flat</span>
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActiveTab("FeaturedProjects")}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === "FeaturedProjects"
                        ? "bg-zinc-800 text-white shadow-md border border-zinc-700"
                        : "text-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
                    }`}
                  >
                    <i
                      className={`fa-solid fa-layer-group text-lg ${
                        activeTab === "FeaturedProjects"
                          ? "text-orange-500"
                          : ""
                      }`}
                    ></i>
                    <span className="font-medium"> Featured Projects</span>
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActiveTab("ViewUsers")}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === "ViewUsers"
                        ? "bg-zinc-800 text-white shadow-md border border-zinc-700"
                        : "text-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
                    }`}
                  >
                    <i
                      className={`fa-solid fa-user-group text-lg ${
                        activeTab === "ViewUsers" ? "text-orange-500" : ""
                      }`}
                    ></i>
                    <span className="font-medium">View Users</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("ViewPostedProperty")}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === "ViewPostedProperty"
                        ? "bg-zinc-800 text-white shadow-md border border-zinc-700"
                        : "text-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
                    }`}
                  >
                    <i
                      className={`fa-solid fa-user-group text-lg ${
                        activeTab === "ViewPostedProperty"
                          ? "text-orange-500"
                          : ""
                      }`}
                    ></i>
                    <span className="font-medium">View Posted Property</span>
                  </button>
                </li>
              </ul>
            </div>

            {/**********************************************************************************************/}

            <div
              className="md:w-[85%] w-[100%]   p-5 shadow-lg  rounded-xl"
              style={{ backgroundColor: "#1f273b76" }}
            >
              <div className="text-white">
                {activeTab === "addFlat" && <AddFlat />}
                {activeTab === "FeaturedProjects" && <AddFeaturedProjects />}
                {activeTab === "ViewUsers" && <ViewUsers />}
                {activeTab === "ViewFlat" && <ViewFlat />}
                {activeTab === "ViewPostedProperty" && <ViewPostedProperty />}
                {activeTab === "ViewInquiries" && <ViewInquiries />}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Admindashboard;
