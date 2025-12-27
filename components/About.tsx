import React from "react";
import { motion } from "framer-motion";
import { AUTHOR_NAME } from "../constants";
import { useCursor } from "./GlobalCursor";

// --- ICONS & ASSETS ---

const CursorIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={`drop-shadow-md ${className}`}
  >
    <path
      d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
      fill="currentColor"
      stroke="white"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const SelectionHandle = ({ className }: { className?: string }) => (
  <div
    className={`absolute w-2.5 h-2.5 bg-white border border-design-blue z-20 ${className}`}
  />
);

// --- SIDE WIDGETS (DESKTOP ONLY) ---

const LocalVariablesWidget = () => (
  <motion.div
    initial={{ x: -100, opacity: 0 }} // Drawer Slide Start
    whileInView={{ x: 0, opacity: 1 }} // Drawer Slide End
    transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
    className="absolute left-4 top-1/4 w-64 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl hidden 2xl:flex flex-col overflow-hidden z-20"
  >
    <div className="bg-[#2C2C2E] px-3 py-2 border-b border-white/5 flex justify-between items-center">
      <span className="text-[10px] font-bold text-gray-400 uppercase">
        Local Variables
      </span>
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
      </div>
    </div>
    <div className="p-2 space-y-1">
      {[
        {
          name: "Exp.Level",
          value: "Mid-Senior",
          type: "String",
          color: "text-design-green",
        },
        {
          name: "Coffee",
          value: "100%",
          type: "Float",
          color: "text-design-orange",
        },
        {
          name: "Mode",
          value: "Dark",
          type: "Boolean",
          color: "text-design-purple",
        },
        {
          name: "Location",
          value: "VN",
          type: "String",
          color: "text-blue-400",
        },
      ].map((v, i) => (
        <div
          key={i}
          className="flex justify-between items-center px-2 py-1.5 hover:bg-white/5 rounded group cursor-default"
        >
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 font-mono border border-white/10 px-1 rounded">
              #
            </span>
            <span className="text-xs text-gray-300 group-hover:text-white transition-colors">
              {v.name}
            </span>
          </div>
          <span className={`text-xs font-mono ${v.color}`}>{v.value}</span>
        </div>
      ))}
    </div>
    <div className="bg-[#2C2C2E]/50 px-3 py-1.5 border-t border-white/5 flex justify-between items-center text-[9px] text-gray-500">
      <span>4 variables</span>
      <span>+ Create variable</span>
    </div>
  </motion.div>
);

