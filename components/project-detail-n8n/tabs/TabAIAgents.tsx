import React from "react";
import { motion } from "framer-motion";
import InteractiveWorkflow, {
  WorkflowNode,
  WorkflowConnection,
} from "../widgets/InteractiveWorkflow";

// --- WORKFLOW DATA ---
const aiAgentNodes: WorkflowNode[] = [
  {
    id: "input",
    label: "Prompt Input",
    icon: "💬",
    description:
      "User submits a creative prompt describing the desired image, video, or content to generate.",
    x: 40,
    y: 100,
    color: "#8B5CF6",
  },
  {
    id: "mcp",
    label: "MCP Server",
    icon: "🔌",
    description:
      "Model Context Protocol server routes requests to the appropriate AI model based on task type and availability.",
    x: 200,
    y: 100,
    color: "#3B82F6",
  },
  {
    id: "dall-e",
    label: "DALL-E 3",
    icon: "🎨",
    description:
      "OpenAI's DALL-E 3 generates high-quality images from text descriptions with excellent prompt adherence.",
    x: 380,
    y: 40,
    color: "#10B981",
  },
  {
    id: "midjourney",
    label: "Midjourney",
    icon: "🖼️",
    description:
      "Midjourney creates artistic, stylized images with unique aesthetic qualities via Discord API bridge.",
    x: 380,
    y: 120,
    color: "#F472B6",
  },
  {
    id: "runway",
    label: "Runway ML",
    icon: "🎬",
    description:
      "Runway generates videos from images or text, perfect for social media content and marketing materials.",
    x: 380,
    y: 200,
    color: "#FACC15",
  },
  {
    id: "storage",
    label: "Asset Storage",
    icon: "☁️",
    description:
      "Generated assets are automatically uploaded to cloud storage (S3/Cloudflare R2) with CDN delivery.",
    x: 560,
    y: 120,
    color: "#6B7280",
  },
];

const aiAgentConnections: WorkflowConnection[] = [
  { from: "input", to: "mcp" },
  { from: "mcp", to: "dall-e" },
  { from: "mcp", to: "midjourney" },
  { from: "mcp", to: "runway" },
  { from: "dall-e", to: "storage" },
  { from: "midjourney", to: "storage" },
  { from: "runway", to: "storage" },
];

// --- FEATURE CARDS ---
const AgentCard = ({
  icon,
  name,
  description,
  color,
  tags,
}: {
  icon: string;
  name: string;
  description: string;
  color: string;
  tags: string[];
}) => (
  <motion.div
    className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 hover:border-opacity-50 transition-all group relative overflow-hidden"
    style={{ borderColor: `${color}30` }}
    whileHover={{ y: -4, borderColor: `${color}80` }}
  >
    {/* Glow */}
    <div
      className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-3xl"
      style={{ backgroundColor: color }}
    />

    <div className="relative z-10">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-bold text-white mb-2">{name}</h4>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded-full"
            style={{ backgroundColor: `${color}20`, color: color }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// --- MAIN COMPONENT ---
const TabAIAgents: React.FC = () => {
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
          className="inline-flex items-center gap-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] px-4 py-2 rounded-full mb-6 text-sm font-bold"
        >
          <span>🤖</span>
          <span>AI AGENTS & MCP</span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          One Prompt,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A855F7]">
            Infinite Creations
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          MCP Server orchestrates multiple AI models - from image generation to
          video creation. Pick the best tool for each job, automatically.
        </p>
      </div>

      {/* Interactive Workflow */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <InteractiveWorkflow
          nodes={aiAgentNodes}
          connections={aiAgentConnections}
          themeColor="#8B5CF6"
          title="ai_agent_orchestrator.n8n"
        />
      </div>

      {/* AI Models Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h3 className="text-xl font-bold text-white text-center mb-8">
          Integrated AI Models
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AgentCard
            icon="🎨"
            name="DALL-E 3"
            description="High-fidelity image generation with excellent text rendering and prompt accuracy."
            color="#10B981"
            tags={["Images", "Text-to-Image", "OpenAI"]}
          />
          <AgentCard
            icon="🖼️"
            name="Midjourney"
            description="Artistic, stylized images with unique aesthetic. Discord API integration."
            color="#F472B6"
            tags={["Art", "Stylized", "Discord"]}
          />
          <AgentCard
            icon="🎬"
            name="Runway ML"
            description="Generate videos from text or images. Perfect for social media content."
            color="#FACC15"
            tags={["Video", "Animation", "Gen-2"]}
          />
          <AgentCard
            icon="🎤"
            name="ElevenLabs"
            description="Ultra-realistic voice synthesis for narration and character voices."
            color="#EF4444"
            tags={["Voice", "TTS", "Cloning"]}
          />
          <AgentCard
            icon="🎵"
            name="Suno AI"
            description="Generate original music tracks from text descriptions and moods."
            color="#3B82F6"
            tags={["Music", "Audio", "Lyrics"]}
          />
          <AgentCard
            icon="📝"
            name="Claude / GPT-4"
            description="Advanced reasoning and content generation for scripts and copy."
            color="#8B5CF6"
            tags={["Text", "Reasoning", "Code"]}
          />
        </div>
      </div>

      {/* MCP Highlight */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#8B5CF6]/10 to-[#3B82F6]/10 border border-[#8B5CF6]/20 rounded-2xl p-8 text-center">
          <div className="text-5xl mb-4">🔌</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Model Context Protocol (MCP)
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            My custom MCP server acts as a unified gateway to all AI models.
            Define once, use everywhere. Hot-swap models without changing your
            workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/5 px-4 py-2 rounded-lg text-gray-300">
              ✓ Model Abstraction
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-lg text-gray-300">
              ✓ Rate Limiting
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-lg text-gray-300">
              ✓ Cost Tracking
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-lg text-gray-300">
              ✓ Fallback Routing
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TabAIAgents;
