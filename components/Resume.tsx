import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useCursor } from "./GlobalCursor";
import { AUTHOR_NAME, AUTHOR_ROLE } from "../constants";

// --- ICONS ---

const DownloadIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const TerminalIcon = () => (
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
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

// --- SUB-COMPONENTS ---

// 1. Holographic ID Card (3D Tilt)
const HolographicCard = () => {
  const { setLabel } = useCursor();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const sheenX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setLabel(null);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setLabel("Scan ID")}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-[320px] h-[480px] bg-[#1a1a1a] rounded-[24px] border border-white/10 shadow-2xl flex flex-col overflow-hidden group perspective-1000"
    >
      {/* Holographic Sheen Layer */}
      <motion.div
        style={{
          background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)`,
          backgroundSize: "200% 200%",
          backgroundPosition: `${sheenX.get()}% ${sheenY.get()}%`, // This needs to be reactive, simplified for now
        }}
        className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-50"
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />

      {/* Card Header */}
      <div className="relative z-10 p-6 flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
            <div className="w-4 h-4 bg-design-yellow rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
              Access Level
            </span>
            <span className="text-xs text-white font-mono font-bold">
              Premium
            </span>
          </div>
        </div>
        {/* Sim Card Chip */}
        <div className="w-12 h-9 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-md border border-yellow-600 relative overflow-hidden shadow-inner">
          <div className="absolute inset-0 border border-black/20 rounded-md" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-black/20" />
          <div className="absolute left-1/3 top-0 h-full w-px bg-black/20" />
          <div className="absolute left-2/3 top-0 h-full w-px bg-black/20" />
        </div>
      </div>

      {/* Card Body - Avatar */}
      <div className="relative z-10 px-6 flex-1 flex flex-col justify-center items-center text-center">
        <div className="relative w-32 h-32 rounded-full border-2 border-white/10 p-1 mb-4 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 rounded-full border-2 border-design-blue border-t-transparent animate-spin-slow" />
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLuApkrl-nsuW0F6FzlwAHMhXhvW-SVuD-VJqq_bsQr-BCeTepNNA=s288-c-no"
            alt="Avatar"
            className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-design-green text-black text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-[#1a1a1a]">
            ✓
          </div>
        </div>

        <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-tight">
          {AUTHOR_NAME}
        </h3>
        <p className="text-design-blue font-mono text-xs mb-4">
          Automation Marketing Specialist
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 w-full mt-2">
          <div className="bg-white/5 rounded p-2 border border-white/5">
            <div className="text-[10px] text-gray-500 uppercase">EXP</div>
            <div className="text-sm font-bold text-white">3+ Yrs</div>
          </div>
          <div className="bg-white/5 rounded p-2 border border-white/5">
            <div className="text-[10px] text-gray-500 uppercase">Projects</div>
            <div className="text-sm font-bold text-white">15+</div>
          </div>
          <div className="bg-white/5 rounded p-2 border border-white/5">
            <div className="text-[10px] text-gray-500 uppercase">Status</div>
            <div className="text-sm font-bold text-design-green">Open</div>
          </div>
        </div>
      </div>

      {/* Card Footer - Barcode */}
      <div className="relative z-10 p-6 pt-0 mt-auto">
        <div className="h-12 bg-white p-1 rounded-sm flex items-center justify-center overflow-hidden">
          {/* Fake Barcode */}
          <div className="flex gap-0.5 w-full h-full justify-center opacity-80">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="bg-black h-full"
                style={{ width: Math.random() * 4 + 1 }}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-2 text-[8px] text-gray-500 font-mono">
          <span>ID: 884-219-X99</span>
          <span>VALID THRU: 2030</span>
        </div>
      </div>
    </motion.div>
  );
};

// 2. Terminal / Console Panel
const TerminalBlock = () => {
  return (
    <div className="w-full max-w-md bg-[#0D1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono text-xs h-[320px]">
      {/* Terminal Header */}
      <div className="bg-[#161B22] px-4 py-2 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2 text-gray-400">
          <TerminalIcon />
          <span>user@portfolio:~</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 flex-1 text-gray-300 space-y-2 overflow-hidden">
        <div className="flex">
          <span className="text-design-green mr-2">➜</span>
          <span className="text-blue-400">~</span>
          <span className="ml-2">npm install</span>
          <span className="text-white ml-2">hoang-quy-cv</span>
        </div>

        <div className="opacity-70">
          <p className="text-gray-500 text-[10px] mb-1">
            ... resolving dependencies
          </p>
          <p className="text-gray-500 text-[10px] mb-1">
            ... fetching career_data.json
          </p>
          <p className="text-gray-500 text-[10px] mb-3">
            ... verifying skills integrity
          </p>
        </div>

        <div className="border-l-2 border-design-blue pl-3 py-1 text-gray-400">
          <p>
            Name: <span className="text-white">Hoang Quy</span>
          </p>
          <p>
            Role:{" "}
            <span className="text-design-yellow">
              Automation Marketing Specialist
            </span>
          </p>
          <p>
            Stack:{" "}
            <span className="text-design-purple">
              [Martech, Data, AI, Automation]
            </span>
          </p>
          <p>
            Location: <span className="text-white">Vietnam</span>
          </p>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <span className="text-design-green">✔</span>
          <span className="text-white font-bold">
            Package installed successfully.
          </span>
        </div>

        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="flex mt-2"
        >
          <span className="text-design-green mr-2">➜</span>
          <span className="text-blue-400">~</span>
          <div className="w-2 h-4 bg-gray-500 ml-2" />
        </motion.div>
      </div>
    </div>
  );
};

// 3. Deploy/Download Button
const DeployButton = () => {
  const { setLabel } = useCursor();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleDownload = () => {
    if (status !== "idle") return;
    setStatus("loading");
    // Simulate download delay
    setTimeout(() => {
      setStatus("success");

      // Open the Google Drive link in a new tab
      window.open(
        "https://drive.google.com/file/d/1dH4px7ij7yHx67cqWLxwbRtG8qe4ri-5/view?usp=sharing",
        "_blank"
      );

      // Reset after a while
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      onMouseEnter={() => setLabel(status === "idle" ? "Download" : null)}
      onMouseLeave={() => setLabel(null)}
      className={`
                relative h-14 w-64 rounded-lg font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 group
                ${
                  status === "idle"
                    ? "bg-white text-black hover:bg-gray-200"
                    : ""
                }
                ${
                  status === "loading" ? "bg-[#333] text-white cursor-wait" : ""
                }
                ${status === "success" ? "bg-design-green text-black" : ""}
            `}
    >
      <div className="relative z-10 flex items-center justify-center gap-3">
        {status === "idle" && (
          <>
            <span className="uppercase">Deploy to PDF</span>
            <DownloadIcon />
          </>
        )}

        {status === "loading" && (
          <>
            <span className="font-mono">BUILDING...</span>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </>
        )}

        {status === "success" && (
          <>
            <span>SUCCESS</span>
            <CheckIcon />
          </>
        )}
      </div>

      {/* Loading Progress Bar */}
      {status === "loading" && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-design-blue z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      )}

      {/* Hover Glow (Idle only) */}
      {status === "idle" && (
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
      )}
    </motion.button>
  );
};

const Resume: React.FC = () => {
  return (
    <section
      id="resume"
      className="py-32 px-4 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* === NEW HEADER DESIGN: CAREER LAUNCHPAD === */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* 1. Wireframe Number Background */}
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none z-0 select-none"
          style={{ WebkitTextStroke: "2px #fff" }}
        >
          05
        </div>
        {/* Background Glows */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-design-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-design-blue/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Text */}
        <div className="text-center mb-24 relative select-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-design-green/30 bg-design-green/10 text-design-green text-[10px] font-bold px-3 py-1 rounded-full mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-design-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-design-green"></span>
            </span>
            AVAILABLE FOR HIRE
          </motion.div>

          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-2">
            CAREER
          </h2>
          <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white tracking-tighter">
            PROFILE
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          {/* Left: The Holographic Card */}
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-design-blue/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <HolographicCard />
          </div>

          {/* Right: The Deployment Station */}
          <div className="flex flex-col gap-8 items-center lg:items-start">
            <div className="relative">
              <TerminalBlock />

              {/* Decorative connection line */}
              <svg className="absolute -left-12 top-1/2 w-12 h-px hidden lg:block overflow-visible">
                <motion.line
                  x1="0"
                  y1="0"
                  x2="48"
                  y2="0"
                  stroke="#333"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
                <circle cx="0" cy="0" r="3" fill="#333" />
              </svg>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex items-center gap-4 text-gray-500 text-xs font-mono">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-600 rounded-full" />
                  v2.5.0-stable
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-600 rounded-full" />
                  4.2 MB
                </span>
              </div>
              <DeployButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
