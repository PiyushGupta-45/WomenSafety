import React from "react";
import { Camera, Users, Navigation, Bell, Shield, Phone } from "lucide-react"; // Import additional icons

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Hero Section */}
        <div className="w-full bg-purple-900 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Your Safety Companion</h1>
            <p className="text-xl mb-8">Advanced protection and peace of mind, wherever you go</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition">
                Get Started
              </button>
              <button className="bg-white text-purple-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions Section - Full Width */}
        <section className="w-full py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Essential Safety Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                <Camera className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  AI Monitoring
                </h3>
                <p className="mt-2 text-gray-600">
                  Real-time threat detection using AI-powered audio/video analysis
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                <Users className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Safety Network
                </h3>
                <p className="mt-2 text-gray-600">
                  Connect with trusted contacts and nearby community members
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                <Navigation className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Safe Routes</h3>
                <p className="mt-2 text-gray-600">
                  Get AI-recommended safe routes and real-time navigation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Features Section */}
        <section className="w-full py-12 px-6 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Emergency Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                <Phone className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Emergency Contacts
                </h3>
                <p className="mt-2 text-gray-600">
                  One-tap emergency calling to your trusted contacts or local authorities
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                <Shield className="w-12 h-12 text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Safety Protocols
                </h3>
                <p className="mt-2 text-gray-600">
                  Guided safety procedures for various emergency situations
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                <Bell className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Alert System</h3>
                <p className="mt-2 text-gray-600">
                  Send discrete alerts with your location to emergency contacts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Resources */}
        <section className="w-full py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community Resources</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Access verified safety resources and connect with support networks in your area
            </p>
            <div className="bg-purple-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-semibold text-purple-900">Find Support Near You</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>24/7 helplines and crisis centers</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>Women's shelters and safe houses</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>Legal aid and advocacy services</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>Support groups and community forums</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-semibold text-purple-900">Educational Resources</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>Self-defense training workshops</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>Safety awareness programs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>Risk assessment tools</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>Community safety initiatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      
      </div>
    </>
  );
};

export default HomePage;