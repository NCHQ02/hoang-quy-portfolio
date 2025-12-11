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
import ProjectDetailData from "./components/ProjectDetailData";
import ProjectDetailVibe from "./components/ProjectDetailVibe";
// Types for View Navigation
export type ViewState =
  | "home"
  | "project-n8n"
  | "project-vibe"
  | "project-data";

// Internal component to handle the hovering logic for the main area
const MainContent: React.FC<{ onViewChange: (view: ViewState) => void }> = ({
  onViewChange,
}) => {
  const { setIsActive } = useCursor();
  const [isHoveringMain, setIsHoveringMain] = useState(false);

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
  const [currentView, setCurrentView] = useState<ViewState>("home");

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

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
              <MainContent key="home" onViewChange={setCurrentView} />
            ) : currentView === "project-n8n" ? (
              <ProjectDetailN8n
                key="n8n"
                onBack={() => setCurrentView("home")}
              />
            ) : currentView === "project-vibe" ? (
              <ProjectDetailVibe
                key="vibe"
                onBack={() => setCurrentView("home")}
              />
            ) : currentView === "project-data" ? (
              <ProjectDetailData
                key="data"
                onBack={() => setCurrentView("home")}
              />
            ) : null}
          </AnimatePresence>

          {/* Floating Dock Navigation - Only show on Home for now to avoid clutter, or keep if desired */}
          {currentView === "home" && <Dock />}
        </div>
      </div>
    </CursorProvider>
  );
};

export default App;
