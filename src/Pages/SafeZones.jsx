import React from "react";
import { FaHospital, FaUniversity, FaShieldAlt, FaCoffee } from "react-icons/fa";

const safeZones = [
  {
    name: "City Police Station",
    type: "Police Station",
    address: "123 Main Street, Downtown",
    icon: <FaShieldAlt className="text-red-600 text-3xl" />,
    mapLink: "https://maps.google.com/?q=123+Main+Street",
  },
  {
    name: "Sunrise Hospital",
    type: "Hospital",
    address: "45 Health Ave, Suburb",
    icon: <FaHospital className="text-blue-600 text-3xl" />,
    mapLink: "https://maps.google.com/?q=45+Health+Ave",
  },
  {
    name: "Guardian Café",
    type: "Café",
    address: "78 Safe Street, Market Area",
    icon: <FaCoffee className="text-yellow-600 text-3xl" />,
    mapLink: "https://maps.google.com/?q=78+Safe+Street",
  },
  {
    name: "Women’s Support Center",
    type: "Support Center",
    address: "22 Help Lane, Central City",
    icon: <FaUniversity className="text-green-600 text-3xl" />,
    mapLink: "https://maps.google.com/?q=22+Help+Lane",
  },
];

const SafeZonesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 to-indigo-700 p-8 text-white">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-2xl text-gray-900">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8">Safe Zones Near You</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {safeZones.map((zone, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 flex items-center gap-4"
            >
              <div>{zone.icon}</div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{zone.name}</h2>
                <p className="text-gray-600">{zone.type}</p>
                <p className="text-gray-700 mt-1">{zone.address}</p>
                <a
                  href={zone.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:underline font-medium"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafeZonesPage;
