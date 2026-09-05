import * as maplibregl from "https://unpkg.com/maplibre-gl@6.7.0/dist/maplibre-gl.mjs";

const mapElement = document.getElementById("map");

if (mapElement) {
  const location = mapElement.dataset.location;
  const country = mapElement.dataset.country;

  const searchQuery = location;

  fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchQuery)}&count=10&language=en&format=json`,
  )
    .then((response) => response.json())
    .then((data) => {
      if (!data.results || data.results.length === 0) {
        console.log("Location not found :", searchQuery);
        return;
      }

      const latitude = data.results[0].latitude;
      const longitude = data.results[0].longitude;

      const map = new maplibregl.Map({
        container: "map",
        style: "https://tiles.openfreemap.org/styles/bright",
        // style: "https://tiles.openfreemap.org/styles/liberty",
        center: [longitude, latitude],
        zoom: 10,
      });

      const markerElement = document.createElement("div");
      markerElement.className = "custom-marker";
      markerElement.innerHTML = "⌂";

      new maplibregl.Marker({
        element: markerElement,
      })
        .setLngLat([longitude, latitude])
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setHTML(
            `<h6>${location}</h6><p>${country}</p>`,
          ),
        )
        .addTo(map);

      map.addControl(new maplibregl.NavigationControl(), "top-right");
    })
    .catch((error) => {
      console.error("Geocoding error:", error);
    });
}
