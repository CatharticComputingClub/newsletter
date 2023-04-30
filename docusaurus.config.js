// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cathartic Computing Club',
  tagline: 'Selected content about Artificial Intelligence, ​​Software, ​​Science &amp; Research, ​​​Open Source and Startups.',
  url: 'https://newsletter.catharticcomputingclub.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: undefined
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Cathartic Computing Club',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png'
          // srcDark: 'img/logo_dark.png'
        },
        items: [
          {
            href: 'https://github.com/CatharticComputingClub/newsletter',
            label: 'Repository',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        copyright: 'Built with Docusaurus.'
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
