import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { Callout } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  banner: {
    key: 'beta-release',
    text: (
      <a href="/read-more">
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
    link: 'https://www.linkedin.com/in/connor-mcelwain/',
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          
        />
      </svg>
    )
  },
  docsRepositoryBase: 'https://github.com/ConnorMcElwain/beta.mcelwain.me',
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://beta.mcelwain.me/" target="_blank">
          McElwain.me
        </a>{' '}
        |{' '}
        <a href="https://github.com/ConnorMcElwain/beta.mcelwain.me/commit/main" target="_blank">
          Change Logs
        </a>
        {' '}
        |{' '}
        <a href="https://stats.mcelwain.me" target="_blank">
          Status
        </a>
      </span>
    )
  },
}

export default config
