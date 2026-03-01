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

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}.
你好，我是 ${config.name}。

I build AI products at every wave — I've been among the first to ship at every inflection point.
我在每一波 AI 浪潮里都是第一批做产品的人。

  2023  ChatGPT →  AI chatbot + RAG image-note app
  2024  Claude Sonnet 3.5  →  Vibe Coding tool (websites for non-coders)
  2026  Agent era  →  HappyCapy — 19 days · 10K sandboxes · 55 annual subscribers @ $2K/yr

Current focus: Data Analysis Agent — natural language to SQL for enterprise data platforms.
现在：用 5 天工作之余构建出数据分析 Agent MVP，让业务用自然语言查询企业级数据平台。

Type 'sumfetch' — quick summary.
Type 'projects' — things I've built.
Type 'hire'     — open to work.
Type 'resume'   — my latest resume.
Type 'readme'   — my GitHub readme.`;
};

// Mission
export const mission = async (args: string[]): Promise<string> => {
  return `
  ┌─────────────────────────────────────────────────────────────┐
  │                                                             │
  │   "I build AI products at every wave."                     │
  │   我在每一波 AI 浪潮里都是第一批做产品的人。                │
  │                                                             │
  │   2023  ChatGPT wave  →  shipped RAG apps                  │
  │   2024  Coding wave   →  shipped Vibe Coding tool           │
  │   2026  Agent wave    →  shipped HappyCapy + Data Agent     │
  │                                                             │
  └─────────────────────────────────────────────────────────────┘`;
};

// Projects — curated showcase
export const projects = async (args: string[]): Promise<string> => {
  return `
── Projects ──────────────────────────────────────────────────────

  HappyCapy                                           [2026 · Live]
  AI-native sandbox platform
  19 days to ship · 10,000 sandboxes · 55 subscribers @ $2K/yr
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://happcapy.ai" target="_blank">happcapy.ai</a></u>

  build-my-own-coding-agent                     [2025–2026 · Open Source]
  5 versions · 33 → 9,266 lines · sub-agent delegation 60%→85%
  Unified LLM abstraction: OpenAI / Anthropic / Gemini / DeepSeek / Mistral
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/warren-wupeng/build-my-own-coding-agent" target="_blank">github.com/warren-wupeng/build-my-own-coding-agent</a></u>

  data-analysis-agent                                 [2026 · Live Demo]
  Natural language → SQL for enterprise data platforms
  Built in 5 days · Azure Databricks + Spark/Trino dual-env support
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://data-analysis-agent-warren.fly.dev" target="_blank">data-analysis-agent-warren.fly.dev</a></u>

  lenovo-data-agent-proposal                         [2026 · Proposal]
  Full product proposal: 3-phase roadmap, dual-env architecture, security design
  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://warren-wupeng.github.io/lenovo-data-agent-proposal/" target="_blank">warren-wupeng.github.io/lenovo-data-agent-proposal</a></u>

──────────────────────────────────────────────────────────────────
Type 'hire' to see what I'm looking for next.`;
};

// Hire
export const hire = async (args: string[]): Promise<string> => {
  return `
── Open to Work ──────────────────────────────────────────────────

  Role        Product Manager / AI Product
  Focus       Agent systems, enterprise data, developer tools
  Stack       Python · TypeScript · LLM orchestration · FastAPI

  What I bring:
  · Shipped HappyCapy from zero to 55 paying subscribers in 19 days
  · Built a coding agent from 33 → 9,266 lines across 5 versions
  · Can write production code AND define the product strategy

  Best way to reach me:
  · Email   <u><a class="text-light-blue dark:text-dark-blue underline" href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  · LinkedIn <u><a class="text-light-blue dark:text-dark-blue underline" href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
  · GitHub  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>

──────────────────────────────────────────────────────────────────`;
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

// Banner
export const banner = (args?: string[]): string => {
  return `

  ██╗    ██╗ █████╗ ██████╗ ██████╗ ███████╗███╗   ██╗    ██╗    ██╗██╗   ██╗
  ██║    ██║██╔══██╗██╔══██╗██╔══██╗██╔════╝████╗  ██║    ██║    ██║██║   ██║
  ██║ █╗ ██║███████║██████╔╝██████╔╝█████╗  ██╔██╗ ██║    ██║ █╗ ██║██║   ██║
  ██║███╗██║██╔══██║██╔══██╗██╔══██╗██╔══╝  ██║╚██╗██║    ██║███╗██║██║   ██║
  ╚███╔███╔╝██║  ██║██║  ██║██║  ██║███████╗██║ ╚████║    ╚███╔███╔╝╚██████╔╝
   ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝     ╚══╝╚══╝  ╚═════╝ 

代码奔涌如洪流  ·  Code surges like a torrent
AI铸就无双利刃  ·  AI forges an unmatched blade
统御AI大军，征服混沌  ·  Command your AI army and conquer chaos!


Type 'help'     to see all commands.
Type 'about'    to learn about me.
Type 'projects' to see what I've built.
Type 'hire'     if you're looking for someone like me.
Type 'sumfetch' for a quick summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> to see my top project.
`;
};
