import React, { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useCursor } from "../GlobalCursor";
import { TechSpec } from "../project-detail-data/components/TechSpec";

interface Props {
  onBack: () => void;
}

const ProjectDetailAem: React.FC<Props> = ({ onBack }) => {
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
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono text-red-400">
              component_library_v2.java
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
            <div className="inline-flex items-center gap-2 bg-red-900/20 border border-red-500/30 text-red-300 px-3 py-1 rounded-full mb-6 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
              Enterprise CMS Managment
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              SCALING{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-400">
                EXPERIENCES
              </span>
              <br />
              GLOBALLY
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Managing the digital ecosystem for{" "}
              <span className="text-white font-bold">Abbott</span> on Adobe
              Experience Manager (AEM). Balancing strict brand compliance with
              local market flexibility across 12+ regions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              The Complex Environment
            </h2>
            <p className="text-slate-400 mb-4">
              Working with AEM isn't just about editing text. It's about
              maintaining a massive component library, managing deployment
              cycles, and ensuring that any change made to a core component
              propagates correctly without breaking hundreds of live pages.
            </p>
            <TechSpec
              title="RESPONSIBILITIES"
              content="Component Development (HTL/Sightly). Asset Management (DAM). Workflow Approval configuration. Multi-site Manager (MSM) rollout."
            />
          </div>

          <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-white/10 relative overflow-hidden">
            {/* Abstract Visual of Blocks */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />

            <div className="space-y-4 relative z-10">
              <div className="flex gap-4 items-center p-4 bg-black/40 rounded-lg border border-white/5">
                <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center font-bold text-white">
                  A
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    AEM Core Components
                  </div>
                  <div className="text-xs text-slate-500">v2.18.0 (Stable)</div>
                </div>
              </div>
              <div className="flex gap-4 items-center p-4 bg-black/40 rounded-lg border border-white/5 ml-8">
                <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center font-bold text-white">
                  L
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    Local Market Adaptation
                  </div>
                  <div className="text-xs text-slate-500">
                    Vietnam / Thailand / Phillipines
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center p-4 bg-black/40 rounded-lg border border-white/5 ml-16">
                <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center font-bold text-white">
                  P
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    Production Publish
                  </div>
                  <div className="text-xs text-slate-500">
                    Zero downtime deployment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Add */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Value Delivered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl text-white font-black mb-2">99.9%</div>
              <div className="text-red-400 font-bold text-sm uppercase">
                Uptime & Stability
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl text-white font-black mb-2">30+</div>
              <div className="text-red-400 font-bold text-sm uppercase">
                Microsites Managed
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl text-white font-black mb-2">2x</div>
              <div className="text-red-400 font-bold text-sm uppercase">
                Faster Content Entry
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailAem;
