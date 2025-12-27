// 1. Import cả Analytics và SpeedInsights
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero";
import TableOfContents from "./components/TableOfContents";
import About from "./components/About";
import Dock from "./components/Dock";
import Footer from "./components/Footer";
import BrowserHeader from "./components/BrowserHeader";
import Projects from "./components/Projects";
import SkillsServices from "./components/SkillsServices";
import Testimonials from "./components/Testimonials";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import FlowConnector from "./components/FlowConnector";
import { CursorProvider, useCursor } from "./components/GlobalCursor";
import ProjectDetailN8n from "./components/ProjectDetailN8n";
import ProjectDetailVibe from "./components/ProjectDetailVibe";
import ProjectDetailData from "./components/ProjectDetailData";

// Types for View Navigation
export type ViewState =
  | "home"
  | "project-n8n"
  | "project-vibe"
  | "project-data";

// Internal component to handle the hovering logic for the main area
const MainContent: React.FC<{
  onViewChange: (view: ViewState) => void;
  restoreId?: string | null;
}> = ({ onViewChange, restoreId }) => {
  const { setIsActive } = useCursor();
  // Initialize to true so we don't flash the system cursor on mount
  const [isHoveringMain, setIsHoveringMain] = useState(true);

  useEffect(() => {
    // Ensure custom cursor is active when returning to main view
    setIsActive(true);

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
  }, [setIsActive, restoreId]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col transition-colors duration-200 ${
        isHoveringMain ? "no-cursor" : ""
      }`}
      onMouseEnter={() => {
        setIsActive(true);
        setIsHoveringMain(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
        setIsHoveringMain(false);
      }}
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
    <CursorProvider>
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
      </div>

      {/* 2. Đặt các component theo dõi hiệu năng ở đây */}
      <Analytics />
      <SpeedInsights />
    </CursorProvider>
  );
};

export default App;
