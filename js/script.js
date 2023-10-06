/*
    Assignment #4
    David Pawar, 0800287
*/
    $(function () {
        // Checking if geolocation is available
        if ("geolocation" in navigator) {
            // Getting the user's current location
            navigator.geolocation.getCurrentPosition(function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
    
                // Displaying the current location in the div#locationhere
        let locationDiv = document.getElementById("locationhere");
                locationDiv.textContent = "Your current location: Latitude " + latitude + ", Longitude " + longitude;
    
                // Checking if a location value is already stored in localstorage
        let storedLocation = localStorage.getItem("userLocation");
    
                if (storedLocation) {
                    // Splitting the stored location string to extract latitude and longitude
                    let storedLocationArray = storedLocation.split(", ");
            let storedLatitude = parseFloat(storedLocationArray[0].split(" ")[1]);
            let storedLongitude = parseFloat(storedLocationArray[1].split(" ")[1]);
    
                    // Calculating the distance between the current location and the stored location
            let distance = calcDistanceBetweenPoints(latitude, longitude, storedLatitude, storedLongitude);
    
                    // Displaying the stored location and distance
            let storedLocationDiv = document.createElement("div");
                    storedLocationDiv.textContent = "Your previous location: " + storedLocation;
            let distanceDiv = document.createElement("div");
                    distanceDiv.textContent = "You traveled " + distance + " meters since your last visit.";
    
                    // Adding the new tags to the page
                    locationDiv.appendChild(storedLocationDiv);
                    locationDiv.appendChild(distanceDiv);
    
                    // Displaying a welcome message for returning visitors
            let welcomeHeader = document.createElement("h2");
                    welcomeHeader.textContent = "Welcome back!";
                    locationDiv.insertBefore(welcomeHeader, storedLocationDiv);
                } else {
                    // Displaying a welcome message for first-time visitors
            let welcomeHeader = document.createElement("h2");
                    welcomeHeader.textContent = "Welcome to the page for the first time!";
                    locationDiv.appendChild(welcomeHeader);
                }
    
                // Storing the current location values in localstorage
        let newLocation = "Latitude " + latitude + ", Longitude " + longitude;
                localStorage.setItem("userLocation", newLocation);
            }, function (error) {
                // Handling geolocation error here (e.g., permission denied)
        let locationDiv = document.getElementById("locationhere");
                locationDiv.textContent = "Error: " + error.message + ". Please allow geolocation to use the application.";
            });
        } else {
            // Geolocation is not supported by the browser
    let locationDiv = document.getElementById("locationhere");
            locationDiv.textContent = "Error: Geolocation is not supported by your browser.";
        }
    
        function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
    let toRadians = function (num) {
                return num * Math.PI / 180;
            }
    let R = 6371000; // radius of Earth in metres
    let φ1 = toRadians(lat1);
    let φ2 = toRadians(lat2);
    let Δφ = toRadians(lat2 - lat1);
    let Δλ = toRadians(lon2 - lon1);
    
    let a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
            return (R * c);
        }
    });
    


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
   


