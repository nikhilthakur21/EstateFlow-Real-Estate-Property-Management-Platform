import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Postproperty from "./pages/Postproperty";

import ProtectedRoute from "./components/ProtectedRoute"; 
import Property from "./pages/Property";
import Footer from "./components/Footer";
import Flat from "./pages/Flat";
import Admindashboard from "./components/Admin/Admin-dashboard";
import AddFlat from "./components/Admin/AddFlat";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* PUBLIC ROUTES: Everyone can see these */}
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Flat" element={<Flat />} />
          

          {/* USER & ADMIN ROUTES: Only logged-in people with these roles */}

          <Route element={<ProtectedRoute allowedRoles={["User", "Admin"]} />}>
            <Route path="/property" element={<Property />} />
            <Route path="/Postproperty" element={<Postproperty />} />
          </Route>

          {/* ADMIN ONLY ROUTES: Only Admins can enter */}
          <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
            <Route path="/Admin-dashboard" element={<Admindashboard />} />
            <Route path="/AddFlat" element={<AddFlat/>}/>
          </Route>
         
        </Routes>
      
      </Router>










      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ marginTop: "60px" }} 
      />
    </>
  );
};

export default App;
