---
title: Mapbox Marker
hide_title: true
---

<##head##>

# Mapbox Marker

This node should be placed as a child in the Mapbox Map node, it can be used in a repeater.

<div className="ndl-image-with-background l">

![](/library/modules/mapbox/nodes/mapbox-marker.png)

</div>

<##head##>

## Inputs

<div className="ndl-table-35-65">

| Data                                                 | Description                                                                                  |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Color</span>              | Sets the color of the marker.                                                                |
| <span className="ndl-data">z-Index</span>            | Sets the z-Index of the marker.                                                              |
| <span className="ndl-data">Draggable</span>          | Make the marker draggable.                                                                   |
| <span className="ndl-data">Rotation</span>           | Sets the rotation of the marker.                                                             |
| <span className="ndl-data">Rotation Alignment</span> | Sets the rotation alignment marker.                                                          |
| <span className="ndl-data">Pitch Alignment</span>    | Sets the pitch alignment marker.                                                             |
| <span className="ndl-data">Offset X</span>           | Sets the marker x offset.                                                                    |
| <span className="ndl-data">Offset Y</span>           | Sets the marker y offset.                                                                    |
| <span className="ndl-data">Longitude</span>          | Sets the current active longitude.                                                           |
| <span className="ndl-data">Latitude</span>           | Sets the current active latitude.                                                            |
| <span className="ndl-data">Tooltip</span>            | Add a custom tooltip using the Mapbox tooltips, this will oonly work on the default markers. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                                | Description                                                                                      |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Longitude</span>         | The current active longitude.                                                                    |
| <span className="ndl-data">Latitude</span>          | The current active latitude.                                                                     |
| <span className="ndl-data">Width</span>             | The width of the marker container.                                                               |
| <span className="ndl-data">Height</span>            | The height of the marker container.                                                              |
| <span className="ndl-data">Screen Position X</span> | The amount of pixels between the left side of the window and the left side of the map container. |
| <span className="ndl-data">Screen Position Y</span> | The amount of pixels between the top of the window and the top side of the map container.        |

| Signal                                           | Description                                           |
| ------------------------------------------------ | ----------------------------------------------------- |
| <span className="ndl-signal">Click</span>        | Sends a signal when the user clicks on the marker.    |
| <span className="ndl-signal">Drag Start</span>   | Sends a signal when marker is starting to be dragged. |
| <span className="ndl-signal">Drag</span>         | Sends a signal when marker is being dragged.          |
| <span className="ndl-signal">Drag End</span>     | Sends a signal when marker is dragged ended.          |
| <span className="ndl-signal">Did Mount</span>    | Sends a signal when the marker have been loaded.      |
| <span className="ndl-signal">Will Unmount</span> | Sends a signal when the marker is unloaded.           |

</div>
