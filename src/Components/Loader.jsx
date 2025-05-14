import React from "react";
import Logo from "../assets/Logo.png";

const Loader = ({ hide }) => {
  return (
    <div
      className={`flex items-center justify-center h-screen bg-white transition-transform duration-2000 ${
        hide ? "scale-20000" : "scale-100"
      }`
    }
    
    >
      <div className="relative w-50 h-50">
        {/* Spinner Ring */}
        <div
  className="absolute inset-0 border-5 bg-transparent border-double border-transparent rounded-full animate-spin"
  style={{
    borderTopColor: "#ff00ff", 
    borderBottomColor: "#39ff14", 
    animationDuration: "3s",
  }}
></div>


        {/* Logo inside */}
        <img
          src={Logo}
          alt="Logo"
          className="w-full h-full object-contain rounded-full animate-pulse"
          style={{
    filter: "drop-shadow(0 0 5px #808080) ",
  }}
        />
      </div>
    </div>
  );
};

export default Loader;
