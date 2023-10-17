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
            label: 'References',
            collapsible: true,
            link: { type: 'doc', id: 'reference/overview/README' },
            items: [
                { type: 'doc', label: 'Variables', id: 'reference/variables/README' },
                { type: 'doc', label: 'Objects', id: 'reference/objects/README' },
                { type: 'doc', label: 'Object', id: 'reference/object/README' },
                { type: 'doc', label: 'Arrays', id: 'reference/arrays/README' },
                { type: 'doc', label: 'Events', id: 'reference/events/README' },
                { type: 'doc', label: 'Component', id: 'reference/component/README' },
                { type: 'doc', label: 'Records', id: 'reference/records/README' },
                { type: 'doc', label: 'Users', id: 'reference/users/README' },
                { type: 'doc', label: 'Files', id: 'reference/files/README' },
                { type: 'doc', label: 'Navigation', id: 'reference/navigation/README' },
                { type: 'doc', label: 'CloudFunctions', id: 'reference/cloudfunctions/README' },
                { type: 'doc', label: 'SEO', id: 'reference/seo/README' },
            ],
        },
        {
            type: 'category',
            label: 'Samples',
            collapsible: true,
            items: [
                {
                    type: 'doc',
                    label: 'Get DOM Element',
                    id: 'samples/get-dom-element',
                },
                {
                    type: 'doc',
                    label: 'Pointer Position',
                    id: 'samples/pointer-position',
                },
            ],
        },
        {
            type: 'category',
            label: 'Extending',
            collapsible: true,
            link: { type: 'doc', id: 'extending/overview' },
            items: [
                {
                    type: 'doc',
                    label: 'Simple Logic Node',
                    id: 'extending/create-lib',
                },
                {
                    type: 'doc',
                    label: 'Visual Node with React',
                    id: 'extending/create-react-lib',
                },
            ],
        },
    ],
}

module.exports = sidebars
