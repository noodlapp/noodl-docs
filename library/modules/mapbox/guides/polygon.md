
WIP, would be nice to work with the nodes.

```js
const mapbox = Inputs.MapboxObject;
const draw = new MapboxDraw({
  displayControlsDefault: false,
  // Select which mapbox-gl-draw control buttons to add to the map.
  controls: {
    polygon: true,
    trash: true
  },
  // Set mapbox-gl-draw to draw by default.
  // The user does not have to click the polygon control button first.
  defaultMode: 'draw_polygon'
});
mapbox.addControl(draw);


function updateArea(e) {
  const geometry = e.features[0].geometry;
  Outputs.Geometry = JSON.parse(JSON.stringify(geometry));
  Outputs.Coordinates = geometry.coordinates;

  // const data = draw.getAll();
  // const answer = document.getElementById('calculated-area') = Outputs.calculatedarea;
  // if (data.features.length > 0) {
  //   const area = turf.area(data);
  //   // Restrict the area to 2 decimal points.
  //   const rounded_area = Math.round(area * 100) / 100;
  //   answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
  // } else {
  //   answer.innerHTML = '';
  //   if (e.type !== 'draw.delete')
  //     alert('Click the map to draw a polygon.');
  // }
}

mapbox.on('draw.create', updateArea);
mapbox.on('draw.delete', updateArea);
mapbox.on('draw.update', updateArea);

// Add keydown event listener to the mapbox container
mapbox.getCanvas().addEventListener('keydown', (event) => {
  if (event.keyCode === 13 || event.keyCode === 3) { // 13 is the keycode for the Enter key
    draw.changeMode('simple_select');
  }
});
```