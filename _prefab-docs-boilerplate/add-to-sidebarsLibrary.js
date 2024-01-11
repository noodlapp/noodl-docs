// My Prefab Sidebar
MyPrefabSidebar: [
  {
    type: 'doc',
    label: 'Overview',
    id: 'prefabs/my-prefab/README',
  },
  {
    type: 'category',
    label: 'Components',
    collapsible: false,
    items: [
      {
        type: 'doc',
        label: 'Setup My Prefab',
        id: 'prefabs/my-prefab/components/setup-my-prefab/README',
      },
      {
        type: 'doc',
        label: 'Request',
        id: 'prefabs/my-prefab/components/my-prefab-request/README',
      },
    ],
  },
  {
    type: 'link',
    label: 'Back to prefabs',
    href: '/library/prefabs/overview',
  },
];
