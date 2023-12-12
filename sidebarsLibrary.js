/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const modules = require('./static/library/modules/index.json');
const prefabs = require('./static/library/prefabs/index.json');

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

// Generate modules sidebars from modules index

function getAllResourceOverviewLinks(resource) {
  return resource.map((module) => ({
    type: 'link',
    label: module.label,
    href: module.docs,
  }));
}

const sidebars = {
  librarySidebar: [
    'overview',
    {
      type: 'category',
      label: 'Prefabs',
      link: {
        type: 'doc',
        id: 'prefabs/overview',
      },
      items: getAllResourceOverviewLinks(prefabs),
    },
    {
      type: 'category',
      label: 'Modules',
      link: {
        type: 'doc',
        id: 'modules/overview',
      },
      items: getAllResourceOverviewLinks(modules),
    },
    {
      type: 'category',
      label: 'Examples',
      collapsible: true,
      link: {
        type: 'doc',
        id: 'examples/overview',
      },
      items: [
        {
          type: 'doc',
          label: 'Task List app',
          id: 'examples/task-list-app',
        },
        {
          type: 'doc',
          label: 'Custom Survey app',
          id: 'examples/survey-app',
        },
        {
          type: 'doc',
          label: 'Star Rating component',
          id: 'examples/star-rating-component',
        },
        {
          type: 'doc',
          label: 'Navigation with URL encoded parameters',
          id: 'examples/navigation-url-encoding',
        },
        {
          type: 'doc',
          label: 'Suatch Google Sheets Example',
          id: 'examples/suatch',
        },
        {
          type: 'doc',
          label: 'Travel App',
          id: 'examples/travel-app',
        },
        {
          type: 'doc',
          label: 'Mapbox Example',
          id: 'examples/mapbox',
        },
        {
          type: 'doc',
          label: 'Recipe App',
          id: 'examples/recipe-app',
        },
        {
          type: 'doc',
          label: 'Modal Wizard in Popup',
          id: 'examples/modal-wizard',
        },
        {
          type: 'doc',
          label: 'CRUD Form',
          id: 'examples/crud-form',
        },
        {
          type: 'doc',
          label: 'Conditional Form',
          id: 'examples/conditional-form',
        },
        {
          type: 'doc',
          label: 'Javascript Example',
          id: 'examples/javascript-example',
        },
        {
          type: 'doc',
          label: 'Sign Up / Sign In form',
          id: 'examples/sign-up',
        },
        {
          type: 'doc',
          label: 'Localization Example (i18next)',
          id: 'examples/localization',
        },
        {
          type: 'doc',
          label: 'Weavy Integration',
          id: 'examples/weavy-integration',
        },
      ],
    },
    'prefab-contributions',
  ],

  // Custom HTML
  customHtmlSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/custom-html/overview',
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Custom HTML',
          id: 'modules/custom-html/README',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Simple Tooltips
  customHtmlSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/simple-tooltips/README',
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Tooltip',
          id: 'modules/simple-tooltips/nodes/tooltip',
        },
        {
          type: 'doc',
          label: 'Show Tooltip',
          id: 'modules/simple-tooltips/nodes/show-tooltip',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'modules/simple-tooltips/release-notes',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Avatar
  avatarSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/avatar/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/modules/overview',
    },
  ],

  // Chart.js
  chartjsSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/chartjs/README',
    },
    {
      type: 'category',
      label: 'Charts Examples',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Bar Chart',
          id: 'modules/chartjs/charts/bar',
        },
        {
          type: 'doc',
          label: 'Line Chart',
          id: 'modules/chartjs/charts/line',
        },
        {
          type: 'doc',
          label: 'Stacked Line Chart',
          id: 'modules/chartjs/charts/stacked-line',
        },
        {
          type: 'doc',
          label: 'Bubble Chart',
          id: 'modules/chartjs/charts/bubble',
        },
        {
          type: 'doc',
          label: 'Doughnut Chart',
          id: 'modules/chartjs/charts/doughnut',
        },
        {
          type: 'doc',
          label: 'Pie Chart',
          id: 'modules/chartjs/charts/pie',
        },
        {
          type: 'doc',
          label: 'Polar Area Chart',
          id: 'modules/chartjs/charts/polar-area',
        },
        {
          type: 'doc',
          label: 'Radar Chart',
          id: 'modules/chartjs/charts/radar',
        },
        {
          type: 'doc',
          label: 'Scatter Chart',
          id: 'modules/chartjs/charts/scatter',
        },
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Custom Tooltip',
          id: 'modules/chartjs/examples/custom-tooltip/README',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Interactions',
          id: 'modules/chartjs/guides/interactions',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: true,
      items: [
        {
          type: 'doc',
          label: 'Bar Chart',
          id: 'modules/chartjs/nodes/bar',
        },
        {
          type: 'doc',
          label: 'Line Chart',
          id: 'modules/chartjs/nodes/line',
        },
        {
          type: 'doc',
          label: 'Bubble Chart',
          id: 'modules/chartjs/nodes/bubble',
        },
        {
          type: 'doc',
          label: 'Doughnut Chart',
          id: 'modules/chartjs/nodes/doughnut',
        },
        {
          type: 'doc',
          label: 'Pie Chart',
          id: 'modules/chartjs/nodes/pie',
        },
        {
          type: 'doc',
          label: 'Polar Area Chart',
          id: 'modules/chartjs/nodes/polar-area',
        },
        {
          type: 'doc',
          label: 'Radar Chart',
          id: 'modules/chartjs/nodes/radar',
        },
        {
          type: 'doc',
          label: 'Scatter Chart',
          id: 'modules/chartjs/nodes/scatter',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'modules/chartjs/release-notes',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Google Analytics
  googleAnalyticsSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/google-analytics/README',
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Setting up Google Analytics',
          id: 'modules/google-analytics/guides/setting-up-google-analytics/README',
        },
        {
          type: 'doc',
          label: 'Tracking custom events',
          id: 'modules/google-analytics/guides/tracking-custom-events/README',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Google Analytics Root',
          id: 'modules/google-analytics/nodes/google-analytics-root/README',
        },
        {
          type: 'doc',
          label: 'Send Google Analytics Data',
          id: 'modules/google-analytics/nodes/send-google-analytics-data/README',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'modules/google-analytics/release-notes',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Graph QL
  graphQLSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/graphql/README',
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'GraphQL Query',
          id: 'modules/graphql/graphql-node',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Form Validation
  validationSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/validation/README',
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Validate',
          id: 'modules/validation/validate',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // i18next
  i18nextSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/i18next/README',
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'i18Next',
          id: 'modules/i18next/i18next-node',
        },
        {
          type: 'doc',
          label: 'Language Bundle',
          id: 'modules/i18next/language-bundle',
        },
        {
          type: 'doc',
          label: 'Translation',
          id: 'modules/i18next/translation',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Lottie
  lottieSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/lottie/README',
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Lottie',
          id: 'modules/lottie/lottie-node',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Markdown
  markdownSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/markdown/README',
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Markdown',
          id: 'modules/markdown/markdown-node',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // MQTT
  mqttSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/mqtt/README',
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Basics',
          id: 'modules/mqtt/mqtt-guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Send Message',
          id: 'modules/mqtt/send-message',
        },
        {
          type: 'doc',
          label: 'Receive Message',
          id: 'modules/mqtt/receive-message',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Webcamera
  webcameraSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/webcamera/README',
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Basics',
          id: 'modules/webcamera/webcamera-guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Webcamera',
          id: 'modules/webcamera/webcamera-node',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Google Sheets
  gsheetsSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/gsheets/README',
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Setting up',
          id: 'modules/gsheets/guides/setting-up/README',
        },
        {
          type: 'doc',
          label: 'Park Details',
          id: 'modules/gsheets/guides/park-details/README',
        },
        {
          type: 'doc',
          label: 'Filtering',
          id: 'modules/gsheets/guides/filtering/README',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Query Sheet',
          id: 'modules/gsheets/node-docs/query-sheet/README',
        },
        {
          type: 'doc',
          label: 'Query Sheet Aggregate',
          id: 'modules/gsheets/node-docs/query-sheet-aggregate/README',
        },
        {
          type: 'doc',
          label: 'Sheet Row',
          id: 'modules/gsheets/node-docs/sheet-row/README',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'modules/gsheets/release-notes',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Mapbox
  mapboxSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/mapbox/README',
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Setting up',
          id: 'modules/mapbox/guides/setting-up/README',
        },
        {
          type: 'doc',
          label: 'Interacting',
          id: 'modules/mapbox/guides/interacting/README',
        },
        {
          type: 'doc',
          label: 'Using Markers',
          id: 'modules/mapbox/guides/using-markers/README',
        },
        {
          type: 'doc',
          label: 'Directions API',
          id: 'modules/mapbox/guides/directions-api/README',
        },
        {
          type: 'doc',
          label: 'Styles',
          id: 'modules/mapbox/guides/styles',
        },
        {
          type: 'doc',
          label: 'Take a Screenshot',
          id: 'modules/mapbox/guides/screenshot',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Mapbox Map',
          id: 'modules/mapbox/nodes/v2/mapbox-map',
        },
        {
          type: 'doc',
          label: 'Mapbox Marker',
          id: 'modules/mapbox/nodes/v2/mapbox-marker',
        },
        {
          type: 'doc',
          label: 'Mapbox Polygon',
          id: 'modules/mapbox/nodes/v2/mapbox-polygon',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'modules/mapbox/release-notes',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // geospatial-analysis
  geospatialAnalysisSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/geospatial-analysis/README',
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Turf.js API',
          id: 'modules/geospatial-analysis/nodes/v1/geospatial-api',
        },
        {
          type: 'doc',
          label: 'Geospatial Area',
          id: 'modules/geospatial-analysis/nodes/v1/geospatial-area',
        },
        {
          type: 'doc',
          label: 'Geospatial Center Of Mass',
          id: 'modules/geospatial-analysis/nodes/v1/geospatial-center-of-mass',
        },
        {
          type: 'doc',
          label: 'Geospatial Center',
          id: 'modules/geospatial-analysis/nodes/v1/geospatial-center',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'modules/geospatial-analysis/release-notes',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // QR Scanner
  qrScannerSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/qr-scanner/README',
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Camera Feed',
          id: 'modules/qr-scanner/guides/camera-feed/README',
        },
        {
          type: 'doc',
          label: 'Image Upload',
          id: 'modules/qr-scanner/guides/image-upload/README',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Camera QR Scanner',
          id: 'modules/qr-scanner/nodes/camera-qr-scanner/README',
        },
        {
          type: 'doc',
          label: 'Image QR Scanner',
          id: 'modules/qr-scanner/nodes/image-qr-scanner/README',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Multi Choice With Pills
  multiChoiceWithPillsSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/multi-choice-with-pills/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Multi Choice
  multiChoiceSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/multi-choice/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Date Picker
  datePickerSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/date-picker/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Time Picker
  timePickerSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/time-picker/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Table
  tableSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/table/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Form
  formSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/form/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // List With Icons
  listWithIconsSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/list-with-icons/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Navigation Menu
  navigationMenuSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/navigation-menu/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Media Query
  mediaQuerySidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/media-query/README',
    },
    {
      type: 'category',
      label: 'Components',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Media Query Setup',
          id: 'prefabs/media-query/components/media-query-setup/README',
        },
        {
          type: 'doc',
          label: 'Match Media Query',
          id: 'prefabs/media-query/components/match-media-query/README',
        },
        {
          type: 'doc',
          label: 'Match Custom Media Query',
          id: 'prefabs/media-query/components/match-custom-media-query/README',
        },
        {
          type: 'doc',
          label: 'Media Query Debugger',
          id: 'prefabs/media-query/components/media-query-debugger/README',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Carousel Scroll
  carouselScrollSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/carousel-scroll/README',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Shake detector
  shakeDetectorScrollSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/shake-detector/README',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Toggle
  toggleSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/toggle/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Toast
  toastSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/toast/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Modal
  modalSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/modal/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Progress Circle
  progressCircleSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/progress-circle/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Tab Bar
  tabBarSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/tab-bar/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Rating
  ratingSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/rating/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Loading Spinner
  loadingSpinnerSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/loading-spinner/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Tags
  tagsSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/tags/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Selection Pills
  selectionPillsSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/selection-pills/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Email Verification
  emailVerificationSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/email-verification/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // OAuth2
  oauth2Sidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/oauth2/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // TOTP
  TOTPSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/totp/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Stripe
  StripeSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/stripe/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // MailGun
  MailGunSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/mailgun/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // SendGrid
  SendGridSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/sendgrid/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Pagination
  PaginationSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/pagination/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Pages and rows
  PagesAndRowsSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/pagesandrows/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Filters
  FiltersSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/filters/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // OpenAI
  OpenAISidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/openai/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // PDF
  PDFExportSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/pdf/README',
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Marquee Module
  marquee: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/marquee/README',
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Marquee',
          id: 'modules/marquee/nodes/v1/marquee',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'modules/marquee/release-notes',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Material Icons
  materialIcons: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/material-icons/README',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Font Awesome Brands
  fontAwesomeBrands: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/font-awesome-brands/README',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Font Awesome Solid
  fontAwesomeSolid: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'modules/font-awesome-solid/README',
    },
    {
      type: 'link',
      label: 'Back to modules',
      href: '/library/modules/overview',
    },
  ],

  // Xano
  XanoSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/xano/README',
    },
    {
      type: 'category',
      label: 'Base Components',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Setup XanoClient',
          id: 'prefabs/xano/components/setup-xanoclient/README',
        },
        {
          type: 'doc',
          label: 'Request',
          id: 'prefabs/xano/components/xano-request/README',
        },
      ],
    },
    {
      type: 'category',
      label: 'User Components',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Sign Up',
          id: 'prefabs/xano/components/xano-sign-up/README',
        },
        {
          type: 'doc',
          label: 'Log In',
          id: 'prefabs/xano/components/xano-log-in/README',
        },
        {
          type: 'doc',
          label: 'Log Out',
          id: 'prefabs/xano/components/xano-log-out/README',
        },
        {
          type: 'doc',
          label: 'Current User',
          id: 'prefabs/xano/components/xano-current-user/README',
        },
        {
          type: 'doc',
          label: 'Update Current User',
          id: 'prefabs/xano/components/xano-update-current-user/README',
        },
        {
          type: 'doc',
          label: 'authToken Refresh',
          id: 'prefabs/xano/components/xano-authtoken-refresh/README',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],

  // Supabase
  SupabaseSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'prefabs/supabase/README',
    },
    {
      type: 'category',
      label: 'Base Components',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Setup Client',
          id: 'prefabs/supabase/components/setup-client/README',
        },
        {
          type: 'doc',
          label: 'Request Example',
          id: 'prefabs/supabase/components/supabase-request-example/README',
        },
      ],
    },
    {
      type: 'category',
      label: 'User Components',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'Sign Up',
          id: 'prefabs/supabase/components/supabase-sign-up/README',
        },
        {
          type: 'doc',
          label: 'Log In',
          id: 'prefabs/supabase/components/supabase-log-in/README',
        },
        {
          type: 'doc',
          label: 'Log Out',
          id: 'prefabs/supabase/components/supabase-log-out/README',
        },
        {
          type: 'doc',
          label: 'Send Password Reset',
          id: 'prefabs/supabase/components/supabase-send-password-reset/README',
        },
        {
          type: 'doc',
          label: 'Send Magic Link',
          id: 'prefabs/supabase/components/supabase-send-magic-link/README',
        },
        {
          type: 'doc',
          label: 'Resend Confirmation',
          id: 'prefabs/supabase/components/supabase-resend-confirmation/README',
        },
        {
          type: 'doc',
          label: 'Fetch Current User Auth',
          id: 'prefabs/supabase/components/supabase-fetch-current-user-auth/README',
        },
        {
          type: 'doc',
          label: 'Fetch Current User Profile Data',
          id: 'prefabs/supabase/components/supabase-fetch-current-user-profile-data/README',
        },
        {
          type: 'doc',
          label: 'Update Current User Auth',
          id: 'prefabs/supabase/components/supabase-update-current-user-auth/README',
        },
        {
          type: 'doc',
          label: 'Update Current User Profile Data',
          id: 'prefabs/supabase/components/supabase-update-current-user-profile-data/README',
        },
      ],
    },
    {
      type: 'link',
      label: 'Back to prefabs',
      href: '/library/prefabs/overview',
    },
  ],
};

module.exports = sidebars;
