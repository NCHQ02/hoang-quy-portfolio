import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useCursor } from "./GlobalCursor";

interface Props {
  onBack: () => void;
}

// --- VISUALIZATION COMPONENTS ---

// 0. SILO VISUAL (THE PAIN)
const SiloVisual = () => {
  return (
    <div className="w-full h-64 bg-[#0D1117] rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center gap-8 md:gap-12">
      {/* Silo 1: Ads */}
      <div className="flex flex-col items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="w-16 h-16 rounded-2xl bg-blue-900/20 border border-blue-500/30 flex items-center justify-center">
          <span className="text-2xl">📢</span>
        </div>
        <span className="text-[10px] font-mono text-blue-400">
          Ads_Spend.csv
        </span>
      </div>

      {/* Disconnect Icon */}
      <div className="text-red-500 text-2xl font-bold animate-pulse">×</div>

      {/* Silo 2: CRM */}
      <div className="flex flex-col items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="w-16 h-16 rounded-2xl bg-orange-900/20 border border-orange-500/30 flex items-center justify-center">
          <span className="text-2xl">👥</span>
        </div>
        <span className="text-[10px] font-mono text-orange-400">
          Customer_CRM.sql
        </span>
      </div>

      {/* Disconnect Icon */}
      <div className="text-red-500 text-2xl font-bold animate-pulse">×</div>

      {/* Silo 3: POS */}
      <div className="flex flex-col items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="w-16 h-16 rounded-2xl bg-green-900/20 border border-green-500/30 flex items-center justify-center">
          <span className="text-2xl">🧾</span>
        </div>
        <span className="text-[10px] font-mono text-green-400">
          Offline_POS.xlsx
        </span>
      </div>

      {/* Overlay Alert */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-500/10 border border-red-500/50 text-red-400 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
        DATA SILOS DETECTED
      </div>
    </div>
  );
};

// 1. DATA AUDIT SCANNER (THE DIAGNOSIS)
const AuditScanner = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      raw: "J.Doe | null | $100",
      status: "error",
      fixed: "John Doe | john@mail.com | $100",
    },
    {
      id: 2,
      raw: "Alice | alice@x | 500",
      status: "valid",
      fixed: "Alice Smith | alice@x.com | $500",
    },
    {
      id: 3,
      raw: "Bob | bob@gmail | NaN",
      status: "error",
      fixed: "Bob Jones | bob@gmail.com | $0",
    },
    { id: 4, raw: "DUP_USER_01 | -- | --", status: "dup", fixed: "[REMOVED]" },
  ]);

  return (
    <div className="w-full bg-[#0D1117] rounded-xl border border-white/10 overflow-hidden font-mono text-[10px] shadow-2xl relative group">
      {/* Scan Line Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-design-green shadow-[0_0_15px_rgba(74,222,128,0.8)] z-20"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <div className="bg-[#161B22] px-3 py-2 flex justify-between items-center border-b border-white/5">
        <span className="text-gray-400 font-bold">AUDIT_PROTOCOL_V1.py</span>
        <span className="text-design-orange animate-pulse">
          ● Pandas Cleaning...
        </span>
      </div>

      <div className="p-4 space-y-2 relative">
        <div className="grid grid-cols-12 text-gray-500 mb-2 border-b border-white/5 pb-2">
          <div className="col-span-1">ID</div>
          <div className="col-span-5">RAW_INPUT</div>
          <div className="col-span-2">STATUS</div>
          <div className="col-span-4">OUTPUT</div>
        </div>

        {rows.map((row) => (
          <div key={row.id} className="grid grid-cols-12 items-center gap-2">
            <div className="col-span-1 text-gray-600">#{row.id}</div>
            <div className="col-span-5 text-gray-400 truncate font-mono opacity-70">
              {row.raw}
            </div>
            <div className="col-span-2">
              <span
                className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                  row.status === "valid"
                    ? "bg-green-500/20 text-green-400"
                    : row.status === "dup"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {row.status.toUpperCase()}
              </span>
            </div>
            <div className="col-span-4 text-design-green truncate">
              {row.fixed}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 2. SEGMENTATION CLUSTER (THE STRATEGY)
const SegmentationCluster = () => {
  // Simulate users moving into clusters
  return (
    <div className="relative w-full h-64 bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#444 1px, transparent 1px)",
          backgroundSize: "15px 15px",
        }}
      />

      {/* Cluster Labels */}
      <div className="absolute top-4 left-4 text-[10px] text-gray-500">
        Recency (Y) vs Monetary (X)
      </div>

      {/* The Clusters */}
      <div className="relative w-full h-full p-8">
        {/* VIP Cluster (Top Right) */}
        <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-design-purple/30 bg-design-purple/5 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="text-design-purple text-xs font-bold"
          >
            CHAMPIONS
          </motion.div>
          {/* Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-design-purple rounded-full"
              initial={{ x: 0, y: 0 }}
              animate={{
                x: Math.random() * 40 - 20,
                y: Math.random() * 40 - 20,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* At Risk Cluster (Bottom Right) */}
        <div className="absolute bottom-10 right-20 w-20 h-20 rounded-full border border-design-orange/30 bg-design-orange/5 flex items-center justify-center">
          <div className="text-design-orange text-xs font-bold">AT RISK</div>
        </div>

        {/* New Users (Top Left) */}
        <div className="absolute top-16 left-16 w-16 h-16 rounded-full border border-design-blue/30 bg-design-blue/5 flex items-center justify-center">
          <div className="text-design-blue text-[10px] font-bold">NEW</div>
        </div>

        {/* Lost (Bottom Left) */}
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border border-gray-700 bg-gray-800 flex items-center justify-center opacity-50">
          <div className="text-gray-500 text-[8px]">LOST</div>
        </div>

        {/* Floating Unassigned Dots finding their home */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`u-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50"
            initial={{ x: "50%", y: "50%", opacity: 0 }}
            whileInView={{
              x: i % 2 === 0 ? "80%" : "20%", // Move to clusters
              y: i % 3 === 0 ? "20%" : "80%",
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
};

// 3. ACTIVATION FLOW (THE EXECUTION)
const ActivationFlow = () => {
  return (
    <div className="w-full flex items-center justify-between gap-2 md:gap-4 select-none">
      {/* Source */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-white/10 flex items-center justify-center shadow-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <span className="text-[9px] text-gray-500 uppercase">Warehouse</span>
      </div>

      {/* Moving Packets */}
      <div className="flex-1 h-px bg-white/10 relative">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-design-blue/20 rounded-full blur-md"
          animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-design-blue rounded-full"
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Logic Node */}
      <div className="flex flex-col items-center gap-2 relative">
        <div className="absolute -top-8 text-[10px] text-design-green font-mono bg-design-green/10 px-2 py-0.5 rounded border border-design-green/20">
          IF VIP = TRUE
        </div>
        <div className="w-14 h-14 rounded-full border-2 border-design-blue bg-black flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
          <span className="text-xs font-bold text-white">Logic</span>
        </div>
      </div>

      {/* Moving Packets 2 */}
      <div className="flex-1 h-px bg-white/10 relative">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-design-purple rounded-full"
          animate={{ left: ["0%", "100%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
      </div>

      {/* Destination */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <span className="text-[9px] text-gray-500 uppercase">Email API</span>
      </div>
    </div>
  );
};

// Technical Spec Card
const TechSpec = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => (
  <div className="bg-[#151515] border-l-2 border-white/20 p-4 my-6 font-mono text-xs text-gray-400">
    <div className="text-[10px] uppercase font-bold text-design-blue mb-2">
      // TECHNICAL SPECS
    </div>
    <div className="text-white font-bold mb-1">{title}</div>
    <div className="leading-relaxed opacity-80">{content}</div>
  </div>
);

// --- MAIN COMPONENT ---

const ProjectDetailData: React.FC<Props> = ({ onBack }) => {
  const { setLabel, setIsActive } = useCursor();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    document.body.classList.add("no-cursor");
    setIsActive(true);
    return () => {
      document.body.classList.remove("no-cursor");
      setIsActive(false);
    };
  }, [setIsActive]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-50 bg-[#0a0a0a] min-h-screen pb-40 overflow-hidden font-sans text-slate-200"
    >
      {/* GLOBAL INFINITE GRID */}
      <div
        className="fixed inset-0 z-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px]" />
      </div>

      {/* --- HEADER --- */}
      <div className="fixed top-24 left-0 right-0 z-40 px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-auto">
          <button
            onClick={onBack}
            onMouseEnter={() => setLabel("Home")}
            onMouseLeave={() => setLabel(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-white/30"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span className="text-xs font-bold uppercase">Back</span>
          </button>

          <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 shadow-xl">
            <div className="w-2 h-2 rounded-full bg-design-green animate-pulse" />
            <span className="text-xs font-mono text-design-green">
              Business_Case_Study.md
            </span>
          </div>
        </div>
      </div>

      {/* --- HERO: THE NARRATIVE --- */}
      <section className="pt-48 pb-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-6 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              The Data Story
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              FROM{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                CHAOS
              </span>{" "}
              TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-design-blue to-design-green">
                CLARITY
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              This isn't just about building dashboards. It's the story of how
              we took a business that was{" "}
              <span className="text-white italic">"guessing"</span> and turned
              it into a machine that was{" "}
              <span className="text-white italic">"knowing"</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- ACT 1: THE PAIN (THE SILOS) --- */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-black text-white/10 stroke-text">
                01
              </span>
              <h2 className="text-3xl font-bold text-white">
                The Pain: The "Black Hole"
              </h2>
            </div>

            <div className="prose prose-invert prose-lg text-slate-400">
              <p>
                Imagine a Retail Giant burning{" "}
                <strong>$50,000/month on Ads</strong>. The CEO asks:
                <span className="text-white italic">
                  {" "}
                  "We see clicks, but where are the loyal customers?"
                </span>
                The marketing team was flying blind.
              </p>
              <p>
                The problem wasn't a lack of data. It was{" "}
                <strong>Data Silos</strong>. The Facebook Ads data lived in one
                room, the Offline POS transaction data lived in another, and the
                CRM was an island.
              </p>
              <p>
                We had duplicates everywhere. A customer named "Nguyen Van A" on
                Facebook was treated as a stranger when he bought offline.{" "}
                <strong>
                  We were spamming our VIPs with "First Time Buyer" discounts.
                </strong>
              </p>
            </div>

            <TechSpec
              title="THE BROKEN STACK"
              content="Disparate CSV exports from Facebook Ads Manager, Google Ads, legacy SQL Server (POS), and a manual Google Sheet for CRM. No Primary Key unification."
            />
          </div>

          <div className="order-1 lg:order-2 relative perspective-1000">
            <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-full -z-10" />
            <motion.div
              style={{ rotateY: -10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <SiloVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ACT 2: THE DIAGNOSIS (THE CLEANUP) --- */}
      <section className="py-20 px-6 relative z-10 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <AuditScanner />
            {/* Floating Code Snippet */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-[#1e1e1e] border border-white/10 p-4 rounded-lg shadow-2xl font-mono text-[10px]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-purple-400">import</span> pandas{" "}
              <span className="text-purple-400">as</span> pd
              <br />
              df.<span className="text-blue-400">drop_duplicates</span>
              (subset=['phone'])
            </motion.div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-black text-white/10 stroke-text">
                02
              </span>
              <h2 className="text-3xl font-bold text-white">
                The Diagnosis: Architecture Audit
              </h2>
            </div>

            <div className="prose prose-invert prose-lg text-slate-400">
              <p>
                When I stepped in as the <strong>Data Architect</strong>, I saw
                the chaos immediately. I didn't start with a dashboard. I
                started with a mop.
              </p>
              <p>
                I initiated a massive <strong>Data Audit & Cleaning</strong>{" "}
                protocol. We had to standardize phone numbers (84 vs 0), merge
                user identities based on email/phone, and flag "junk" leads.
              </p>
              <p>
                This is the unsexy part of data science that yields the highest
                ROI. Clean data allows us to see the truth.
              </p>
            </div>

            <TechSpec
              title="CLEANING PIPELINE"
              content={
                <span>
                  Tools:{" "}
                  <span className="text-design-yellow">
                    Python (Pandas/NumPy)
                  </span>{" "}
                  for logic,{" "}
                  <span className="text-design-blue">SQL (BigQuery)</span> for
                  storage.
                  <br />
                  Process: Regex standardization - Fuzzy Matching for name
                  deduplication - Null value imputation.
                </span>
              }
            />
          </div>
        </div>
      </section>

      {/* --- ACT 3: THE STRATEGY (SEGMENTATION) --- */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-black text-white/10 stroke-text">
                03
              </span>
              <h2 className="text-3xl font-bold text-white">
                The Strategy: Finding Gold
              </h2>
            </div>

            <div className="prose prose-invert prose-lg text-slate-400">
              <p>
                With clean data, the fog lifted. We asked:{" "}
                <em>"Who actually pays our bills?"</em>
              </p>
              <p>
                I implemented an{" "}
                <strong>RFM Model (Recency, Frequency, Monetary)</strong>. The
                results were shocking. We found that our top 2% of customers
                (Champions) were generating 40% of the revenue, yet they were
                receiving the same generic "Spam" as everyone else.
              </p>
              <p>
                We shifted strategy immediately:{" "}
                <span className="text-white">
                  Treat VIPs like royalty, and wake up the sleeping giants.
                </span>
              </p>
            </div>

            <TechSpec
              title="MODELING STACK"
              content={
                <span>
                  Model: <span className="text-design-purple">RFM Scoring</span>{" "}
                  (1-5 scale).
                  <br />
                  Viz: <span className="text-design-orange">
                    Power BI
                  </span> &{" "}
                  <span className="text-design-blue">Looker Studio</span> for
                  dynamic cluster visualization.
                </span>
              }
            />
          </div>

          <div className="order-1 lg:order-2">
            <SegmentationCluster />
          </div>
        </div>
      </section>

      {/* --- ACT 4: THE EXECUTION (ACTIVATION) --- */}
      <section className="py-20 px-6 relative z-10 bg-[#121212]/80 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl font-black text-white/10 stroke-text block mb-2">
              04
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              The Execution: The Engine
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Insights are useless if they stay in a PDF. We built an automated
              pipeline to trigger actions.
            </p>
          </div>

          <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Flow Visual */}
            <ActivationFlow />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <h4 className="text-white font-bold mb-4 text-lg border-b border-white/10 pb-2">
                  The Workflow
                </h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  1. <strong className="text-white">Detect:</strong> Warehouse
                  identifies a user moving from "Potential" to "VIP" segment.
                  <br />
                  2. <strong className="text-white">Trigger:</strong> n8n
                  catches this event via Webhook.
                  <br />
                  3. <strong className="text-white">Act:</strong> API sends a
                  specialized "Welcome VIP" voucher via Zalo/Email immediately.
                </p>
              </div>
              <div>
                <TechSpec
                  title="AUTOMATION STACK"
                  content={
                    <span>
                      Orchestration:{" "}
                      <span className="text-design-orange">
                        n8n (Self-hosted)
                      </span>
                      .<br />
                      Destination:{" "}
                      <span className="text-design-green">Reverse ETL</span> to
                      push data back into Facebook Audiences (for Lookalike
                      scaling) and CRM.
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- IMPACT METRICS --- */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-[#050505]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Business Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e1e1e]/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl group cursor-default text-center"
            >
              <div className="text-5xl font-black text-white mb-2 group-hover:text-design-green transition-colors">
                +25%
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                ROI
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Targeted campaigns based on segmentation perform significantly
                better than "blast all".
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e1e1e]/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl group cursor-default text-center"
            >
              <div className="text-5xl font-black text-white mb-2 group-hover:text-design-blue transition-colors">
                100%
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Automated
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Reporting time reduced from 10 hours/week to zero. Dashboards
                update in real-time.
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e1e1e]/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl group cursor-default text-center"
            >
              <div className="text-5xl font-black text-white mb-2 group-hover:text-design-purple transition-colors">
                98%
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Data Cleanliness
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Automated audit scripts catch errors before they pollute the
                analytics environment.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            NEED A DATA ARCHITECT?
          </h2>
          <p className="text-slate-400 mb-10 font-sans">
            Don't just collect data. Tell a story with it. <br /> Let's build
            your data pipeline from Audit to Activation.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.open("mailto:hoangquy.design@gmail.com")}
              className="bg-design-blue text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform w-full md:w-auto shadow-lg shadow-blue-500/20"
            >
              Book a Data Audit
            </button>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5">
            <button
              onClick={onBack}
              onMouseEnter={() => setLabel("Go Back")}
              onMouseLeave={() => setLabel(null)}
              className="text-slate-500 hover:text-white flex items-center gap-2 mx-auto transition-colors font-sans text-sm"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailData;
