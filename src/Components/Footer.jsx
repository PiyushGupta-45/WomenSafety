import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-gray-800 text-white text-center py-3">
      <div className="container mx-auto">
        <p className="text-sm">
          © 2025 Women Safety. All Rights Reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <Link
            to="/privacy-policy"
            className="text-gray-400 hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-gray-400 hover:text-white"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/about"
            className="text-gray-400 hover:text-white"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
