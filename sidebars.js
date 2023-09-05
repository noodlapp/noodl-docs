/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const { getGuidesSidebarData } = require('./static/data/guides');

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      label: 'Learn',
      id: 'learn',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'getting-started/overview' },
      items: [
        {
          type: 'doc',
          label: 'Workflow Overview',
          id: 'getting-started/workflow',
        },
        {
          type: 'doc',
          label: 'Fundamentals',
          id: 'getting-started/fundamentals',
        },
        {
          type: 'doc',
          label: 'Noodl AI',
          id: 'getting-started/noodl-ai',
        },
        {
          type: 'category',
          label: 'ChatGPT',
          collapsible: true,
          collapsed: true,
          link: { type: 'doc', id: 'getting-started/ai-assisted-dev/overview' },
          items: [
            {
              type: 'doc',
              label: 'Develop with ChatGPT',
              id: 'getting-started/ai-assisted-dev/chat-gpt',
            },
            {
              type: 'doc',
              label: 'REST API calls',
              id: 'getting-started/ai-assisted-dev/rest',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: true,
      collapsed: false,
      items: [...getGuidesSidebarData()],
    },
    {
      type: 'category',
      label: 'Build Along Videos',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'build-alongs/overview' },
      items: [
        {
          type: 'doc',
          label: 'Task List app',
          id: 'build-alongs/task-list-app',
        },
        {
          type: 'doc',
          label: 'Custom Survey app',
          id: 'build-alongs/survey-app',
        },
        {
          type: 'doc',
          label: 'Star Rating component',
          id: 'build-alongs/star-rating-component',
        },
        {
          type: 'doc',
          label: 'Horizontal snapping list',
          id: 'build-alongs/horizontal-list-with-snapping',
        },
      ],
    },
  ],
};

module.exports = sidebars;
