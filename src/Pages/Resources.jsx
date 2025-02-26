import React from "react";

const resources = [
  {
    category: "Emergency Contacts",
    items: [
      { name: "Women’s Helpline", contact: "1091" },
      { name: "Police Emergency", contact: "100" },
      { name: "Domestic Violence Helpline", contact: "181" },
    ],
  },
  {
    category: "Self-Defense & Awareness",
    items: [
      { name: "Basic Self-Defense Techniques", link: "#" },
      { name: "Safety Tips for Solo Travelers", link: "#" },
    ],
  },
  {
    category: "Legal Rights & Assistance",
    items: [
      { name: "How to File an FIR", link: "#" },
      { name: "Online Harassment Laws", link: "#" },
    ],
  },
  {
    category: "Mental Health Support",
    items: [
      { name: "Free Mental Health Helplines", link: "#" },
      { name: "Counseling & Support Groups", link: "#" },
    ],
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-purple-900 p-10 text-white">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-2xl text-gray-900">
        <h1 className="text-5xl font-bold text-center text-purple-800 mb-10">Safety Resources</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((section, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                {section.category}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {item.contact ? (
                      <span className="font-medium">{item.name}: <span className="text-purple-600 font-semibold">{item.contact}</span></span>
                    ) : (
                      <a href={item.link} className="text-black hover:text-blue-800 font-medium transition duration-200">{item.name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
