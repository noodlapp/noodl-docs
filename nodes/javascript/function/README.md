---
hide_title: true
hide_table_of_contents: true
title: Function
---

<##head##>

# Function

This node enables you to add simpler custom JavaScript to your application.

Runs the Javascript:

- When any inputs are updated (if "Run" is not connected to anything)
- When "Run" is called

<div className="ndl-image-with-background l">

![](/nodes/javascript/function/function-1.png)

</div>

The code runs from top to bottom.
For more complex custom JavaScript with multiple executon paths and extended control you should use the <span className="ndl-node">Script</span> node.

<##head##>

The most basic way to use the node is as an expression,
any time the inputs are changed the script is run and the outputs are updated.
E.g. the example above can be used as shown below.

<div className="ndl-image-with-background l">

![](/nodes/javascript/function/function-2.png)

</div>

## Custom inputs and outputs

In your function script you can use the **Inputs** and **Outputs** object and any properties of these objects that you use in your script will automatically create input and outputs ports.
So the following script:

```javascript
Outputs.FullName = Inputs.FirstName + " " + Inputs.LastName;
```

Will create the output **FullName** and the inputs **FirstName** and **LastName**.
Another option is to explicitly specify the inputs and outputs in the properties of the node.
This will allow you to explicitly specify the types of the inputs and outputs.
This can be especially useful if the node is connected to **Component Inputs** or **Component Outputs**.

<div className="ndl-image-with-background">

![](/nodes/javascript/function/function-3.png)

</div>

## Signal outputs

If you want to send a signal from your **Function** script you can use an output as a function instead of assigning it a value.

```javascript
if (Inputs.Test === true) {
  Outputs.TestIsTrue();
} else {
  Outputs.TestIsFalse();
}
```

The code above will automatically create two outputs **TestIsTrue** and **TestIsFalse** that are signals.
When the inputs are changed and the code is run the node will send a signal on either depending on the content of the **Test** input.

## Controlled execution

Normally the script is run when any of the inputs change, i.e.
receive new data via connections, but you can also control when the function is run with the **Run** signal input.
If this input has a connection the script will only run when a signal is received.

<div className="ndl-image-with-background l">

![](/nodes/javascript/function/function-4.png)

</div>

## Inputs

| Data                                             | Description                                                                                                                                                                                         |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Script Inputs</span>  | Here you can list inputs to the function and specify types for the inputs as described above. For each input specified or simply used in the function code an input to the node will be created.    |
| <span className="ndl-data">Script Outputs</span> | Here you can list outputs to the function and specify types for the outputs as described above. For each output specified or simply used in the function code an input to the node will be created. |

| Signal                                  | Description                                                                                                                      |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Run</span> | Send a signal here to run the function. If this input has a connection the function script will not run when inputs are changed. |

## Outputs

| Data                                      | Description                                 |
| ----------------------------------------- | ------------------------------------------- |
| <span className="ndl-data">Outputs</span> | The outputs defined in the function script. |
