import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Utils and Components
import PhysicsBox from "./components/PhysicsBox";
import GitCommitCard from "./widgets/GitCommitCard";
import IconGridCard from "./widgets/IconGridCard";
import MobilePreviewCard from "./widgets/MobilePreviewCard";
import PaletteCard from "./widgets/PaletteCard";
import CodeCard from "./widgets/CodeCard";
import TypographyCard from "./widgets/TypographyCard";
import LayersCard from "./widgets/LayersCard";
import PropertiesPanel from "./widgets/PropertiesPanel";
import ButtonVariantsCard from "./widgets/ButtonVariantsCard";

const FlowConnectorContent: React.FC<{
  windowSize: [number, number];
  isMobile: boolean;
}> = ({ windowSize, isMobile }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const w = windowSize[0];
  const h = windowSize[1];

  // CLEANED UP INITIAL POSITIONS (Balanced Layout)
  const positions = [
    { x: w * 0.15, y: h * 0.15, r: -5 }, // Git (Top Left)
    { x: w * 0.35, y: h * 0.25, r: 5 }, // Icons (Top Mid-Left)
    { x: w * 0.15, y: h * 0.5, r: -2 }, // Palette (Mid Left)
    { x: w * 0.5, y: h * 0.45, r: 0 }, // Code (Center)
    { x: w * 0.85, y: h * 0.5, r: 8 }, // Mobile (Mid Right)
    { x: w * 0.25, y: h * 0.75, r: 3 }, // Typography (Bottom Left)
    { x: w * 0.8, y: h * 0.15, r: -4 }, // Layers (Top Right)
    { x: w * 0.75, y: h * 0.75, r: 2 }, // Props (Bottom Right)
    { x: w * 0.5, y: h * 0.8, r: -6 }, // Buttons (Bottom Center)
    { x: w * 0.65, y: h * 0.3, r: 0 }, // Comment (Floating Right)
  ];

  // Mobile simplified positions with extra Palette widget
  const mobilePositions = [
    { x: w * 0.1, y: h * 0.1, r: -5 }, // Git (Top Left)
    { x: w * 0.5, y: h * 0.3, r: 5 }, // Mobile (Center Right)
    { x: w * 0.2, y: h * 0.5, r: -2 }, // Code (Mid Left)
    { x: w * 0.1, y: h * 0.75, r: 4 }, // Palette (Bottom Left) - New
  ];

  return (
    // Reduced height from 120vh to 100vh for tighter packing
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-visible pointer-events-none -mt-[15vh] z-30"
      style={{ position: "relative" }}
    >
      {/* 1. Background Connection Lines */}
      <svg className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none opacity-30">
        <defs>
          <linearGradient id="mainLineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="20%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="80%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={`M ${w * 0.5} 0 L ${w * 0.5} ${h}`}
          fill="none"
          stroke="url(#mainLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="8 8"
          style={{ pathLength, opacity }}
        />
        {/* Simplified Side Branches - Hide on mobile for cleaner look */}
        {!isMobile && (
          <>
            <motion.path
              d={`M ${w * 0.5} ${h * 0.2} C ${w * 0.2} ${h * 0.2}, ${w * 0.2} ${
                h * 0.4
              }, ${w * 0.2} ${h * 0.6}`}
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.1"
              strokeWidth="1"
              style={{ pathLength, opacity }}
            />
            <motion.path
              d={`M ${w * 0.5} ${h * 0.3} C ${w * 0.8} ${h * 0.3}, ${w * 0.8} ${
                h * 0.5
              }, ${w * 0.8} ${h * 0.7}`}
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.1"
              strokeWidth="1"
              style={{ pathLength, opacity }}
            />
          </>
        )}
      </svg>

      {/* 2. Interactive Physics Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        {isMobile ? (
          // Mobile View: Reduced widgets, static layout
          <>
            <PhysicsBox
              initialX={mobilePositions[0].x}
              initialY={mobilePositions[0].y}
              rotation={mobilePositions[0].r}
              isMobile={true}
            >
              <GitCommitCard />
            </PhysicsBox>
            <PhysicsBox
              initialX={mobilePositions[1].x}
              initialY={mobilePositions[1].y}
              rotation={mobilePositions[1].r}
              isMobile={true}
            >
              <MobilePreviewCard />
            </PhysicsBox>
            <PhysicsBox
              initialX={mobilePositions[2].x}
              initialY={mobilePositions[2].y}
              rotation={mobilePositions[2].r}
              isMobile={true}
            >
              <CodeCard />
            </PhysicsBox>
            <PhysicsBox
              initialX={mobilePositions[3].x}
              initialY={mobilePositions[3].y}
              rotation={mobilePositions[3].r}
              isMobile={true}
            >
              <PaletteCard />
            </PhysicsBox>
          </>
        ) : (
          // Desktop View: Full physics experience
          <>
            <PhysicsBox
              initialX={positions[0].x}
              initialY={positions[0].y}
              rotation={positions[0].r}
            >
              <GitCommitCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[1].x}
              initialY={positions[1].y}
              rotation={positions[1].r}
            >
              <IconGridCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[2].x}
              initialY={positions[2].y}
              rotation={positions[2].r}
            >
              <PaletteCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[3].x}
              initialY={positions[3].y}
              rotation={positions[3].r}
            >
              <CodeCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[4].x}
              initialY={positions[4].y}
              rotation={positions[4].r}
            >
              <MobilePreviewCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[5].x}
              initialY={positions[5].y}
              rotation={positions[5].r}
            >
              <TypographyCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[6].x}
              initialY={positions[6].y}
              rotation={positions[6].r}
            >
              <LayersCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[7].x}
              initialY={positions[7].y}
              rotation={positions[7].r}
            >
              <PropertiesPanel />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[8].x}
              initialY={positions[8].y}
              rotation={positions[8].r}
            >
              <ButtonVariantsCard />
            </PhysicsBox>

            {/* Decorative Floating Comment */}
            <PhysicsBox
              initialX={positions[9].x}
              initialY={positions[9].y}
              rotation={positions[9].r}
            >
              <div className="bg-design-blue text-white px-3 py-2 rounded-xl rounded-tl-none shadow-lg max-w-[150px] pointer-events-none">
                <p className="text-[11px] font-bold leading-tight">
                  Throw me! 🏐
                </p>
              </div>
            </PhysicsBox>

            {/* Instructions Hint */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 text-gray-600 text-xs font-mono opacity-50 pointer-events-none">
              ( Try grabbing & throwing items )
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const FlowConnector: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState<[number, number]>([1000, 800]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only set mounted after strict mode double effect has passed if any,
    // essentially just waiting for client side mount.
    setMounted(true);
    const updateSize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", updateSize);
    updateSize(); // Initial check
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!mounted) return null;

  return <FlowConnectorContent windowSize={windowSize} isMobile={isMobile} />;
};

export default FlowConnector;
