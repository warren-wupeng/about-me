// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// Intro — interview self-introduction (architecture + AI dual narrative)
export const intro = async (args: string[]): Promise<string> => {
  return `
── Warren Wu · 吴鹏 ─────────────────────

  14 年后端，每一波 AI 浪潮第一批出产品。
  14 yrs backend · first to ship at every AI wave.

  Architecture ── DDD + CQRS + Event-Driven
           7 microservices · QPS ~167 · p95 ~213ms
           FastAPI async-first · Celery distributed

  AI Platform ── HappyCapy (Agent Platform)
           AI Gateway · MCP + Tool Calling
           Multi-sandbox execution engine
           19d · 12K users · 476 paid · 4% CVR
           PH: 1,342 votes · triple #1

  AI + Business ── How I embed AI into systems
           RAG knowledge retrieval (2023)
           AI-assisted code generation (2024)
           Agent-driven automation (2026)

  Open-source: build-my-own-coding-agent
           6 versions · 33 → 16K lines · V6 Agent Team

─────────────────────────────────────────

  架构能力 × AI 落地经验
  = 把 AI 真正嵌入业务系统的人

─────────────────────────────────────────
  Type 'projects' to see what I've built →`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}.
你好，我是 ${config.name}。

14 yrs backend · architect + AI builder.
14 年后端经验，架构师 + AI 产品构建者。

  Architecture  DDD/CQRS · 7 microservices · QPS ~167
  AI Platform   HappyCapy · 12K users · PH triple #1
  AI Coding     Claude Code daily driver · OSS agent
  Overseas      Stripe · i18n · AWS/Fly.io

I build systems where AI is not a demo,
but a production component that drives business.

Type 'intro'    — self introduction (start here).
Type 'sumfetch' — quick summary.
Type 'projects' — things I've built.
Type 'hire'     — open to work.
Type 'resume'   — my latest resume.`;
};

// Mission
export const mission = async (args: string[]): Promise<string> => {
  return `
  ┌──────────────────────────────────────┐
  │                                      │
  │  架构能力 × AI 落地经验              │
  │  Architecture × AI Production        │
  │                                      │
  │  DDD/CQRS    →  production systems   │
  │  AI Gateway  →  multi-model routing  │
  │  Agent       →  12K users, 4% CVR    │
  │                                      │
  └──────────────────────────────────────┘`;
};

// Projects — order: HappyCapy (architecture + AI), coding-agent, data-agent
export const projects = async (args: string[]): Promise<string> => {
  return `
── Projects ────────── click link to open →

  HappyCapy                    [2026 · Live]
  AI Agent Platform · DDD/CQRS · 7 microservices
  AI Gateway · MCP + Tool Calling · Multi-sandbox
  QPS ~167 · p95 ~213ms · 12K users · 4% CVR
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://happycapy.ai" target="_blank">happycapy.ai ↗</a></u>
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.producthunt.com/products/happycapy/launches" target="_blank">Product Hunt: 1,342 votes · triple #1 ↗</a></u>

  build-my-own-coding-agent  [2025-26 · OSS]
  6 versions · 33 → 16K lines · 67 tests
  V6: Multi-Agent Team (PM/Engineer/Strategist)
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/warren-wupeng/build-my-own-coding-agent" target="_blank">github.com/warren-wupeng/coding-agent ↗</a></u>

  data-analysis-agent          [2026 · Demo]
  NL → SQL · enterprise data platforms
  Databricks + Spark/Trino · built in 5 days
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://data-analysis-agent-warren.fly.dev" target="_blank">data-analysis-agent-warren.fly.dev ↗</a></u>

  5-Agent Team OS            [2026 · OSS]
  Hub-and-Spoke multi-agent coordination
  Async communication · Persona · SOP framework
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/warren-wupeng/agent-team-os" target="_blank">github.com/warren-wupeng/agent-team-os ↗</a></u>

─────────────────────────────────────────
Type 'hire' to see what I'm looking for.`;
};

// Hire
export const hire = async (args: string[]): Promise<string> => {
  return `
── Open to Work ──────────────────────────

  Role    Backend Architect / AI Architect
  Focus   Application architecture · AI systems
  Stack   Python · FastAPI · DDD/CQRS · LLM · MCP

  What I bring:
  · 14 yrs backend · DDD/CQRS microservices
  · AI platform from 0→1: 12K users · 4% CVR
  · AI Gateway + MCP + multi-sandbox engine
  · Claude Code daily driver · OSS coding agent
  · Overseas product: Stripe · i18n · AWS/Fly.io

  Reach me:
  · Email   <u><a class="text-light-blue dark:text-dark-blue underline" href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  · LinkedIn <u><a class="text-light-blue dark:text-dark-blue underline" href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
  · GitHub  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
  · 小红书   <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.xiaohongshu.com/user/profile/597f56f282ec393545fd6896" target="_blank">Warren和他的Agent团队 ↗</a></u>

─────────────────────────────────────────`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner — mobile-responsive: ASCII art on desktop, text logo on mobile
export const banner = (args?: string[]): string => {
  const narrow =
    typeof window !== 'undefined' && window.innerWidth < 640;

  const art = narrow
    ? `
  Warren Wu · 吴鹏
  ─────────────────────────────────────────`
    : `
  ██╗    ██╗ █████╗ ██████╗ ██████╗ ███████╗███╗   ██╗    ██╗    ██╗██╗   ██╗
  ██║    ██║██╔══██╗██╔══██╗██╔══██╗██╔════╝████╗  ██║    ██║    ██║██║   ██║
  ██║ █╗ ██║███████║██████╔╝██████╔╝█████╗  ██╔██╗ ██║    ██║ █╗ ██║██║   ██║
  ██║███╗██║██╔══██║██╔══██╗██╔══██╗██╔══╝  ██║╚██╗██║    ██║███╗██║██║   ██║
  ╚███╔███╔╝██║  ██║██║  ██║██║  ██║███████╗██║ ╚████║    ╚███╔███╔╝╚██████╔╝
   ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝     ╚══╝╚══╝  ╚═════╝ `;

  return `${art}

架构为骨，AI 为翼，产品为证
Architecture as backbone, AI as wings, product as proof


Type 'intro'    — self introduction (start here).
Type 'projects' — things I've built + live demos.
Type 'hire'     — if you're looking for someone like me.
Type 'sumfetch' — quick summary.
`;
};
