import React from "react";

const HomeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
    <defs>
      <linearGradient
        id="homeGradient"
        x1="24"
        y1="0"
        x2="24"
        y2="48"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#60A5FA" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="10" fill="url(#homeGradient)" />
    <path
      d="M24 11L12 21V37H20V29H28V37H36V21L24 11Z"
      fill="white"
      stroke="white"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default HomeIcon;
