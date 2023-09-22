const NodeType = {
  Visual: 'is-visual',
  Data: 'is-data',
  Custom: 'is-custom',
  Logic: 'is-logic',
  Connection: 'is-connection',
};

const nodeData = [
  {
    label: 'UI Elements',
    description: `These nodes make up all of the visuals of your app. Put them in your node tree whenever you want to render an element on the screen. These nodes also support <a href="/2.7/docs/guides/user-interfaces/style-variants">Variants</a> and <a href="/2.7/docs/guides/user-interfaces/visual-states">States</a>.`,
    items: [
      {
        label: 'Basic Elements',
        items: [
          {
            label: 'Group',
            id: 'basic-elements/group',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Columns',
            id: 'basic-elements/columns',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Text',
            id: 'basic-elements/text',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Image',
            id: 'basic-elements/image',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Video',
            id: 'basic-elements/video',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Circle',
            id: 'basic-elements/circle',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Icon',
            id: 'basic-elements/icon',
            nodeType: NodeType.Visual,
          },
        ],
      },

      {
        label: 'UI Controls',
        items: [
          {
            label: 'Button',
            id: 'ui-controls/button',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Checkbox',
            id: 'ui-controls/checkbox',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Dropdown',
            id: 'ui-controls/dropdown',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Radio Button',
            id: 'ui-controls/radio-button',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Radio Button Group',
            id: 'ui-controls/radio-button-group',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Slider',
            id: 'ui-controls/slider',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Text Input',
            id: 'ui-controls/text-input',
            nodeType: NodeType.Visual,
          },
        ],
      },
    ],
  },

  {
    label: 'Navigation & Popups',
    description:
      'These nodes cover all your navigation needs, everyting from URL and hash based navigation to component replacement. You can either use them to reroute the user to a different views or render content on top of the current view in modals.',
    items: [
      {
        label: 'Navigation',
        items: [
          {
            label: 'Page Router',
            id: 'navigation/page-router',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Navigate',
            id: 'navigation/navigate',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Page Inputs',
            id: 'navigation/page-inputs',
            nodeType: NodeType.Connection,
          },
          {
            label: 'External Link',
            id: 'navigation/external-link',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Navigate To Path',
            id: 'navigation/navigate-to-path',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Page',
            id: 'navigation/page',
            nodeType: NodeType.Visual,
          },
        ],
      },

      {
        label: 'Component Stack',
        items: [
          {
            label: 'Component Stack',
            id: 'component-stack/component-stack-node',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Push Component To Stack',
            id: 'component-stack/push-component',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Pop Component Stack',
            id: 'component-stack/pop-component',
            nodeType: NodeType.Logic,
          },
        ],
      },

      {
        label: 'Popups',
        items: [
          {
            label: 'Show Popup',
            id: 'popups/show-popup',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Close Popup',
            id: 'popups/close-popup',
            nodeType: NodeType.Logic,
          },
        ],
      },
    ],
  },

  {
    label: 'Logic & Utilities',
    description:
      'Most of the meat in an app comes from logic and data processing. This is your toolbox for working with most logic, data and user interactions, big and small.',
    items: [
      {
        label: 'General Utils',
        items: [
          {
            label: 'States',
            id: 'utilities/logic/states',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Value Changed',
            id: 'logic/value-changed',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Delay',
            id: 'utilities/delay',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Color Blend',
            id: 'utilities/color-blend',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Number Remapper',
            id: 'math/number-remapper',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Counter',
            id: 'math/counter',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Drag',
            id: 'utilities/drag',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Animate To Value',
            id: 'logic/animate-to-value',
            nodeType: NodeType.Logic,
          },
        ],
      },

      {
        label: 'Logic',
        items: [
          {
            label: 'Boolean To String',
            id: 'utilities/boolean-to-string',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Switch',
            id: 'logic/switch',
            nodeType: NodeType.Logic,
          },
          { label: 'And', id: 'logic/and', nodeType: NodeType.Logic },
          { label: 'Or', id: 'logic/or', nodeType: NodeType.Logic },
          {
            label: 'Condition',
            id: 'utilities/logic/condition',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Inverter',
            id: 'logic/inverter',
            nodeType: NodeType.Logic,
          },
        ],
      },

      {
        label: 'Events',
        items: [
          {
            label: 'Send Event',
            id: 'events/send-event',
            nodeType: NodeType.Connection,
          },
          {
            label: 'Receive Event',
            id: 'events/receive-event',
            nodeType: NodeType.Connection,
          },
        ],
      },

      {
        label: 'String Manipulation',
        items: [
          {
            label: 'Substring',
            id: 'string-manipulation/substring',
            nodeType: NodeType.Logic,
          },
          {
            label: 'String Mapper',
            id: 'string-manipulation/string-mapper',
            nodeType: NodeType.Logic,
          },
          {
            label: 'String Format',
            id: 'string-manipulation/string-format',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Date To String',
            id: 'utilities/date-to-string',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Unique Id',
            id: 'utilities/unique-id',
            nodeType: NodeType.Logic,
          },
        ],
      },

      {
        label: 'System',
        items: [
          {
            label: 'Open File Picker',
            id: 'utilities/open-file-picker',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Screen Resolution',
            id: 'utilities/screen-resolution',
            nodeType: NodeType.Logic,
          },
        ],
      },

      {
        label: 'Variables',
        items: [
          {
            label: 'String',
            id: 'data/string',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Boolean',
            id: 'data/boolean',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Color',
            id: 'data/color',
            nodeType: NodeType.Logic,
          },
          {
            label: 'Number',
            id: 'data/number',
            nodeType: NodeType.Logic,
          },
        ],
      },
    ],
  },

  {
    label: 'Component Utilities',
    description:
      'One of the core concepts in Noodl is the ability to create your own reusable components. Here are nodes that help you manage how data passes through them.',
    items: [
      {
        label: 'Component Inputs',
        id: 'component-utilities/component-inputs',
        nodeType: NodeType.Connection,
      },
      {
        label: 'Component Outputs',
        id: 'component-utilities/component-outputs',
        nodeType: NodeType.Connection,
      },
      {
        label: 'Component Children',
        id: 'component-utilities/component-children',
        nodeType: NodeType.Connection,
      },
      {
        label: 'Component Object',
        id: 'component-utilities/component-object',
        nodeType: NodeType.Connection,
      },
      {
        label: 'Parent Component Object',
        id: 'component-utilities/parent-component-object',
        nodeType: NodeType.Connection,
      },
      {
        label: 'Set Component Object Properties',
        id: 'component-utilities/set-component-object-properties',
        nodeType: NodeType.Connection,
      },
      {
        label: 'Set Parent Component Object Properties',
        id: 'component-utilities/set-parent-component-object-properties',
        nodeType: NodeType.Connection,
      },
    ],
  },

  {
    label: 'Read & Write Data',
    description:
      'No app is complete without content. These are nodes that help you work with dynamic data defined in the app, a Noodl Cloud Service or from any backend of your choice.',
    items: [
      {
        label: 'Variables & Objects',
        items: [
          {
            label: 'Repeater',
            id: 'ui-controls/repeater',
            nodeType: NodeType.Visual,
          },
          {
            label: 'Repeater Item',
            id: 'ui-controls/repeater-item',
            nodeType: NodeType.Data,
          },
          {
            label: 'Object',
            id: 'data/object/object-node',
            nodeType: NodeType.Data,
          },
          {
            label: 'Set Object Properties',
            id: 'data/object/set-object-properties',
            nodeType: NodeType.Data,
          },
          {
            label: 'Create New Object',
            id: 'data/object/create-new-object',
            nodeType: NodeType.Data,
          },
          {
            label: 'Set Variable',
            id: 'data/variable/set-variable',
            nodeType: NodeType.Data,
          },
          {
            label: 'Variable',
            id: 'data/variable/variable-node',
            nodeType: NodeType.Data,
          },
          {
            label: 'Run Tasks',
            id: 'data/run-tasks',
            nodeType: NodeType.Data,
          },
        ],
      },

      {
        label: 'Arrays',
        items: [
          {
            label: 'Array',
            id: 'data/array/array-node',
            nodeType: NodeType.Data,
          },
          {
            label: 'Create New Array',
            id: 'data/array/create-new-array',
            nodeType: NodeType.Data,
          },
          {
            label: 'Remove Object From Array',
            id: 'data/array/remove-from-array',
            nodeType: NodeType.Data,
          },
          {
            label: 'Clear Array',
            id: 'data/array/clear-array',
            nodeType: NodeType.Data,
          },
          {
            label: 'Insert Object Into Array',
            id: 'data/array/insert-into-array',
            nodeType: NodeType.Data,
          },
          {
            label: 'Array Filter',
            id: 'data/array/array-filter',
            nodeType: NodeType.Data,
          },
          {
            label: 'Array Map',
            id: 'data/array/array-map',
            nodeType: NodeType.Data,
          },
          {
            label: 'Static Array',
            id: 'data/array/static-array',
            nodeType: NodeType.Data,
          },
        ],
      },

      {
        label: 'Cloud Data',
        items: [
          {
            label: 'Record',
            id: 'data/cloud-data/record',
            nodeType: NodeType.Data,
          },
          {
            label: 'Create New Record',
            id: 'data/cloud-data/create-new-record',
            nodeType: NodeType.Data,
          },
          {
            label: 'Filter Records',
            id: 'data/cloud-data/filter-records',
            nodeType: NodeType.Data,
          },
          {
            label: 'Set Record Properties',
            id: 'data/cloud-data/set-record-properties',
            nodeType: NodeType.Data,
          },
          {
            label: 'Query Records',
            id: 'data/cloud-data/query-records',
            nodeType: NodeType.Data,
          },
          {
            label: 'Delete Record',
            id: 'data/cloud-data/delete-record',
            nodeType: NodeType.Data,
          },
          {
            label: 'Add Record Relation',
            id: 'data/cloud-data/add-record-relation',
            nodeType: NodeType.Data,
          },
          {
            label: 'Remove Record Relation',
            id: 'data/cloud-data/remove-record-relation',
            nodeType: NodeType.Data,
          },
          {
            label: 'Cloud File',
            id: 'data/cloud-data/cloud-file',
            nodeType: NodeType.Data,
          },
          {
            label: 'Upload File',
            id: 'data/cloud-data/upload-file',
            nodeType: NodeType.Data,
          },
          {
            label: 'Cloud Function',
            id: 'data/cloud-data/cloud-function',
            nodeType: NodeType.Data,
          },
          {
            label: 'Config',
            id: 'data/cloud-data/config',
            nodeType: NodeType.Data,
          },
        ],
      },

      {
        label: 'User',
        items: [
          {
            label: 'Log In',
            id: 'data/user/log-in',
            nodeType: NodeType.Data,
          },
          {
            label: 'Log Out',
            id: 'data/user/log-out',
            nodeType: NodeType.Data,
          },
          {
            label: 'Sign Up',
            id: 'data/user/sign-up',
            nodeType: NodeType.Data,
          },
          {
            label: 'User',
            id: 'data/user/user-node',
            nodeType: NodeType.Data,
          },
          {
            label: 'Set User Properties',
            id: 'data/user/set-user-properties',
            nodeType: NodeType.Data,
          },
        ],
      },

      {
        label: 'External Data',
        items: [{ label: 'REST', id: 'data/rest', nodeType: NodeType.Data }],
      },
    ],
  },

  {
    label: 'Custom Code',
    description:
      "Even though most problems can be solved with Noodl's built in base nodes, it's nice to have options for those specific situations that require code. After all, text based coding is quite fun too.",
    items: [
      {
        label: 'Expression',
        id: 'math/expression',
        nodeType: NodeType.Custom,
      },
      {
        label: 'Function',
        id: 'javascript/function',
        nodeType: NodeType.Custom,
      },
      {
        label: 'Script',
        id: 'javascript/script',
        nodeType: NodeType.Custom,
      },
      {
        label: 'CSS Definition',
        id: 'utilities/css-definition',
        nodeType: NodeType.Custom,
      },
    ],
  },

  {
    label: 'Cloud Functions',
    items: [
      {
        label: 'Request',
        id: 'cloud-functions/request',
        nodeType: NodeType.Data,
      },
      {
        label: 'Response',
        id: 'cloud-functions/response',
        nodeType: NodeType.Data,
      },
      {
        label: 'Cloud Data',
        items: [
          {
            label: 'Aggregate Records',
            id: 'cloud-functions/cloud-data/aggregate-records',
            nodeType: NodeType.Data,
          },
        ]
      }
    ],
  },
];

function recursiveBuildNodeOverviewData(item) {
  if ('items' in item) {
    // is a category
    return {
      title: item.label,
      description: item.description,
      items: item.items.map(recursiveBuildNodeOverviewData),
      key: item.label,
    };
  } else {
    return {
      label: item.label,
      docUrl: '/nodes/' + item.id,
      nodeType: item.nodeType,
      key: item.label,
    };
  }
}

exports.getNodePageData = function () {
  return nodeData.map(recursiveBuildNodeOverviewData).map((category) => {
    const flatItems = category.items.reduce((r, child) => {
      if ('items' in child) {
        return [...r, ...child.items];
      } else {
        return [...r, child];
      }
    }, []);

    return { ...category, items: flatItems };
  });
};

function recursiveBuildSidebarData(item) {
  if ('items' in item) {
      // is a category
      return {
          type: 'category',
          label: item.label,
          items: item.items.map(recursiveBuildSidebarData),
      }
  } else {
      return {
          type: 'doc',
          label: item.label,
          id: item.id + "/README",
      }
  }
}

exports.getNodeSidebarData = function () {
  return nodeData.map(recursiveBuildSidebarData);
};
