---
title: Create a build script
hide_title: true
---

<head>
  <meta name="robots" content="noindex,nofollow,noarchive" />
</head>

# Build scripts

Noodl has a way where you can hook into the different build events that
are triggered from the editor.

:::danger

This is an experimental feature, that might be changed in the future.

:::

### Where to use it?

- [Generate a Sitemap and static pages](/javascript/extending/build-script/sitemap-and-seo)
- [Change nodes at build time](/javascript/extending/build-script/change-nodes-at-build-time)

## Create a build script

To add a build script it has to be placed inside a folder in the project.
As long as the file ends with `.build.js` it will be picked up by Noodl.

The execution order of the build scripts are based on alphabetical order.

```
my-noodl-project/
    .noodl/
        build-scripts/
            [HERE]
```

### Example

Here is an example of what kind of events you can listen to:

```js
module.exports = {
  async onPreBuild(context) {
    // Occurs before the build.
  },
  async onPostBuild(context) {
    // Occurs after the build.
  },
  async onPreDeploy(context) {
    // Occurs before the build is deployed.
  },
  async onPostDeploy(context) {
    // Occurs after the build is deployed.
  },
};
```

## What is Context?

Context is a little different in each method,
but generally have the same methods.

:::note

More documentation to come later!

:::

### General

```ts
workspaceId: string;

project: ProjectModel;

environment: {
  name: string;
  description: string;
  masterKey: string;
  appId: string;
} | undefined;

/**
 *
 * @param options
 * @param callback
 */
activity(options: { message: string; successMessage?: string; }, callback: () => Promise<void>): Promise<void>;

/**
 *
 * @param type
 * @param message
 */
notify(type: 'notice' | 'success' | 'error', message: string): void;

/**
 * Returns a list of all the pages with absolute paths.
 *
 * @returns [
 *    {
 *      title: "page title",
 *      path: "/path-1/path-2",
 *      meta: {}
 *    },
 *    // ...
 *  ]
 */
getPages(options: {
  expandPaths?: (route: RouteNode) => Promise<string[]>;
}): Promise<readonly PageObject[]>;

/**
 * Create a index.html page similar to the one created for the web app.
 *
 * @returns a string containg the HTML code.
 */
createIndexPage(options: {
  /**
   * Override the title from project settings.
   *
   * Default: undefined
   */
  title?: string;

  /**
   * Append the headcode from the project settings.
   *
   * Default: undefined
   */
  headCode?: string;
}): Promise<string>;

/**
 * Returns a traversal graph of the nodes.
 *
 * @param selector
 * @returns
 */
graphTraverse(
  selector: (node: NodeGraphModel.Node) => boolean,
  options: NodeGraphTraverserOptions
): NodeGraphTraverser;
```
