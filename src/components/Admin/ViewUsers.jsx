import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import FluidSkeleton from "../FluidSkeleton";

const ViewUsers = () => {
  
  const [loading, setLoading] = useState(true);
  // For Loding Effect

  const [user, setuser] = useState([]);
  const API_URL = "https://6960932fe7aa517cb79669e1.mockapi.io/LoginData";

  // For View Data
  const view = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://6960932fe7aa517cb79669e1.mockapi.io/LoginData"
      );
      console.log(res.data);
      setuser(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => setLoading(false), 100);
    }
  };

  // For Delete The Data

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      // Update local state
      setuser(user.filter((item) => item.id !== id));

      toast.success("User deleted successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Could not delete user", { id: loadingToast });
    }
  };

  useEffect(() => {
    view();
  }, []);

  return (
    <>
      {loading ? (
        <FluidSkeleton />
      ) : (
        <section className="">
          {user.map((val) => (
            <div>
              <div
                key={val.id}
                className="w-full bg-zinc-900 border border-zinc-800 mt-1 rounded-xl px-6 py-4 flex flex-wrap items-center md:gap-4 
                         text-sm shadow-sm hover:border-orange-500/50 transition-all duration-300"
              >
                <span className="bg-zinc-800 text-zinc-500 px-2 py-1 rounded text-xs font-mono">
                  #{val.id}
                </span>

                <div className="flex flex-wrap items-center gap-2 text-zinc-300">
                  <span className="text-white font-bold">
                    Name:{" "}
                    <span className="font-medium text-zinc-300">
                      {val.FullName}
                    </span>
                  </span>

                  <span className="text-zinc-700">|</span>

                  <span className="text-white font-bold">
                    Email:{" "}
                    <span className="font-medium text-zinc-400">
                      {val.EmailAddress}
                    </span>
                  </span>

                  <span className="text-zinc-700">|</span>

                  <span className="text-white font-bold">
                    Phone:{" "}
                    <span className="font-medium text-zinc-400">
                      {val.MobileNumber}
                    </span>
                  </span>

                  <span className="text-zinc-700">|</span>

                  <span className="text-white font-bold">
                    Pass:{" "}
                    <span className="font-medium text-zinc-500">
                      {val.Password}
                    </span>
                  </span>
                </div>

                {/* Delete Button */}
                <div className="ml-auto">
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

export default ViewUsers;
