// 1. Initialize the map and set its initial view coordinates and zoom level
var map = L.map('map').setView([51.505, -0.09], 13);

// 2. Add OpenStreetMap tile layers to the map
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
    
// 3. Place an initial marker on the map
var marker = L.marker([51.505, -0.09]).addTo(map);

// 4. Handle button click to update the map view based on user input
document.getElementById('zoom-btn').addEventListener('click', function() {
    // Parse the values from the input fields
    var lat = parseFloat(document.getElementById('lat').value);
    var lng = parseFloat(document.getElementById('lng').value);
    var zoom = parseInt(document.getElementById('zoom').value);

    // Validate that inputs are actual numbers
    if (isNaN(lat) || isNaN(lng)) {
        alert('Please enter valid numbers for latitude and longitude.');
        return;
    }

    // Smoothly pan and zoom to the user coordinates
    map.flyTo([lat, lng], zoom);

    // Relocate the marker to the new coordinates
    marker.setLatLng([lat, lng]);
});
