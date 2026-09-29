var map = L.map('map').setView([30.06, 30.94], 13);

// 2. Add OpenStreetMap tile layers to the map
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
    
// 3. Place an initial marker on the map
var marker = L.marker([30.06, 30.94]).addTo(map);

// 4. Handle button click to update the map view based on user input
document.getElementById('button').addEventListener('click', function() {
    // Parse the values from the input fields
    var lat = parseFloat(document.getElementById('lat').value);
    var long = parseFloat(document.getElementById('long').value);
   // var zoom = parseInt(document.getElementById('zoom').value);

    // Validate that inputs are actual numbers
    if (isNaN(lat) || isNaN(long)) {
        alert('Please enter valid numbers for latitude and longitude.');
        return;
    }

    // Smoothly pan and zoom to the user coordinates
    map.flyTo([lat, long], 12);

    // Relocate the marker to the new coordinates
    marker.setLatLng([lat, long]);
});
