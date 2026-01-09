import React from "react";

const TrashIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
    <path
      d="M10 12L12 40C12 42.2091 13.7909 44 16 44H32C34.2091 44 36 42.2091 36 40L38 12"
      fill="#4B5563"
      stroke="#9CA3AF"
      strokeWidth="2"
    />
    <path
      d="M10 12H38"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M18 12V8C18 6.89543 18.8954 6 20 6H28C29.1046 6 30 6.89543 30 8V12"
      stroke="#9CA3AF"
      strokeWidth="2"
    />
    <path d="M12 12L14 36H34L36 12" fill="white" fillOpacity="0.1" />
  </svg>
);

export default TrashIcon;
