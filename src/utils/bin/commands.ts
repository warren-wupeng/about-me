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

// Intro — interview self-introduction (4-point timeline narrative)
export const intro = async (args: string[]): Promise<string> => {
  return `
── Warren Wu · 吴鹏 ─────────────────────

  我在每一波 AI 浪潮里都是第一批做产品的人。
  First to ship at every AI inflection point.

  2023 ── ChatGPT wave
           RAG chatbot + image-note app

  2024 ── Coding wave
           Vibe Coding tool (Claude 3.5)
           Websites for non-developers

  2026 ── Agent wave  (HappyCapy)
           19d · 10K sandboxes · $2K/yr
           PH: 1,342 votes · 7 launches · 5K+ total

  Open-source: build-my-own-coding-agent
           6 versions · 33 → 16K lines · V6 Agent Team
           PM + Engineer + Strategist — autonomous team

  Now ──── Data Analysis Agent
           NL → SQL · enterprise platforms
           Databricks + Spark/Trino · 5 days

─────────────────────────────────────────

  联想要做数据分析 Agent，
  我已经用 5 天做出了 MVP。
  这就是我来这里的原因。

─────────────────────────────────────────
  Type 'projects' to see what I've built →`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}.
你好，我是 ${config.name}。

I build AI products at every wave.
我在每一波 AI 浪潮里都是第一批做产品的人。

  2023  ChatGPT → RAG chatbot + image-note app
  2024  Claude 3.5 → Vibe Coding tool
  2026  Agent → HappyCapy
        19d · 10K sandboxes · 55 subs @ $2K/yr

Current focus: Data Analysis Agent
NL → SQL for enterprise data platforms.
Built MVP in 5 days.

Type 'intro'    — interview self introduction.
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
  │  "I build AI at every wave."         │
  │  每波 AI 浪潮里第一批做产品的人。    │
  │                                      │
  │  2023  ChatGPT  →  RAG apps          │
  │  2024  Coding   →  Vibe Coding tool  │
  │  2026  Agent    →  HappyCapy         │
  │                                      │
  └──────────────────────────────────────┘`;
};

// Projects — interview order: Data Agent first, then proposal, HappyCapy, coding-agent
export const projects = async (args: string[]): Promise<string> => {
  return `
── Projects ────────── click link to open →

  data-analysis-agent          [2026 · Demo]
  NL → SQL · enterprise platforms
  Databricks + Spark/Trino · built in 5 days
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://data-analysis-agent-warren.fly.dev" target="_blank">data-analysis-agent-warren.fly.dev ↗</a></u>

  lenovo-data-agent-proposal      [2026]
  3-phase roadmap · dual-env architecture
  Pass-through security · semantic layer
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://warren-wupeng.github.io/lenovo-data-agent-proposal/" target="_blank">warren-wupeng.github.io/.../proposal ↗</a></u>

  HappyCapy                    [2026 · Live]
  AI-native sandbox platform
  19d · 10K sandboxes · 55 subs · PH 1,342 votes
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://happcapy.ai" target="_blank">happcapy.ai ↗</a></u>
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.producthunt.com/products/happycapy/launches" target="_blank">7 launches on Product Hunt (5K+ total votes) ↗</a></u>

  build-my-own-coding-agent  [2025-26 · OSS]
  6 versions · 33 → 16K lines · 67 tests
  V6: Multi-Agent Team (PM/Engineer/Strategist)
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/warren-wupeng/build-my-own-coding-agent" target="_blank">github.com/warren-wupeng/coding-agent ↗</a></u>

─────────────────────────────────────────
Type 'hire' to see what I'm looking for.`;
};

// Hire
export const hire = async (args: string[]): Promise<string> => {
  return `
── Open to Work ──────────────────────────

  Role    Product Manager / AI Product
  Focus   Agent systems · enterprise data
  Stack   Python · TypeScript · LLM · FastAPI

  What I bring:
  · HappyCapy: 12K users · 476 paid · 4% conversion
  · Coding agent: 33 → 16K lines, V6
  · Can code AND define product strategy

  Reach me:
  · Email   <u><a class="text-light-blue dark:text-dark-blue underline" href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  · LinkedIn <u><a class="text-light-blue dark:text-dark-blue underline" href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
  · GitHub  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>

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

每一波浪潮，我都是第一个出手的人
Every wave, I'm the first to ship

代码为骨，Agent 为翼，数据为疆
Code as backbone, agents as wings, data as domain


Type 'intro'    — self introduction (start here).
Type 'projects' — things I've built + live demos.
Type 'hire'     — if you're looking for someone like me.
Type 'sumfetch' — quick summary.
`;
};
