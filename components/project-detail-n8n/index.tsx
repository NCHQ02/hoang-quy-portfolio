import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "../GlobalCursor";

// Configuration & Types
import { tabs, PROJECT_META } from "./config/tabs.config";
import type { ProjectDetailProps } from "./types";

// Components
import {
  HeaderNav,
  HeroSection,
  FooterCTA,
  TabNavigation,
  TabNavigationFooter,
  TabOverview,
  TabSocialMedia,
  TabAIAgents,
  TabOfficeOps,
  FloatingWidgets,
} from "./components";

// --- MAIN COMPONENT ---
const ProjectDetailN8n: React.FC<ProjectDetailProps> = ({ onBack }) => {
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
      <HeaderNav onBack={onBack} fileName={PROJECT_META.fileName} />

      {/* --- HERO SECTION (Shared across all tabs) --- */}
      <HeroSection
        title={PROJECT_META.title}
        subtitle={PROJECT_META.subtitle}
        description={PROJECT_META.description}
        efficiencyBoost={PROJECT_META.efficiencyBoost}
      />

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
      <FooterCTA onBack={onBack} />
    </motion.div>
  );
};

export default ProjectDetailN8n;
