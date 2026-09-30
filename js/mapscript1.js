  "use strict";

        function set_viewport() {
            document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
        }

        set_viewport();
        window.addEventListener("resize", set_viewport);

        const map = new L.Map("map", {
            center: [25.0487037, 121.5143449],
            zoom: 13,
            zoomControl: false,
        });



//var map = L.map('map').setView([30.06, 30.94], 13);

// 2. Add OpenStreetMap tile layers to the map
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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


//Current location

 const control = new L.Control.SimpleLocate({
            position: "topleft",
            className: "button-locate",
            afterClick: (result) => {
                console.log("afterClick", result);
                if (!result.geolocation) console.log("Geolocation Error");
                if (!result.orientation) console.log("Orientation Error");
            },
            afterMarkerAdd: () => {
                console.log("afterMarkerAdded");
                const elem = document.getElementById("leaflet-simple-locate-icon-spot");
                if (elem) {
                    elem.addEventListener("click", (event) => {
                        const latlng = control.getLatLng();
                        const latlng_str = `geolocation: [${Math.round(latlng.lat * 100000) / 100000}, ${Math.round(latlng.lng * 100000) / 100000}]`;

                        const accuracy = control.getAccuracy();
                        const accuracy_str = `accuracy: ${Math.round(accuracy)} meter`;

                        const angle = control.getAngle();
                        const angle_str = `orientation: ${Math.round(angle)} degree`;

                        L.popup()
                            .setLatLng(latlng)
                            .setContent(`<p style="margin: 0.25rem 0 0.25rem 0">${latlng_str}</p><p style="margin: 0.25rem 0 0.25rem 0">${accuracy_str}</p><p style="margin: 0.25rem 0 0.25rem 0">${angle_str}</p>`)
                            .openOn(map);

                        event.stopPropagation();
                        event.preventDefault();
                    });
                }
            },
            // afterDeviceMove: (event) => {
            //     console.log(event);
            // }
        }).addTo(map);

        map.on("locationfound", (event) => console.log(event));
        map.on("locationerror", (event) => console.log(event));
        L.DomEvent.on(window, "ondeviceorientationabsolute" in window ? "deviceorientationabsolute" : "deviceorientation", (event) => console.log(event));



