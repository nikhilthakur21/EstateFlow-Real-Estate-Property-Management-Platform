import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  User,
  Phone,
  Mail,
  Home,
  Send,
  CheckCircle,
  Building,
  MapPin,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import logo from "../assets/NLogo.png";
import "react-toastify/dist/ReactToastify.css";

const PropertyEnquiryForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyName: "",
    propertyType: "1BHK",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const existingEntries =
        JSON.parse(localStorage.getItem("property_inquiries")) || [];
      const newEntry = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleString(),
      };

      localStorage.setItem(
        "property_inquiries",
        JSON.stringify([...existingEntries, newEntry]),
      );

      setSubmitted(true);
      toast.success("Request Sent! Our expert agent will call you shortly.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });

      setTimeout(() => {
        navigate("/flat");
      }, 2500);
    } catch (error) {
      toast.error("Error saving inquiry. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        className="min-h-screen flex items-center justify-center bg-slate-50 p-4 lg:p-0 mt-[72px] mb-10"
        data-aos="fade-up"
      >
        <div className="flex w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[650px]">
          {/* LEFT SIDE */}
          <div className="hidden lg:flex lg:w-1/2 relative bg-[#121212] p-12 flex-col justify-between">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

            <div className="relative z-10">
              
              <div className="space-y-6">
                <h1 className="text-4xl font-extrabold text-white leading-tight">
                  Interested in a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Premium Property?
                  </span>
                </h1>
                <p className="text-slate-400 max-w-sm">
                  Fill out the form to receive a personalized tour and exclusive
                  pricing details from our luxury real estate consultants.
                </p>
              </div>
            </div>

            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                  <Sparkles size={20} />
                </div>
                <span className="text-sm font-medium">
                  Priority Viewing Access
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                  <PhoneCall size={20} />
                </div>
                <span className="text-sm font-medium">
                  Callback within 15 minutes
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-xs font-medium relative z-10">
              Personal data is handled with 256-bit encryption security.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900">
                  Enquire Now
                </h2>
                <p className="text-slate-500 mt-2 font-medium">
                  Enter your details for a callback
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="space-y-1">
                  <label className="block text-sm font-bold text-slate-700 ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-orange-500" />
                    </div>
                    <input
                      required
                      type="text"
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all shadow-sm"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-bold text-slate-700 ml-1">
                      Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className="text-orange-500" />
                      </div>
                      <input
                        required
                        type="tel"
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none shadow-sm"
                        placeholder="Mobile No."
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-bold text-slate-700 ml-1">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-orange-500" />
                      </div>
                      <input
                        required
                        type="email"
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none shadow-sm"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                
                <div className="space-y-1">
                  <label className="block text-sm font-bold text-slate-700 ml-1">
                    Desired Property
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building size={18} className="text-orange-500" />
                    </div>
                    <input
                      required
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none shadow-sm"
                      placeholder="e.g. Skyline Residency"
                      value={formData.propertyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          propertyName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                
                <div className="space-y-1">
                  <label className="block text-sm font-bold text-slate-700 ml-1">
                    Unit Type
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Home size={18} className="text-orange-500" />
                    </div>
                    <select
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-orange-500 outline-none cursor-pointer appearance-none shadow-sm"
                      value={formData.propertyType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          propertyType: e.target.value,
                        })
                      }
                    >
                      <option value="1BHK">1BHK Apartment</option>
                      <option value="2BHK">2BHK Apartment</option>
                      <option value="3BHK">3BHK Apartment</option>
                      <option value="Penthouse">LuxuryPenthouses</option>
                      <option value="Penthouse">UpcomingProjects</option>
                      <option value="Penthouse">NewLaunches</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all mt-6 shadow-xl ${
                    submitted
                      ? "bg-green-600 text-white cursor-not-allowed"
                      : "bg-[#121212] hover:bg-slate-800 text-white group"
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={22} /> Inquiry Sent
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Send
                        size={18}
                        className="text-orange-500 group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyEnquiryForm;
