/**
 * ALL portfolio content lives in this file.
 * Edit text, links and projects here — no need to touch the components.
 *
 * Empty strings ("") are hidden on the site automatically, so nothing
 * half-finished ever shows. Fill them in when you have them.
 */

export const profile = {
  name: "Muniba",
  role: "Agentic AI Developer · Full-Stack Engineer · Educator",
  location: "Karachi, Pakistan",
  availability: "Open to remote roles, freelance & collaborations",
  tagline:
    "I build agentic AI systems and full-stack products — and teach hundreds of students to do the same.",
  // Put your photo at /public/profile.jpg and set this to "/profile.jpg"
  photo: "",
  // Put your CV at /public/resume.pdf and set this to "/resume.pdf"
  resumeUrl: "",
  // Your deployed URL, used for SEO / link previews, e.g. "https://muniba.dev"
  siteUrl: "",
};

export const links = {
  github: "https://github.com/munibaweb123",
  youtube: "https://www.youtube.com/@newtechworld1",
  fiverr: "https://www.fiverr.com/munnig123",
  discord: "https://discord.com/users/1211021231197786174",
  upwork: "", // e.g. "https://www.upwork.com/freelancers/~0123..."
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
  email: "", // the address you want on the public site
};

export const stats = [
  { value: "100+", label: "students per weekend cohort" },
  { value: "5", label: "hackathons & build challenges" },
  { value: "1", label: "agent live in the GitLab AI Catalog" },
  { value: "6 yrs", label: "of design before code" },
];

export const about = {
  paragraphs: [
    "I'm an agentic AI developer and full-stack engineer on the faculty of Panaversity's Agent Factory / GIAIC program, where I run marathon weekend classes for cohorts of 100+ students.",
    "Before code, I spent six years as a freelance graphic designer. That's why my products ship with the UI taken as seriously as the agent behind it. Today I build with Next.js, FastAPI and the OpenAI Agents SDK, co-run a fashion e-commerce brand, and make videos about AI and cloud-native development on my YouTube channel, TechWorld.",
  ],
  pillars: [
    {
      title: "Agent builder",
      body: "Multi-tenant agent SaaS, MR-analysis agents and complaint-triage pipelines — agents wired into real data with guardrails and human review.",
    },
    {
      title: "Full-stack engineer",
      body: "Next.js + FastAPI + Postgres from schema to deploy, including row-level security, CMS-driven storefronts and dashboards.",
    },
    {
      title: "Educator",
      body: "Teaching the Agent Factory curriculum at scale, plus the decks, quizzes, games and grading pipelines that make that possible.",
    },
    {
      title: "Designer's eye",
      body: "Six years of client design work before engineering — layouts, brand palettes and interfaces people actually enjoy using.",
    },
  ],
  education: [
    { degree: "MCS", school: "Virtual University of Pakistan", years: "2020 – 2022" },
    { degree: "BSCS", school: "SSGGC, University of Karachi", years: "2015 – 2018" },
  ],
};

export const stack: { group: string; items: string[] }[] = [
  { group: "AI & Agents", items: ["OpenAI Agents SDK", "MCP", "Claude Code", "Gemini", "Prompt engineering", "Human-in-the-loop"] },
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Flutter"] },
  { group: "Backend & Data", items: ["Python", "FastAPI", "PostgreSQL", "Prisma", "Supabase", "Neon", "Sanity CMS", "Firebase"] },
  { group: "Cloud & DevOps", items: ["Docker", "Kubernetes", "AWS Aurora", "Vercel", "WSL2 / Ubuntu", "Google Apps Script"] },
];

