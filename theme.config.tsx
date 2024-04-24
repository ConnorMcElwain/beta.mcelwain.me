import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>beta.mcelwain.me</span>,
  project: {
    link: 'https://github.com/ConnorMcElwain',
  },
  chat: {
    link: 'https://discord.com',
  },
  default: {
    footer: {
      text: (
        <span>
          MIT {new Date().getFullYear()} ©{' '}
          <a href="https://nextra.site" target="_blank">
            Nextra
          </a>
          .
        </span>
      )
    }
  },
}

export default config
