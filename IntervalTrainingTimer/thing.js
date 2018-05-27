//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
//preloaders.net
function geoFindMeC() {
  $ ('results').empty();
 var output = document.getElementById("detail");

 if (!navigator.geolocation){
   output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
   return;
 }

 function success(position) {
   var latitude  = position.coords.latitude;
   var longitude = position.coords.longitude;
   
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
     document.getElementById("temp").innerHTML = Math.round(temp);
   
     var main = currentConditions.weather[0].main;
     document.getElementById("main").innerHTML = main;

     var img = new Image();
     img.addEventListener(
       "load",
       function() {
         document.getElementById("icon").appendChild(img);
       },
       false
     );
     img.src = currentConditions.weather[0].icon; // Set source path
   });
 }

 function error() {
   output.innerHTML = "Unable to retrieve your location";
 }

  navigator.geolocation.getCurrentPosition(success, error);

}

function geoFindMeF() {
 $ ('results').empty();

 var output = document.getElementById("detail");

 if (!navigator.geolocation){
   output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
   return;
 }

 function success(position) {
   var latitude  = position.coords.latitude;
   var longitude = position.coords.longitude;

   //output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

   
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
     console.log(currentConditions);


     var temp = currentConditions.main.temp;
     document.getElementById("temp").innerHTML = Math.round((temp * 1.8) + 32);
   
     var main = currentConditions.weather[0].main;
     document.getElementById("main").innerHTML = main;

     var img = new Image();
     img.addEventListener(
       "load",
       function() {
         document.getElementById("icon").appendChild(img);
       },
       false
     );
     img.src = currentConditions.weather[0].icon; // Set source path
   });
 }

 function error() {
   output.innerHTML = "Unable to retrieve your location";
 }


 navigator.geolocation.getCurrentPosition(success, error);

}