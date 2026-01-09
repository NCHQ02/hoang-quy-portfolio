import React, { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useCursor } from "../GlobalCursor";
import { TechSpec } from "../project-detail-data/components/TechSpec";
// Reusing visuals from Data project for now, will replace or customize later
import { AuditScanner } from "../project-detail-data/visuals/AuditScanner";
import { SiloVisual } from "../project-detail-data/visuals/SiloVisual";

interface Props {
  onBack: () => void;
}

const ProjectDetailAnalytics: React.FC<Props> = ({ onBack }) => {
  const { setLabel } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-50 min-h-screen pb-40 overflow-hidden font-sans text-slate-200"
    >
      {/* Header */}
      <div className="fixed top-24 left-0 right-0 z-40 px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-auto">
          <button
            onClick={onBack}
            onMouseEnter={() => setLabel("Home")}
            onMouseLeave={() => setLabel(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-white/30"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span className="text-xs font-bold uppercase">Back</span>
          </button>

          <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 shadow-xl">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-mono text-blue-400">
              GA4_GTM_Tracking_Plan.json
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-48 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full mb-6 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              Digital Analytics & Tracking
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              INVISIBLE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                ARCHITECTURE
              </span>
              <br />
              VISIBLE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                INSIGHTS
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Designing the{" "}
              <span className="text-white italic font-medium">
                nervous system
              </span>{" "}
              of marketing data. Implementing server-side tracking, advanced GTM
              schemas, and ensuring 99.9% data accuracy for decision making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pain Point */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-6">
              The "Black Box" Problem
            </h2>
            <div className="prose prose-invert prose-lg text-slate-400 space-y-4">
              <p>
                Marketing teams were spending budget based on gut feelings
                because their data was broken. Conversions were duplicated,
                cross-domain tracking was non-existent, and dark traffic was
                rising.
              </p>
              <p>
                <strong className="text-white">
                  They tracked everything, yet knew nothing.
                </strong>
              </p>
            </div>
            <TechSpec
              title="THE GAP"
              content="Client-side signal loss (iOS 14+). Inconsistent UTM naming conventions. No Data Layer governance."
            />
          </div>
          <div className="order-1 lg:order-2">
            <SiloVisual />
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 relative z-10 bg-white/5 mx-4 rounded-3xl border border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Engineering the Solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black/40 rounded-xl border border-white/10">
              <div className="text-blue-400 font-mono text-sm mb-4">
                01. DATA LAYER DESIGN
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Standardized Schema
              </h3>
              <p className="text-sm text-gray-400">
                Built a robust `dataLayer` push architecture. Every click,
                scroll, and purchase is captured with full context (User ID,
                Product Metadata, Affiliate Source).
              </p>
            </div>
            <div className="p-6 bg-black/40 rounded-xl border border-white/10">
              <div className="text-cyan-400 font-mono text-sm mb-4">
                02. SERVER-SIDE GTM
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Signal Recovery
              </h3>
              <p className="text-sm text-gray-400">
                Implemented sGTM to bypass ad-blockers and ITP. Normalized data
                before it hits GA4 or Facebook CAPI. First-party cookie
                adoption.
              </p>
            </div>
            <div className="p-6 bg-black/40 rounded-xl border border-white/10">
              <div className="text-indigo-400 font-mono text-sm mb-4">
                03. VISUALIZATION
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Looker Studio Pro
              </h3>
              <p className="text-sm text-gray-400">
                Created automated dashboards that blend Google Ads, Facebook,
                and CRM data. Calculated blended ROAS in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">The Result</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1e1e1e] border border-white/10 p-8 rounded-2xl">
              <div className="text-5xl font-black text-green-400 mb-2">
                +35%
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase">
                Attributed Revenue
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Recovered lost conversions via Server-side tracking.
              </p>
            </div>
            <div className="bg-[#1e1e1e] border border-white/10 p-8 rounded-2xl">
              <div className="text-5xl font-black text-blue-400 mb-2">100%</div>
              <div className="text-sm font-bold text-gray-400 uppercase">
                Data Trust
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Marketing team now relies entirely on the new tracking
                infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailAnalytics;
