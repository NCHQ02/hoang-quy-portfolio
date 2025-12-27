import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCursor } from "./GlobalCursor";

interface Props {
  onBack: () => void;
}

// --- VISUALIZATION COMPONENTS ---

// 1. SILO VISUAL (THE PAIN)
// Represents fragmented data sources not talking to each other
const SiloVisual = () => {
  return (
    <div className="w-full h-72 bg-[#0D1117]/50 backdrop-blur-sm rounded-xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center gap-6">
      {/* The Sources */}
      <div className="flex justify-center gap-8 md:gap-12 w-full px-4">
        {[
          {
            icon: "📢",
            label: "Ads Data",
            color: "text-blue-400",
            bg: "bg-blue-900/20",
            border: "border-blue-500/30",
          },
          {
            icon: "🛒",
            label: "Web/CRM",
            color: "text-purple-400",
            bg: "bg-purple-900/20",
            border: "border-purple-500/30",
          },
          {
            icon: "🧾",
            label: "POS",
            color: "text-green-400",
            bg: "bg-green-900/20",
            border: "border-green-500/30",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 relative group"
          >
            <div
              className={`w-14 h-14 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center text-2xl relative z-10`}
            >
              {item.icon}
            </div>
            <span className={`text-[10px] font-mono ${item.color} opacity-70`}>
              {item.label}
            </span>

            {/* Question Marks showing confusion */}
            <motion.div
              animate={{ y: [-5, 5, -5], opacity: [0, 1, 0] }}
              transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
              className="absolute -top-4 -right-2 text-red-500 font-bold text-xs"
            >
              ?
            </motion.div>
          </div>
        ))}
      </div>

      {/* The Disconnect */}
      <div className="w-full px-12 relative">
        <div className="h-px bg-white/10 w-full border-t border-dashed border-gray-600" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0D1117] px-3 py-1 rounded-full border border-red-500/50 text-red-400 text-[10px] font-bold flex items-center gap-2 shadow-lg">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          IDENTITY MISMATCH
        </div>
      </div>

      {/* The Resulting Chaos */}
      <div className="flex gap-2">
        <div className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded">
          Dupes found
        </div>
        <div className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded">
          No History
        </div>
      </div>
    </div>
  );
};

// 2. AUDIT SCANNER (THE DIAGNOSIS)
// Represents the cleaning process
const AuditScanner = () => {
  const [rows, setRows] = useState([
    {
      id: "CUST_01",
      issue: "Duplicate ID",
      status: "cleaning",
      fixed: "MERGED",
    },
    {
      id: "CUST_02",
      issue: "Missing Email",
      status: "fixed",
      fixed: "ENRICHED",
    },
    {
      id: "CUST_03",
      issue: "Invalid Phone",
      status: "error",
      fixed: "STANDARDIZED",
    },
  ]);

  return (
    <div className="w-full bg-[#0D1117] rounded-xl border border-white/10 overflow-hidden font-mono text-[10px] shadow-2xl relative group">
      {/* Header */}
      <div className="bg-[#161B22] px-3 py-2 flex justify-between items-center border-b border-white/5">
        <span className="text-gray-400 font-bold">DATA_AUDIT_LOG.py</span>
        <div className="flex gap-2">
          <span className="text-design-yellow animate-pulse">
            ● Scanning...
          </span>
        </div>
      </div>

      {/* Code / Log View */}
      <div className="p-4 space-y-3 relative">
        {/* Scan Line */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[2px] bg-design-green shadow-[0_0_10px_rgba(74,222,128,0.8)] z-10"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        <div className="text-gray-500 mb-2 border-b border-white/5 pb-1">
          &gt; initiating identity_resolution...
        </div>

        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-12 items-center gap-2 opacity-80"
          >
            <div className="col-span-3 text-blue-400">{row.id}</div>
            <div className="col-span-5 text-red-400">found: {row.issue}</div>
            <div className="col-span-4 text-right">
              <span className="text-design-green bg-design-green/10 px-1.5 py-0.5 rounded">
                [{row.fixed}]
              </span>
            </div>
          </div>
        ))}

        <div className="text-gray-500 mt-2 pt-1 border-t border-white/5">
          &gt; Single Customer View:{" "}
          <span className="text-white">BUILDING...</span>
        </div>
      </div>
    </div>
  );
};

