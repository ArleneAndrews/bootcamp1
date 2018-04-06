  function myWeatherC() {
    /*    console.log("above clearBox function");
    clearBox(); */
   console.log("geoFindMe");
   function geoFindMe() {
     var output = document.getElementById("detail");
   
     if (!navigator.geolocation){
       output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
       return;
     }
   
     function success(position) {
       var latitude  = position.coords.latitude;
       var longitude = position.coords.longitude;
   
 console.log('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');
   
      /*  var img = new Image();
       img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
   
       output.appendChild(img); */
     }
   
     function error() {
       output.innerHTML = "Unable to retrieve your location";
     }
   
     output.innerHTML = "<p>Locating…</p>";
   
     navigator.geolocation.getCurrentPosition(success, error);
   
    
   console.log("after geoFindMe, before myWeather");
   
   
       var url =
         "https://fcc-weather-api.glitch.me/api/current?lat=" +
         latitude +
         "&lon=" +
         longitude;
       return fetch(url)
         .then(function(response) {
           return response.json();
         })
         .then(function(myJson) {
           var currentConditions = myJson;
   
           var temp = currentConditions.main.temp;
          
           document.getElementById("temp").innerHTML = temp;
           var main = currentConditions.weather[0].main;
           document.getElementById("main").innerHTML = main;
   
           var img = new Image();
           img.addEventListener(
             "load",
             function() {
               document.getElementById("icon").removeChild();
               document.getElementById("icon").appendChild(img);
             },
             false
           );
           img.src = currentConditions.weather[0].icon; // Set source path
         });
         console.log("after myWeather, button1.onclick function complete");
     }
   }
