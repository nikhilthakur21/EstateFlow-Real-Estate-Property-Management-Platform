import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const ViewPostedProperty = () => {
  const [property, setProperty] = useState(null);

  //for default ui
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get data from LocalStorage
    const savedData = localStorage.getItem("pendingProperty");

    if (savedData) {
      setProperty(JSON.parse(savedData));
    }

    setLoading(false);
  }, []);

  const deleteProperty = () => {
    if (
      window.confirm("Are you sure you want to remove this saved progress?")
    ) {
      localStorage.removeItem("pendingProperty");
      setProperty(null);
      toast.success("Removed");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <ToastContainer theme="dark" />

      <div className="mb-6">
        <h2 className="text-white text-2xl font-bold flex items-center gap-2">
          <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
          Saved Property Progress
        </h2>
      </div>

      {loading ? (
        <div className="animate-pulse h-20 bg-zinc-900 rounded-xl"></div>
      ) : property ? (
        <section className="space-y-2">
          <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 flex flex-wrap items-center md:gap-4 text-sm shadow-sm hover:border-orange-500/50 transition-all duration-300 group">
            <span className="bg-orange-500/10 text-orange-500 px-2 py-1 rounded text-xs font-bold uppercase tracking-tighter">
              Draft
            </span>

            <div className="flex flex-wrap items-center gap-2 text-zinc-300">
              <span className="text-white font-bold">
                Intent:{" "}
                <span
                  className={`font-medium ${
                    property.propertyType === "Sell"
                      ? "text-orange-400"
                      : "text-blue-400"
                  }`}
                >
                  {property.propertyType}
                </span>
              </span>

              <span className="text-zinc-700">|</span>

              <span className="text-white font-bold">
                Category:{" "}
                <span className="font-medium text-zinc-300">
                  {property.category}
                </span>
              </span>

              <span className="text-zinc-700">|</span>

              <span className="text-white font-bold">
                Type:{" "}
                <span className="font-medium text-zinc-400">
                  {property.subType}
                </span>
              </span>

              <span className="text-zinc-700">|</span>

              <span className="text-white font-bold">
                Contact:{" "}
                <span className="font-medium text-green-400">
                  +91 {property.phoneNumber}
                </span>
              </span>
            </div>

            {/* Delete Button */}
            <div className="ml-auto flex items-center gap-4">
              <button
                className="text-zinc-500 hover:text-red-500 transition-colors"
                onClick={deleteProperty}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-dashed border-zinc-800">
          <i className="fa-solid fa-folder-open text-zinc-700 text-4xl mb-4"></i>
          <p className="text-zinc-500">
            No draft properties found in local storage.
          </p>
        </div>
      )}
    </div>
  );
};

export default ViewPostedProperty;
