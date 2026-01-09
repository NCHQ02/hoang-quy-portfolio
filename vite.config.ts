import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react()],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Split React and React-DOM into separate chunk
            "react-vendor": ["react", "react-dom"],
            // Split Framer Motion into separate chunk (it's large)
            "framer-motion": ["framer-motion"],
            // Split Vercel analytics into separate chunk
            analytics: ["@vercel/analytics", "@vercel/speed-insights"],
          },
        },
      },
      // Increase chunk size warning limit to 600 kB
      chunkSizeWarningLimit: 600,
    },
  };
});
