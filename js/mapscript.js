
 

  var map = L.map('map').setView([51.505, -0.09], 13);
  
	 
	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	var marker = L.marker([30.07, 30.961]).addTo(map)
		.bindPopup('<b>Sample marker</b><br />popup.').openPopup();

	const circle = L.circle([30.061, 30.938], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 500
	}).addTo(map).bindPopup('I am a circle.');

	const polygon = L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	]).addTo(map).bindPopup('I am a polygon.');


	const popup = L.popup()
		.setLatLng([30.06, 30.94])
		.setContent('Sondos Location popup.')
		.openOn(map);

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(`You clicked the map at ${e.latlng.toString()}`)
			.openOn(map);
	}

	map.on('click', onMapClick);

//var marker = L.marker([51.505, -0.09]).addTo(map);

// 4. Handle button click to update the map view based on user input
document.getElementById('button').addEventListener('click', function() {
    // Parse the values from the input fields
    var lat = parseFloat(document.getElementById('lat').value);
    var lng = parseFloat(document.getElementById('lng').value);
    var zoom = parseInt(document.getElementById('zoom').value);
alert("dgdf")
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

	 
	

