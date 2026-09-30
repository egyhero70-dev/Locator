//firebase init
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
"type": "service_account",
  "project_id": "sondosloc",
  "private_key_id": "f10e228c9b5188da3be2276a14232e7e5a25b95a",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDT/3y75kxKkPEt\nxJ86iTkAYhYXIYAm1mP4ZlCaeDPPBoX6NFXC9kN9m3qQ0JmVq2nCqNfOCK32+SD9\n54AXbJIwvecVaBdchxDFUm4TNgqb+Xe6ln0LE2dICOUMYVeZlPoxIqjOO4jE7QN+\nWJzbhVps/UCppzKzSG02xc2WK7aoZw6mQcHF6ezjtr9qTbcj5wo2G18h/weW1I60\nsw49IwauS50BUo0SfEZxuLicBNK/NFY+djoegsXRD5B+mYsc/jojFWH2Z5mFAhHG\nnrUmh+emndxoyODstHJd1/7Zt29faZSC7jPkpG4RGWk1gu42FrjBFD3o+w2ZGMaH\n6qMlDDBRAgMBAAECggEAEOw6mUc7fNJQJk6lRUdx8OljiQooEDGZ/liwg3wn6pVD\nOaNW2z7MSWkRYiD8uZla0mqm+2/u7yGY9Bu4OmZ0zwZBvZA3GTBA8vdvCQKN20CR\nQahEqA8u9e2b1x6oHv7o7+Yr4naXJt0io8HQF6fv/XZD5KcPoYcdDLvCewPXS171\ndmrdcVeBdO73Pbp9lEfvd6pqN/rFYRDHUFDD8KhPY1GBjJouEpa/OtJ054ipQXY1\nHTGY/n1GbmSLbUMcNuqPgL28gpMSEYY7r3kLCHEyKJGEj6ANbnyIyxIujeE9p+oB\nKmXHyb0CbQUSVt3YnD7Oqt0OEiRXdk2jPocHeZKzDwKBgQDseMglDI3lo0+Yu8UN\nlG4tLED7++AWyM1qk7l/IOUbEqSzdwUz+/Du2ZeMR/TaR5az9BYdC6dNq+cSLsJb\nmKbpMYpE/LLMh2C3LvQr8ozhT6NrfdGf7vMkUK2TX6ztbZINJz1B0s/Ky9d4zqM5\nDp+He6J2H5JC1IeMAcObj/g9JwKBgQDlgU7ZtemB4k5VNXV9T31gsP57ZqpvVSC9\nXLIBJ9O7CM4jvgn7OAYzYSSJ3eg/Bkke4ddhv64ispRgw9Zto0dRkJ4DlnalqtfU\n/dq2JmPclfj9vm4WkDFZ0KKYsGSFQ8AJTt9/XdwqZrqRsUT6dxX21da8NEMCePV3\n4S5xbByBxwKBgQDlRuqP+Y8vY1vOs+iIlS0KQYk0iO+qR8HbnyXQ3F0nFbl5hGIY\nGCRwAauNyUrfxV+aVYSHXwA1MAKYP5wU4XqcSXtODlFyO6SLmEwIvGDaKLRDibeR\nQUagJFVXugFaJ83fUPd09eihMWlW6cuai9Ijs70+mLfgcl6GYkN9dmbzKwKBgDeL\nPP8ZtKK3l4etwXqLY2ekTmKlLTh2nM7XgUkgT3Djp6gk1RuUqoOCzioDp7KhHc84\njzzb/BPvrlNg8iNksdz+qA9sOdjMaSHmMimFTwPS1AjtLo2NZjQ7dy6G+jz6cZ6P\nFS4pFCC67gpWocAQVCOCC09PQqx1g8r4l5nhtWB/AoGAfzdDBspSTb9KbkXgwuez\n6/awhQnl7QZ2SnArnqS6qZ3TLlWkmCGAy4CBoq+G1qhjMkkyQkHjaddgnFul3eFO\nwKh3e0u0j0Bs7LZ46IvYMxKpHpDuZ7yHRy92YfxSau+hzg6aJO4xbxfXSFEs2UP8\nf8/c0G01Vu+9HN3aBmtT0Yo=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-27qb3@sondosloc.iam.gserviceaccount.com",
  "client_id": "104786136044429593765",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-27qb3%40sondosloc.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"


	
  databaseURL: "https://sondosloc-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
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

document.getElementById('button').addEventListener('click', function() {
    // Parse the values from the input fields
    var lat = parseFloat(document.getElementById('dbf').value);
   import { getDatabase, ref, set } from "firebase/database";

function writeUserData(name) {
  const db = getDatabase();
  set(ref(db, 'testme'), {
    ff: name,
 
   
  });
}

 
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



