import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel="icon" href="/components/assets/favicon/logo.svg" />
    </>
  ),
  banner: {
    key: 'beta-release',
    text: (
      <a>
        🔥 Check out my updated documentation on the <a href="/posts/azure/az-104"><b><u>AZ-104</u></b></a> and my journey into learning <a href="/posts/microsoft/microsoft-endpoint-manager"><b><u>MECM</u></b></a> and <a href="/posts/microsoft/powershell-for-microsoft365"><b><u>PowerShell for M365!</u></b></a>
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
        titleTemplate: 'mcelwain.me – beta'
      }
    }
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
        <a href="https://github.com/ConnorMcElwain/beta.mcelwain.me/commits/main/" target="_blank">
          Change Logs
        </a>
        {' '}
        |{' '}
        <a href="https://stats.mcelwain.me" target="_blank">
          Status
        </a>
        {' '}
        |{' '}
        <a href="/known-issues">
          Known Issues
        </a>
      </span>
    )
  },
}

export default config
