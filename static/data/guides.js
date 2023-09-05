const { recursiveBuildSidebarData } = require('./dataHelpers');

const guides = [
  {
    type: 'category',
    label: 'Building User Interfaces',
    link: {
      type: 'doc',
      id: 'guides/user-interfaces/overview',
    },
    items: [
      {
        type: 'doc',
        label: 'Visual nodes',
        id: 'guides/user-interfaces/basics',
        imageUrl: '/img/featured-content-images/basic.png',
        description:
          'Learn how to to place and edit visual elements using Noodls node model',
      },
      {
        type: 'doc',
        label: 'Components',
        id: 'guides/user-interfaces/components',
        imageUrl: '/img/featured-content-images/basic.png',
        description: 'Learn how to create visual components that are reusable ',
      },
      {
        type: 'doc',
        label: 'Layout',
        id: 'guides/user-interfaces/layout',
        imageUrl: '/img/featured-content-images/layout.png',
        description:
          'Learn how to create layouts and group content using visual nodes',
      },
      {
        type: 'doc',
        label: 'Responsive Design',
        id: 'guides/user-interfaces/responsive-design',
        imageUrl: '/img/featured-content-images/basic.png',
        description: 'Learn how to to build responsive layouts and components',
      },
      {
        type: 'doc',
        label: 'Style Variants',
        id: 'guides/user-interfaces/style-variants',
        imageUrl: '/img/featured-content-images/layout.png',
        description: 'Learn how to define style variants for visual elements',
      },
      {
        type: 'doc',
        label: 'Visual States',
        id: 'guides/user-interfaces/visual-states',
        imageUrl: '/img/featured-content-images/layout.png',
        description:
          'Learn how to style hover, focused, and other visual states on UI elements',
      },
      {
        type: 'doc',
        label: 'States Node',
        id: 'guides/user-interfaces/states',
        imageUrl: '/img/featured-content-images/logic.png',
        description:
          'Learn how to use the States node to create UI states, animations and more',
      },
      {
        type: 'doc',
        label: 'Scrolling Content',
        id: 'guides/user-interfaces/scrolling-content',
        imageUrl: '/img/featured-content-images/layout.png',
        description: 'Learn how to set up scrolling containers and pages',
      },
      {
        type: 'doc',
        label: 'Modules and Prefabs',
        id: 'guides/user-interfaces/modules',
        imageUrl: '/img/featured-content-images/basic.png',
        description:
          'Get pre-made components, third-party-services, and new capabilities with modules',
      },
      {
        type: 'doc',
        label: 'Figma Plugin',
        id: 'guides/user-interfaces/figma-plugin',
        imageUrl: '/img/featured-content-images/basic.png',
        description: 'Turn designs in Figma into Noodl nodes',
      },
    ],
  },

  {
    type: 'category',
    label: 'Working with data',
    link: { type: 'doc', id: 'guides/data/overview' },
    items: [
      {
        type: 'doc',
        label: 'Making Connections',
        id: 'guides/data/making-connections',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'Learn how to make data connections between nodes.',
      },
      {
        type: 'doc',
        label: 'Variables',
        id: 'guides/data/variables',
        imageUrl: '/img/featured-content-images/logic.png',
        description:
          'Learn how to store data locally in your app using variables',
      },
      {
        type: 'doc',
        label: 'Objects',
        id: 'guides/data/objects',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'Learn how to store objects of data locally in your app',
      },
      {
        type: 'doc',
        label: 'Arrays',
        id: 'guides/data/arrays',
        imageUrl: '/img/featured-content-images/list.png',
        description: 'Learn how to store multiple objects of data using arrays',
      },
      {
        type: 'doc',
        label: 'Lists Basics',
        id: 'guides/data/list-basics',
        imageUrl: '/img/featured-content-images/list.png',
        description: 'Learn how to generate lists of UI elements from data',
      },
      {
        type: 'doc',
        label: 'UI Controls and data',
        id: 'guides/data/ui-controls-and-data',
        imageUrl: '/img/featured-content-images/list.png',
        description:
          'Learn how connect UI Controls to data nodes to create forms and more',
      },

      {
        type: 'doc',
        label: 'External Data',
        id: 'guides/data/external-data',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'Learn how to work with external data using REST APIs',
      },
    ],
  },

  {
    type: 'category',
    label: 'Navigation',
    link: { type: 'doc', id: 'guides/navigation/overview' },
    items: [
      {
        type: 'doc',
        label: 'Basic Navigation',
        id: 'guides/navigation/basic-navigation',
        imageUrl: '/img/featured-content-images/navigation.png',
        description:
          'Learn how to create pages and how to navigate between them',
      },
      {
        type: 'doc',
        label: 'Multi Level Navigation',
        id: 'guides/navigation/multi-level-navigation',
        imageUrl: '/img/featured-content-images/navigation.png',
        description: 'Learn how to set up a multi-level-navigation system',
      },
      {
        type: 'doc',
        label: 'Encoding Parameters in URLs',
        id: 'guides/navigation/encoding-parameters-in-urls',
        imageUrl: '/img/featured-content-images/logic.png',
        description:
          'Learn how to pass parameters in the URL when navigating between page',
      },
      {
        type: 'doc',
        label: 'Popups',
        id: 'guides/navigation/popups',
        imageUrl: '/img/featured-content-images/navigation.png',
        description: 'Learn how to display popups on user interactions',
      },
      {
        type: 'doc',
        label: 'Component Stack',
        id: 'guides/navigation/component-stack',
        imageUrl: '/img/featured-content-images/navigation.png',
        description:
          'Learn how to create a wizard flow using a Component Stack',
      },
    ],
  },

  {
    type: 'category',
    label: 'Working with cloud data',
    link: { type: 'doc', id: 'guides/cloud-data/overview' },
    items: [
      {
        type: 'doc',
        label: 'Creating a cloud service',
        id: 'guides/cloud-data/creating-a-backend',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'Learn how to set up a cloud service for your App, to store and read persistant data',
      },
      {
        type: 'doc',
        label: 'Creating a class',
        id: 'guides/cloud-data/creating-a-class',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'Learn how to create a class for storing data records in a cloud service.',
      },
      {
        type: 'doc',
        label: 'Creating new database records',
        id: 'guides/cloud-data/creating-new-database-records',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'Learn how to store a data Record in a cloud service.',
      },
      {
        type: 'doc',
        label: 'Quering records from a database',
        id: 'guides/cloud-data/quering-records-from-database',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'Learn how to query record from a database to your app',
      },
      {
        type: 'doc',
        label: 'Updating records',
        id: 'guides/cloud-data/updating-records',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'Learn how to update existing records in a database',
      },
      {
        type: 'doc',
        label: 'Filter database queries',
        id: 'guides/cloud-data/filtering-database-queries',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'Learn how to filter database queries',
      },
      {
        type: 'doc',
        label: 'Record relations',
        id: 'guides/cloud-data/record-relations',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'Learn how to create relations between records in a database',
      },
      {
        type: 'doc',
        label: 'Access Control',
        id: 'guides/cloud-data/access-control',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'learn how to limit access control to records to certain users.',
      },
      {
        type: 'doc',
        label: 'Importing and exporting data',
        id: 'guides/cloud-data/import-export-csv',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'learn how to import and export data to/from your cloud services database.',
      },
    ],
  },

  {
    type: 'category',
    label: 'Visualizing Data',
    link: { type: 'doc', id: 'guides/visualizing-data/overview' },
    items: [
      {
        type: 'doc',
        label: 'Using the Table component to visualize data',
        id: 'guides/visualizing-data/table-to-visualize-data',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'Learn how to use the Table node and Query Records to display data in a table.',
      },
      {
        type: 'doc',
        label: 'Adding pagination to the Table component',
        id: 'guides/visualizing-data/table-pagination',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'Learn how to use the Pages And Rows component to paginate the data in your Table.',
      },
      {
        type: 'doc',
        label: 'Filter your Table data',
        id: 'guides/visualizing-data/filter-table-data',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'Learn how to use the Filter prefab to filter out data from a Query Node and display it in a Table.',
      },
      {
        type: 'doc',
        label: 'Styling the Table',
        id: 'guides/visualizing-data/styling-table',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'Learn how to make style changes to the Table prefab.',
      },
    ],
  },

  {
    type: 'category',
    label: 'Building business logic',
    link: { type: 'doc', id: 'guides/business-logic/overview' },
    items: [
      {
        type: 'doc',
        label: 'Client Side Business Logic with Nodes',
        id: 'guides/business-logic/client-side-biz-logic-nodes',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'Learn how to work with logic nodes for your frontend',
      },
      {
        type: 'doc',
        label: 'Javascript in Noodl',
        id: 'guides/business-logic/javascript',
        imageUrl: '/img/featured-content-images/code.png',
        description:
          'Learn how to use Javascript in Noodl and combine nodes with code',
      },
      {
        type: 'doc',
        label: 'Client Side Business Logic with Javascript',
        id: 'guides/business-logic/client-side-biz-logic-js',
        imageUrl: '/img/featured-content-images/code.png',
        description: 'Learn how to use Javascript for custom logic',
      },
      {
        type: 'doc',
        label: 'Custom UI Components',
        id: 'guides/business-logic/custom-ui-components',
        imageUrl: '/img/featured-content-images/list.png',
        description: 'Learn how to create your own re-usable components',
      },
      {
        type: 'doc',
        label: 'Events',
        id: 'guides/business-logic/events',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'Learn how to work with events in Noodl',
      },
      /*  {
                type: 'doc',
                label: 'Zapier',
                id: 'guides/business-logic/zapier',
                imageUrl: '/img/featured-content-images/logic.png',
                description:
                    'Learn how to connect Noodl to Zapier for task automation more',
            },*/
      /*{
                            type: 'doc',
                            label: 'Webhooks',
                            id: 'guides/business-logic/webhooks',
                        },*/
      /*  {
                type: 'doc',
                label: 'User Management',
                id: 'guides/business-logic/user-management',
                imageUrl: '/img/featured-content-images/data.png',
                description:
                    'Learn how to use Noodls built in User Management nodes to create signup flows and more',
            },*/
    ],
  },

  {
    type: 'category',
    label: 'User Management',
    link: { type: 'doc', id: 'guides/user-management/overview' },
    items: [
      {
        type: 'doc',
        label: 'Creating users in Noodl',
        id: 'guides/user-management/creating-users-in-noodl',
        imageUrl: '/',
        description: 'Learn how to create user accounts in your app',
      },
    ],
  },

  {
    type: 'category',
    label: 'Cloud Functions',
    link: { type: 'doc', id: 'guides/cloud-logic/overview' },
    items: [
      {
        type: 'doc',
        label: 'Introduction',
        id: 'guides/cloud-logic/introduction',
        imageUrl: '/img/featured-content-images/logic.png',
        description:
          'Start learning how to build logic that runs in the cloud.',
      },
      {
        type: 'doc',
        label: 'Email Verification',
        id: 'guides/cloud-logic/email-verification',
        imageUrl: '/img/featured-content-images/data.png',
        description: 'Learn how create signup flows and more.',
      },
      {
        type: 'doc',
        label: 'Scheduled Jobs',
        id: 'guides/cloud-logic/scheduled-jobs',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'How to do scheduled jobs using cloud functions.',
      },
      {
        type: 'doc',
        label: 'Logging and Debugging',
        id: 'guides/cloud-logic/logging',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'How to log and debug your cloud functions.',
      },
      {
        type: 'doc',
        label: 'Javascript',
        id: 'guides/cloud-logic/javascript',
        imageUrl: '/img/featured-content-images/logic.png',
        description: 'How to write Javascript in cloud functions.',
      },
    ],
  },
  {
    type: 'category',
    label: 'Collaboration',
    link: { type: 'doc', id: 'guides/collaboration/overview' },
    items: [
      {
        type: 'doc',
        label: 'Version Control',
        id: 'guides/collaboration/version-control',
        imageUrl: '/img/featured-content-images/basic.png',
        description:
          'Learn how to use Noodls powerful version control features based on Git',
      },
    ],
  },
  {
    type: 'category',
    label: 'Deploying and hosting apps',
    link: { type: 'doc', id: 'guides/deploy/overview' },
    items: [
      {
        type: 'doc',
        label: 'Sandbox Deploy',
        id: 'guides/deploy/deploying-an-app-on-sandbox',
        imageUrl: '/img/featured-content-images/hosting.png',
        description: 'Learn how to deploy your app to a Noodl sandbox domain',
      },
      {
        type: 'doc',
        label: 'Deploying to custom domains',
        id: 'guides/deploy/deploying-to-custom-domain',
        imageUrl: '/img/featured-content-images/hosting.png',
        description: 'Learn how to deploy your app to custom domains ',
      },
      {
        type: 'doc',
        label: 'Using a self hosted cloud service',
        id: 'guides/deploy/using-an-external-backend',
        imageUrl: '/img/featured-content-images/data.png',
        description:
          'Learn how to create a self hosted cloud service through a Docker Container',
      },
      {
        type: 'doc',
        label: 'Deploying to iOS and Android',
        id: 'guides/deploy/deploying-to-ios-and-android',
        imageUrl: '/img/featured-content-images/hosting.png',
        description: 'Learn how to deploy your project as a native app',
      },
      {
        type: 'doc',
        label: 'Self hosting your Noodl Frontend',
        id: 'guides/deploy/hosting-frontend',
        imageUrl: '/img/featured-content-images/hosting.png',
        description:
          'Learn how to deploy your project to a local folder for Self Hosting',
      },
    ],
  },
];

exports.getGuidesSidebarData = function () {
  return guides.map(recursiveBuildSidebarData);
};

function recursiveBuildGuideListingData(item) {
  if ('items' in item) {
    // is a category
    return {
      key: item.label,
      title: item.label,
      items: item.items.map(recursiveBuildGuideListingData),
    };
  } else {
    return {
      key: item.label,
      title: item.label,
      description: item.description,
      href: '/docs/' + item.id,
      imageUrl: item.imageUrl,
    };
  }
}

exports.getGuideListing = function () {
  return guides.map(recursiveBuildGuideListingData);
};
