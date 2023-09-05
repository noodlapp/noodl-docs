---
title: Geospatial Center
hide_title: true
---

<##head##>

# Geospatial Center

Takes a GeoJSON feature and returns the absolute center point.

<##head##>

Here is an example of how to use it.

<div className="ndl-image-with-background">

![](/library/modules/geospatial-analysis/guides/geospatial-center-example.png)

</div>

This is what is inside the "Get GeoJSON Feature" funciton node:

```js
Outputs.Feature = {
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: [
      [102.0, 0.0],
      [103.0, 1.0],
      [104.0, 0.0],
      [105.0, 1.0],
    ],
  },
};
```

This is what is inside the "Extract Coordinate" function node:

```js
const feature = Inputs.Feature;
const coordinate = feature.geometry.coordinates;
Outputs.Text = `${coordinate[0]}, ${coordinate[1]}`;
```

## Inputs

<div className="ndl-table-35-65">

| Data                                          | Description          |
| --------------------------------------------- | -------------------- |
| <span className="ndl-data">Coordinates</span> | The GeoJSON feature. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                     | Description                                 |
| ---------------------------------------- | ------------------------------------------- |
| <span className="ndl-data">Center</span> | A GeoJSON feature with the center position. |

| Signal                                      | Description                               |
| ------------------------------------------- | ----------------------------------------- |
| <span className="ndl-signal">Changed</span> | Occurs when the Center output is updated. |

</div>
