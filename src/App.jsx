import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Postproperty from "./pages/Postproperty";
import Admindashboard from "./components/Admin-dashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // Import your guard
import Property from "./pages/Property";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* PUBLIC ROUTES: Everyone can see these */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          

          {/* USER & ADMIN ROUTES: Only logged-in people with these roles */}

          <Route element={<ProtectedRoute allowedRoles={["User", "Admin"]} />}>
            <Route path="/property" element={<Property />} />
            <Route path="/Postproperty" element={<Postproperty />} />
          </Route>

          {/* ADMIN ONLY ROUTES: Only Admins can enter */}
          <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
            <Route path="/Admin-dashboard" element={<Admindashboard />} />
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
      />
    </>
  );
};

export default App;
