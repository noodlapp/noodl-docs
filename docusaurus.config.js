// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {
  _parseNoodlMarkupPlugin,
  _parseRenderedMarkupPlugin,
} = require('./plugins/markdown-syntax');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Noodl',
  tagline: 'Dinosaurs are cool',
  url: 'https://noodlapp.github.io',
  baseUrl: `/noodl-docs/`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Noodl', // Usually your GitHub org/user name.
  projectName: 'Noodl', // Usually your repo name.

  // This depends on the hosting provider
  // trailingSlash: true,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/variables.css'),
            require.resolve('./src/css/navbar.scss'),
            require.resolve('./src/css/sidebar.scss'),
            require.resolve('./src/css/searchbar.scss'),
            require.resolve('./src/css/markdown.scss'),
            require.resolve('./src/css/pagination.scss'),
          ],
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',

    // Node reference docs
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'nodes',
        path: 'nodes',
        routeBasePath: 'nodes',
        sidebarPath: require.resolve('./sidebarsNodes.js'),
        breadcrumbs: false,
        remarkPlugins: [
          _parseNoodlMarkupPlugin,
          require('./plugins/import-markdown'),
        ],
        rehypePlugins: [_parseRenderedMarkupPlugin],
      },
    ],
    // Javascript API
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'javascript',
        path: 'javascript',
        breadcrumbs: false,
        routeBasePath: 'javascript',
        sidebarPath: require.resolve('./sidebarsJavascript.js'),
      },
    ],

    // Library
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'library',
        path: 'library',
        routeBasePath: 'library',
        breadcrumbs: false,
        sidebarPath: require.resolve('./sidebarsLibrary.js'),
        remarkPlugins: [
          _parseNoodlMarkupPlugin,
          require('./plugins/import-markdown'),
        ],
      },
    ],
    
    // CLI
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cli',
        path: 'cli',
        routeBasePath: 'cli',
        breadcrumbs: false,
        sidebarPath: require.resolve('./sidebarsCli.js'),
        remarkPlugins: [
          _parseNoodlMarkupPlugin,
          require('./plugins/import-markdown'),
        ],
      },
    ],

    // Whats new
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'whats-new',
        path: 'whats-new',
        routeBasePath: 'whats-new',
        blogSidebarTitle: 'Recent updates',
        postsPerPage: 1,
        feedOptions: { type: 'json' },
        showReadingTime: false,
        remarkPlugins: [
          _parseNoodlMarkupPlugin,
          require('./plugins/import-markdown'),
        ],
      },
    ],

    // Copy static md files for editor inline docs
    [
      require('./plugins/copy-node-markdowns'),
      {
        paths: [
          { path: 'nodes/', folderName: true },
          { path: 'library/modules/' }
        ],
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        property: 'og:image',
        content: 'https://docs.noodl.net/noodl-docs.png',
      },
      {
        property: 'og:title',
        content: 'Noodl Documentation',
      },
      {
        property: 'og:description',
        content:
          'Explore Noodl guides, tutorials, videos, modules, and reference documentation here. Noodl is the low-code platform for designers + developers to build custom web apps and experiences.',
      },
      {
        name: 'google-site-verification',
        content: 'KjANYZkN8ymGFD0SGnAVlRkD85p-fpNHCRAOKxurpWI'
      }
    ],
    colorMode: {
      disableSwitch: true,
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Noodl Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Learn',
          to: '/docs/learn',
          position: 'right',
        },
        {
          label: 'Node reference',
          to: '/nodes/overview',
          position: 'right',
        },
        {
          label: 'Library',
          to: '/library/overview',
          position: 'right',
        },
        {
          label: 'Javascript',
          to: '/javascript/overview',
          position: 'right',
          className: 'has-divider',
        },
        {
          label: 'Discord',
          to: 'https://discord.com/invite/23xU2hYrSJ',
          target: '_blank',
          position: 'right',
          className: 'is-discord',
        },
        {
          label: 'Download',
          to: 'https://console.noodl.net/#/signup',
          target: '_blank',
          position: 'right',
          className: 'is-download-button',
        },
      ],
    },
  },
};

module.exports = config;
