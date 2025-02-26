import React from "react";
import { Circle } from "lucide-react";

const HelplineNumbers = () => {
  const helplines = [
    { name: "Women's Helpline", number: "1091" },
    { name: "Police Emergency", number: "100" },
    { name: "Domestic Violence Helpline", number: "181" },
    { name: "Ambulance", number: "102" },
    { name: "Medical Emergency", number: "108" },
    { name: "Child Helpline", number: "1098" },
    { name: "Cyber Crime Helpline", number: "1930" },
    { name: "Senior Citizen Helpline", number: "14567" },
    { name: "Disaster Management", number: "1078" },
    { name: "Railway Helpline", number: "139" },
    { name: "Fire Brigade", number: "101" },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold text-purple-700 flex items-center">
        <Circle className="mr-2 text-purple-700" size={20} /> Emergency Contacts
      </h2>
      <ul className="mt-3 space-y-2">
        {helplines.map((helpline, index) => (
          <li key={index} className="flex justify-between items-center text-lg">
            <span className="text-gray-800">{helpline.name}:</span>
            <a
              href={`tel:${helpline.number}`}
              className="text-purple-600 font-semibold hover:underline"
            >
              {helpline.number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelplineNumbers;
