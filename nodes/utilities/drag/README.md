---
hide_title: true
hide_table_of_contents: true
title: Drag
---

<##head##>

# Drag

The drag node is used to make visual nodes draggable with the mouse or touch. The child of a **Drag** node automatically become draggable.

:::tip

The Drag node can only have one child, but that child can have many children.

:::

<div className="ndl-image-with-background l">

![](/nodes/utilities/drag/drag.png)

</div>

<##head##>

## Inputs

### Snap To Position X

| Signal                                 | Description                                                                                                                         |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | Send a signal here to trigger a snap to the position specified by _Value_ and with the transition duration specified by _Duration_. |

| Data                                       | Description                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span>    | This is the X value the the snap action will have as destination when triggered. |
| <span className="ndl-data">Duration</span> | The snap transition duration.                                                    |

### Snap To Position Y

| Signal                                 | Description                                                                                                                         |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | Send a signal here to trigger a snap to the position specified by _Value_ and with the transition duration specified by _Duration_. |

| Data                                       | Description                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span>    | This is the Y value the the snap action will have as destination when triggered. |
| <span className="ndl-data">Duration</span> | The snap transition duration.                                                    |

### Drag

| Data                                                  | Description                                                                                                                                                                                     |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enable</span>              | Enables or disables this node. If it is disabled, drag will not have any affect on child nodes.                                                                                                 |
| <span className="ndl-data">Axis</span>                | Specifies along which axes the drag will work<br/>a<br/>`X`: Only horizontal drag is enabled.<br/>`Y`: Only vertical drag is enabled.<br/>`Both`: Both horizontal and vertical drag is enabled. |
| <span className="ndl-data">Constrain to parent</span> | If enabled the child nodes being dragged will be constrained to the borders of the parent node so they cannot be dragged outside of the parent bounds.                                          |

### Other

| Data                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Start Drag X</span> | Specifies the X position that will be used as the starting point. Setting this will force the child nodes to the specified position.                                                                                               |
| <span className="ndl-data">Start Drag Y</span> | Specifies the Y position that will be used as the starting point. Setting this will force the child nodes to the specified position.                                                                                               |
| <span className="ndl-data">Scale</span> | Specifies the move scale that will be used when dragging the node around. This can correct the drag deltas while you are zoomed in or out.                                                                                               |
| <span className="ndl-data">Mounted</span>      | This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible. |

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties):

-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## Outputs

### Other

| Data                                          | Description                                                                                                                                                                                       |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Child Index</span> | The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on. |
| <span className="ndl-data">This</span>        | A reference to this node. Used in custom **Javascript** nodes and more.                                                                                                                           |

### Bounding Box

| Data                                                | Description                                           |
| --------------------------------------------------- | ----------------------------------------------------- |
| <span className="ndl-data">Screen Position X</span> | Where this node is on the screen's X-axis, in pixels. |
| <span className="ndl-data">Screen Position Y</span> | Where this node is on the screen's Y-axis, in pixels. |
| <span className="ndl-data">Width</span>             | Current width of this node.                           |
| <span className="ndl-data">Height</span>            | Current height of this node.                          |

### Mounted

| Signal                                           | Description                                                                                          |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Did Mount</span>    | Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible. |
| <span className="ndl-signal">Will Unmount</span> | Signal sent when this node is about to be removed from the visual tree and become hidden.            |

### Signals

| Signal                                           | Description                                                |
| ------------------------------------------------ | ---------------------------------------------------------- |
| <span className="ndl-signal">Drag Started</span> | Emitted when dragging of a child is detected.              |
| <span className="ndl-signal">Drag Ended</span>   | Emitted when dragging stopped.                             |
| <span className="ndl-signal">Drag Moved</span>   | Emitted while a child node is being moved during the drag. |

### Values

| Data                                      | Description                                                                                          |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Drag X</span>  | The current X position of the dragged node.                                                          |
| <span className="ndl-data">Drag Y</span>  | The current Y position of the dragged node.                                                          |
| <span className="ndl-data">Delta X</span> | The horizontal distance a node has been dragged from its last horizontal position. Measured in `px`. |
| <span className="ndl-data">Delta Y</span> | The vertical distance a node has been dragged from its last vertical position. Measured in `px`.     |
