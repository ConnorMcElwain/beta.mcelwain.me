import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  banner: {
    key: 'beta-release',
    text: (
      <a href="https://github.com/ConnorMcElwain/beta.mcelwain.me" target="_blank">
        🎉 McElwain.me is now in Beta! Read more →
      </a>
    )
  },
  logo: <span>beta.mcelwain.me</span>,
  project: {
    link: 'https://github.com/ConnorMcElwain',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – beta'
      }
    }
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: (
      <a href="https://github.com/ConnorMcElwain/beta.mcelwain.me" target="_blank">
      Change Logs
    </a>
    )
  },
}

export default config
