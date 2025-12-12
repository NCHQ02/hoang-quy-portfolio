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

// A "Code Block" container for visuals
const CodeWindow = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) => (
  <div className="bg-[#0D1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
    <div className="bg-[#161B22] px-3 py-2 border-b border-white/5 flex items-center justify-between">
      <span className="text-gray-400">{title}</span>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
      </div>
    </div>
    <div className="p-4 relative">{children}</div>
  </div>
);

// Error Log Component
const ErrorLog = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2 text-red-400 bg-red-500/10 p-2 rounded mb-1 border border-red-500/20">
    <span className="text-[10px] font-bold mt-0.5">ERR!</span>
    <span>{text}</span>
  </div>
);

// --- MAIN COMPONENT ---

const ProjectDetailVibe: React.FC<Props> = ({ onBack }) => {
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
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="relative z-50 bg-[#0a0a0a] min-h-screen pb-20 overflow-hidden font-mono"
    >
      {/* Global Grid for Engineering/Graph Paper Feel */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* --- HEADER NAVIGATION (IDE TABS STYLE) --- */}
      <div className="fixed top-24 left-0 right-0 z-40 px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-auto">
          <button
            onClick={onBack}
            onMouseEnter={() => setLabel("Home")}
            onMouseLeave={() => setLabel(null)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-[#1e1e1e]/90 backdrop-blur-md px-4 py-2 rounded-t-lg border border-white/10 border-b-0 -mb-[1px] z-10"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span className="text-xs font-bold">explorer.tsx</span>
          </button>

          <div className="bg-[#2C2C2E] px-4 py-2 rounded-t-lg border border-white/10 border-b-0 text-white flex items-center gap-2 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-design-green" />
            <span className="text-xs font-mono">vibe_suite.config.ts</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto h-px bg-white/10" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="pt-48 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-design-green/10 border border-design-green/30 text-design-green px-3 py-1 rounded mb-4 text-xs font-bold"
            >
              v2.0.0 RELEASE
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
              PRODUCT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-design-green to-emerald-600">
                ENGINEERING SUITE
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-sans">
              Stop manual debugging. I build internal tools that auto-tag GTM,
              sync offline rewards, and manage affiliate notifications
              automatically.
            </p>

            <div className="flex gap-4">
              <button className="bg-design-green text-black px-6 py-3 rounded font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                npm install suite
              </button>
              <button className="bg-transparent border border-white/20 text-white px-6 py-3 rounded font-bold hover:bg-white/10 transition-colors font-sans">
                View Documentation
              </button>
            </div>
          </div>

          {/* Hero Visual: The "Suite" Dashboard */}
          <div className="relative">
            <CodeWindow title="suite_dashboard.tsx">
              <div className="grid grid-cols-2 gap-4 h-64">
                {/* Auto-tagger status */}
                <div className="bg-[#0a0a0a] p-3 rounded border border-white/5 flex flex-col justify-between">
                  <div className="text-xs text-gray-500">GTM AUTO-TAGGER</div>
                  <div className="text-2xl font-bold text-design-green">
                    98.5%
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-design-green w-[98%]" />
                  </div>
                </div>
                {/* Offline App Status */}
                <div className="bg-[#0a0a0a] p-3 rounded border border-white/5 flex flex-col justify-between">
                  <div className="text-xs text-gray-500">OFFLINE SYNC</div>
                  <div className="text-2xl font-bold text-blue-400">SYNCED</div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    Live
                  </div>
                </div>
                {/* Terminal output */}
                <div className="col-span-2 bg-[#0a0a0a] p-2 rounded border border-white/5 font-mono text-[10px] text-gray-400 h-full overflow-hidden opacity-70">
                  &gt; scanning urls... done (4ms)
                  <br />
                  &gt; detecting 404s... 0 found
                  <br />
                  &gt; pushing affiliate_notify... success
                  <br />
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </CodeWindow>

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-8 -bottom-8 bg-[#1e1e1e] p-3 rounded-lg border border-white/10 shadow-xl"
            >
              <div className="text-[10px] text-gray-500 mb-1">
                Total Time Saved
              </div>
              <div className="text-xl font-bold text-white">~200h/mo</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM SECTION (The "Manual" Debugging) --- */}
      <section className="py-20 px-6 relative border-t border-white/5 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <SectionNumber num="01" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Visual: The Error Log */}
            <div className="relative">
              <CodeWindow title="manual_process_logs.txt">
                <div className="space-y-2 h-64 overflow-hidden">
                  <ErrorLog text="GTM Tag mismatch on /checkout" />
                  <ErrorLog text="Offline event data lost (Connection Timeout)" />
                  <ErrorLog text="Affiliate payout notification delayed > 24h" />
                  <div className="text-gray-500 mt-4 text-[10px]">
                    // TODO: Fix this mess before Monday launch!
                  </div>
                </div>
              </CodeWindow>
              <div className="absolute -inset-1 bg-red-500/10 blur-xl -z-10" />
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                The Deployment Nightmare
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed font-sans">
                E-commerce teams often miss 30% of event tracking because of
                manual GTM setups. Offline events result in duplicate rewards,
                and affiliates lose interest when notifications are slow.
              </p>
              <ul className="space-y-3 font-mono text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">x</span> ROI discrepancy &gt;
                  40%
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">x</span> Customer support
                  flooded with "Where's my reward?"
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">x</span> Dev team stuck fixing
                  tags instead of shipping features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTION SECTION (The 3 Tools) --- */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionNumber num="02" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            The Engineering Solution
          </h2>

          <div className="space-y-24">
            {/* Tool 1: Auto-Tagging */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="text-design-green font-mono text-xs mb-2">
                  01 // AUTOMATION
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Auto-Tagging GTM/GA4
                </h3>
                <p className="text-gray-400 font-sans mb-4">
                  A React + Node.js tool that scans URLs, detects interactive
                  elements, and automatically deploys the correct GTM tags via
                  API.
                </p>
                <div className="flex gap-2 text-[10px] font-mono">
                  <span className="bg-[#1e1e1e] px-2 py-1 rounded text-gray-300">
                    Google Tag Manager API
                  </span>
                  <span className="bg-[#1e1e1e] px-2 py-1 rounded text-gray-300">
                    Puppeteer
                  </span>
                </div>
              </div>
              <div className="md:col-span-7">
                <CodeWindow title="auto_tagger.js">
                  <div className="text-gray-400">
                    <span className="text-purple-400">await</span>{" "}
                    gtm.createTag({"{\n"}
                    <span className="pl-4 text-white">
                      name: 'Click_Checkout',
                    </span>
                    {"\n"}
                    <span className="pl-4 text-white">type: 'ua_event',</span>
                    {"\n"}
                    <span className="pl-4 text-white">trigger: triggerId</span>
                    {"\n"}
                    {"}"});
                    <div className="text-design-green mt-2">
                      // Tag deployed successfully to 50 containers.
                    </div>
                  </div>
                </CodeWindow>
              </div>
            </div>

            {/* Tool 2: Offline App */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 order-2 md:order-1 relative">
                {/* Mobile Frame Mockup */}
                <div className="w-64 h-32 md:w-full md:h-64 bg-[#0a0a0a] border border-white/10 rounded-xl relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black" />
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </div>
                    <div className="text-white font-bold">
                      Syncing Offline Data...
                    </div>
                    <div className="text-xs text-gray-400">
                      5000+ Records Queued
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 order-1 md:order-2">
                <div className="text-blue-400 font-mono text-xs mb-2">
                  02 // MOBILE APP
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Offline Event Reward App
                </h3>
                <p className="text-gray-400 font-sans mb-4">
                  React Native app handling check-ins and rewards without
                  internet. Syncs seamlessly when back online, ensuring zero
                  data loss for 5000+ pax events.
                </p>
              </div>
            </div>

            {/* Tool 3: CMS */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="text-design-purple font-mono text-xs mb-2">
                  03 // INTERNAL TOOLS
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Mini-CMS Affiliate Notify
                </h3>
                <p className="text-gray-400 font-sans mb-4">
                  A dedicated Node.js dashboard to track commissions and trigger
                  real-time push/SMS notifications, boosting affiliate
                  engagement by 25%.
                </p>
              </div>
              <div className="md:col-span-7">
                <CodeWindow title="cms_notify.ts">
                  <div className="text-gray-400">
                    <span className="text-purple-400">if</span> (commission &gt;
                    100) {"{\n"}
                    <span className="pl-4 text-white">
                      await notify.push(user_id, "You earned $100!");
                    </span>
                    {"\n"}
                    <span className="pl-4 text-white">
                      await db.updateStatus("PAID");
                    </span>
                    {"\n"}
                    {"}"}
                  </div>
                </CodeWindow>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- METRICS / BENCHMARK --- */}
      <section className="py-24 px-6 relative bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionNumber num="03" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            System Performance
          </h2>

          <div className="bg-[#0D1117] border border-white/10 rounded-xl overflow-hidden font-mono text-sm">
            <div className="grid grid-cols-3 bg-[#161B22] p-4 text-gray-400 font-bold border-b border-white/5">
              <div>MODULE</div>
              <div>MANUAL PROCESS</div>
              <div className="text-design-green">VIBE SUITE</div>
            </div>
            {[
              {
                name: "GTM Tagging",
                manual: "10h / store",
                auto: "5min / container",
              },
              {
                name: "Offline Sync",
                manual: "20% Duplicates",
                auto: "100% Integrity",
              },
              {
                name: "Affiliate Msg",
                manual: "Email (Slow)",
                auto: "Push (Instant)",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <div className="text-white">{row.name}</div>
                <div className="text-red-400">{row.manual}</div>
                <div className="text-design-green font-bold flex items-center gap-2">
                  {row.auto}
                  {i === 0 && (
                    <span className="text-[8px] bg-design-green text-black px-1 rounded">
                      FAST
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#1e1e1e] rounded-xl border-l-4 border-design-purple">
            <p className="text-gray-300 italic font-sans text-lg">
              "We transformed from a team of freelancers debugging manually to
              an enterprise-grade operation using this suite. It handles the
              boring stuff so we can code the fun stuff."
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            BUILD LIKE A PRO
          </h2>
          <p className="text-gray-400 mb-10 font-sans">
            Ready to automate your engineering workflows? <br />
            Get the Vibe Suite or book a custom demo.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-design-purple text-white px-8 py-4 rounded font-bold hover:scale-105 transition-transform w-full md:w-auto shadow-lg shadow-purple-500/20">
              Get Started for Free
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#1e1e1e] border border-white/10 text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-black transition-colors w-full md:w-auto"
            >
              Book Technical Demo
            </button>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5">
            <button
              onClick={onBack}
              onMouseEnter={() => setLabel("Go Back")}
              onMouseLeave={() => setLabel(null)}
              className="text-gray-500 hover:text-white flex items-center gap-2 mx-auto transition-colors font-sans text-sm"
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

export default ProjectDetailVibe;
