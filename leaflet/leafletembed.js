var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];
var popup = L.popup();

function initmap() {
	// set up the map
	map = new L.Map('mapid');

	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});		

	// Set lat/lng at Nantes
	map.setView(new L.LatLng(47.218260, -1.557180),90);
	map.addLayer(osm);
}

initmap();

function onMapClick(e) {
	// alert("You clicked the map at " + e.latlng);
    popup
        .setLatLng(e.latlng)
        .setContent("Position: " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);