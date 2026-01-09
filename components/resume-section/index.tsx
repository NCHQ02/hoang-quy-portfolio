import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CareerPropertiesWidget } from "./widgets/CareerPropertiesWidget";
import { ExportOptionsWidget } from "./widgets/ExportOptionsWidget";
import { HolographicCard } from "./components/HolographicCard";
import { TerminalBlock } from "./components/TerminalBlock";
import { DeployButton } from "./components/DeployButton";

const Resume: React.FC = () => {
  return (
    <section
      id="resume"
      className="py-32 px-4 relative min-h-screen flex items-center" // Removed overflow-hidden
    >
      {/* WIDGETS INJECTION */}
      <CareerPropertiesWidget />
      <ExportOptionsWidget />

      {/* === NEW HEADER DESIGN: CAREER LAUNCHPAD === */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* 1. Wireframe Number Background */}
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none z-0 select-none"
          style={{ WebkitTextStroke: "2px #fff" }}
        >
          05
        </div>
        {/* Background Glows */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-design-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-design-blue/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Text */}
        <div className="text-center mb-24 relative select-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-design-green/30 bg-design-green/10 text-design-green text-[10px] font-bold px-3 py-1 rounded-full mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-design-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-design-green"></span>
            </span>
            AVAILABLE FOR HIRE
          </motion.div>

          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-2">
            CAREER
          </h2>
          <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white tracking-tighter">
            PROFILE
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          {/* Left: The Holographic Card */}
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-design-blue/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <HolographicCard />
          </div>

          {/* Right: The Deployment Station */}
          <div className="flex flex-col gap-8 items-center lg:items-start">
            <div className="relative">
              <TerminalBlock />

              {/* Decorative connection line */}
              <svg className="absolute -left-12 top-1/2 w-12 h-px hidden lg:block overflow-visible">
                <motion.line
                  x1="0"
                  y1="0"
                  x2="48"
                  y2="0"
                  stroke="#333"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
                <circle cx="0" cy="0" r="3" fill="#333" />
              </svg>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex items-center gap-4 text-gray-500 text-xs font-mono">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-600 rounded-full" />
                  v2.5.0-stable
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-600 rounded-full" />
                  4.2 MB
                </span>
              </div>
              <DeployButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
