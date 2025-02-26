import React, { useState, useEffect } from "react";
import { Search, Shield, AlertCircle, MapPin, Bell,  Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-purple-900 text-white dark:bg-black shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Shield size={32} className="text-pink-400" />
        <span className="text-xl font-bold">SafeGuardian</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 text-lg">
        <a href="/" className="hover:text-pink-400 transition">Home</a>
        <a href="/resources" className="hover:text-pink-400 transition">Resources</a>
        <a href="/safe-locations" className="hover:text-pink-400 transition">Safe Zones</a>
        <a href="/community" className="hover:text-pink-400 transition">Community</a>
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

      {/* Right Side (Emergency, Safety Check, Location Sharing, Alerts, Dark Mode, Profile) */}
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
       
        <button
                  onClick={() => {/* Implement Google Sign-in */}}
                  className="flex items-center space-x-2 bg-white text-blue-700 px-4 py-2 rounded-lg 
                           hover:bg-gray-100 transition-colors"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Sign in with Google</span>
                </button>
      </div>
    </nav>
  );
};

export default Navbar;