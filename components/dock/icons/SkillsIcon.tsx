import React from "react";

const SkillsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
    <rect width="48" height="48" rx="10" fill="#2C2C2E" />
    <circle
      cx="24"
      cy="24"
      r="16"
      stroke="#A1A1AA"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <path
      d="M24 14V34"
      stroke="#3B82F6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M14 24H34"
      stroke="#F472B6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M17 17L31 31"
      stroke="#FACC15"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M31 17L17 31"
      stroke="#4ADE80"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default SkillsIcon;
