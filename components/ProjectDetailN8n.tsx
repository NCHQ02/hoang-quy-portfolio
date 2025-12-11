import React from "react";
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

const StickyNote = ({
  text,
  color,
  rotate,
  x,
  y,
  emoji,
}: {
  text: string;
  color: string;
  rotate: number;
  x: string;
  y: string;
  emoji?: string;
}) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring" }}
      className={`absolute w-40 p-4 ${color} text-black font-script text-lg shadow-xl rounded-sm transform z-10 hidden lg:block`}
      style={{ top: y, left: x, rotate: rotate }}
    >
      {emoji && <div className="text-2xl mb-1">{emoji}</div>}
      {text}
    </motion.div>
  );
};

const WorkflowCard = ({
  title,
  steps,
  color,
}: {
  title: string;
  steps: string[];
  color: string;
}) => (
  <div className="bg-[#1e1e1e] border border-white/10 rounded-xl p-6 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
    <div className={`absolute top-0 left-0 w-full h-1 ${color}`} />
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>

    {/* Workflow Visualization */}
    <div className="flex flex-col gap-2 relative z-10">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="bg-[#2A2A2A] p-2 rounded border border-white/5 text-xs text-gray-300 flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${color}`} />
            {step}
          </div>
          {i < steps.length - 1 && (
            <div className="h-3 w-px bg-white/10 ml-3" />
          )}
        </React.Fragment>
      ))}
    </div>

    {/* BG Decoration */}
    <div className="absolute -bottom-10 -right-10 opacity-5">
      <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
  </div>
);

const ComparisonTable = () => {
  return (
    <div className="w-full bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="grid grid-cols-3 bg-[#252525] p-4 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-gray-400">
        <div>Metric</div>
        <div>Before (Manual)</div>
        <div className="text-design-green">After (n8n + AI)</div>
      </div>

      {/* Rows */}
      {[
        {
          metric: "Social Posting",
          before: "2 hours / day",
          after: "5 mins / day (Review only)",
        },
        {
          metric: "Lead Qual",
          before: "40% Missed",
          after: "100% Auto-Captured",
        },
        {
          metric: "Content Gen",
          before: "Writer Block (Slow)",
          after: "AI Drafts (3x Faster)",
        },
        {
          metric: "Errors",
          before: "High (Copy/Paste)",
          after: "Zero (API Sync)",
        },
      ].map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-3 p-4 border-b border-white/5 hover:bg-white/5 transition-colors text-sm"
        >
          <div className="font-bold text-white">{row.metric}</div>
          <div className="text-gray-500 line-through">{row.before}</div>
          <div className="text-design-green font-bold">{row.after}</div>
        </div>
      ))}
    </div>
  );
};

// --- MAIN COMPONENT ---

