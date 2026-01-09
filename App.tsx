// 1. Import cả Analytics và SpeedInsights
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/hero-section";
import TableOfContents from "./components/table-of-contents";
import About from "./components/about-section";
import Dock from "./components/dock";
import Footer from "./components/footer-section";
import BrowserHeader from "./components/browser-header";
import Projects from "./components/projects-section";
import SkillsServices from "./components/skills-section";
import Testimonials from "./components/testimonials-section";
import Resume from "./components/resume-section";
import Contact from "./components/contact-section";
import FlowConnector from "./components/flow-connector";
import ProjectDetailN8n from "./components/project-detail-n8n";
import ProjectDetailVibe from "./components/project-detail-vibe";
import ProjectDetailData from "./components/project-detail-data";

// Types for View Navigation
export type ViewState =
  | "home"
  | "project-n8n"
  | "project-vibe"
  | "project-data";

const MainContent: React.FC<{
  onViewChange: (view: ViewState) => void;
  restoreId?: string | null;
}> = ({ onViewChange, restoreId }) => {
  useEffect(() => {
    // Scroll restoration logic
    if (restoreId) {
      setTimeout(() => {
        const el = document.getElementById(restoreId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 500); // Delay to allow animation/mount to complete
    } else {
      window.scrollTo(0, 0);
    }
  }, [restoreId]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col transition-colors duration-200"
    >
      <Hero />

      {/* Visual Connector between Hero and TOC */}
      <FlowConnector />

      <TableOfContents />

      {/* 1. ABOUT ME */}
      <About />

      {/* 2. PROJECTS / CASE STUDIES */}
      <Projects onViewChange={onViewChange} />

      {/* 3. SKILLS & SERVICES */}
      <SkillsServices />

      {/* 4. TESTIMONIALS / SOCIAL PROOF */}
      <Testimonials />

      {/* 5. RESUME / CV */}
      <Resume />

      {/* 6. CONTACT */}
      <Contact />

      <Footer />
    </motion.main>
  );
};

const App: React.FC = () => {
  // Helper function to get view from URL path
  const getViewFromPath = (path: string): ViewState => {
    if (path === "/projects/n8n") return "project-n8n";
    if (path === "/projects/vibe") return "project-vibe";
    if (path === "/projects/data") return "project-data";
    return "home";
  };

  // Helper function to get path from view
  const getPathFromView = (view: ViewState): string => {
    if (view === "project-n8n") return "/projects/n8n";
    if (view === "project-vibe") return "/projects/vibe";
    if (view === "project-data") return "/projects/data";
    return "/";
  };

  // Initialize view from URL on mount
  const [currentView, setCurrentView] = useState<ViewState>(() => {
    return getViewFromPath(window.location.pathname);
  });
  const previousView = React.useRef<ViewState>("home");

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const newView = getViewFromPath(window.location.pathname);
      // Track the previous view before changing
      if (currentView !== "home" && newView === "home") {
        previousView.current = currentView;
      }
      setCurrentView(newView);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [currentView]);

  // Update URL when view changes
  useEffect(() => {
    const newPath = getPathFromView(currentView);
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, "", newPath);
    }

    // Scroll to top when view changes TO a project view
    if (currentView !== "home") {
      window.scrollTo(0, 0);
    }
  }, [currentView]);

  const handleBack = () => {
    previousView.current = currentView;
    setCurrentView("home");
  };

  const getRestoreId = () => {
    if (currentView === "home") {
      if (previousView.current === "project-n8n") return "project-n8n-card";
      if (previousView.current === "project-vibe") return "project-vibe-card";
      if (previousView.current === "project-data") return "project-data-card";
    }
    return null;
  };

  return (
    <div className="relative min-h-screen bg-background text-text selection:bg-primary/30 overflow-x-hidden pb-32">
      {/* Global Figma-like Grid Background */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Safari-style Browser Header (Default Cursor Here) */}
      <BrowserHeader />

      <div className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          {currentView === "home" ? (
            <MainContent
              key="home"
              onViewChange={setCurrentView}
              restoreId={getRestoreId()}
            />
          ) : currentView === "project-n8n" ? (
            <ProjectDetailN8n key="n8n" onBack={handleBack} />
          ) : currentView === "project-vibe" ? (
            <ProjectDetailVibe key="vibe" onBack={handleBack} />
          ) : currentView === "project-data" ? (
            <ProjectDetailData key="data" onBack={handleBack} />
          ) : null}
        </AnimatePresence>

        {/* Floating Dock Navigation - Only show on Home for now to avoid clutter, or keep if desired */}
        {currentView === "home" && <Dock />}
      </div>

      {/* 2. Đặt các component theo dõi hiệu năng ở đây */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
