---
hide_title: true
hide_table_of_contents: true
title: Create a new core node
---

# Create a new core node

Noodl is very extensible. As a developer you can add new modules with new capablities, create connections to data or make new visual components for your projects. This guide gets us started by showing how the Noodl command line tool works and how to create an extension module with a single new node. This node will behave and appear just like the standard core nodes of Noodl.

:::note
This guide requires <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a> and <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">npm</a> installed.
:::

## Overview

This guide will walk you through how to create a **Noodl Module**. A Noodl Module can contain new core nodes to use in your projects. You can for example wrap an existing JavaScript library and expose it as a node in Noodl.

The general process works like this

- Set up a new **Module Project** where you can write the code for your module.
- Test your module in one of you projects while developing it.
- When you are done, build the module and deploy it to the projects you want to use it in.

## Install the Noodl CLI

First you need to install the Noodl command line interfaces. If you have not previously installed the CLI you can do so via npm.

```bash
npm install -g @noodl/noodl-cli
```

## Create a Module Project

With the CLI tool you can easily create a new Noodl module from a template:

```bash
noodl-cli new lib ./my-noodl-module
```

You need to specify a directory name that will be created. The directory will contain everything you need to get started. Using the command above, the directory _my-noodl-module_ will be created.

The newly created directory has the following structure:

```
my-noodl-module/
    module/
    project/
    tests/
    icon.png
    module.json
```

First some notes on the content of a library module:

- The **module** directory contains the source code for the module as well as build scripts and any assets you might want, such as fonts, css etc.
- The **project** and **tests** folder can be ignored

First enter the **module** directory and install the needed dependencies:

```bash
cd module
```

```bash
npm install
```

If your module uses any other external libraries through NPM they will be installed as well.

## Developing your module

You develop your module mainly by editing the file `module/src/index.js`. From start it contains some example code that you can use as a boiler plate. There is currently no official documenation of the Noodl module SDK but you can find the source code to a number of modules [here](https://github.com/noodlapp).

As you are developing your module you would want it packaged up and deployed in a Noodl project where you can test it. To do that you first have to create a new Noodl project that will be your test project. Once you've done that, find the local folder of that project by clickin the cogwheel ("Settings") and "Open project folder".

<div class="ndl-image-with-background m">

![](/javascript/extending/open-project-folder.png)

</div>

Copy the full path to that folder - you will need it in the next step.

Now open the file `/module/src/webpack.config.js`. Among other things, this file specifies where to deploy the module. We want to make sure its deployed to our test project.
Update the row containing `var outputPath = ...` to the following

```javascript
var outputPath = path.resolve(
  '<the absolute path that your project>',
  'noodl_modules/' + pjson.name
);
```

Now go back to your terminal window (that was located in the `modules/` folder) and write the following.

```bash
npm run dev
```

This will enter development mode where your module is automatically rebuilt and redeployed to your project when you make changes in the source code.

If you started from the boiler plate code in `module/src/index.js` you will already have a module now in your project. Reload the Noodl project by closing it and opening it again, or simply press ctrl+R (Windows) / cmd+R (Mac) when you are in the Node Editor. Then bring up the Node Picker and you should see your new core node under "External Libraries".

## Overview of the module code

The file _index.js_ contains the code for your nodes. Open it in your favorite editor and have a look. The file contains boilerplate code for a simple new core node, let's look at the different sections:

First you must import the Noodl SDK.

```javascript
const Noodl = require('@noodl/noodl-sdk');
```

Next you will define the code for the new node.

```javascript
const MyFullNameNode = Noodl.defineNode({
  category: 'My Utils',
  name: 'Full Name',
  inputs: {
    FirstName: 'string',
    LastName: 'string',
  },
  outputs: {
    FullName: 'string',
  },
  changed: {
    FirstName: function () {
      this.setOutputs({
        FullName: this.inputs.FirstName + ' ' + this.inputs.LastName,
      });
    },
    LastName: function () {
      this.setOutputs({
        FullName: this.inputs.FirstName + ' ' + this.inputs.LastName,
      });
    },
  },
});
```

- You need to specify the **name** of the node, this is the name that shows up in the list when creating new nodes.
- you can optionally specify a **category**, this will also be used in the new node popup in Noodl.

Finally you need to define the specification of your module.

```javascript
Noodl.defineModule({
  nodes: [MyFullNameNode],
  setup() {
    //this is called once on startup
  },
});
```

Again, check out the [Noodl Repo](https://github.com/noodlapp) at GitHub for some module examples.

## Deploying your module

When you are happy with your module you can do a proper deploy. Go back to the terminal window (still in the `modules/` folder) and write.

```bash
npm run build
```

This deploys an optimized version of the module. If you want to use the module in a different project, just change the path in `/module/src/webpack.config.js` and do `npm run build` again.
