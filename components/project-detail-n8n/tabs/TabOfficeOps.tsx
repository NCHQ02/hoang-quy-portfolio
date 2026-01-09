import React from "react";
import { motion } from "framer-motion";
import InteractiveWorkflow, {
  WorkflowNode,
  WorkflowConnection,
} from "../widgets/InteractiveWorkflow";

// --- WORKFLOW DATA ---
const officeOpsNodes: WorkflowNode[] = [
  {
    id: "gmail",
    label: "Gmail Watch",
    icon: "📧",
    description:
      "Monitors Gmail inbox for new emails matching specific filters (sender, subject, labels).",
    x: 40,
    y: 40,
    color: "#EA4335",
  },
  {
    id: "scraper",
    label: "Web Scraper",
    icon: "🕷️",
    description:
      "Puppeteer-based scraper extracts data from websites, news sources, and APIs on schedule.",
    x: 40,
    y: 140,
    color: "#34A853",
  },
  {
    id: "ai-process",
    label: "AI Process",
    icon: "🧠",
    description:
      "GPT-4 analyzes, summarizes, categorizes, and extracts key insights from raw data.",
    x: 200,
    y: 90,
    color: "#8B5CF6",
  },
  {
    id: "sheets",
    label: "Google Sheets",
    icon: "📊",
    description:
      "Auto-populates spreadsheets with processed data, generates charts and reports.",
    x: 380,
    y: 40,
    color: "#0F9D58",
  },
  {
    id: "notion",
    label: "Notion DB",
    icon: "📓",
    description:
      "Creates structured entries in Notion databases with proper tagging and relations.",
    x: 380,
    y: 140,
    color: "#000000",
  },
  {
    id: "notify",
    label: "Notify",
    icon: "🔔",
    description:
      "Sends alerts via Slack, Email, or SMS when important events or thresholds are detected.",
    x: 540,
    y: 90,
    color: "#4A154B",
  },
];

const officeOpsConnections: WorkflowConnection[] = [
  { from: "gmail", to: "ai-process" },
  { from: "scraper", to: "ai-process" },
  { from: "ai-process", to: "sheets" },
  { from: "ai-process", to: "notion" },
  { from: "sheets", to: "notify" },
  { from: "notion", to: "notify" },
];

// --- USE CASE CARDS ---
const UseCaseCard = ({
  icon,
  title,
  description,
  saves,
}: {
  icon: string;
  title: string;
  description: string;
  saves: string;
}) => (
  <motion.div
    className="bg-[#1a1a1a] border border-white/10 rounded-xl p-5 hover:border-[#10B981]/50 transition-colors"
    whileHover={{ y: -4 }}
  >
    <div className="flex items-start gap-4">
      <div className="text-3xl">{icon}</div>
      <div className="flex-1">
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-gray-500 text-sm mb-2">{description}</p>
        <div className="inline-flex items-center gap-1 text-[#10B981] text-xs font-bold">
          <span>⏱️</span>
          <span>Saves {saves}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- INTEGRATION BADGE ---
const IntegrationBadge = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2">
    <span className="text-xl">{icon}</span>
    <span className="text-xs text-gray-400 font-medium">{name}</span>
  </div>
);

// --- MAIN COMPONENT ---
const TabOfficeOps: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="py-12"
    >
      {/* Section Header */}
      <div className="text-center mb-12 px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] px-4 py-2 rounded-full mb-6 text-sm font-bold"
        >
          <span>📋</span>
          <span>OFFICE AUTOMATION</span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          Work Smarter,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]">
            Not Harder
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Automate the boring office tasks: email triage, data entry, news
          monitoring, and report generation. Focus on what matters.
        </p>
      </div>

      {/* Interactive Workflow */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <InteractiveWorkflow
          nodes={officeOpsNodes}
          connections={officeOpsConnections}
          themeColor="#10B981"
          title="office_automation_suite.n8n"
        />
      </div>

      {/* Use Cases */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h3 className="text-xl font-bold text-white text-center mb-8">
          Common Use Cases
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UseCaseCard
            icon="📧"
            title="Gmail AI Summary"
            description="Get daily digest of important emails with AI-generated summaries and action items."
            saves="30 min/day"
          />
          <UseCaseCard
            icon="📰"
            title="News Aggregation"
            description="Scrape industry news, summarize articles, and deliver a personalized morning briefing."
            saves="1 hour/day"
          />
          <UseCaseCard
            icon="📊"
            title="Data Entry Automation"
            description="Extract data from PDFs, forms, and emails directly into spreadsheets."
            saves="5 hours/week"
          />
          <UseCaseCard
            icon="🔍"
            title="Competitor Monitoring"
            description="Track competitor websites, social media, and pricing changes automatically."
            saves="2 hours/week"
          />
          <UseCaseCard
            icon="📅"
            title="Calendar Optimization"
            description="Smart scheduling assistant that finds meeting times and sends invites."
            saves="1 hour/week"
          />
          <UseCaseCard
            icon="📄"
            title="Report Generation"
            description="Auto-generate weekly reports from multiple data sources with charts."
            saves="3 hours/week"
          />
        </div>
      </div>

      {/* Integrations */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <h3 className="text-xl font-bold text-white text-center mb-6">
          Integrations
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          <IntegrationBadge name="Gmail" icon="📧" />
          <IntegrationBadge name="Google Sheets" icon="📊" />
          <IntegrationBadge name="Notion" icon="📓" />
          <IntegrationBadge name="Slack" icon="💬" />
          <IntegrationBadge name="Airtable" icon="📋" />
          <IntegrationBadge name="Telegram" icon="✈️" />
          <IntegrationBadge name="Discord" icon="🎮" />
          <IntegrationBadge name="Trello" icon="📝" />
        </div>
      </div>

      {/* Before/After Stats */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#10B981]/10 to-[#059669]/10 border border-[#10B981]/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Weekly Time Savings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-red-400 line-through opacity-50">
                15h
              </div>
              <div className="text-4xl font-black text-[#10B981]">2h</div>
              <div className="text-gray-500 text-sm mt-2">Email Management</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-400 line-through opacity-50">
                10h
              </div>
              <div className="text-4xl font-black text-[#10B981]">0h</div>
              <div className="text-gray-500 text-sm mt-2">Data Entry</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-400 line-through opacity-50">
                5h
              </div>
              <div className="text-4xl font-black text-[#10B981]">30m</div>
              <div className="text-gray-500 text-sm mt-2">Report Creation</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TabOfficeOps;
