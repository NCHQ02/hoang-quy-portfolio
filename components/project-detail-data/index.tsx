import React, { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useCursor } from "../GlobalCursor";
import { SiloVisual } from "./visuals/SiloVisual";
import { AuditScanner } from "./visuals/AuditScanner";
import { SegmentationCluster } from "./visuals/SegmentationCluster";
import { ActivationFlow } from "./visuals/ActivationFlow";
import { TechSpec } from "./components/TechSpec";

interface Props {
  onBack: () => void;
}

const ProjectDetailData: React.FC<Props> = ({ onBack }) => {
  const { setLabel } = useCursor();
  const { scrollYProgress } = useScroll();

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
