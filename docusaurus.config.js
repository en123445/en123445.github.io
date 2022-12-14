// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '乱 入',
  tagline: '一个 BLOG',
  url: 'https://en123445.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'en123445', // Usually your GitHub org/user name.
  projectName: 'en123445.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
          path: 'docs/trans',
          routeBasePath: 'trans',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'self',
        path: 'docs/self',
        routeBasePath: 'self',
        sidebarPath: require.resolve('./sidebars.js')
      },      
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tech',
        path: 'docs/tech',
        routeBasePath: 'tech',
        sidebarPath: require.resolve('./sidebars.js')
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '乱入',
        logo: {
          alt: 'My Site Logo',
          src: 'img/star-thick.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Fairytales/01 Fairytales - 01',
            position: 'left',
            label: '同人翻译',
          },
          {
            docsPluginId:'self',
            type: 'doc',
            docId: 'BeyGilBeyCSI/再见Gil再见CSI-01',
            position: 'left',
            label: '随笔',
          },
          {
            docsPluginId:'tech',
            type: 'doc',
            docId: 'docusaurus2快速建站',
            position: 'right',
            label: '技术',
          },
          /*
          {
            to: 'self/BeyGilBeyCSI/再见Gil再见CSI-01',
            label: 'DocsTest',
            position: 'right',
          },
          */
          {to: '/blog', label: 'Blog', position: 'left'},          
          {
            to: 'updateRec',
            label: '更新记录',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          //autoCollapseCategories: false,
        },
      },
      footer: {
        style: 'dark',
        links: [          
          {
            title: 'Community',
            items: [
              {
                label: '微博',
                href: 'https://weibo.com/u/1774939302',
              },
              {
                label: 'BiliBili',
                href: 'https://space.bilibili.com/664271',
              },                       
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
