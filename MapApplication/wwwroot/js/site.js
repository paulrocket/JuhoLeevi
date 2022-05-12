
var map = L.map('map').setView([0, 0], 1);
var tilelayer = new L.TileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=EVuUOQm9Knxh84jI671s', {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 2,
        attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
        crossOrigin: true
    }).addTo(map);