import { User, Mail, Phone, Lock, EyeOff, ArrowRight } from "lucide-react";
import logo from "../assets/NLogo.png";
import { NavLink } from "react-router-dom";
import { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SignUp = () => {

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    FullName: "",
    EmailAddress: "",
    MobileNumber: "",
    Password: "",
    Role: "User"
  });

  const handler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

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

      alert('submitedd')

      navigate('/Login');
      

    } catch (err) {
      console.log("Error Wile Pass Data");
    }
  };

  useEffect(()=>{
    subHandler()
  })

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 mt-[70px]">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
       
        <div
          className=" p-8 text-center border-b border-slate-100"
          style={{ backgroundColor: "#121212" }}
        >
         
          <h2 className="text-2xl font-bold text-white">Join Estate Flow</h2>
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

            {/* Password */}
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
                {/* Static Eye Icon */}
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 cursor-pointer hover:text-slate-600">
                  <EyeOff size={18} />
                </div>
              </div>
            </div>

            {/* Confirm Password */}
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
                {/* Static Eye Icon */}
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 cursor-pointer hover:text-slate-600">
                  <EyeOff size={18} />
                </div>
              </div>
            </div>

            {/* Main Action Button */}
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
  );
};

export default SignUp;
