import React from "react";
import { Shield, Bell, Camera, Users, Navigation } from "lucide-react"; // Import icons from lucide-react
// import Navbar from "../Components/NavBar.jsx";
 // Ensure this component exists in your project

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
      

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Camera className="w-8 h-8 text-blue-500 mb-4" />
              <h2 className="text-lg font-medium text-gray-900">
                AI Monitoring
              </h2>
              <p className="mt-2 text-gray-600">
                Real-time threat detection using AI-powered audio/video analysis
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-green-500 mb-4" />
              <h2 className="text-lg font-medium text-gray-900">
                Safety Network
              </h2>
              <p className="mt-2 text-gray-600">
                Connect with trusted contacts and nearby community members
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Navigation className="w-8 h-8 text-purple-500 mb-4" />
              <h2 className="text-lg font-medium text-gray-900">Safe Routes</h2>
              <p className="mt-2 text-gray-600">
                Get AI-recommended safe routes and real-time navigation
              </p>
            </div>
          </div>

     
        </main>
      </div>
    </>
  );
};

export default HomePage;
