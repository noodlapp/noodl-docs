---
hide_title: true
hide_table_of_contents: true
title: Create a Visual node with React
---

# Create a Visual node with React

Noodl is built with React which makes it easy for you to add custom or community React components to your workspace. This guide will help you create a React library from scratch and push it to your Noodl workspace.

## Setup

In order to complete this guide you must install the _Noodl CLI_ and learn how to push the module to your workspace. Please review [this guide](/javascript/extending/create-lib) first.

With the CLI tool you can easily create a new react library module from a template:

```bash
noodl-cli new react-lib ./my-react-lib
```

You need to specify a directory name that will be created. The directory will contain everything you need to get started. Using the command above, the directory _my-react-lib_ will be created.

The newly created directory has the following structure:

```
my-react-lib/
    module/
    project/
    tests/
    icon.png
    module.json
```

Just like in the introductory [guide](/javascript/extending/create-lib) the folder contains the **project** and **tests** subfolders that you may to import into Noodl. Especially the **tests** folder is a good place to play around with your library and create tests to make sure the component is working as expected.

:::note
It is important that you do not change the name of the **project** and **tests** folders. The build scripts in the _module_ folder is dependent on these names or it will not build the module properly and you cannot push to your workspace.
:::

## A tour of the code

Now you have created a new React library module from the template and you have pushed it to your Noodl workspace. Let's review the code a bit to get you up and running.

The react code can be found in the **module** directory.

```
my-react-lib/
    module/
        src/
            index.js
        assets/
            manifest.json
        package.json
        webpack.config.js
    project/
        ...
```

Open _index.js_ in your favorite editor. This file contains a simple React component and its export to Noodl. Each component that you want to be exposed in Noodl as a visual component, must be exported.

First a simple React component:

```javascript
function MyCustomReactComponent(props) {
    const style = {
        color: props.textColor,
        backgroundColor: props.backgroundColor,
        borderRadius: '10px',
        padding: '20px',
        marginBottom: props.marginBottom,
    }

    return (
        <div style={style} onClick={props.onClick}>
            {props.children}
        </div>
    )
}
```

Next the export of the component to Noodl:

```javascript
const MyCustomReactComponentNode = Noodl.defineReactNode({
    name: 'Custom React Component',
    category: 'Tutorial',
    getReactComponent() {
        return MyCustomReactComponent
    },
    inputProps: {
        backgroundColor: { type: 'color', default: 'white' },
        marginBottom: {
            type: { name: 'number', units: ['px'], defaultUnit: 'px' },
            default: 10,
        },
    },
    outputProps: {
        onClick: { type: 'signal', displayName: 'Click' },
    },
})
```

In addition to how you would specify a simple Noodl node, as in the introductory [guide](/javascript/extending/create-lib), you must provide the _getReactComponent_ function that retuns the React component. You may also specify _inputProps_ and _outputProps_ that map to the properties of the React node and will become inputs and outputs of your Noodl node.

Outputs in React are typically done via callbacks. You can capture these callbacks and deliver them as outputs in Noodl.

Finally the component is provided as part of your module declaration. Here you need to put it under the _reactNodes_ section to make sure Noodl recognises it as a visual node.

```javascript
Noodl.defineModule({
    reactNodes: [MyCustomReactComponentNode],
    nodes: [],
    setup() {
        //this is called once on startup
    },
})
```