export type Project = {
  title: string;
  kind: string;
  summary: string;
  role?: string;
  tags: string[];
  repo?: string; // GitHub URL — button is hidden while empty
  live?: string; // live demo URL — button is hidden while empty
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "PropFlow AI",
    kind: "Hackathon · H0, June 2026",
    summary:
      "Multi-tenant B2B real-estate CRM SaaS for Pakistani agencies, with OpenAI Agents SDK agents running on tenant-isolated data protected by row-level security.",
    role: "Team lead",
    tags: ["Next.js", "FastAPI", "OpenAI Agents SDK", "Aurora PostgreSQL", "Prisma", "Row-level security"],
    repo: "",
    live: "",
    featured: true,
  },
  {
    title: "Blast Radius Impact Agent",
    kind: "Hackathon · GitLab Transcend",
    summary:
      "An agent that analyses the blast radius of a merge request and posts a structured impact report as an MR comment. Published to the GitLab AI Catalog.",
    tags: ["FastAPI", "OpenAI Agents SDK", "GitLab Orbit"],
    repo: "",
    live: "",
    featured: true,
  },
  {
    title: "ZARIYA",
    kind: "Venture · Co-founder",
    summary:
      "A Pakistani women's fashion e-commerce platform, built with a spec-driven workflow on a CMS-driven Next.js storefront.",
    tags: ["Next.js 16", "Tailwind v4", "Sanity CMS", "Neon Postgres", "Prisma", "Zustand"],
    repo: "",
    live: "",
  },
  {
    title: "Sycophancy Trap",
    kind: "Teaching game · Faculty Challenge",
    summary:
      "An HTML5 game that teaches learners to spot when an AI is just telling them what they want to hear. Built for the Governor House AI Summer Camp.",
    tags: ["HTML5", "JavaScript", "AI literacy"],
    repo: "",
    live: "https://sycophancy-trap.netlify.app",
  },
  {
    title: "Context Kitchen",
    kind: "Teaching game · Faculty Challenge",
    summary:
      "A second teaching game built for the same Faculty Challenge, deployed for camp students to play.",
    tags: ["HTML5", "JavaScript", "AI literacy"],
    repo: "",
    live: "",
  },
  {
    title: "AI Grading Pipeline",
    kind: "Teaching infrastructure",
    summary:
      "Grades 100+ student submissions per assignment with Gemini, writes results to a workbook and sends personalised feedback emails in bulk.",
    tags: ["Google Apps Script", "Gemini", "Google Sheets"],
    repo: "",
    live: "",
  },
];

// "when" is optional — leave "" to hide the date
export const hackathons = [
  {
    event: "H0 Hackathon",
    when: "June 2026",
    what: "PropFlow AI — led the team building a multi-tenant real-estate CRM SaaS.",
    status: "Team lead",
  },
  {
    event: "GitLab Transcend",
    when: "",
    what: "Blast Radius Impact Agent — shipped and published to the GitLab AI Catalog.",
    status: "Published",
  },
  {
    event: "Antigravity Hackathon (AI Seekho)",
    when: "",
    what: "Led a four-person team on Challenge 2, a Service Orchestrator, with Flutter, FastAPI, Firebase and Gemini.",
    status: "Team lead",
  },
  {
    event: "AI Seekho 2026 · Google Pakistan",
    when: "2026",
    what: "Prototyped CookingIQ and KhidmatGar AI. Earned the Silver Tier swag package and Google Skills badges in Phase 1.",
    status: "Silver Tier",
  },
  {
    event: "Governor House AI Summer Camp · Faculty Challenge",
    when: "",
    what: "Built and deployed two teaching games: Sycophancy Trap and Context Kitchen.",
    status: "Shipped",
  },
];

export const teaching = {
  intro:
    "I taught at the Governor House AI Summer Camp, Faculty Challenge, building hands-on games that teach students AI concepts by letting them fail safely.",
  topics: [
    "AI Prompting for teens (Roman Urdu)",
  ],
  builds: [
    { title: "Teaching games", body: "Built and deployed two playable HTML5 games for the AI Summer Camp: Sycophancy Trap and Context Kitchen, teaching sycophancy and context engineering by letting students fail safely." },
  ],
};

export const youtube = {
  channel: "TechWorld",
  handle: "@newtechworld1",
  pitch: "Tutorials and walkthroughs on agentic AI, cloud-native development and DevOps, made for developers in Pakistan and beyond.",
  topics: ["Agentic AI", "OpenAI Agents SDK", "Cloud-native", "Docker & Kubernetes", "DevOps", "Dev setup on WSL2"],
  /**
   * Add videos to feature them. Use the ID from the video URL:
   * https://www.youtube.com/watch?v=ABC123xyz  ->  id: "ABC123xyz"
   */
  featured: [] as { id: string; title: string }[],
};

export const ventures = [
  {
    title: "ZARIYA",
    role: "Co-founder",
    body: "A Pakistani women's fashion e-commerce brand. I lead the platform: storefront, CMS, database and the spec-driven build workflow.",
    link: "",
  },
  {
    title: "Fiverr",
    role: "AI & web development services",
    body: "Agent integrations, Next.js and FastAPI builds, and automation for clients, building on six years of design work on the platform.",
    link: links.fiverr,
  },
  {
    title: "Upwork",
    role: "Freelance engineering",
    body: "Longer client engagements: full-stack products, AI features and workflow automation.",
    link: links.upwork,
  },
];
