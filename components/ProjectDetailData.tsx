import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "./GlobalCursor";

interface Props {
  onBack: () => void;
}

// --- SUB-COMPONENTS ---

const SectionNumber = ({ num }: { num: string }) => (
  <div className="flex items-center gap-4 mb-8 opacity-50">
    <span
      className="text-6xl font-black text-transparent stroke-text"
      style={{ WebkitTextStroke: "1px #fff" }}
    >
      {num}
    </span>
    <div className="h-px w-20 bg-white/30" />
  </div>
);

// Window container similar to Vibe Coding but cleaner/darker for Data
const DataWindow = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="bg-[#0f172a] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-xs relative group hover:border-design-blue/50 transition-colors">
    <div className="bg-[#1e293b] px-3 py-2 border-b border-white/5 flex items-center justify-between">
      <span className="text-blue-200 font-bold">{title}</span>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
      </div>
    </div>
    <div className="p-4 relative min-h-[150px]">{children}</div>
  </div>
);

// Visualizing a Data Pipeline Node
const PipelineNode = ({
  label,
  type,
}: {
  label: string;
  type: "source" | "transform" | "load";
}) => {
  const color =
    type === "source"
      ? "bg-slate-700"
      : type === "transform"
      ? "bg-blue-600"
      : "bg-design-green";
  return (
    <div
      className={`p-3 rounded-lg border border-white/10 ${color} text-white text-xs font-bold text-center shadow-lg relative z-10`}
    >
      {label}
    </div>
  );
};

