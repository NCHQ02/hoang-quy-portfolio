import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ICONS ---

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

const HomeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
    <defs>
      <linearGradient
        id="homeGradient"
        x1="24"
        y1="0"
        x2="24"
        y2="48"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#60A5FA" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="10" fill="url(#homeGradient)" />
    <path
      d="M24 11L12 21V37H20V29H28V37H36V21L24 11Z"
      fill="white"
      stroke="white"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const AboutIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-full h-full drop-shadow-lg transition-transform duration-300"
  >
    <path
      d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
      fill="#F5F5F7"
    />
    <path d="M24 4C12.9543 4 4 12.9543 4 24H24V4Z" fill="#007AFF" />
    <path
      d="M16 16C16 17.1046 15.1046 18 14 18C12.8954 18 12 17.1046 12 16C12 14.8954 12.8954 14 14 14C15.1046 14 16 14.8954 16 16Z"
      fill="#1D1D1F"
    />
    <path
      d="M36 16C36 17.1046 35.1046 18 34 18C32.8954 18 32 17.1046 32 16C32 14.8954 32.8954 14 34 14C35.1046 14 36 14.8954 36 16Z"
      fill="#1D1D1F"
    />
    <path
      d="M14 28C14 28 17 34 24 34C31 34 34 28 34 28"
      stroke="#1D1D1F"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const ProjectsIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-full h-full drop-shadow-lg bg-white rounded-[10px] overflow-hidden"
  >
    <rect width="48" height="48" fill="#F5F5F7" />
    <rect x="8" y="8" width="8" height="8" rx="2" fill="#FF5F56" />
    <rect x="20" y="8" width="8" height="8" rx="2" fill="#FFBD2E" />
    <rect x="32" y="8" width="8" height="8" rx="2" fill="#27C93F" />
    <rect x="8" y="20" width="8" height="8" rx="2" fill="#8B5CF6" />
    <rect x="20" y="20" width="8" height="8" rx="2" fill="#6B7280" />
    <rect x="32" y="20" width="8" height="8" rx="2" fill="#EC4899" />
    <rect x="8" y="32" width="8" height="8" rx="2" fill="#3B82F6" />
    <rect x="20" y="32" width="8" height="8" rx="2" fill="#0EA5E9" />
    <rect x="32" y="32" width="8" height="8" rx="2" fill="#10B981" />
  </svg>
);

const SkillsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
    <rect width="48" height="48" rx="10" fill="#2C2C2E" />
    <circle
      cx="24"
      cy="24"
      r="16"
      stroke="#A1A1AA"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <path
      d="M24 14V34"
      stroke="#3B82F6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M14 24H34"
      stroke="#F472B6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M17 17L31 31"
      stroke="#FACC15"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M31 17L17 31"
      stroke="#4ADE80"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const TestimonialsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
    <rect width="48" height="48" rx="10" fill="#FF2D55" />
    <path
      d="M12 24C12 24 14 18 24 18C34 18 36 24 36 24"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M16 32C16 32 20 36 24 36C28 36 32 32 32 32"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="16" cy="22" r="2" fill="white" />
    <circle cx="32" cy="22" r="2" fill="white" />
    <path
      d="M38 10L42 14M10 10L6 14"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const ResumeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
    <rect x="6" y="4" width="36" height="40" rx="4" fill="#FFD60A" />
    <rect
      x="14"
      y="12"
      width="20"
      height="4"
      rx="2"
      fill="white"
      fillOpacity="0.8"
    />
    <rect
      x="14"
      y="20"
      width="20"
      height="4"
      rx="2"
      fill="white"
      fillOpacity="0.8"
    />
    <rect
      x="14"
      y="28"
      width="12"
      height="4"
      rx="2"
      fill="white"
      fillOpacity="0.8"
    />
    <path d="M30 32L38 40" stroke="#B45309" strokeWidth="2" />
  </svg>
);

const ContactIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
    <rect width="48" height="48" rx="10" fill="#30D158" />
    <path
      d="M10 16L24 28L38 16"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="10"
      y="12"
      width="28"
      height="24"
      rx="4"
      stroke="white"
      strokeWidth="4"
    />
  </svg>
);

// --- TYPES ---
interface DockItemData {
  id: string;
  label: string;
  shortLabel?: string; // For mobile
  icon: React.ReactNode;
}

