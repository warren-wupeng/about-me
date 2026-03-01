import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           AI Product Builder
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓        <u><a href="${config.resume_url}" target="_blank">resume / LinkedIn</a></u>
▐▓                                 ▐▓       爵 <u><a href="${config.repo}" target="_blank">build-my-own-coding-agent</a></u>
▐▓        > W A R R E N  W U       ▐▓       -----------
▐▓                                 ▐▓        CONTACT
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            -----------
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                HIGHLIGHTS
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                    HappyCapy 19d · 10K sandboxes · 55 subs
                                              coding-agent 33→9,266 lines · V0-V5
                                              Data Agent MVP in 5 days

`;
};

export default sumfetch;
