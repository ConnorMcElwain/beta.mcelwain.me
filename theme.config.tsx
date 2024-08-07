import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  banner: {
    key: 'beta-release',
    text: (
      <a href="/posts/azure/az-104">
        🔥 Check out my documented journey towards the AZ-104! →
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