const VersionHistoryWidget = () => (
  <motion.div
    initial={{ x: 100, opacity: 0 }} // Drawer Slide Start (Right side)
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.4 }}
    className="absolute right-4 top-1/3 w-56 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl hidden 2xl:flex flex-col overflow-hidden z-20"
  >
    <div className="bg-[#2C2C2E] px-3 py-2 border-b border-white/5 flex justify-between items-center">
      <span className="text-[10px] font-bold text-gray-400 uppercase">
        Version History
      </span>
      <span className="text-[10px] text-design-blue cursor-pointer">
        View all
      </span>
    </div>
    <div className="p-3 relative">
      <div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/10" />
      {[
        { time: "Just now", action: "Portfolio Updated", author: "You" },
        { time: "2h ago", action: "Refined UX Flows", author: "You" },
        { time: "Yesterday", action: "Integrated n8n", author: "You" },
      ].map((item, i) => (
        <div
          key={i}
          className="relative flex items-start gap-3 mb-4 last:mb-0 group"
        >
          <div className="w-2.5 h-2.5 mt-1 rounded-full bg-design-blue border-2 border-[#1e1e1e] relative z-10" />
          <div className="flex flex-col">
            <span className="text-xs text-white font-medium group-hover:text-design-blue transition-colors">
              {item.action}
            </span>
            <span className="text-[10px] text-gray-500">
              {item.time} by {item.author}
            </span>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

// --- SUB-COMPONENTS ---

interface UIPanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// A container that looks like a UI Panel / Floating Window
const UIPanel: React.FC<UIPanelProps> = ({
  children,
  className,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-white/10 transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

// Skill Bar Component
const SkillBar = ({
  label,
  level,
  color,
}: {
  label: string;
  level: string;
  color: string;
}) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-bold text-gray-300">{label}</span>
      <span className="text-xs font-mono text-gray-500">{level}</span>
    </div>
    <div className="w-full bg-black/50 h-3 rounded-full overflow-hidden border border-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: level }}
        transition={{ duration: 1, ease: "circOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  </div>
);

// Software/Tool Icon Box
const ToolIcon = ({
  name,
  bg,
  txt,
}: {
  name: string;
  bg: string;
  txt: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg cursor-pointer relative group"
    style={{ backgroundColor: bg, color: txt }}
  >
    {name}
    {/* Tooltip */}
    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-black text-white px-2 py-1 rounded">
      {name}
    </span>
  </motion.div>
);

const About: React.FC = () => {
  const { setLabel } = useCursor();

  const scrollToResume = () => {
    // Smoothly scroll to the resume section
    document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
    setLabel(null);
  };

  return (
    <section id="about" className="py-32 px-4 relative">
      {/* SIDE WIDGETS INJECTION */}
      <LocalVariablesWidget />
      <VersionHistoryWidget />

      <div className="max-w-7xl mx-auto">
        {/* === NEW HEADER DESIGN: FIGMA / DESIGN SYSTEM STYLE === */}
        <div className="mb-32 relative flex justify-center items-center select-none">
          {/* 1. Wireframe Background Number */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none"
            style={{ WebkitTextStroke: "2px #fff" }}
          >
            01
          </div>

          <div className="relative z-10 text-center">
            {/* Top Script Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 0.6 }}
              className="absolute -top-8 -left-4 md:-top-12 md:-left-24 z-20"
            >
              <div className="bg-design-yellow text-black font-script text-xl md:text-2xl px-4 py-1 rounded-sm shadow-[4px_4px_0px_rgba(0,0,0,0.5)] transform -rotate-3 border-2 border-black/10">
                Quy is...?
              </div>
              {/* Hand-drawn Arrow SVG */}
              <svg
                className="absolute top-full left-1/2 w-8 h-8 text-design-yellow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 0c0 12 2 12 8 18" />
                <path d="M16 14l-4 4-4-4" />
              </svg>
            </motion.div>

            {/* Main Title Group */}
            <div className="flex flex-col items-center">
              {/* "ABOUT" */}
              <div className="relative group">
                {/* Ruler Visualization */}
                <div className="absolute -top-6 left-0 w-full h-4 border-b border-white/20 flex justify-between items-end px-1 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="h-2 w-px bg-white/20"></div>
                  <span className="text-[9px] text-gray-500 font-mono mb-1">
                    auto-width
                  </span>
                  <div className="h-2 w-px bg-white/20"></div>
                </div>

                <h2
                  className="text-[15vw] md:text-[9rem] font-black text-white leading-[0.85] tracking-tighter cursor-default"
                  onMouseEnter={() => setLabel("Text")}
                  onMouseLeave={() => setLabel(null)}
                >
                  ABOUT
                </h2>
              </div>

              {/* "ME" - Component Style */}
              <motion.div
                className="relative mt-2 md:mt-4 ml-[10vw] md:ml-40"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setLabel("Inspect")}
                onMouseLeave={() => setLabel(null)}
              >
                {/* The "Component" Frame */}
                <div className="relative border-[2px] border-dashed border-design-purple px-8 md:px-14 py-0 rounded-lg bg-design-purple/5 backdrop-blur-sm">
                  {/* Component Label (Diamond) */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-design-purple text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg border border-white/20">
                    <div className="w-2 h-2 border border-white rotate-45 bg-design-purple" />
                    <span className="uppercase tracking-wider">Master</span>
                  </div>

                  <h2 className="text-[15vw] md:text-[9rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-design-purple to-purple-300 leading-[0.85] tracking-tighter">
                    ME
                  </h2>

                  {/* Handles */}
                  <SelectionHandle className="-top-1.5 -left-1.5 border-design-purple bg-white" />
                  <SelectionHandle className="-top-1.5 -right-1.5 border-design-purple bg-white" />
                  <SelectionHandle className="-bottom-1.5 -left-1.5 border-design-purple bg-white" />
                  <SelectionHandle className="-bottom-1.5 -right-1.5 border-design-purple bg-white" />
                </div>

                {/* Property Inspector (Right Side) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-1/2 -right-24 md:-right-36 -translate-y-1/2 bg-[#1e1e1e] border border-white/10 p-2.5 rounded-lg shadow-2xl hidden md:flex flex-col gap-2 w-28"
                >
                  <div className="flex justify-between items-center text-[9px] text-gray-500 border-b border-white/5 pb-1">
                    <span className="font-bold">PROPERTIES</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[9px]">
                      <span className="text-gray-500">State</span>
                      <span className="text-design-green font-mono bg-design-green/10 px-1 rounded">
                        Active
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[9px]">
                      <span className="text-gray-500">Fill</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-design-purple to-purple-300" />
                        <span className="text-gray-300">100%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[9px]">
                      <span className="text-gray-500">Effects</span>
                      <span className="text-gray-300">Glow</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* === MAIN GRID LAYOUT === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* 1. INTRO TEXT PANEL (Span 6) */}
          <UIPanel className="lg:col-span-7 flex flex-col justify-center bg-[#151515]">
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-xs text-gray-500 font-mono ml-4">
                bio.txt
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              As an emerging{" "}
              <span className="text-design-yellow font-bold">
                Automation Marketing Specialist
              </span>
              , I bring a dynamic blend of{" "}
              <span className="text-design-yellow">
                analytical thinking and strategic creativity
              </span>{" "}
              to campaign deployment and optimization.
            </p>
            <p className="mt-6 text-gray-400">
              I am a Technical Automation Marketing Specialist from a Big4
              Global Agency, specializing in high-impact CRM and Data-Driven
              Marketing. My core strength is the end-to-end execution of
              multi-channel CRM campaigns via SFMC, Zalo OA, Email, etc.,
              designing automated customer journeys to optimize conversion and
              retention. <br></br>
              <br></br>
              My expertise is anchored in data integrity through GTM/GA4 web
              event tracking and in-depth analysis using Python (Pandas, NumPy)
              and SQL. I consistently apply AI & Automation solutions to enhance
              reporting and CRM efficiency , complemented by experience managing
              complex D2C ecosystems (Unilever, AEM Migration).
            </p>
          </UIPanel>

          {/* 2. PROFILE PICTURE / AVATAR (Span 5) */}
          <div className="lg:col-span-5 relative h-full min-h-[300px]">
            {/* Abstract Shapes behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-design-purple/20 to-design-blue/20 rounded-2xl blur-xl" />

            <motion.div
              whileHover={{ rotate: 2, scale: 1.02 }}
              className="relative h-full w-full bg-[#1A1A1A] border border-design-purple/30 rounded-2xl p-2 flex items-center justify-center overflow-hidden"
            >
              {/* Simulated Crop Tool UI */}
              <div className="absolute inset-4 border border-white/20 z-10 grid grid-cols-3 grid-rows-3 pointer-events-none">
                <div className="border-r border-white/10" />
                <div className="border-r border-white/10" />
                <div className="border-t border-white/10 col-span-3 row-start-2" />
                <div className="border-t border-white/10 col-span-3 row-start-3" />
              </div>

              {/* Image Placeholder */}
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocLuApkrl-nsuW0F6FzlwAHMhXhvW-SVuD-VJqq_bsQr-BCeTepNNA=s288-c-no"
                alt="Avatar"
                className="w-full h-full object-cover rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-500"
              />

              <div className="absolute bottom-6 right-6 z-20 bg-design-purple text-white px-3 py-1 rounded text-sm font-bold shadow-lg">
                Target: User Joy
              </div>
            </motion.div>
          </div>

          {/* 3. EDUCATION & EXPERIENCE (Span 4) */}
          <UIPanel className="lg:col-span-4" delay={0.2}>
            <h3 className="text-2xl font-display font-bold text-design-purple mb-6">
              EXPERIENCE
            </h3>

            <div className="space-y-6">
              <div className="relative pl-6 border-l border-design-purple/30">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-design-purple rounded-full border-4 border-[#1A1A1A]" />
                <span className="text-xs text-design-purple font-mono mb-1 block">
                  Oct 2024 - Present
                </span>
                <h4 className="text-white font-bold">
                  Publicis Groupe Viet Nam
                </h4>
                <p className="text-sm text-gray-500">
                  Technical (CMS & CRM) Operator Specialist
                </p>
                <p className="text-xs text-gray-600">Ho Chi Minh City</p>
              </div>

              <div className="relative pl-6 border-l border-design-purple/30">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-design-purple rounded-full border-4 border-[#1A1A1A]" />
                <span className="text-xs text-design-purple font-mono mb-1 block">
                  Mar 2023 - May 2024
                </span>
                <h4 className="text-white font-bold">Prime Commerce Asia</h4>
                <p className="text-sm text-gray-500">
                  Website Operation Executive
                </p>
                <p className="text-xs text-gray-600">Ho Chi Minh City</p>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-design-green mt-10 mb-6">
              EDUCATION
            </h3>
            <div className="relative pl-6 border-l border-design-green/30">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-design-green rounded-full border-4 border-[#1A1A1A]" />
              <span className="text-xs text-design-green font-mono mb-1 block">
                Oct 2020 - Apr 2024 | HCMC
              </span>
              <h4 className="text-white font-bold">
                University of Finance & Marketing
              </h4>
              <p className="text-sm text-gray-500">
                Business Administration (Project Management)
              </p>
            </div>
          </UIPanel>

          {/* 4. SKILLS & LANGUAGES (Span 4) */}
          <UIPanel className="lg:col-span-4" delay={0.3}>
            <h3 className="text-2xl font-display font-bold text-design-orange mb-6">
              SKILLS
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "CMS & CRM",
                "Digital Platform",
                "Vibe Coding",
                "Marketing Automation",
                "Data & Analytics",
                "AI & Automation",
                "Problem Solving",
                "Self Learning",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-[#2A2A2A] text-gray-300 text-xs font-medium rounded-lg border border-white/5 hover:border-design-orange hover:text-design-orange transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-display font-bold text-design-blue mb-6">
              LANGUAGES
            </h3>
            <SkillBar label="Vietnamese" level="100%" color="#3b82f6" />
            <SkillBar label="English" level="85%" color="#60a5fa" />

            {/* Simple QR Code Placeholder */}
            <div
              className="mt-8 p-4 bg-white rounded-xl flex items-center gap-4 group/resume cursor-pointer hover:bg-design-blue transition-colors"
              onClick={scrollToResume}
              onMouseEnter={() => setLabel("Resume")}
              onMouseLeave={() => setLabel(null)}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0f172a] text-white shadow-md border border-white/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-6 h-6"
                >
                  <path d="M12 4v14m0 0l-5-5m5 5l5-5" />
                </svg>
              </div>{" "}
              {/* QR pattern simulation */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-12 h-12 text-black"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h6v6h-6zM7 7h.01M17 7h.01M7 17h.01M17 17h.01" />
              </svg>
              <div className="flex flex-col">
                <span className="text-black font-bold text-sm group-hover/resume:text-white transition-colors">
                  GO TO RESUME
                </span>
                <span className="text-gray-500 text-xs group-hover/resume:text-white/80 transition-colors">
                  to get Detail
                </span>
              </div>
            </div>
          </UIPanel>

          {/* 5. TOOLS (Span 4) */}
          <UIPanel
            className="lg:col-span-4 flex flex-col items-center justify-center bg-[#181818]"
            delay={0.4}
          >
            <h3 className="text-2xl font-display font-bold text-design-pink mb-8 w-full text-center">
              TOOLS
            </h3>

            {/* Figma Bubble */}
            <div className="relative mb-8">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-design-pink text-white text-xs px-3 py-1 rounded-full animate-bounce">
                My best buddy, Figma!
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-design-pink rotate-45" />
              </div>
              {/* Figma Icon with selection box */}
              <div className="relative p-2 border border-design-pink/50 rounded-xl">
                <SelectionHandle className="-top-1 -left-1 bg-design-pink border-none w-2 h-2" />
                <SelectionHandle className="-top-1 -right-1 bg-design-pink border-none w-2 h-2" />
                <SelectionHandle className="-bottom-1 -left-1 bg-design-pink border-none w-2 h-2" />
                <SelectionHandle className="-bottom-1 -right-1 bg-design-pink border-none w-2 h-2" />
                <ToolIcon name="Fi" bg="#1e1e1e" txt="#0ACF83" />
              </div>
            </div>

            {/* Other Tools Grid */}
            <div className="grid grid-cols-3 gap-4">
              <ToolIcon name="Ai" bg="#330000" txt="#FF9A00" />
              <ToolIcon name="Ps" bg="#001E36" txt="#31A8FF" />
              <ToolIcon name="Ae" bg="#00005B" txt="#D291FF" />
              <ToolIcon name="Xd" bg="#2C001E" txt="#FF2BC2" />
              <ToolIcon name="Id" bg="#2C001E" txt="#FF3366" />
              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gray-800 text-gray-500 text-2xl font-bold">
                +
              </div>
            </div>

            <div className="mt-8 text-center">
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                Digital Development Tools
              </span>
            </div>
          </UIPanel>
        </div>
      </div>
    </section>
  );
};

export default About;
