import { User, Mail, Phone, Lock, EyeOff, ArrowRight } from "lucide-react";
import { Building2, Users, TrendingUp, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  // Navigate
  const navigate = useNavigate();

  // Store Login Info
  const [login, setLogin] = useState({
    FullName: "",
    EmailAddress: "",
    MobileNumber: "",
    Password: "",
    Role: "User",
  });

  const handler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  // On Submit Function
  const subHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(login);
      await axios.post(
        "https://6960932fe7aa517cb79669e1.mockapi.io/LoginData",
        login
      );

      setLogin({
        FullName: "",
        EmailAddress: "",
        MobileNumber: "",
        Password: "",
        Role: "User",
      });

      toast.success(`Account Created SuccessFully..! ${login.FullName}`, {
        position: "top-right",
      });

      navigate("/Login");
    } catch (err) {
      console.log("Error Wile Pass Data");
    }
  };

  useEffect(() => {
    subHandler();
  });

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-slate-50 p-4   mt-[75px] lg:p-0 mb-10">
        <div className="flex w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[750px]">
          {/* LEFT SIDE */}
          <div className="hidden lg:flex lg:w-1/2 relative bg-[#0f172a] p-12 flex-col justify-between overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                <Sparkles size={16} className="text-amber-400" />
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  Join the 1% of Real Estate
                </span>
              </div>
            </div>

            <div className="relative z-10 space-y-8">
              <h1 className="text-5xl font-black text-white leading-[1.1]">
                Unlock <span className="text-blue-500">Premium</span> <br />
                Property Tools.
              </h1>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <Users className="text-blue-400 mb-3" size={28} />
                  <p className="text-2xl font-bold text-white">10k+</p>
                  <p className="text-slate-400 text-xs uppercase font-bold">
                    Active Buyers
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <TrendingUp className="text-green-400 mb-3" size={28} />
                  <p className="text-2xl font-bold text-white">24%</p>
                  <p className="text-slate-400 text-xs uppercase font-bold">
                    Faster Sales
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                Create an account to list your luxury penthouses and connect
                with high-net-worth individuals globally.
              </p>
            </div>

            <div className="relative z-10 border-l-2 border-blue-500 pl-6 italic text-slate-300 text-sm">
              "The best investment on earth is earth itself."
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex items-center justify-center md:p-6 lg:p-12 bg-slate-50/50">
            <div className="w-full flex justify-center">
              {/* SIGN-UP CARD */}
              <div className="w-full max-w-md">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden md:mt-[-30px]">
                  <div
                    className=" p-8 text-center border-b border-slate-100"
                    style={{ backgroundColor: "#121212" }}
                  >
                    <h2 className="text-2xl font-bold text-white">
                      Join Estate Flow
                    </h2>
                    <p className="text-sm text-slate-300 mt-1">
                      Create your account to start your journey
                    </p>
                  </div>

                  <div className="p-8">
                    <form className="space-y-5" onSubmit={(e) => subHandler(e)}>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User size={18} className="text-slate-400" />
                          </div>
                          <input
                            type="text"
                            placeholder="John Doe"
                            id="FullName"
                            name="FullName"
                            value={login.FullName}
                            onChange={(e) => handler(e)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={18} className="text-slate-400" />
                          </div>
                          <input
                            type="email"
                            placeholder="you@example.com"
                            id="EmailAddress"
                            name="EmailAddress"
                            value={login.EmailAddress}
                            onChange={(e) => handler(e)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Mobile Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone size={18} className="text-slate-400" />
                          </div>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            id="MobileNumber"
                            name="MobileNumber"
                            value={login.MobileNumber}
                            onChange={(e) => handler(e)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock size={18} className="text-slate-400" />
                          </div>
                          <input
                            type="password"
                            placeholder="Create a password"
                            id="Password"
                            name="Password"
                            value={login.Password}
                            onChange={(e) => handler(e)}
                            className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock size={18} className="text-slate-400" />
                          </div>
                          <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#121212] hover:bg-gray-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all 
                          duration-200 flex items-center justify-center gap-2 group"
                      >
                        Create Account
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </form>

                    {/* Login Option */}
                    <div className="mt-6 text-center">
                      <p className="text-sm text-slate-600">
                        Already have an account?{" "}
                        <NavLink
                          to={"/Login"}
                          className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors"
                        >
                          Log in
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
