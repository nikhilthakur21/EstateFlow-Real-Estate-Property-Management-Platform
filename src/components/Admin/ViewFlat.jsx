import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import FluidSkeleton from "../FluidSkeleton";

const ViewFlat = () => {
  const [loading, setLoading] = useState(true);
  // For Loding Effect

  const [flat, setFlat] = useState([]);

  const Fetch = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://6960932fe7aa517cb79669e1.mockapi.io/FlatData"
      );

      setFlat(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => setLoading(false), 100);
    }
  };

  useEffect(() => {
    Fetch();
  }, []);
  return (
    <>
      {loading ? (
        <FluidSkeleton />
      ) : (
        <section className="space-y-3">
          {flat.map((val) => (
            <div key={val.id}>
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 flex flex-wrap items-center md:gap-4 text-sm shadow-sm hover:border-orange-500/50 transition-all duration-300 group">
                <span className="bg-zinc-800 text-zinc-500 px-2 py-1 rounded text-xs font-mono group-hover:text-orange-400 transition-colors">
                  {val.pointId || `#${val.id}`}
                </span>

                <div className="flex flex-wrap items-center gap-2 text-zinc-300">
                  <span className="text-white font-bold">
                    Project:{" "}
                    <span className="font-medium text-zinc-300">
                      {val.title}
                    </span>
                  </span>

                  <span className="text-zinc-700">|</span>

                  <span className="text-white font-bold">
                    Location:{" "}
                    <span className="font-medium text-zinc-400">
                      {val.location}
                    </span>
                  </span>

                  <span className="text-zinc-700">|</span>

                  <span className="text-white font-bold">
                    Possession:{" "}
                    <span className="font-medium text-orange-400/80">
                      {val.completionDate}
                    </span>
                  </span>

                  <span className="text-zinc-700">|</span>

                  <div className="flex gap-2">
                    {val.pricing?.map((p, index) => (
                      <span
                        key={index}
                        className="bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded-md text-[11px] font-bold border border-orange-500/20"
                      >
                        {p.type}: {p.price}
                      </span>
                    ))}
                  </div>
                </div>

                {/*  Buttons */}
                <div className="ml-auto flex items-center gap-4">
                  <button className="text-zinc-500 hover:text-blue-400 transition-colors">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="text-zinc-500 hover:text-red-500 transition-colors"
                    onClick={() => deleteUser(val.id)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default ViewFlat;
