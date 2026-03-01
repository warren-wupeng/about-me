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
  window.open(`${config.social.github}`);
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
Type 'resume'   — my latest resume.
Type 'readme'   — my GitHub readme.`;
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


Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'about' to learn more about me.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
