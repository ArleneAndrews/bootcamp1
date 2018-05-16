function geoFindMe() {
    $ ('results').empty();
   var output = document.getElementById("detail");
  
   if (!navigator.geolocation){
     output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
     return;
   }
  
   function success(position) {
     var latitude  = position.coords.latitude;
     var longitude = position.coords.longitude;
     document.getElementById("display").innerHTML = "Hello World";
     return {lat:latitude, long: longitude}
   }
}

document.getElementById("here").addEventListener("click", geoFindMe());