---
title: Directions API with the Mapbox Module
hide_title: true
---

# Directions API with the Mapbox Module

Here are some code heavy example of how to use the Directions API in Noodl.
The code in this example is using [Getting started with the Mapbox Directions API
](https://docs.mapbox.com/help/tutorials/getting-started-directions-api/) guide.

## Listen to on click events on Mapbox

Script node:

```js
Script.Outputs = {
  ["Mapbox Object"]: "*",
  ["Clicked"]: "signal",
  ["Clicked Longitude"]: "number",
  ["Clicked Latitute"]: "number"
};

Script.Signals["Mount Click Event"] = function () {
  // Listen to the Mapbox on click event
  // NOTE: This might cause some memory leaks,
  //       Not sure how Mapbox is handling it.
  Script.Inputs["Mapbox Object"].on("click", (event) => {
    // Get the coordinates that the user pressed on
    const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
    
    // Set the Noodl outputs
    Script.Outputs["Clicked Longitude"] = coords[0];
    Script.Outputs["Clicked Latitute"] = coords[1];

    // Send the click signal
    Script.Outputs["Clicked"]();
  });
};
```

## Create a route path on Mapbox

Script node:

```js
// This function makes a Mapbox Directions API request
async function getRoute(map, start, end) {
  const accessToken = Noodl.getProjectSettings().mapboxAccessToken;

  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${accessToken}`,
    { method: "GET" }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: route,
    },
  };
  // if the route already exists on the map, we'll reset it using setData
  if (map.getSource("route")) {
    map.getSource("route").setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: geojson,
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#3887be",
        "line-width": 5,
        "line-opacity": 0.75,
      },
    });
  }

  return data;
}

//
// Start of Noodl Script
//

Script.Inputs = {
  map: {
    displayName: "Mapbox Object",
    type: "*",
  },

  startLongitude: {
    displayName: "Start Longitude",
    type: "number",
    group: "Coordinates",
    default: 0,
  },
  startLatitute: {
    displayName: "Start Latitude",
    type: "number",
    group: "Coordinates",
    default: 0,
  },

  endLongitude: {
    displayName: "End Longitude",
    type: "number",
    group: "Coordinates",
    default: 0,
  },
  endLatitute: {
    displayName: "End Latitude",
    type: "number",
    group: "Coordinates",
    default: 0,
  },

  // You can read more about Routing profiles here:
  // https://docs.mapbox.com/api/navigation/directions/#routing-profiles
  routingProfile: {
    displayName: "Routing Profile",
    type: {
      name: "enum",
      enums: [
        {
          label: "Driving Traffic",
          value: "mapbox/driving-traffic",
        },
        {
          label: "Driving",
          value: "mapbox/driving",
        },
        {
          label: "Walking",
          value: "mapbox/walking",
        },
        {
          label: "Cycling",
          value: "mapbox/cycling",
        },
      ],
    },
    default: "mapbox/cycling",
  },
};

Script.Outputs = {
  Steps: "array",
  Duration: "number",
};

Script.Signals.CreateRoute = function () {
  const map = Script.Inputs.Map;
  const startCoords = [
    Script.Inputs.startLongitude,
    Script.Inputs.startLatitute,
  ];
  const endCoords = [Script.Inputs.endLongitude, Script.Inputs.endLatitute];

  // Add starting point to the map
  map.addLayer({
    id: "point",
    type: "circle",
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: startCoords,
            },
          },
        ],
      },
    },
    paint: {
      "circle-radius": 10,
      "circle-color": "#3887be",
    },
  });

  const endPoint = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: endCoords,
        },
      },
    ],
  };

  if (map.getLayer("end")) {
    map.getSource("end").setData(endPoint);
  } else {
    map.addLayer({
      id: "end",
      type: "circle",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: endCoords,
              },
            },
          ],
        },
      },
      paint: {
        "circle-radius": 10,
        "circle-color": "#f30",
      },
    });
  }

  // make an directions request that
  getRoute(map, startCoords, endCoords).then((data) => {
    // Extract the steps / instructions
    const steps = data.legs[0].steps;
    Script.Outputs.Steps = steps;

    Script.Outputs.Duration = Math.floor(data.duration / 60);
  });
};
```