const ProjectDetailN8n: React.FC<Props> = ({ onBack }) => {
  const { setLabel } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="relative z-50 bg-[#0a0a0a] min-h-screen pb-20 overflow-hidden"
    >
      {/* Global Grid for Canvas Feel */}
      <div
        className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
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
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-[#1e1e1e]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
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
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span className="text-xs font-bold uppercase">
              Back to Portfolio
            </span>
          </button>

          <div className="bg-[#1e1e1e]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-design-orange animate-pulse" />
            <span className="text-xs font-mono text-design-orange">
              n8n_case_study.fig
            </span>
          </div>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="pt-48 pb-20 px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Decorative Hero Elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-20 -left-10 hidden md:block"
          >
            <div className="bg-[#2C2C2E] text-white text-xs px-3 py-1.5 rounded-lg shadow-xl border border-white/10 transform -rotate-12">
              🚀 85% Efficiency Boost
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
            AUTOMATE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-design-orange to-red-500">
              EVERYTHING
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-gray-500">
              WITH n8n + AI AGENTS
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop spending 5-10 hours/week copying data. I build intelligent
            workflows that research trends, generate content, and sync business
            data automatically.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-design-orange text-black px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
              Explore Workflows
            </button>
          </div>
        </div>
      </section>

      {/* --- PROBLEM SECTION (The "Manual" Trap) --- */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionNumber num="01" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                The "Manual" Trap
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                For many SaaS startups, growth means chaos. Marketing teams
                drown in repetitive tasks: syncing leads from CRM to Email,
                manually posting to LinkedIn, or copy-pasting data into Sheets.
              </p>
              <div className="flex flex-col gap-4 border-l-2 border-red-500/50 pl-6">
                <div className="text-white font-bold">
                  ⚠️ Missed Opportunities
                </div>
                <div className="text-gray-500 text-sm">
                  Forgot to follow up? That's revenue lost.
                </div>
                <div className="text-white font-bold">⚠️ Burnout</div>
                <div className="text-gray-500 text-sm">
                  Creatives shouldn't be doing data entry.
                </div>
              </div>
            </div>

            {/* Visual Chaos Area */}
            <div className="relative h-[400px] bg-[#151515] rounded-2xl border border-dashed border-white/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-20 text-6xl font-black text-white rotate-[-45deg]">
                CHAOS
              </div>

              {/* Floating Sticky Notes */}
              <StickyNote
                text="Forgot to post on Twitter again..."
                color="bg-yellow-200"
                rotate={-6}
                x="10%"
                y="20%"
                emoji="😩"
              />
              <StickyNote
                text="Copy Paste Hell"
                color="bg-pink-300"
                rotate={12}
                x="50%"
                y="10%"
                emoji="🔥"
              />
              <StickyNote
                text="API Limits???"
                color="bg-blue-200"
                rotate={-15}
                x="20%"
                y="60%"
                emoji="📉"
              />
              <StickyNote
                text="Data mismatch in Sheets"
                color="bg-green-200"
                rotate={5}
                x="60%"
                y="50%"
                emoji="💀"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTION SECTION (The n8n Architect) --- */}
      <section className="py-20 px-6 relative bg-[#151515]">
        <div className="max-w-7xl mx-auto">
          <SectionNumber num="02" />
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The Automated Solution
            </h2>
            <p className="text-gray-400">
              Replacing chaos with structured, intelligent logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Workflow 1 */}
            <WorkflowCard
              title="Auto-Social Posting"
              color="bg-design-orange"
              steps={[
                "Schedule Trigger (9AM)",
                "Tavily AI Research Trend",
                "GPT-4 Writes Caption",
                "Publish to LinkedIn/X",
              ]}
            />
            {/* Workflow 2 */}
            <WorkflowCard
              title="Content Engine"
              color="bg-design-purple"
              steps={[
                "RSS Feed / YouTube Monitor",
                "Transcribe Video (Whisper)",
                "Summarize Key Points",
                "Save to Notion DB",
              ]}
            />
            {/* Workflow 3 */}
            <WorkflowCard
              title="Business Ops"
              color="bg-design-blue"
              steps={[
                "Stripe New Payment",
                "Create Invoice PDF",
                "Email Customer",
                "Notify Slack Channel",
              ]}
            />
          </div>
        </div>
      </section>

      {/* --- RESULTS SECTION (Metrics) --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <SectionNumber num="03" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            Real World Impact
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Comparison Table */}
            <ComparisonTable />

            {/* Testimonial / Story */}
            <div className="bg-[#1e1e1e] p-8 rounded-xl border-l-4 border-design-green shadow-2xl relative">
              <div className="text-4xl text-design-green absolute top-4 left-4">
                "
              </div>
              <p className="text-gray-300 italic mb-6 relative z-10 pt-4">
                We used to hire a VA just to copy data. Now, n8n handles the
                entire lifecycle. We scaled from a side-project to a 6-figure
                business without adding headcount.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full" />
                <div>
                  <div className="text-white font-bold">SaaS Founder</div>
                  <div className="text-xs text-gray-500">Bordr Case Study</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-6 relative border-t border-white/5 bg-[#050505]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            READY TO SCALE?
          </h2>
          <p className="text-gray-400 mb-10">
            Start like a solopreneur, scale like a team of 10. <br />
            Get these workflow templates or hire me to build custom agents.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-design-green text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform w-full md:w-auto">
              Download Workflow Templates
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#1e1e1e] border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-colors w-full md:w-auto"
            >
              Book a Free Audit
            </button>
          </div>

          {/* Back Button (Requested Placement) */}
          <div className="mt-20 pt-10 border-t border-white/5">
            <button
              onClick={onBack}
              onMouseEnter={() => setLabel("Go Back")}
              onMouseLeave={() => setLabel(null)}
              className="text-gray-500 hover:text-white flex items-center gap-2 mx-auto transition-colors"
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
              Back to Main Portfolio
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailN8n;
