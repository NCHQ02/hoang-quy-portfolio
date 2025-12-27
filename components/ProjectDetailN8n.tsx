import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "./GlobalCursor";

// Tab Components
import TabNavigation, { Tab, TabNavigationFooter } from "./n8n/TabNavigation";
import TabOverview from "./n8n/TabOverview";
import TabSocialMedia from "./n8n/TabSocialMedia";
import TabAIAgents from "./n8n/TabAIAgents";
import TabOfficeOps from "./n8n/TabOfficeOps";
import FloatingWidgets from "./n8n/FloatingWidgets";

interface Props {
  onBack: () => void;
}

// --- TAB CONFIGURATION ---
const tabs: Tab[] = [
  {
    id: 0,
    label: "Overview",
    icon: <span>📋</span>,
    color: "#ff4500",
  },
  {
    id: 1,
    label: "Social Media",
    icon: <span>📱</span>,
    color: "#E4405F",
  },
  {
    id: 2,
    label: "AI Agents",
    icon: <span>🤖</span>,
    color: "#8B5CF6",
  },
  {
    id: 3,
    label: "Office Ops",
    icon: <span>📋</span>,
    color: "#10B981",
  },
];

// --- MAIN COMPONENT ---
const ProjectDetailN8n: React.FC<Props> = ({ onBack }) => {
  const { setLabel, setIsActive } = useCursor();
  const [activeTab, setActiveTab] = useState(0);
  const tabContentRef = useRef<HTMLDivElement>(null);

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

  // Scroll to tab content area when tab changes
  const scrollToTabContent = () => {
    tabContentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Handle tab change with auto-scroll
  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
    setTimeout(scrollToTabContent, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="relative z-50 min-h-screen pb-20 overflow-hidden"
    >
      {/* --- FLOATING DECORATIVE WIDGETS --- */}
      <FloatingWidgets activeTab={activeTab} />

      {/* --- HEADER NAVIGATION --- */}
      <div className="fixed top-24 left-0 right-0 z-40 px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-auto">
          <button
            onClick={onBack}
            onMouseEnter={() => setLabel("Home")}
            onMouseLeave={() => setLabel(null)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-[#1e1e1e]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span className="text-xs font-bold uppercase">
              Back to Portfolio
            </span>
          </button>

          <div className="bg-[#1e1e1e]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-design-orange animate-pulse" />
            <span className="text-xs font-mono text-design-orange">
              n8n_case_study.fig
            </span>
          </div>
        </div>
      </div>

      {/* --- HERO SECTION (Shared across all tabs) --- */}
      <section className="pt-48 pb-8 px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Decorative Hero Elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-20 -left-10 hidden md:block"
          >
            <div className="bg-[#2C2C2E] text-white text-xs px-3 py-1.5 rounded-lg shadow-xl border border-white/10 transform -rotate-12">
              🚀 85% Efficiency Boost
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
            AUTOMATE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-design-orange to-red-500">
              EVERYTHING
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-gray-500">
              WITH n8n + AI AGENTS
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Stop spending 5-10 hours/week copying data. I build intelligent
            workflows that research trends, generate content, and sync business
            data automatically.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT AREA (Sticky container must wrap content) --- */}
      <div ref={tabContentRef} className="scroll-mt-20">
        {/* Sticky Tab Navigation */}
        <div className="sticky top-20 z-30">
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            isSticky={false}
          />
        </div>

        {/* --- TAB CONTENT --- */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 0 && <TabOverview key="overview" />}
            {activeTab === 1 && <TabSocialMedia key="social" />}
            {activeTab === 2 && <TabAIAgents key="ai" />}
            {activeTab === 3 && <TabOfficeOps key="office" />}
          </AnimatePresence>

          {/* --- TAB NAVIGATION FOOTER (Next/Prev) --- */}
          <TabNavigationFooter
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onScrollToTop={scrollToTabContent}
          />
        </div>
      </div>

      {/* --- FOOTER CTA (Shared across all tabs) --- */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            READY TO SCALE?
          </h2>
          <p className="text-gray-400 mb-10">
            Start like a solopreneur, scale like a team of 10. <br />
            Get these workflow templates or hire me to build custom agents.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-design-green text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform w-full md:w-auto">
              Download Workflow Templates
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#1e1e1e] border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-colors w-full md:w-auto"
            >
              Book a Free Audit
            </button>
          </div>

          {/* Back Button (Requested Placement) */}
          <div className="mt-20 pt-10 border-t border-white/5">
            <button
              onClick={onBack}
              onMouseEnter={() => setLabel("Go Back")}
              onMouseLeave={() => setLabel(null)}
              className="text-gray-500 hover:text-white flex items-center gap-2 mx-auto transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Back to Main Portfolio
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailN8n;
