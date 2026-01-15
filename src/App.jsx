import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop"; // Import the utility
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Footer from "./components/Footer";

import LuxuryPenthouses from "./pages/LuxuryPenthouses";
import Postproperty from "./pages/Postproperty";
import NewLaunches from "./pages/NewLaunches";
import Property from "./pages/Property";
import Contact from "./pages/Contact";
import Flat from "./pages/Flat";
import Home from "./pages/Home";

import Admindashboard from "./components/Admin/Admin-dashboard";
import AddFlat from "./components/Admin/AddFlat";

const App = () => {
  return (
    <>
      <Router>
        {/* Landing Top On Every Page */}
        <ScrollToTop />
        <Navbar />

        <Routes>
          {/* PUBLIC ROUTES: Everyone can see these */}
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Contact" element={<Contact />} />

          {/* USER & ADMIN ROUTES: Only logged-in people with these roles */}
          <Route element={<ProtectedRoute allowedRoles={["User", "Admin"]} />}>
            <Route path="/property" element={<Property />} />
            <Route path="/Postproperty" element={<Postproperty />} />
            <Route path="/LuxuryPenthouses" element={<LuxuryPenthouses />} />
            <Route path="/NewLaunches" element={<NewLaunches />} />
            <Route path="/Flat" element={<Flat />} />
          </Route>

          {/* ADMIN ONLY ROUTES: Only Admins can enter */}
          <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
            <Route path="/Admin-dashboard" element={<Admindashboard />} />
            <Route path="/AddFlat" element={<AddFlat />} />
          </Route>
        </Routes>
        <Footer />
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
