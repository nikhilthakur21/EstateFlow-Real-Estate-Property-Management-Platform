import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Trash2, User, Calendar, Mail, Phone, Building2 } from "lucide-react";
import FluidSkeleton from "../FluidSkeleton";

const ViewInquiries = () => {
  const [loading, setLoading] = useState(true);
  const [inquiries, setInquiries] = useState([]);

  // 1. Fetch Data from LocalStorage
  const fetchInquiries = () => {
    try {
      setLoading(true);
      const data = JSON.parse(localStorage.getItem("property_inquiries")) || [];
      // Sort by latest first
      setInquiries(data.reverse());
    } catch (err) {
      console.error("Failed to fetch inquiries", err);
      toast.error("Error loading data");
    } finally {
      // Simulate slight delay for the Skeleton effect
      setTimeout(() => setLoading(false), 800);
    }
  };

  // 2. Delete Logic
  const deleteInquiry = (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      const existingData = JSON.parse(localStorage.getItem("property_inquiries")) || [];
      const updatedData = existingData.filter((item) => item.id !== id);
      
      localStorage.setItem("property_inquiries", JSON.stringify(updatedData));
      setInquiries(updatedData.reverse());
      toast.success("Enquiry removed successfully");
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-0">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">
          Lead Management
        </h2>
        <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
          {inquiries.length} New Inquiries
        </span>
      </div>

      {loading ? (
        <FluidSkeleton />
      ) : inquiries.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900 rounded-2xl border border-zinc-800">
          <p className="text-zinc-500 italic">No enquiries found in local storage.</p>
        </div>
      ) : (
        <section className="space-y-4">
          {inquiries.map((val) => (
            <div key={val.id}>
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 flex flex-wrap items-center md:gap-4 text-sm shadow-sm hover:border-orange-500/50 transition-all duration-300 group">
                
                {/* ID / Date Tag */}
                <div className="flex flex-col">
                  <span className="bg-zinc-800 text-zinc-500 px-2 py-1 rounded text-[10px] font-mono group-hover:text-orange-400 transition-colors mb-1">
                    ID: {val.id.toString().slice(-6)}
                  </span>
                  <div className="flex items-center gap-1 text-zinc-500 text-[11px]">
                    <Calendar size={12} /> {val.date.split(',')[0]}
                  </div>
                </div>

                {/* User Info Section */}
                <div className="flex flex-wrap items-center gap-3 text-zinc-300">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-orange-500" />
                    <span className="text-white font-bold text-base">{val.name}</span>
                  </div>

                  <span className="text-zinc-700 hidden md:block">|</span>

                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-zinc-500" />
                    <span className="font-medium text-zinc-400">{val.phone}</span>
                  </div>

                  <span className="text-zinc-700 hidden md:block">|</span>

                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-zinc-500" />
                    <span className="font-medium text-zinc-400">{val.email}</span>
                  </div>

                  <span className="text-zinc-700 hidden md:block">|</span>

                  {/* Property Interest Section */}
                  <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-orange-500" />
                    <span className="text-white font-bold italic">
                       {val.propertyName}
                    </span>
                  </div>

                  {/* Config Badge */}
                  <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-[11px] font-black border border-orange-500/20 uppercase tracking-tighter">
                    {val.propertyType}
                  </span>
                </div>

                {/* Delete Action */}
                <div className="ml-auto flex items-center gap-4">
                  <button
                    className="p-2 bg-zinc-800 rounded-lg text-zinc-500 hover:text-red-500 hover:bg-red-500/10 transition-all duration-200"
                    onClick={() => deleteInquiry(val.id)}
                    title="Delete Lead"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ViewInquiries;