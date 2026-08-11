// Provide access token from the Mapbox account dashboard
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

// get user current location API
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  // default location
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", // ID of the HTML element container
    style: "mapbox://styles/mapbox/streets-v12", // Map style URL
    center: center,
    zoom: 15,
  });

  // fixing button accessibilty audit
  map.on("load", () => {
    const attribBtn = document.querySelector(".mapbox-ctrl-attrib-button");
    if (attribBtn) {
      attribBtn.setAttribute("arial-label", "Toggle map attribution");
    }
  });

  // wait for the map to load then add markers
  map.on("load", () => {
    const marker = new mapboxgl.Marker({
      color: "red",
    })
      .setLngLat(center)
      .addTo(map);
  });

  // navigation controls
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-left");

  // mapbox directions
  const directions = new MapboxDirections({
    accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
  });

  map.addControl(directions, "top-left");
}
