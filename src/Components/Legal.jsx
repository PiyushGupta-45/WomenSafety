import React from "react";
import { Gavel, FileText } from "lucide-react";

const Legal = () => {
  const legalInfo = [
    {
      title: "How to File an FIR",
      icon: <FileText className="text-red-500" size={28} />,
      points: [
        "Visit the nearest police station.",
        "Provide details of the incident (date, time, place, people involved).",
        "Request the officer to register an FIR under the relevant sections of IPC.",
        "Ensure you receive a copy of the FIR with an official stamp.",
        "If refused, approach the Superintendent of Police or file an online FIR.",
      ],
    },
    {
      title: "Online Harassment Laws",
      icon: <Gavel className="text-blue-500" size={28} />,
      points: [
        "Cyberstalking & online abuse: **Section 354D IPC**",
        "Publishing obscene content: **Section 67 IT Act**",
        "Sending offensive messages: **Section 66A IT Act**",
        "Defamation online: **Section 499 & 500 IPC**",
        "Blackmailing & threats: **Section 503 IPC**",
      ],
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      {legalInfo.map((info, index) => (
        <div key={index} className="bg-white p-6 mt-20 mb-20 shadow-md rounded-xl border hover:scale-105 transition-all duration-300">
          <div className="flex items-center space-x-3">
            {info.icon}
            <h2 className="text-lg font-bold">{info.title}</h2>
          </div>
          <ul className="mt-3 list-disc list-inside text-gray-700">
            {info.points.map((point, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Legal;
