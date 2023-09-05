---
title: Tooltip
hide_title: true
---

<##head##>

# Tooltip

This visual node adds a tooltip to the visual tree.

<div className="ndl-image-with-background l">

![](/library/modules/simple-tooltips/tooltip.png)

</div>

<##head##>

## Inputs

<div className="ndl-table-35-65">

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Allow HTML</span>                     | Determines if content strings are parsed as HTML instead of text.                                                                                                    |
| <span className="ndl-data">Content</span>                        | The content of the tooltip.                                                                                                                                          |
| <span className="ndl-data">Background Color</span>               | The background color of the tooltip.                                                                                                                                 |
| <span className="ndl-data">Text Style</span>                     | The Text Style in the tooltip.                                                                                                                                       |
| <span className="ndl-data">Max Width</span>                      | Specifies the maximum width of the tooltip.                                                                                                                          |
| <span className="ndl-data">Arrow</span>                          | Determines if the tooltip has an arrow.                                                                                                                              |
| <span className="ndl-data">Corner Radius</span>                  | The corner radius of the tooltip.                                                                                                                                    |
| <span className="ndl-data">Margin and Padding</span>             | The padding of the tooltip.                                                                                                                                          |
| <span className="ndl-data">Placement</span>                      | The preferred placement of the tooltip.                                                                                                                              |
| <span className="ndl-data">Follow Cursor</span>                  | Determines if the tooltip follows the user's mouse cursor.                                                                                                           |
| <span className="ndl-data">Offset X</span>                       | Displaces the tooltip from its reference element in pixels (skidding).                                                                                               |
| <span className="ndl-data">Offset Y</span>                       | Displaces the tooltip from its reference element in pixels (distance).                                                                                               |
| <span className="ndl-data">Animation</span>                      | The type of transition animation.                                                                                                                                    |
| <span className="ndl-data">Delay Show</span>                     | Delay in ms once a trigger event is fired before a tippy shows.                                                                                                      |
| <span className="ndl-data">Delay Hide</span>                     | Delay in ms once a trigger event is fired before a tippy hides.                                                                                                      |
| <span className="ndl-data">Duration Show</span>                  | Duration in ms of the transition animation.                                                                                                                          |
| <span className="ndl-data">Duration Hide</span>                  | Duration in ms of the transition animation.                                                                                                                          |
| <span className="ndl-data">Hide On Click</span>                  | Determines if the tippy hides upon clicking the reference or outside of the tooltip. The behavior can depend upon the trigger events used.                           |
| <span className="ndl-data">Trigger</span>                        | Determines the events that will show the tooltip.                                                                                                                    |
| <span className="ndl-data">Interactive</span>                    | Determines if the tooltip has interactive content inside of it, so that it can be hovered over and clicked inside without hiding.                                    |
| <span className="ndl-data">Interactive Border</span>             | Determines the size of the invisible border around the tooltip that will prevent it from hiding if the cursor left it.                                               |
| <span className="ndl-data">Interactive Debounce</span>           | Determines the time in ms to debounce the interactive hide handler when the cursor leaves the tooltip's interactive region.                                          |
| <span className="ndl-data">Shadow Enabled</span>                 | Enables and disables the shadow.                                                                                                                                     |
| <span className="ndl-data">Offset X</span>                       | The horizontal offset of the shadow. A positive value puts the shadow on the right side of the node, a negative value puts the shadow on the left side of the node.  |
| <span className="ndl-data">Offset Y</span>                       | The vertical offset of the shadow. A positive value puts the shadow below the node, a negative value puts the shadow above node.                                     |
| <span className="ndl-data">Blur Radius</span>                    | The blur radius. The higher the number, the blurrier the shadow will be.                                                                                             |
| <span className="ndl-data">Spread Radius</span>                  | The spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow.                                             |
| <span className="ndl-data">Inset</span>                          | Changes the shadow from an outer shadow (outset) to an inner shadow.                                                                                                 |
| <span className="ndl-data">Shadow Color</span>                   | The color of the shadow.                                                                                                                                             |

| Signal                                                           | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Show</span>                         | Show the tooltip.                                                                                                                                                    |
| <span className="ndl-signal">Hide</span>                         | Hide the tooltip.                                                                                                                                                    |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Is Open</span>                        | True, if the tooltip is open; Otherwise, false.                                                                                                                      |

| Signal                                                           | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Shown</span>                        | Sends a signal when the tooltip is visible.                                                                                                                          |
| <span className="ndl-signal">Hidden</span>                       | Sends a signal when the tooltip is hidden.                                                                                                                           |

</div>
