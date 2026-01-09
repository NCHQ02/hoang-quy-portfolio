import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../GlobalCursor";
import { DependencyGraphWidget } from "./widgets/DependencyGraphWidget";
import { SystemMonitorWidget } from "./widgets/SystemMonitorWidget";
import {
  CodeIcon,
  WorkflowIcon,
  MailIcon,
  LayoutIcon,
  ChartIcon,
} from "./components/Icons";
import {
  SectionHeader,
  FloatingSnippet,
  DevModeSwitch,
} from "./components/HeaderComponents";
import { SkillGroup, SoftSkillTag } from "./components/SkillTags";

// Need to export SpotlightCard efficiently or import it.
import { SpotlightCard as SpotlightCardComponent } from "./components/SpotlightCard";

const SkillsServices: React.FC = () => {
  const { setLabel } = useCursor();

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      {/* SIDE WIDGETS INJECTION */}
      <DependencyGraphWidget />
      <SystemMonitorWidget />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === NEW HEADER DESIGN: DEV MODE / TOOLBOX === */}
        <div className="mb-32 relative flex flex-col items-center justify-center select-none">
          {/* 1. Wireframe Number Background */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14rem] md:text-[22rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none z-0"
            style={{ WebkitTextStroke: "2px #fff" }}
          >
            03
          </div>

          {/* 2. Toggle Switch "Dev Mode" */}
          <DevModeSwitch />

          {/* 3. Main Title with Code Syntax Styling */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6"
            >
              {/* "CAPABILITIES" */}
              <div className="flex items-baseline">
                <span className="text-4xl md:text-7xl font-thin text-gray-600 mr-2">{`{`}</span>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
                  CAPABILITIES
                </h2>
                <span className="text-4xl md:text-7xl font-thin text-gray-600 ml-2">{`}`}</span>
              </div>

              {/* Connector (Mobile hidden) */}
              <div className="hidden md:block w-12 h-1 bg-white/10 rounded-full" />

              {/* "OFFERINGS" */}
              <div className="flex items-baseline">
                <span className="text-4xl md:text-7xl font-thin text-design-blue mr-2">{`<`}</span>
                <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-design-blue to-cyan-400 tracking-tighter">
                  OFFERINGS
                </h2>
                <span className="text-4xl md:text-7xl font-thin text-design-blue ml-2">{`/>`}</span>
              </div>
            </motion.div>

            <p className="mt-6 text-gray-500 max-w-lg mx-auto font-mono text-sm">
              <span className="text-design-pink">const</span> toolkit = [
              <span className="text-design-green">"Martech"</span>,{" "}
              <span className="text-design-green">"Data"</span>,{" "}
              <span className="text-design-green">"AI"</span>,
              <span className="text-design-green">"Automation"</span>];
            </p>

            {/* Floating Decoration Artifacts */}
            <FloatingSnippet type="css" x="10%" y="-20%" rotate={-6} />
            <FloatingSnippet type="code" x="80%" y="100%" rotate={6} />
          </div>
        </div>
        {/* === END HEADER === */}

        {/* --- MAIN WINDOW CONTAINER --- */}
        <div
          className="border border-white/10 bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row h-auto lg:min-h-[700px] relative z-20"
          onMouseEnter={() => setLabel("View")}
          onMouseLeave={() => setLabel(null)}
        >
          {/* === LEFT PANEL: SKILLS (Inspector) === */}
          <div
            className="w-full lg:w-[350px] bg-[#1A1A1A] border-r border-white/10 flex flex-col z-20"
            onMouseEnter={() => setLabel("Properties")}
          >
            <SectionHeader title="Technical Properties" icon={<CodeIcon />} />
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
              <SkillGroup
                title="CMS & Platforms"
                items={["AEM (Adobe)", "Drupal", "Zalo OA", "ZNS", "Zalo Dev"]}
                color="bg-blue-500"
                setCursorLabel={setLabel}
              />
              <SkillGroup
                title="Marketing Automation"
                items={[
                  "Salesforce MC",
                  "Stripo",
                  "Adobe Campaign",
                  "n8n",
                  "Zapier",
                  "AI Agents",
                ]}
                color="bg-orange-500"
                setCursorLabel={setLabel}
              />
              <SkillGroup
                title="Data & Analytics"
                items={[
                  "Python (Pandas)",
                  "BeautifulSoup",
                  "SEO Technical",
                  "Google Analytics 4",
                  "GTM",
                ]}
                color="bg-purple-500"
                setCursorLabel={setLabel}
              />
              <div className="my-6 border-t border-white/5" />
              <div className="mb-2">
                <h4 className="text-xs font-bold text-gray-500 uppercase mb-3 px-2">
                  Soft Skills Attributes
                </h4>
                <div className="px-2 space-y-2">
                  <SoftSkillTag
                    text="Teamwork & Collaboration"
                    setCursorLabel={setLabel}
                  />
                  <SoftSkillTag
                    text="Problem Solving"
                    setCursorLabel={setLabel}
                  />
                  <SoftSkillTag
                    text="Self-Learning"
                    setCursorLabel={setLabel}
                  />
                  <SoftSkillTag
                    text="Professional English"
                    setCursorLabel={setLabel}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* === RIGHT PANEL: SERVICES (Canvas/Assets) === */}
          <div
            className="flex-1 bg-[#121212] relative overflow-hidden flex flex-col"
            onMouseEnter={() => setLabel("Assets")}
          >
            <SectionHeader title="Available Services" icon={<WorkflowIcon />} />
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="p-6 lg:p-10 relative z-10 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <SpotlightCardComponent
                  title="Marketing Automation"
                  desc="End-to-end setup of SFMC, Adobe Campaign, and automated email flows."
                  icon={<MailIcon />}
                  color="from-orange-500 to-red-500"
                  delay={0.1}
                  onHover={setLabel}
                />
                <SpotlightCardComponent
                  title="n8n Workflows"
                  desc="Custom automation pipelines connecting your apps, AI agents, and databases."
                  icon={<WorkflowIcon />}
                  color="from-design-pink to-purple-500"
                  delay={0.2}
                  onHover={setLabel}
                />
                <SpotlightCardComponent
                  title="Vibe Coding Products"
                  desc="Developing internal tools, mini-apps, and scripts to solve niche problems."
                  icon={<CodeIcon />}
                  color="from-design-green to-emerald-500"
                  delay={0.3}
                  onHover={setLabel}
                />
                <SpotlightCardComponent
                  title="Websites & Landing Pages"
                  desc="High-performance, responsive React/Next.js sites with modern UI/UX."
                  icon={<LayoutIcon />}
                  color="from-design-blue to-cyan-500"
                  delay={0.4}
                  onHover={setLabel}
                />
                <SpotlightCardComponent
                  title="Data Analytics"
                  desc="Building dashboards, tracking setups (GA4/GTM), and RFM segmentation."
                  icon={<ChartIcon />}
                  color="from-yellow-500 to-orange-500"
                  delay={0.5}
                  onHover={setLabel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsServices;