// Animated Connector Line
const DataStream = () => (
  <div className="h-0.5 w-full bg-gray-700 relative overflow-hidden my-2">
    <motion.div
      className="absolute top-0 left-0 h-full w-1/3 bg-blue-400"
      animate={{ x: ["-100%", "300%"] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

// RFM Grid Cell
const RFMCell = ({ label, color }: { label: string; color: string }) => (
  <div
    className={`aspect-square rounded flex items-center justify-center text-[10px] font-bold text-black ${color} shadow-sm transform hover:scale-105 transition-transform cursor-help`}
    title={label}
  >
    {label}
  </div>
);

// --- MAIN COMPONENT ---

const ProjectDetailData: React.FC<Props> = ({ onBack }) => {
  const { setLabel, setIsActive } = useCursor();

  useEffect(() => {
    // Enable custom cursor mode globally for this page
    document.body.classList.add("no-cursor");
    setIsActive(true);

    return () => {
      // Cleanup: revert to normal cursor
      document.body.classList.remove("no-cursor");
      setIsActive(false);
    };
  }, [setIsActive]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="relative z-50 bg-[#020617] min-h-screen pb-20 overflow-hidden font-mono text-slate-200"
    >
      {/* Global Matrix/Grid Background */}
      <div
        className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* --- HEADER NAVIGATION --- */}
      <div className="fixed top-24 left-0 right-0 z-40 px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-auto">
          <button
            onClick={onBack}
            onMouseEnter={() => setLabel("Home")}
            onMouseLeave={() => setLabel(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
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

          <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-design-blue animate-pulse" />
            <span className="text-xs font-mono text-design-blue">
              pipeline_v1.sql
            </span>
          </div>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="pt-48 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-blue-900/30 border border-blue-500/30 text-blue-400 px-3 py-1 rounded mb-6 text-xs font-bold">
              DATA INTELLIGENCE
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
              ETL <span className="text-design-blue">READY</span> <br />
              <span className="text-3xl md:text-5xl text-slate-500 font-bold">
                RAW DATA ➔ INSIGHTS
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-sans max-w-xl">
              Stop manual data wrangling. I build robust SQL/Python pipelines
              that extract, transform, and visualize your business data in
              real-time.
            </p>

            <div className="flex gap-4">
              <button className="bg-design-blue text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-blue-900 transition-colors shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Deploy Pipeline
              </button>
            </div>
          </div>

          {/* Hero Visual: The Data Flow */}
          <div className="relative">
            <DataWindow title="live_data_stream.py">
              <div className="grid grid-cols-3 gap-4 items-center h-full">
                <div className="flex flex-col gap-4">
                  <PipelineNode label="CRM (Salesforce)" type="source" />
                  <PipelineNode label="GA4 (Events)" type="source" />
                  <PipelineNode label="Stripe (Pay)" type="source" />
                </div>

                <div className="flex flex-col justify-center h-full">
                  <DataStream />
                  <div className="bg-blue-600/20 border border-blue-500 text-blue-300 p-2 rounded text-center text-[10px] my-2">
                    TRANSFORM & CLEAN
                  </div>
                  <DataStream />
                </div>

                <div className="flex flex-col justify-center gap-4">
                  <div className="bg-design-green text-black p-4 rounded font-bold text-center shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                    DATA WAREHOUSE
                    <div className="text-[9px] font-normal mt-1">
                      Ready for Viz
                    </div>
                  </div>
                </div>
              </div>
            </DataWindow>

            {/* Floating SQL Snippet */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-[#1e293b] p-3 rounded border border-white/10 shadow-xl font-mono text-[10px] text-gray-400"
            >
              SELECT * FROM users <br />
              WHERE <span className="text-design-blue">ltv &gt; 5000</span>{" "}
              <br />
              AND <span className="text-design-blue">status = 'active'</span>;
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM SECTION (Data Swamp) --- */}
      <section className="py-20 px-6 relative border-t border-white/5 bg-[#050b14]">
        <div className="max-w-6xl mx-auto">
          <SectionNumber num="01" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 bg-slate-900 rounded-xl border border-dashed border-slate-700 overflow-hidden flex items-center justify-center">
              {/* Chaos Visuals */}
              <div className="absolute text-red-500 font-bold text-xl rotate-12 top-10 left-10">
                NULL Value
              </div>
              <div className="absolute text-orange-500 font-bold text-lg -rotate-6 bottom-20 right-20">
                CSV Error
              </div>
              <div className="absolute text-gray-500 font-mono text-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                [Object object] <br />
                undefined
              </div>
              <div className="absolute text-yellow-500 text-4xl font-bold opacity-20 inset-0 flex items-center justify-center">
                DATA SWAMP
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                The Data Swamp
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed font-sans">
                E-commerce businesses typically miss 35% of high-value customers
                because their data is locked in silos. Manual reporting in Excel
                is slow, error-prone, and impossible to scale.
              </p>
              <ul className="space-y-3 font-mono text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⚠</span> ETL manual takes
                  40h/week
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⚠</span> No real-time dashboard
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⚠</span> RFM Analysis done
                  manually in Excel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTION SECTION (Pipelines & RFM) --- */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionNumber num="02" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            The Intelligence Engine
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: ETL Pipeline */}
            <div className="md:col-span-1">
              <DataWindow title="ETL_Process.py">
                <div className="space-y-4">
                  <div className="text-[10px] text-gray-500 mb-2">
                    // 1. Extract & Clean
                  </div>
                  <div className="h-1 w-full bg-slate-700 rounded overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-500"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="text-xs text-white">
                    Processing 1TB data/day... <br />
                    <span className="text-design-green">Zero Downtime</span>
                  </div>
                </div>
              </DataWindow>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                Robust ETL Pipelines
              </h3>
              <p className="text-sm text-gray-400">
                SQL/Python scripts to extract multi-source data, clean
                formatting errors, and load into a centralized warehouse.
              </p>
            </div>

            {/* Feature 2: RFM Matrix */}
            <div className="md:col-span-1">
              <DataWindow title="RFM_Segmentation_View">
                <div className="grid grid-cols-3 gap-1">
                  <RFMCell label="Lost" color="bg-slate-700" />
                  <RFMCell label="Risk" color="bg-orange-400" />
                  <RFMCell label="Can't Lose" color="bg-red-500" />
                  <RFMCell label="Sleep" color="bg-slate-600" />
                  <RFMCell label="Attention" color="bg-yellow-400" />
                  <RFMCell label="Loyal" color="bg-green-400" />
                  <RFMCell label="New" color="bg-blue-300" />
                  <RFMCell label="Potential" color="bg-blue-500" />
                  <RFMCell label="Champions" color="bg-design-green" />
                </div>
              </DataWindow>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                RFM Analysis
              </h3>
              <p className="text-sm text-gray-400">
                Auto-segment customers by Recency, Frequency, and Monetary
                value. Identify VIPs and Churn risks instantly.
              </p>
            </div>

            {/* Feature 3: Visualization */}
            <div className="md:col-span-1">
              <DataWindow title="Dashboard_Metrics">
                <div className="flex items-end justify-between h-24 gap-2">
                  <motion.div
                    className="w-full bg-blue-900 rounded-t"
                    animate={{ height: "40%" }}
                  />
                  <motion.div
                    className="w-full bg-blue-800 rounded-t"
                    animate={{ height: "60%" }}
                  />
                  <motion.div
                    className="w-full bg-blue-600 rounded-t"
                    animate={{ height: "30%" }}
                  />
                  <motion.div
                    className="w-full bg-design-green rounded-t"
                    animate={{ height: "85%" }}
                  />
                </div>
                <div className="mt-2 text-[10px] text-center text-gray-400">
                  Monthly Revenue Growth
                </div>
              </DataWindow>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                Real-time Visualization
              </h3>
              <p className="text-sm text-gray-400">
                Interactive charts for customer journey, cohort analysis, and
                conversion funnels in one dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- METRICS / BENCHMARK --- */}
      <section className="py-24 px-6 relative bg-[#020617] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionNumber num="03" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            Business Impact
          </h2>

          <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden font-mono text-sm shadow-2xl">
            <div className="grid grid-cols-3 bg-slate-800 p-4 text-gray-400 font-bold border-b border-white/5">
              <div>METRIC</div>
              <div>BEFORE</div>
              <div className="text-design-blue">WITH ETL READY</div>
            </div>
            {[
              { name: "ETL Time", before: "40h / week", after: "2h / auto" },
              {
                name: "RFM Accuracy",
                before: "10% (Manual)",
                after: "95% (Precise)",
              },
              {
                name: "Dashboard Refresh",
                before: "Daily",
                after: "Real-time",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <div className="text-white">{row.name}</div>
                <div className="text-red-400 line-through decoration-red-500/50">
                  {row.before}
                </div>
                <div className="text-design-blue font-bold flex items-center gap-2">
                  {row.after}
                  {i === 2 && (
                    <span className="text-[8px] bg-blue-500 text-white px-1 rounded animate-pulse">
                      LIVE
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#0f172a] rounded-xl border-l-4 border-design-blue relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <p className="text-slate-300 italic font-sans text-lg relative z-10">
              "We moved from a 'data swamp' to an intelligence hub. Segmenting
              500k customers used to take weeks, now it happens automatically
              every night."
            </p>
            <div className="mt-4 text-xs font-bold text-design-blue uppercase">
              -- Retail Chain CTO
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            SCALE DATA OPS
          </h2>
          <p className="text-slate-400 mb-10 font-sans">
            Enterprise-grade data engineering at indie prices. <br />
            Start processing your first 1TB today.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-design-blue text-white px-8 py-4 rounded font-bold hover:scale-105 transition-transform w-full md:w-auto shadow-lg shadow-blue-500/20">
              Deploy Pipeline Now
            </button>
            <button className="bg-transparent border border-white/10 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors w-full md:w-auto">
              View SQL Templates
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
