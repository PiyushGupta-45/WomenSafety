import React, { useState, useEffect } from "react";
import { Search, Shield, AlertCircle, MapPin, Bell,  Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 shadow flex justify-between items-center w-full bg-black text-white py-4 px-6 z-50">

      {/* Logo */}
      <div className="flex items-center gap-2">
      <NavLink to="/" className="flex items-center space-x-2">
        <Shield size={32} className="text-pink-400" />
        <span className="text-xl font-bold">SafeGuardian</span>
      </NavLink>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 text-lg">
       <NavLink to="/" className="hover:text-pink-400 transition">Home</NavLink>
        <NavLink to="/resources" className="hover:text-pink-400 transition">Resources</NavLink>
        <NavLink to="/safe-locations" className="hover:text-pink-400 transition">Safe Zones</NavLink>
        <NavLink to="/community" className="hover:text-pink-400 transition">Community</NavLink>
        <NavLink to="/contact" className="hover:text-pink-400 transition">Contact US</NavLink>
      </div>

      {/* Search Bar */}
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Search safe locations..."
          className="px-3 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <Search className="absolute top-2 right-2 text-gray-400" size={20} />
      </div>

            <div className="flex items-center gap-4">
        <button className="p-2 bg-red-500 hover:bg-red-600 rounded-lg" title="Emergency Contact">
          <Phone size={24} />
        </button>
        <button className="p-2 bg-green-500 hover:bg-green-600 rounded-lg" title="Safety Check">
          <AlertCircle size={24} />
        </button>
        <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg" title="Share Location">
          <MapPin size={24} />
        </button>
        <button className="p-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg" title="Safety Alerts">
          <Bell size={24} />
        </button>
       
        <button onClick={() => {/* Implement Google Sign-in */}} className="flex items-center space-x-2 bg-white text-blue-700 
        px-4 py-2 rounded-lg  hover:bg-gray-100 transition-colors">
          <span>Sign in</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;