# Visual Output Properties

## Scrolling

| Data                                              | Description                                  |
| ------------------------------------------------- | -------------------------------------------- |
| <span className="ndl-data">Scroll Position</span> | The current position of scrolling in pixels. |

| Signal                                           | Description                           |
| ------------------------------------------------ | ------------------------------------- |
| <span className="ndl-signal">Scroll Start</span> | Signal emitted when scrolling starts. |
| <span className="ndl-signal">Scroll End</span>   | Signal emitted when scrolling ends.   |

## Bounding Box

| Data                                                | Description                                                                                 |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Screen Position X</span> | <##output:screenPositionX##>Where this node is on the screen's X-axis, in `px`.<##output##> |
| <span className="ndl-data">Screen Position Y</span> | <##output:screenPositionY##>Where this node is on the screen's Y-axis, in `px`.<##output##> |
| <span className="ndl-data">Width</span>             | <##output:width##>Current width of this node.<##output##>                                   |
| <span className="ndl-data">Height</span>            | <##output:height##>Current height of this node.<##output##>                                 |

## Mounted

| Signal                                           | Description                                                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Did Mount</span>    | <##output:didMount##>Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible.<##output##> |
| <span className="ndl-signal">Will Unmount</span> | <##output:willUnmount##>Signal sent when this node is about to be removed from the visual tree and become hidden.<##output##>         |

## Pointer Events

| Signal                                            | Description                                                           |
| ------------------------------------------------- | --------------------------------------------------------------------- |
| <span className="ndl-signal">Click</span>         | Triggered when the node is clicked or tapped.                         |
| <span className="ndl-signal">Pointer Down</span>  | Triggered when the mouse is pressed or finger is down on the node.    |
| <span className="ndl-signal">Pointer Up</span>    | Triggered when the mouse is released or finger is lifted on the node. |
| <span className="ndl-signal">Pointer Enter</span> | Triggered when the mouse enters the node.                             |

## Hover Events

| Signal                                          | Description                               |
| ----------------------------------------------- | ----------------------------------------- |
| <span className="ndl-signal">Hover Start</span> | Triggered when the mouse enters the node. |
| <span className="ndl-signal">Hover End</span>   | Triggered when the mouse leaves the node. |

## Focus

| Signal                                      | Description                                                                                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Focused</span> | Triggered when the node, or one if its descendants, is clicked, or if the _Focused_ input is triggered.                           |
| <span className="ndl-signal">Blurred</span> | Triggered when this node had focus and another node gained focus. Focus is only lost if the new focused node is not a descendant. |

## Other

| Data                                             | Description                                                                                                                                                                                                                              |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Child Index</span>    | <##output:childIndex##>The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ `0`, the second child will have _Child Index_ `1`, and so on.<##output##> |
| <span className="ndl-data">This</span>           | <##output:this##>A reference to this node. Used in custom **JavaScript** nodes and more.<##output##>                                                                                                                                     |
| <span className="ndl-data">Children Count</span> | <##output:this##>Outputs the number of children that this node has (if the node supports children).<##output##>                                                                                                                          |
