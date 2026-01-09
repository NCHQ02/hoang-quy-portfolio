import React from "react";
import { LocalVariablesWidget } from "./widgets/LocalVariablesWidget";
import { VersionHistoryWidget } from "./widgets/VersionHistoryWidget";
import {
  SectionHeader,
  IntroPanel,
  ProfileImage,
  ExperiencePanel,
  SkillsPanel,
  ToolsPanel,
} from "./components";

/**
 * About Section Main Component
 * Modularized structure
 */
const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-4 relative">
      {/* SIDE WIDGETS INJECTION */}
      <LocalVariablesWidget />
      <VersionHistoryWidget />

      <div className="max-w-7xl mx-auto">
        {/* === HEADER === */}
        <SectionHeader />

        {/* === MAIN GRID LAYOUT === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Row 1: Intro & Profile */}
          <IntroPanel />
          <ProfileImage />

          {/* Row 2: Exp, Skills, Tools */}
          <ExperiencePanel />
          <SkillsPanel />
          <ToolsPanel />
        </div>
      </div>
    </section>
  );
};

export default About;