const ITEMS: DockItemData[] = [
  { id: "hero", label: "Home", shortLabel: "Home", icon: <HomeIcon /> },
  { id: "about", label: "About Me", shortLabel: "About", icon: <AboutIcon /> },
  {
    id: "projects",
    label: "Projects",
    shortLabel: "Work",
    icon: <ProjectsIcon />,
  },
  { id: "skills", label: "Skills", shortLabel: "Skills", icon: <SkillsIcon /> },
  {
    id: "testimonials",
    label: "Testimonials",
    shortLabel: "Social",
    icon: <TestimonialsIcon />,
  },
  { id: "resume", label: "Resume", shortLabel: "CV", icon: <ResumeIcon /> },
  {
    id: "contact",
    label: "Contact",
    shortLabel: "Contact",
    icon: <ContactIcon />,
  },
];

// --- COMPONENTS ---

const Dock = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Logic to detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = "hero";

      for (const item of ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = item.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] flex justify-center pointer-events-none pb-safe-area-bottom">
      {/* Container with safe area padding for iOS home indicator */}
      <div className="relative pointer-events-auto w-full max-w-2xl px-2 md:px-4 pb-2 md:pb-6">
        {/* The Dock Itself */}
        <div
          className={`relative flex items-end justify-between md:justify-center gap-1 md:gap-3 px-2 py-2 md:px-3 md:py-3 bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 ${
            isMobile
              ? "rounded-t-2xl border-b-0 pb-4"
              : "rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]"
          } mx-0 md:mx-0`}
        >
          {ITEMS.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <motion.div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group flex flex-col items-center flex-1 md:flex-none"
                whileHover={{ scale: 1.15, translateY: -10 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  translateY: isActive && !isMobile ? -5 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Desktop Tooltip */}
                <div
                  className={`hidden md:block absolute -top-10 px-2 py-1 bg-[#2A2A2A] text-white text-[10px] font-bold rounded shadow-lg mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 ${
                    isActive ? "opacity-100" : ""
                  }`}
                >
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2A2A2A] rotate-45 border-r border-b border-white/10" />
                </div>

                {/* Icon Container - Responsive Size */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl cursor-pointer transition-opacity duration-300 flex items-center justify-center ${
                    isActive
                      ? "opacity-100 ring-2 ring-white/20 bg-white/10"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Active Indicator & Cursor (Desktop Only) */}
                {isActive && !isMobile && (
                  <>
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-2 w-1 h-1 bg-white/80 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />

                    <motion.div
                      layoutId="dockCursor"
                      className="absolute -bottom-5 left-1/2 -translate-x-1/2 ml-3 z-50 pointer-events-none"
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                      }}
                    >
                      <div className="relative">
                        <CursorIcon className="text-design-yellow w-6 h-6 drop-shadow-xl" />
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, x: -5 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          className="absolute left-4 top-3 bg-design-yellow text-black text-[10px] font-black px-1.5 py-0.5 rounded-sm whitespace-nowrap border border-black/10 shadow-sm"
                        >
                          {item.label}
                        </motion.div>
                      </div>
                    </motion.div>
                  </>
                )}

                {/* Active Indicator (Mobile Only) */}
                {isActive && isMobile && (
                  <motion.div
                    layoutId="activeDotMobile"
                    className="absolute -bottom-1 w-1 h-1 bg-design-green rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                  />
                )}
              </motion.div>
            );
          })}

          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden md:block w-[1px] h-8 bg-white/10 mx-1 self-center" />

          {/* Trash/Reset (Hidden on Mobile to save space) */}
          <motion.div
            className="hidden md:flex w-12 h-12 rounded-xl cursor-pointer opacity-70 hover:opacity-100 transition-opacity items-center justify-center group"
            whileHover={{ scale: 1.1, translateY: -5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="absolute -top-10 px-2 py-1 bg-[#2A2A2A] text-white text-[10px] font-bold rounded shadow-lg mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
              Top
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2A2A2A] rotate-45 border-r border-b border-white/10" />
            </div>
            <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
              <path
                d="M10 12L12 40C12 42.2091 13.7909 44 16 44H32C34.2091 44 36 42.2091 36 40L38 12"
                fill="#4B5563"
                stroke="#9CA3AF"
                strokeWidth="2"
              />
              <path
                d="M10 12H38"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 12V8C18 6.89543 18.8954 6 20 6H28C29.1046 6 30 6.89543 30 8V12"
                stroke="#9CA3AF"
                strokeWidth="2"
              />
              <path d="M12 12L14 36H34L36 12" fill="white" fillOpacity="0.1" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dock;
