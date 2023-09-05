---
title: Geocoder
hide_title: true
---

# Geocoder

Mapbox Geocoder API is a geocoding service that allows developers to convert human-readable addresses into geographic coordinates (latitude and longitude) and vice versa. It is a RESTful API that provides geocoding and reverse geocoding services for worldwide locations. The API uses machine learning and other advanced algorithms to provide accurate and relevant results for address searches. Mapbox Geocoder API can be used in a variety of applications, such as location-based services, logistics and delivery management, real estate, and more. It also offers various features such as autocomplete suggestions, batch geocoding, and custom matching parameters, making it a powerful tool for developers to build location-based applications.

## Create a request to Geocoder API

```js
// Define the expected inputs for the script
Script.Inputs = {
  Query: "string",
};

// Define the expected outputs for the script
Script.Outputs = {
  Items: "array",
  Searched: "signal",
};

// Set the endpoint URL for the Mapbox geocoding API
const ENDPOINT = "https://api.mapbox.com/geocoding/v5/mapbox.places";

// Define an asynchronous function to make the API request
async function makeRequest() {
  // Get the Mapbox access token from Noodl project settings
  const access_token = Noodl.getProjectSettings().mapboxAccessToken;

  // Encode the search query to be URL-safe
  const search_text = encodeURIComponent(Script.Inputs.Query);

  // Define query parameters for the API request
  //
  // Playground by Mapbox to test out all the features:
  // https://docs.mapbox.com/playground/geocoding
  //
  // Here is a list of all the different possible types:
  //  - address
  //  - country
  //  - region
  //  - postcode
  //  - district
  //  - place
  //  - neighborhood
  //  - locality
  //  - poi
  const queryParams = {
    access_token, // Provide the access token
    proximity: "ip", // Bias results towards user's location
    limit: 5, // Maximum number of results to return
    types: ["address"].join(","), // Filter results to include only addresses
    fuzzyMatch: true, // Enable approximate matching
  };

  // Construct the query string from the query parameters
  const query = Object.keys(queryParams)
    .filter((key) => !!queryParams[key]) // Filter out empty values
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
    )
    .join("&");

  // Make the API request and get the response as JSON
  const response = await fetch(`${ENDPOINT}/${search_text}.json?${query}`);
  const json = await response.json();

  // Map the API response to an array of search results
  const items = json.features.map((x) =>
    Noodl.Object.create({
      text: x.text,
      place_name: x.place_name,
      // Convert the array of [latitude, longitude] to a Geopoint
      center: { latitude: x.center[0], longitude: x.center[1] },
    })
  );

  Script.Outputs.Items = items;
  Script.Outputs.Searched();
}

Script.Signals = {
  Search() {
    makeRequest();
  },
};
```

### Improve the search result

While comparing the built in Geocoder in Mapbox and using this Script.
There are a few differences and the result from the Mapbox Geocoder is getting better result.

The reason why the results are better is that the parameters are a little different, but in the end they are using the same API endpoints.

To make the parameters match, we can make a few changes in this code:

```js
const queryParams = {
  access_token, // Provide the access token
  proximity: [Script.Inputs.lng, Script.Inputs.lat].join(','), // Bias results towards user's location
  limit: 5, // Maximum number of results to return
  language: 'en-GB'
};
```

The main change here is the `proximity` that we changed to a Geopoint instead of `ip`.
This requires 2 new inputs to the Script node, `lng` and `lat`, connected from the Mapbox node center lng and lat position.