// 3. SEGMENTATION CLUSTER (THE STRATEGY)
// Visualizing users moving into buckets
const SegmentationCluster = () => {
  return (
    <div className="relative w-full h-72 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#444 1px, transparent 1px)",
          backgroundSize: "15px 15px",
        }}
      />

      {/* Axis Labels */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] text-gray-500 tracking-widest">
        VALUE (LTV)
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 tracking-widest">
        ENGAGEMENT
      </div>

      {/* Clusters */}
      <div className="relative w-full h-full p-8">
        {/* VIP Cluster (Top Right) */}
        <div className="absolute top-8 right-8 w-28 h-28 rounded-full border border-design-purple/30 bg-design-purple/5 flex flex-col items-center justify-center z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="text-design-purple text-xs font-bold"
          >
            CHAMPIONS
          </motion.div>
          <span className="text-[8px] text-gray-400">High Value</span>
          {/* Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-design-purple rounded-full"
              initial={{ x: 0, y: 0 }}
              animate={{
                x: Math.random() * 50 - 25,
                y: Math.random() * 50 - 25,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Churn Risk (Top Left) */}
        <div className="absolute top-12 left-24 w-20 h-20 rounded-full border border-red-500/30 bg-red-500/5 flex flex-col items-center justify-center">
          <div className="text-red-400 text-[10px] font-bold">AT RISK</div>
          <span className="text-[8px] text-gray-500 text-center">
            High Value / Low Eng
          </span>
        </div>

        {/* New/Low (Bottom Left) */}
        <div className="absolute bottom-8 left-20 w-24 h-24 rounded-full border border-blue-500/30 bg-blue-500/5 flex flex-col items-center justify-center">
          <div className="text-blue-400 text-[10px] font-bold">NEW USERS</div>
          <span className="text-[8px] text-gray-500">Acquisition</span>
        </div>

        {/* Floating Unassigned Dots finding their home */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`u-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            initial={{ x: "50%", y: "50%", opacity: 0 }}
            whileInView={{
              x: i % 2 === 0 ? "80%" : "20%",
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

// 4. ACTIVATION FLOW (THE EXECUTION)
// Pipeline animation
const ActivationFlow = () => {
  return (
    <div className="w-full flex items-center justify-between gap-2 md:gap-4 select-none px-4 py-8 relative">
      {/* Step 1: Warehouse */}
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-white/10 flex items-center justify-center shadow-lg relative">
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </div>
        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">
          Clean Data
        </span>
      </div>

      {/* Connector 1 */}
      <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-1/3 h-full bg-design-blue"
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Step 2: Logic/Segment */}
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="w-12 h-12 rounded-full border-2 border-design-blue bg-[#0a0a0a] flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <span className="text-[10px] font-bold text-white">Rule</span>
        </div>
        <div className="absolute -top-2 text-[8px] bg-design-blue/20 text-design-blue px-2 py-0.5 rounded border border-design-blue/30">
          IF VIP
        </div>
      </div>

      {/* Connector 2 */}
      <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-1/3 h-full bg-design-purple"
          animate={{ x: ["-100%", "300%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.2,
          }}
        />
      </div>

      {/* Step 3: Action */}
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M22 2L11 13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">
          Trigger ZNS
        </span>
      </div>
    </div>
  );
};

// Technical Spec Card - Reusable
const TechSpec = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => (
  <div className="bg-[#151515]/50 border-l-2 border-design-blue/50 p-4 my-6 font-mono text-xs text-gray-400 backdrop-blur-md">
    <div className="text-[10px] uppercase font-bold text-design-blue mb-2 tracking-widest">
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
      className="relative z-50 min-h-screen pb-40 overflow-hidden font-sans text-slate-200"
    >
      {/* Background is handled by App.tsx global grid, we are transparent here */}

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
              Case_Study_Revenue.md
            </span>
          </div>
        </div>
      </div>

      {/* --- HERO: THE NARRATIVE --- */}
      <section className="pt-48 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-6 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              Data Intelligence & Analytics Case Study
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              FROM DATA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                CHAOS
              </span>{" "}
              <br />
              TO REVENUE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-design-blue to-design-green">
                ACTIVATION
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              I don't just build dashboards. I work with data so businesses know{" "}
              <span className="text-white italic font-medium">
                who they are talking to
              </span>{" "}
              and where their revenue truly comes from.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- ACT 1: THE PAIN --- */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-black text-white/10 stroke-text">
                01
              </span>
              <h2 className="text-3xl font-bold text-white">Business Pain</h2>
            </div>
            <h3 className="text-xl text-red-400 font-bold mb-4">
              Spending on Ads Without Knowing the Customer
            </h3>

            <div className="prose prose-invert prose-lg text-slate-400 space-y-4">
              <p>
                The business invested heavily in Ads and CRM channels (Web, ZNS,
                Email), yet struggled to answer basic questions:
                <em className="block mt-2 text-white border-l-2 border-white/20 pl-4">
                  "Who is this customer? Have they purchased before? Are they a
                  new or high-value customer?"
                </em>
              </p>
              <p>
                Customer data was fragmented across systems. As a result,
                retargeting was inaccurate, high-value customers were treated
                like strangers, and budget was spent on noise.
              </p>
              <p className="font-bold text-white">
                The business didn’t lack data — it lacked customer identity.
              </p>
            </div>

            <TechSpec
              title="THE BROKEN LANDSCAPE"
              content="Disparate IDs across Google Ads, Facebook Pixel, and Legacy POS. No Common Key. Duplicate records > 35%."
            />
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              style={{ rotateY: -10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <SiloVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ACT 2: THE DIAGNOSIS --- */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-1">
            <AuditScanner />
            <div className="absolute -z-10 inset-0 bg-design-green/5 blur-3xl" />
          </div>

          <div className="order-2">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-black text-white/10 stroke-text">
                02
              </span>
              <h2 className="text-3xl font-bold text-white">The Diagnosis</h2>
            </div>
            <h3 className="text-xl text-design-yellow font-bold mb-4">
              Data Audit Behind the Dashboards
            </h3>

            <div className="prose prose-invert prose-lg text-slate-400 space-y-4">
              <p>
                As a <strong>Data Architect</strong>, I started not with
                dashboards, but with a mop.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A single customer appeared under multiple identities.</li>
                <li>No Single Customer View.</li>
                <li>Inconsistent event tracking across platforms.</li>
              </ul>
              <p>
                Any analysis built on top of this foundation was fundamentally
                unreliable. Before automation or AI, I had to clean the data
                reality.
              </p>
            </div>

            <TechSpec
              title="AUDIT PROTOCOL"
              content={
                <span>
                  Language:{" "}
                  <span className="text-design-yellow">Python (Pandas)</span> &{" "}
                  <span className="text-design-blue">SQL</span>.<br />
                  Action: Identity Resolution algorithm based on Phone/Email
                  normalization + Fuzzy Matching.
                </span>
              }
            />
          </div>
        </div>
      </section>

      {/* --- ACT 3: THE STRATEGY --- */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-black text-white/10 stroke-text">
                03
              </span>
              <h2 className="text-3xl font-bold text-white">The Strategy</h2>
            </div>
            <h3 className="text-xl text-design-purple font-bold mb-4">
              Turning Clean Data Into Insight
            </h3>

            <div className="prose prose-invert prose-lg text-slate-400 space-y-4">
              <p>
                Instead of adding more tools, I redesigned how data was
                structured. My focus was{" "}
                <strong>Customer Identity Resolution</strong> and building a{" "}
                <strong>Single Customer View</strong>.
              </p>
              <p>
                Once data was cleaned, meaningful segmentation emerged. We found
                that a small segment generated most of the revenue but was
                treated no differently from casual visitors.
              </p>
              <p className="text-white font-medium">
                The problem wasn’t a lack of VIP customers — it was not knowing
                who they were.
              </p>
            </div>

            <TechSpec
              title="SEGMENTATION MODEL"
              content="RFM Analysis (Recency, Frequency, Monetary) + Lifecycle Stages (New, Active, Churn Risk)."
            />
          </div>

          <div className="order-1 lg:order-2">
            <SegmentationCluster />
          </div>
        </div>
      </section>

      {/* --- ACT 4: THE EXECUTION --- */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl font-black text-white/10 stroke-text block mb-2">
              04
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              The Execution
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Activating Data Into Marketing Actions. Data should not sit in
              reports. Data should drive revenue.
            </p>
          </div>

          <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Flow Visual */}
            <ActivationFlow />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <h4 className="text-white font-bold mb-4 text-lg border-b border-white/10 pb-2">
                  Real-time Activation
                </h4>
                <ul className="text-gray-400 leading-relaxed space-y-3">
                  <li className="flex gap-2">
                    <span className="text-design-green">✓</span> Segments pushed
                    directly to marketing channels.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-design-green">✓</span> User behavior
                    triggered appropriate journeys immediately.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-design-green">✓</span> Right Customer.
                    Right Moment. Right Message.
                  </li>
                </ul>
              </div>
              <div>
                <TechSpec
                  title="ACTIVATION STACK"
                  content={
                    <span>
                      Automation:{" "}
                      <span className="text-design-orange">n8n / Airflow</span>.
                      <br />
                      Channels: Zalo ZNS, Zalo Broadcast, Email Marketing,
                      Facebook Custom Audiences (Reverse ETL).
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACT 5: THE OUTCOME --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-6xl font-black text-white/10 stroke-text">
              05
            </span>
            <h2 className="text-4xl font-bold text-white">Business Impact</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e1e1e]/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center"
            >
              <div className="text-5xl font-black text-white mb-2 text-design-green">
                Clean
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Audiences
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Budget allocation shifted toward customer value, not just
                clicks.
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e1e1e]/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center"
            >
              <div className="text-5xl font-black text-white mb-2 text-design-blue">
                Fast
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Decision Making
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Marketing teams could act without waiting on data teams.
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e1e1e]/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center"
            >
              <div className="text-5xl font-black text-white mb-2 text-design-purple">
                Asset
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Evolution
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Data evolved from an operational burden into a living business
                asset.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / MY ROLE --- */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Role List */}
          <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              My Role
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Data audit and architecture redesign",
                "Identity resolution and event standardization",
                "Business-driven segmentation design",
                "Marketing activation and automation strategy",
                "Bridging Business, Marketing, and Data teams",
              ].map((role, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-design-blue rounded-full" />
                  {role}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight text-balance">
              "I don’t work with data to build prettier dashboards.
              <br />
              <span className="text-gray-500">
                I work with data so businesses know who they are talking to.
              </span>
              "
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.open("mailto:hoangquy.design@gmail.com")}
                className="bg-design-blue text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform w-full md:w-auto shadow-lg shadow-blue-500/20"
              >
                Let's Clean Your Data
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
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailData;
