import React from "react";
import { motion } from "framer-motion";

const AnalyticsVisual = () => {
  // Coordinate configuration for perfect alignment
  // Canvas viewbox: 400 x 300
  // Layout: Source -> GTM -> Split (GA4/BQ) -> Looker
  // SHIFTED LEFT MORE to center content.
  // Center of 400 is 200.
  // Source(30) ... Looker(330). Width = 300. Center = 180. (Almost perfect)
  const coords = {
    source: { x: 30, y: 150 },
    gtm: { x: 130, y: 150 },
    bigquery: { x: 230, y: 230 },
    ga4: { x: 230, y: 70 },
    looker: { x: 330, y: 70 },
  };

  const ICONS = {
    gtm: "https://img.icons8.com/plasticine/100/google-tag-manager.png",
    ga4: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-google-analytics-lets-you-measure-your-advertising-roi-logo-color-tal-revivo.png",
    looker: "https://img.icons8.com/color/96/google-looker.png",
    bigquery:
      "https://images.icon-icons.com/2699/PNG/512/google_bigquery_logo_icon_168150.png",
  };

  return (
    <div className="w-full h-full bg-[#0B0F14] rounded-xl overflow-hidden relative border border-white/5 md:border-none flex items-center justify-center group text-white">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#4285F4 1px, transparent 1px), linear-gradient(90deg, #4285F4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0F14_90%)]" />

      {/* Main Container */}
      <div className="relative w-full h-full">
        {/* 1. SVG LAYER (Connections) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4285F4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#4285F4" stopOpacity="1" />
              <stop offset="100%" stopColor="#4285F4" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F9AB00" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#F9AB00" stopOpacity="1" />
              <stop offset="100%" stopColor="#F9AB00" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00bfb3" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00bfb3" stopOpacity="1" />
              <stop offset="100%" stopColor="#00bfb3" stopOpacity="0.3" />
            </linearGradient>

            <filter id="glow-source">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Path 1: Source -> GTM (Blue) */}
          <motion.path
            d={`M ${coords.source.x} ${coords.source.y} L ${coords.gtm.x} ${coords.gtm.y}`}
            fill="none"
            stroke="url(#grad-blue)"
            strokeWidth="3"
          />

          {/* Path 2: GTM -> GA4 (Orange/Yellow - Top Branch) */}
          <motion.path
            d={`M ${coords.gtm.x} ${coords.gtm.y} C 180 150, 180 ${coords.ga4.y}, ${coords.ga4.x} ${coords.ga4.y}`}
            fill="none"
            stroke="url(#grad-orange)"
            strokeWidth="3"
          />

          {/* Path 3: GTM -> BigQuery (Blue/Teal - Bottom Branch) */}
          <motion.path
            d={`M ${coords.gtm.x} ${coords.gtm.y} C 180 150, 180 ${coords.bigquery.y}, ${coords.bigquery.x} ${coords.bigquery.y}`}
            fill="none"
            stroke="url(#grad-teal)"
            strokeWidth="3"
          />

          {/* Path 4: GA4 -> Looker - DOUBLE STROKE for VISIBILITY */}
          {/* Underlay Glow */}
          <motion.path
            d={`M ${coords.ga4.x} ${coords.ga4.y} L ${coords.looker.x} ${coords.looker.y}`}
            fill="none"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="5"
          />
          {/* Main Line */}
          <motion.path
            d={`M ${coords.ga4.x} ${coords.ga4.y} L ${coords.looker.x} ${coords.looker.y}`}
            fill="none"
            stroke="#3B82F6"
            strokeOpacity="1"
            strokeWidth="3"
          />

          {/* Data Packet: Source -> GTM */}
          <circle r="5" fill="#ffffff" filter="url(#glow-source)">
            <animateMotion
              path={`M ${coords.source.x} ${coords.source.y} L ${coords.gtm.x} ${coords.gtm.y}`}
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Data Packet: GTM -> GA4 */}
          <circle r="4" fill="#F9AB00">
            <animateMotion
              path={`M ${coords.gtm.x} ${coords.gtm.y} C 180 150, 180 ${coords.ga4.y}, ${coords.ga4.x} ${coords.ga4.y}`}
              dur="2s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Data Packet: GTM -> BigQuery */}
          <circle r="4" fill="#00bfb3">
            <animateMotion
              path={`M ${coords.gtm.x} ${coords.gtm.y} C 180 150, 180 ${coords.bigquery.y}, ${coords.bigquery.x} ${coords.bigquery.y}`}
              dur="2s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Data Packet: GA4 -> Looker */}
          <circle r="3" fill="#ffffff">
            <animateMotion
              path={`M ${coords.ga4.x} ${coords.ga4.y} L ${coords.looker.x} ${coords.looker.y}`}
              dur="1.5s"
              begin="1s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* 2. HTML LAYER (Nodes) */}

        {/* Source Node (Data Layer) */}
        <div
          style={{
            position: "absolute",
            left: `${(coords.source.x / 400) * 100}%`,
            top: `${(coords.source.y / 300) * 100}%`,
            transform: "translate(-10%, -36%)",
            zIndex: 20,
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="relative group/source">
              <div className="absolute inset-0 bg-white/20 rounded-lg blur-lg animate-pulse" />
              <div className="w-12 h-12 bg-[#1e1e1e] border border-white/40 rounded-lg flex flex-col items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] relative overflow-hidden">
                {/* Simple Code Block Icon */}
                <div className="flex flex-col gap-1 items-start w-6">
                  <div className="w-5 h-0.5 bg-green-500/70 rounded-full" />
                  <div className="w-3 h-0.5 bg-blue-500/70 rounded-full" />
                  <div className="w-4 h-0.5 bg-purple-500/70 rounded-full" />
                </div>
                {/* Scanning effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent translate-y-[-100%] animate-[scan_2s_ease-in-out_infinite]" />
              </div>
            </div>
            <div className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-[9px] text-white font-bold backdrop-blur-md shadow-lg whitespace-nowrap">
              Data Layer
            </div>
          </div>
        </div>

        {/* GTM Node */}
        <div
          style={{
            position: "absolute",
            left: `${(coords.gtm.x / 400) * 100}%`,
            top: `${(coords.gtm.y / 300) * 100}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <motion.div
            className="w-16 h-16 rounded-2xl bg-[#13151a] border border-blue-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(66,133,244,0.15)] relative p-2"
            animate={{
              scale: [1, 1.05, 1],
              borderColor: [
                "rgba(66,133,244,0.4)",
                "rgba(66,133,244,0.7)",
                "rgba(66,133,244,0.4)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img
              src={ICONS.gtm}
              alt="GTM"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-blue-900/30 border border-blue-500/20 text-[9px] text-blue-200 font-bold backdrop-blur-sm whitespace-nowrap">
            GTM
          </div>
        </div>

        {/* GA4 Node */}
        <div
          style={{
            position: "absolute",
            left: `${(coords.ga4.x / 400) * 100}%`,
            top: `${(coords.ga4.y / 300) * 100}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 15,
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-1 group/node w-12 h-12 relative"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-full h-full bg-[#13151a] border border-yellow-500/40 rounded-xl flex items-center justify-center shadow-lg group-hover/node:shadow-[0_0_15px_rgba(249,171,0,0.4)] transition-all p-2 bg-[#13151a]">
              <img
                src={ICONS.ga4}
                alt="GA4"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-yellow-900/20 border border-yellow-500/20 text-[9px] text-yellow-200 font-bold backdrop-blur-sm whitespace-nowrap">
              GA4
            </div>
          </motion.div>
        </div>

        {/* Looker Node */}
        <div
          style={{
            position: "absolute",
            left: `${(coords.looker.x / 435) * 100}%`,
            top: `${(coords.looker.y / 300) * 100}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 15,
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-1 group/node w-12 h-12 relative"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-full h-full bg-[#13151a] border border-blue-400/40 rounded-xl flex items-center justify-center shadow-lg group-hover/node:shadow-[0_0_15px_rgba(66,133,244,0.4)] transition-all p-2 bg-[#13151a]">
              <img
                src={ICONS.looker}
                alt="Looker"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-blue-900/20 border border-blue-500/20 text-[9px] text-blue-200 font-bold backdrop-blur-sm whitespace-nowrap">
              Looker
            </div>
          </motion.div>
        </div>

        {/* BigQuery Node */}
        <div
          style={{
            position: "absolute",
            left: `${(coords.bigquery.x / 400) * 100}%`,
            top: `${(coords.bigquery.y / 300) * 100}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 15,
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-1 group/node w-12 h-12 relative"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-full h-full bg-[#13151a] border border-[#00bfb3]/40 rounded-xl flex items-center justify-center shadow-lg group-hover/node:shadow-[0_0_15px_rgba(0,191,179,0.4)] transition-all p-2 bg-[#13151a]">
              <img
                src={ICONS.bigquery}
                alt="BigQuery"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-teal-900/20 border border-[#00bfb3]/20 text-[9px] text-[#00bfb3] font-bold backdrop-blur-sm whitespace-nowrap">
              BigQuery
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default AnalyticsVisual;
