import React from "react";
import { Circle } from "lucide-react";

const LegalRights = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-purple-700 flex items-center">
        <Circle className="mr-2 text-purple-700" size={20} /> Legal Rights & Assistance
      </h2>

      {/* How to File an FIR */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">📌 How to File an FIR</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Visit the nearest police station.</li>
          <li>Provide details of the incident (date, time, place, people involved).</li>
          <li>Request the officer to register an FIR under the relevant sections of IPC.</li>
          <li>Ensure you receive a copy of the FIR with an official stamp.</li>
          <li>If refused, approach the Superintendent of Police or file an online FIR.</li>
        </ul>
      </div>

      {/* Online Harassment Laws */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">📌 Online Harassment Laws</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Cyberstalking & online abuse: <strong>Section 354D IPC</strong></li>
          <li>Publishing obscene content: <strong>Section 67 IT Act</strong></li>
          <li>Sending offensive messages: <strong>Section 66A IT Act</strong></li>
          <li>Defamation online: <strong>Section 499 & 500 IPC</strong></li>
          <li>Blackmailing & threats: <strong>Section 503 IPC</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default LegalRights;
