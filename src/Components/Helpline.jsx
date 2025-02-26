import React from "react";
import { PhoneCall } from "lucide-react";

const HelplineNumbers = () => {
  const helplines = [
    { name: "Police Emergency", number: "112", color: "text-red-500" },
    { name: "Ambulance", number: "102", color: "text-green-500" },
    { name: "Fire Brigade", number: "101", color: "text-orange-500" },
    { name: "Women's Helpline", number: "1091", color: "text-purple-500" },
    { name: "Domestic Violence Helpline", number: "181", color: "text-pink-500" },
    { name: "Child Helpline", number: "1098", color: "text-blue-500" },
    { name: "Senior Citizen Helpline", number: "14567", color: "text-teal-500" },
    { name: "Railway Helpline", number: "139", color: "text-indigo-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {helplines.map((helpline, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center">
          <PhoneCall className={`${helpline.color} mb-2`} size={32} />
          <h3 className="text-lg font-bold">{helpline.name}</h3>
          <a
            href={`tel:${helpline.number}`}
            className="text-purple-600 font-semibold hover:underline mt-1"
          >
            {helpline.number}
          </a>
        </div>
      ))}
    </div>
  );
};

export default HelplineNumbers;
