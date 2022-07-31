// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '6 Degrees Wiki',
  tagline: 'Wiki, Docs and more!',
  url: 'https://wiki.6degrees.com.sa',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '6Degrees', // Usually your GitHub org/user name.
  projectName: 'wiki.6d.com.sa', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/6degrees/wiki.6d.com.sa/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/6degrees/wiki.6d.com.sa/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '6D',
        logo: {
          alt: '6 Degrees Logo',
          src: 'img/icon_dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/6Degrees/wiki.6d.com.sa',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sections',
            items: [
              {
                label: 'Standards',
                to: '/docs/category/standards',
              },
              {
                label: 'Services',
                to: '/docs/category/services',
              },
              {
                label: 'Human Resources',
                to: '/docs/category/hr',
              },
              {
                label: 'Tools',
                to: '/docs/category/tools',
              },
            ],
          },
          
          {
            title: 'More',
            items: [
              {
                label: 'Home',
                to: 'https://www.6d.com.sa',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
             
              {
                label: 'Twitter',
                href: 'https://twitter.com/6degz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/6Degrees/',
              },
              {
                label: 'Linked In',
                href: 'https://www.linkedin.com/company/6degz/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 6 Degrees Technologies Est. <br /> Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
