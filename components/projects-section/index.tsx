import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../GlobalCursor";
import { ViewState } from "../../App";

// Imported Components
import LayersWidget from "./widgets/LayersWidget";
import PrototypeActionsWidget from "./widgets/PrototypeActionsWidget";
import ProjectCard from "./components/ProjectCard";
import N8nVisual from "./visuals/N8nVisual";
import VibeCodingVisual from "./visuals/VibeCodingVisual";
import DataVisual from "./visuals/DataVisual";

interface ProjectsProps {
  onViewChange?: (view: ViewState) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewChange }) => {
  const { setLabel } = useCursor();

  return (
    <section id="projects" className="py-32 px-4 relative">
      {/* SIDE WIDGETS INJECTION */}
      <LayersWidget />
      <PrototypeActionsWidget />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === NEW HEADER DESIGN: FIGMA / MESSENGER STYLE MIX === */}
        <div className="mb-40 relative flex justify-center">
          {/* The Main Container "Frame" */}
          <div className="relative">
            {/* Floating "Audio" Capsule (MacOS Style) */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-12 -right-8 md:-right-20 bg-design-blue text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-3 z-30"
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="black">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="flex gap-0.5 items-end h-3">
                {[1, 3, 2, 5, 3, 4, 2].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 16, 4] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    className="w-1 bg-white rounded-full"
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono font-bold">0:24</span>
            </motion.div>

            {/* Mixed Typography Header */}
            <div className="relative text-center select-none">
              {/* 1. Wireframe Number Background - UPDATED */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none z-0"
                style={{ WebkitTextStroke: "2px #fff" }}
              >
                02
              </div>

              {/* 2. "Selected" in Script Font */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -10 }}
                whileInView={{ opacity: 1, x: 0, rotate: -5 }}
                transition={{ duration: 0.6 }}
                className="absolute -top-6 md:-top-10 left-4 md:left-0 z-20"
              >
                <span className="font-script text-4xl md:text-6xl text-design-pink drop-shadow-lg transform -rotate-6 block">
                  Selected
                </span>
                {/* Connecting Arrow */}
                <svg
                  className="absolute top-full left-1/2 w-8 h-8 text-design-pink"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C12 10 12 10 18 16" strokeLinecap="round" />
                  <path d="M18 16L14 16" strokeLinecap="round" />
                  <path d="M18 16L18 12" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* 3. "PROJECTS" - Massive, Interacting Letters */}
              <div
                className="relative text-[15vw] md:text-[10rem] lg:text-[12rem] font-black leading-[0.8] tracking-tighter text-white flex justify-center group"
                onMouseEnter={() => setLabel("Highlight")}
                onMouseLeave={() => setLabel(null)}
              >
                {/* Split letters for individual animation */}
                {["P", "R", "O", "J", "E", "C", "T", "S"].map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, type: "spring" }}
                    whileHover={{
                      y: -20,
                      color: i % 2 === 0 ? "#3b82f6" : "#8b5cf6",
                    }} // Blue/Purple alternate
                    className="transition-colors duration-300 relative"
                  >
                    {char}
                    {char === "J" && (
                      // Add a "sticker" on the J
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="absolute -top-4 right-0 text-2xl md:text-4xl"
                      >
                        ✨
                      </motion.div>
                    )}
                  </motion.span>
                ))}

                {/* "UI/UX" Tag attached to text */}
                <div className="absolute bottom-0 right-10 md:right-20 rotate-6">
                  <span className="bg-[#1e1e1e] border border-white/20 text-gray-400 text-xs md:text-sm font-mono px-3 py-1 rounded shadow-xl">
                    UI/UX
                  </span>
                  <div className="w-px h-8 bg-gray-500 mx-auto" />
                </div>
              </div>

              {/* 4. Selection Box Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute inset-x-0 -inset-y-4 md:-inset-y-8 border-2 border-design-blue/30 rounded-3xl pointer-events-none"
              >
                {/* Corner Handles */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-design-blue" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-design-blue" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-design-blue" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-design-blue" />

                {/* Label Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-design-blue text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Frame 214
                </div>
              </motion.div>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 text-center text-gray-500 text-lg max-w-xl mx-auto font-light"
            >
              A collection of solutions focusing on{" "}
              <span className="text-white font-medium">Automation</span>,{" "}
              <span className="text-white font-medium">
                Product Engineering
              </span>
              , and{" "}
              <span className="text-white font-medium">Data Intelligence</span>.
            </motion.p>
          </div>
        </div>
        {/* === END HEADER === */}

        {/* --- PROJECTS LIST --- */}

        {/* 1. n8n Automation */}
        <ProjectCard
          id="01"
          sectionId="project-n8n-card"
          title="n8n Automation Workflow"
          subtitle="Business Process Automation"
          description="Automating repetitive business tasks using n8n and AI Agents. Features include social media auto-posting, intelligent content research, and seamless data handling across platforms."
          tags={["n8n", "AI Agents", "Automation", "Webhooks", "Social API"]}
          color="bg-design-orange"
          VisualComponent={N8nVisual}
          align="left"
          isComingSoon={false}
          onViewCaseStudy={() => onViewChange && onViewChange("project-n8n")}
        />

        {/* 2. Vibe Coding */}
        <ProjectCard
          id="02"
          sectionId="project-vibe-card"
          title="Vibe Coding Product Suite"
          subtitle="Product Engineering Tools"
          description="A suite of utility products including an auto-tagging tool for GTM/GA, an Offline Event Reward Management App, and a Mini-CMS for Affiliate notification management."
          tags={[
            "React Native",
            "GTM/GA4",
            "Node.js",
            "Internal Tools",
            "App Dev",
          ]}
          color="bg-design-green"
          VisualComponent={VibeCodingVisual}
          align="right"
          isComingSoon={false}
          onViewCaseStudy={() => onViewChange && onViewChange("project-vibe")}
        />

        {/* 3. Data Engineering (UPDATED) */}
        <ProjectCard
          id="03"
          sectionId="project-data-card"
          title="Data Intelligence & Analytics"
          subtitle="BI & Customer Insights"
          description="Transforming raw data into clear business insights. Specializing in Data Cleaning, Customer Segmentation, and interactive dashboards using Power BI and Looker Studio."
          tags={[
            "Power BI",
            "Looker",
            "Segmentation",
            "Data Cleaning",
            "Python (Pandas)",
          ]}
          color="bg-design-blue"
          VisualComponent={DataVisual}
          align="left"
          isComingSoon={false}
          onViewCaseStudy={() => onViewChange && onViewChange("project-data")}
        />
      </div>
    </section>
  );
};

export default Projects;
