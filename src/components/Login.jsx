import React, { useEffect, useState } from "react";
import { Mail, Lock, EyeOff, LogIn } from "lucide-react";
import logo from "../assets/NLogo.png";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);
  const fetchLogin = async () => {
    try {
      const loginData = await axios.get(
        "https://6960932fe7aa517cb79669e1.mockapi.io/LoginData"
      );
      console.log(loginData.data);
      setdata(loginData.data);
    } catch (err) {
      console.log("Not Fetched");
    }
  };

  useEffect(() => {
    fetchLogin();
  }, []);
  // ----------------------------------------------------------------------------------------------------------

  const [ePass, setePass] = useState({
    email: "",
    password: "",
  });

  const handler = (e) => {
    setePass({ ...ePass, [e.target.name]: e.target.value });
  };

  console.log(ePass);

  // ---------------------------------------------------------------------------------------------------------

  const handleLogin = (e) => {
    e.preventDefault();

    const userFound = data.find(
      (user) =>
        user.EmailAddress === ePass.email && user.Password === ePass.password
    );

    if (userFound) {
      // 1. Success! Store the user
      localStorage.setItem("user", JSON.stringify(userFound));

      toast.success(`Success! Welcome back ${userFound.FullName}`, {
        position: "top-right",
      });

      // 2. Navigate based on Role (MUST be inside the 'if' block)
      if (userFound.Role === "Admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/Home");
      }
    } else {
      // 3. Fail! Stay on the login page
      toast.error("Login Failed: Invalid credentials", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 mt-[70px]">
      {/* Main Card - Matches Sign Up dimensions */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header Section */}
        <div
          className=" p-8 text-center border-b border-slate-100"
          style={{ backgroundColor: "#005CA8" }}
        >
          <div className="flex justify-center mb-3">
            <img
              src={logo}
              alt="Estate Flow Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
          <p className="text-sm text-slate-300 mt-1">
            Please enter your details to sign in
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Address */}
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
                  name="email"
                  value={ePass.email}
                  onChange={(e) => handler(e)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-slate-400" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  name="password"
                  value={ePass.password}
                  onChange={(e) => handler(e)}
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 
                  focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 cursor-pointer hover:text-slate-600">
                  <EyeOff size={18} />
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white 
              font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Sign In
              <LogIn
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* Sign Up Option */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Don't have an account?{" "}
              <NavLink
                to={"/SignUp"}
                className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors"
              >
                Create Account
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
