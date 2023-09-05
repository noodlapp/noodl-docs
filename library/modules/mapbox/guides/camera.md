# Camera

## Fly to location

```js
const mapboxObject = Inputs.MapboxObject;
if (!mapboxObject) return;

// Mapbox example
// https://docs.mapbox.com/mapbox-gl-js/example/flyto/

// flyTo doc:
// https://docs.mapbox.com/mapbox-gl-js/api/map/#map#flyto
mapboxObject.flyTo({
  center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
  zoom: 10,
  // this animation is considered essential
  // with respect to prefers-reduced-motion
  essential: true,
});
```
