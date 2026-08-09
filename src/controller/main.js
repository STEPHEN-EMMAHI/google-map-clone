import L from "leaflet";
import "leaflet/dist/leaflet.css";

const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// call on geolocation API to get the accurate user location
navigator.geolocation.watchPosition(success, error);

// make marker and circle a global variable
let marker, circle, zoomed;

function success(position) {
  const LATITUDE = position.coords.latitude;
  const LONGITUDE = position.coords.longitude;
  const ACCURACY = position.coords.accuracy;

  // crate a marker and circle around the marker
  if (marker) {
    map.removeLayer(marker);
    map.removeLayer(circle);
  }

  marker = L.marker([LATITUDE, LONGITUDE]).addTo(map);
  circle = L.circle([LATITUDE, LONGITUDE], { radius: ACCURACY }).addTo(map);

  if (!zoomed) {
    map.fitBounds(circle.getBounds());
  }

  map.setView([LATITUDE, LONGITUDE]);
}

function error(err) {
  if (err.code === 1) {
    alert("Please allow location access");
  } else {
    alert("Cannot get current location");
  }
}
