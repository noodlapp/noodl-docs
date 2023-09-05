---
title: Mapbox Styles
hide_title: true
---

# Mapbox Styles

Mapbox styles are a collection of rules that define how a map is displayed. They include information about the map's layout, colors, labels, and symbols. Mapbox styles are used to create maps that are visually appealing and easy to read.

They can be customized to meet the needs of different users and applications, and can be used with Mapbox's suite of mapping tools to create interactive maps for web and mobile applications. Mapbox styles are based on the Mapbox Style Specification, which is an open-source specification for designing and sharing map styles.

<div className="ndl-image-with-background">

![](/library/modules/mapbox/guides/styles/preview.png)

</div>

## Prebuilt Styles

Mapbox have a few prebuilt styles, here are a few of them:

- Streets: A classic style that emphasizes roads, parks, and other features of urban areas.
- Outdoors: Designed for outdoor enthusiasts, this style includes topographic lines, hiking trails, and other natural features.
- Light: A minimalist style that focuses on the essentials of a map, with a light color scheme that's easy on the eyes.
- Dark: A more dramatic version of the Light style, with a dark color scheme that's perfect for nighttime maps.
- Satellite: This style uses satellite imagery to show real-world views of the Earth's surface, and is often used for mapping remote areas or monitoring changes in the environment.
- Navigation: A style optimized for driving and navigation, with a focus on road networks and landmarks.

You can find them [here](https://docs.mapbox.com/api/maps/styles/#mapbox-styles). Here is the same list with the styles:

<div className="ndl-table-35-65">

| Style             | Source                                       |
| ----------------- | -------------------------------------------- |
| Streets           | mapbox://styles/mapbox/streets-v12           |
| Outdoors          | mapbox://styles/mapbox/outdoors-v12          |
| Light             | mapbox://styles/mapbox/light-v11             |
| Dark              | mapbox://styles/mapbox/dark-v11              |
| Satellite         | mapbox://styles/mapbox/satellite-v9          |
| Satellite Streets | mapbox://styles/mapbox/satellite-streets-v12 |
| Navigation Day    | mapbox://styles/mapbox/navigation-day-v1     |
| Navigation Night  | mapbox://styles/mapbox/navigation-night-v1   |

</div>

## Custom Styles

You can also use [Mapbox Studio](https://www.mapbox.com/mapbox-studio) to create your own custom styles.

In Mapbox Studio you will get a link which should be passed into `Style`, and you will have the custom style.

## Style Object

Looking at the Mapbox "Add a video" example, which can be [here](https://docs.mapbox.com/mapbox-gl-js/example/video-on-a-map/).

In this example a Javascript object is used to create the style.

Here is how we can recreate this example in Noodl.

1. Create a Function node, with this code:

```js
Outputs.MapStyle = JSON.stringify({
  version: 8,
  sources: {
    satellite: {
      type: "raster",
      url: "mapbox://mapbox.satellite",
      tileSize: 256,
    },
    video: {
      type: "video",
      urls: [
        "https://static-assets.mapbox.com/mapbox-gl-js/drone.mp4",
        "https://static-assets.mapbox.com/mapbox-gl-js/drone.webm",
      ],
      coordinates: [
        [-122.51596391201019, 37.56238816766053],
        [-122.51467645168304, 37.56410183312965],
        [-122.51309394836426, 37.563391708549425],
        [-122.51423120498657, 37.56161849366671],
      ],
    },
  },
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "rgb(4,7,14)",
      },
    },
    {
      id: "satellite",
      type: "raster",
      source: "satellite",
    },
    {
      id: "video",
      type: "raster",
      source: "video",
    },
  ],
});
```

2. Connect the `MapStyle` output to the Mapbox `Style` input. And you will now have the style with a video.

3. To pause and play the video, like in the example.

We create another Function node with this code:

```js
const mapboxObject = Inputs.Map;
const playOrPause = Inputs.PlayOrPause;

if (!mapboxObject) return;

if (playOrPause) {
  mapboxObject.getSource("video").play();
} else {
  mapboxObject.getSource("video").pause();
}
```

And connect it to a Switch node, like in this picture:

<div className="ndl-image-with-background">

![](/library/modules/mapbox/guides/styles/video-nodegraph.png)

</div>

4. Now we have replicated the example by Mapbox.
