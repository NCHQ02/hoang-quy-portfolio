import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../GlobalCursor";
import { HeaderNav } from "./components/HeaderNav";
import { HeroContent } from "./components/HeroContent";
import { SuiteDashboard } from "./visuals/SuiteDashboard";
import { SectionNumber } from "./components/SectionNumber";
import { ProcessLogs } from "./visuals/ProcessLogs";
import { AutoTagger } from "./visuals/AutoTagger";
import { OfflineApp } from "./visuals/OfflineApp";
import { CMSNotify } from "./visuals/CMSNotify";
import { SystemPerformance } from "./visuals/SystemPerformance";
import { FooterCTA } from "./components/FooterCTA";

interface Props {
  onBack: () => void;
}

const ProjectDetailVibe: React.FC<Props> = ({ onBack }) => {
  const { setLabel, setIsActive } = useCursor();

  useEffect(() => {
    // Enable custom cursor mode globally for this page
    document.body.classList.add("no-cursor");
    setIsActive(true);

    return () => {
      // Cleanup: revert to normal cursor
      document.body.classList.remove("no-cursor");
      setIsActive(false);
    };
  }, [setIsActive]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="relative z-50 min-h-screen pb-20 overflow-hidden font-mono text-slate-200"
    >
      {/* --- HEADER NAVIGATION (IDE TABS STYLE) --- */}
      <HeaderNav onBack={onBack} />

      {/* --- HERO SECTION --- */}
      <section className="pt-48 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />

          {/* Hero Visual: The "Suite" Dashboard */}
          <div className="relative">
            <SuiteDashboard />

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-8 -bottom-8 bg-[#1e1e1e] p-3 rounded-lg border border-white/10 shadow-xl"
            >
              <div className="text-[10px] text-gray-500 mb-1">
                Total Time Saved
              </div>
              <div className="text-xl font-bold text-white">~200h/mo</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM SECTION (The "Manual" Debugging) --- */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionNumber num="01" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Visual: The Error Log */}
            <ProcessLogs />

            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                The Deployment Nightmare
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed font-sans">
                E-commerce teams often miss 30% of event tracking because of
                manual GTM setups. Offline events result in duplicate rewards,
                and affiliates lose interest when notifications are slow.
              </p>
              <ul className="space-y-3 font-mono text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">x</span> ROI discrepancy &gt;
                  40%
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">x</span> Customer support
                  flooded with "Where's my reward?"
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">x</span> Dev team stuck fixing
                  tags instead of shipping features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTION SECTION (The 3 Tools) --- */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionNumber num="02" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            The Engineering Solution
          </h2>

          <div className="space-y-24">
            {/* Tool 1: Auto-Tagging */}
            <AutoTagger />

            {/* Tool 2: Offline App */}
            <OfflineApp />

            {/* Tool 3: CMS */}
            <CMSNotify />
          </div>
        </div>
      </section>

      {/* --- METRICS / BENCHMARK --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionNumber num="03" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            System Performance
          </h2>
          <SystemPerformance />
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-6 relative">
        <FooterCTA onBack={onBack} />
      </section>
    </motion.div>
  );
};

export default ProjectDetailVibe;
