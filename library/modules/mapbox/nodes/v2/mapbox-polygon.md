---
title: Mapbox Polygon
hide_title: true
---

<##head##>

# Mapbox Polygon

This node should be placed as a child in the Mapbox Map node, it can be used in a repeater.

<div className="ndl-image-with-background l">

![](/library/modules/mapbox/nodes/mapbox-polygon.png)

</div>

Here is the code that is inside the "Get Polygon" Function node:

```js
Outputs.Coordinates = [
  [
    [-118.446802, 34.061877],
    [-118.456802, 34.061877],
    [-118.456802, 34.051877],
    [-118.446802, 34.051877],
    [-118.446802, 34.061877],
  ],
];
```

<##head##>

## Inputs

<div className="ndl-table-35-65">

| Data                                          | Description                        |
| --------------------------------------------- | ---------------------------------- |
| <span className="ndl-data">Coordinates</span> | Sets the current coordinates.      |
| <span className="ndl-data">Enabled</span>     | Enable / Disable user interaction. |

| Signal                                   | Description                             |
| ---------------------------------------- | --------------------------------------- |
| <span className="ndl-signal">Edit</span> | Send a signal to start polygon editing. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                                 | Description                     |
| ---------------------------------------------------- | ------------------------------- |
| <span className="ndl-data">Mapbox Object</span>      | The mapbox object.              |
| <span className="ndl-data">Mapbox Draw Object</span> | The mapbox draw object.         |
| <span className="ndl-data">Feature Id</span>         | The feature id.                 |
| <span className="ndl-data">Coordinates</span>        | The coordinates of the polygon. |

| Signal                                           | Description                                          |
| ------------------------------------------------ | ---------------------------------------------------- |
| <span className="ndl-signal">Updated</span>      | Sends a signal when the polygon is getting updated.  |
| <span className="ndl-signal">Selected</span>     | Sends a signal when the polygon is getting selected. |
| <span className="ndl-signal">Unselected</span>   | Sends a signal when the polygon is unselected.       |
| <span className="ndl-signal">Did Mount</span>    | Sends a signal when the polygon is loaded.           |
| <span className="ndl-signal">Will Unmount</span> | Sends a signal when the polygon is unloaded.         |

</div>
