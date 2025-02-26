import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6" />
              <span className="font-bold text-xl">SafeGuardian</span>
            </div>
            <p className="text-purple-200">
              Empowering women with safety tools and resources for a secure tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-purple-200">
              <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
              <li><a href="/prevention" className="hover:text-white">Safety Tips</a></li>
              <li><a href="/sos" className="hover:text-white">Emergency SOS</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Emergency Contacts</h3>
            <ul className="space-y-2 text-purple-200">
              <li>Women Helpline: 1091</li>
              <li>Police: 100</li>
              <li>Ambulance: 102</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-700 mt-8 pt-8 flex items-center justify-center text-purple-200">
          <p className="flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for women's safety
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;