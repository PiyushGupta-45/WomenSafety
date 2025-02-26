import React from "react";
import sos from "../Images/sos.jpeg";

const Sos = () => {
  return (
    <button className="fixed bottom-5 right-5 z-50">
      <img
        src={sos}
        alt="SOS"
        className="w-16 h-16 rounded-full shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-red-500"
      />
    </button>
  );
};

export default Sos;
