
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCToKiV_hzwCjY8fZaq40s9BxrZUerOTBU",
    authDomain: "sondosloc.firebaseapp.com",
    databaseURL: "https://sondosloc-default-rtdb.firebaseio.com",
    projectId: "sondosloc",
    storageBucket: "sondosloc.firebasestorage.app",
    messagingSenderId: "646242510228",
    appId: "1:646242510228:web:ec4110a5ac6427d0d4db81",
    measurementId: "G-22YQQ9H3D2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 

// Initialize and reference the Realtime Database service
const database = getDatabase(app);

//

"use strict";

        function set_viewport() {
            document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
        }

        set_viewport();
        window.addEventListener("resize", set_viewport);

        const map = new L.Map("map", {
            center: [30.06, 30.94],
            zoom: 15,
            
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
    map.flyTo([lat, long], 15);

    // Relocate the marker to the new coordinates
    marker.setLatLng([lat, long]);
});


// db insert button
document.getElementById('dbf').addEventListener('click', function() {
    // Parse the values from the input fields
    var dbval = (document.getElementById('dbb').value);
	alert(dbval);
	//var database = firebase.database();
	
firebase.database().ref('testme').set({
    ff: dbval,
  
  });

});

//

// inserts and listeners


var marker = L.marker([30.07, 30.961]).addTo(map)
		.bindPopup('<b>Entered location</b><br />popup.').openPopup();

	const circle = L.circle([30.061, 30.938], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 50
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


//





//Current location
 var latlngf
 const control = new L.Control.SimpleLocate({
            position: "topleft",
              className: "button-locate",

              // zoomlevel for current location
              zoomLevel:16,
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
            
        }) .addTo(map);
       
       
         map.on("locationfound", (event) => console.log(event));
        map.on("locationerror", (event) => console.log(event));
        L.DomEvent.on(window, "ondeviceorientationabsolute" in window ? "deviceorientationabsolute" : "deviceorientation", (event) => console.log(event));



