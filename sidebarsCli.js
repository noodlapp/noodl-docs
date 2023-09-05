/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    apiSidebar: [
        'overview',
        {
            type: 'category',
            label: 'Guides',
            items: [
                { type: 'doc', label: 'Continuous Deployment', id: 'guides/continuous-deployment' },
                { type: 'doc', label: 'Workspace Modules', id: 'guides/workspace-modules' },
            ],
        },
        {
            type: 'category',
            label: 'Commands',
            items: [
                { type: 'doc', label: 'build', id: 'commands/build/README' },
                { type: 'doc', label: 'new', id: 'commands/new/README' },
                { type: 'doc', label: 'parse', id: 'commands/parse/README' },
                { type: 'doc', label: 'project list', id: 'commands/project/list' },
                { type: 'doc', label: 'project clone', id: 'commands/project/clone' },
                { type: 'doc', label: 'workspace list', id: 'commands/workspace/list' },
            ],
        },
    ],
}

module.exports = sidebars
