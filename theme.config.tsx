import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>beta.mcelwain.me</span>,
  project: {
    link: 'https://github.com/ConnorMcElwain',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – mcelwain.me'
    }
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra docs template',
  },
}

export default config
