import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiNeon,
  SiSanity,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiUbuntu,
  SiGoogleappsscript,
  SiClaude,
  SiGooglegemini,
} from "react-icons/si";
import { FaAws, FaRobot, FaPlug, FaWandMagicSparkles, FaUserCheck, FaCubes } from "react-icons/fa6";

// Maps a stack item's label (as used in src/content/site.ts) to its logo + brand color.
// Items without an official logo fall back to a generic icon.
export const techIcons: Record<string, { Icon: IconType; color: string }> = {
  "OpenAI Agents SDK": { Icon: FaRobot, color: "#c084fc" },
  MCP: { Icon: FaPlug, color: "#c084fc" },
  "Claude Code": { Icon: SiClaude, color: "#c084fc" },
  Gemini: { Icon: SiGooglegemini, color: "#8e75f5" },
  "Prompt engineering": { Icon: FaWandMagicSparkles, color: "#c084fc" },
  "Human-in-the-loop": { Icon: FaUserCheck, color: "#c084fc" },

  "Next.js": { Icon: SiNextdotjs, color: "#ece8e1" },
  React: { Icon: SiReact, color: "#61dafb" },
  TypeScript: { Icon: SiTypescript, color: "#3178c6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38bdf8" },
  Zustand: { Icon: FaCubes, color: "#a8334d" },
  Flutter: { Icon: SiFlutter, color: "#54c5f8" },

  Python: { Icon: SiPython, color: "#ffd43b" },
  FastAPI: { Icon: SiFastapi, color: "#05998b" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169e1" },
  Prisma: { Icon: SiPrisma, color: "#ece8e1" },
  Supabase: { Icon: SiSupabase, color: "#3ecf8e" },
  Neon: { Icon: SiNeon, color: "#00e599" },
  "Sanity CMS": { Icon: SiSanity, color: "#f03e2f" },
  Firebase: { Icon: SiFirebase, color: "#ffca28" },

  Docker: { Icon: SiDocker, color: "#2496ed" },
  Kubernetes: { Icon: SiKubernetes, color: "#326ce5" },
  "AWS Aurora": { Icon: FaAws, color: "#ff9900" },
  Vercel: { Icon: SiVercel, color: "#ece8e1" },
  "WSL2 / Ubuntu": { Icon: SiUbuntu, color: "#e95420" },
  "Google Apps Script": { Icon: SiGoogleappsscript, color: "#4285f4" },
};
