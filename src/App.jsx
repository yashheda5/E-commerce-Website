// App.js
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast"; // Import Toaster from react-hot-toast

const App = () => {
  return (
    <div>
    <div className="bg-slate-900">
      <Navbar  />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster /> {/* Include Toaster here to render the toasts */}
    </div>
  );
};

export default App;
