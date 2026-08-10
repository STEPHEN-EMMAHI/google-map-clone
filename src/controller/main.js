async function loadMap() {
  const [{ default: mapboxgl }] = await Promise.all([
    import("mapbox-gl"),
    import("mapbox-gl/dist/mapbox-gl.css"),
  ]);

  // Provide access token from the Mapbox account dashboard
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  const map = new mapboxgl.Map({
    container: "map", // ID of the HTML element container
    style: "mapbox://styles/mapbox/streets-v12", // Map style URL
    center: [-0.186964, 5.603717],
    zoom: 12,
  });
}

if (document.readyState === "complete") {
  setTimeout(loadMap, 1000);
} else {
  window.addEventListener("load", () => setTimeout(loadMap, 1000));
}
