# Directions



## Create a request to Directions API

TODO: Add more info about "overview" (full, simplified, or false)

```js
// Get the Mapbox access token from Noodl project settings
const access_token = Noodl.getProjectSettings().mapboxAccessToken;

// For using the API to handle min/max road width, we have to use the "driving" profile.
// https://docs.mapbox.com/api/navigation/directions#optional-parameters-for-the-mapboxdriving-profile
const routingProfile = "driving";

// Encode the coordinates to be URL-safe
const coordinates = encodeURIComponent([fromCoordinate, toCoordinate].join(";"));

// Define query parameters for the API request
// 
// Playground by Mapbox to test out all the features:
// https://docs.mapbox.com/playground/directions/
const queryParams = {
    access_token, // Provide the access token
    alternatives: true,
    continue_straight: true,
    geometries: "geojson",
    language: "en",
    overview: "simplified",
    steps: true,
    // The max vehicle height, in meters. If this parameter is provided, the
    // Directions API will compute a route that includes only roads with a height
    // limit greater than or equal to the max vehicle height. max_height must be
    // between 0 and 10 meters. The default value is 1.6 meters. Coverage for road
    // height restriction may vary by region.
    max_height,
    // The max vehicle width, in meters. If this parameter is provided, the
    // Directions API will compute a route that includes only roads with a width
    // limit greater than or equal to the max vehicle width. max_width must be
    // between 0 and 10 meters. The default value is 1.9 meters. Coverage for road
    // width restriction may vary by region.
    max_width,
};

// Construct the query string from the query parameters
const query = Object.keys(queryParams)
    .filter((key) => !!queryParams[key]) // Filter out empty values
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');

// Set the endpoint URL for the Mapbox directions API
const ENDPOINT = 'https://api.mapbox.com/directions/v5/mapbox';

// Make the API request and get the response as JSON
const response = await fetch(`${ENDPOINT}/${routingProfile}/${coordinates}?${query}`);
const json = await response.json();

if (json.code === "Ok") {
  Outputs.Routes = jsonroutes;
  Outputs.Success();
} else {
  Outputs.Failure();
}
```

Draw the route:
```js
Script.Inputs = {
  MapboxObject: "object",
  Routes: "array"
};

Script.Outputs = {
  Done: "signal",
};


Script.Signals = {
  Update() {
    const map = Script.Inputs.MapboxObject;

    const route = Script.Inputs.Routes[0];

    function createOrUpdateSource(id, newSource) {
      const source = map.getSource(id);
      if (source) {
        source.setData(newSource.data);
      } else {
        map.addSource(id, newSource);
      }
    }

    function createOrUpdateLayer(newLayer) {
      const layer = map.getLayer(newLayer.id);
      if (layer) {
        if (newLayer.paint) {
          Object.keys(newLayer.paint).forEach((key) => {
            layer.setPaintProperty(key, newLayer.paint[key]);
          });
        }
      } else {
        map.addLayer(newLayer);
      }
    }

    createOrUpdateSource('route', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': route.geometry,
      }
    });

    createOrUpdateLayer({
      'id': 'route',
      'type': 'line',
      'source': 'route',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#888',
        'line-width': 8
      }
    });
  },
};
```
