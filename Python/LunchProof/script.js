/* var defer = require('config/defer').deferConfig;

module.exports = {
   KEY : defer(function ()  {
    return this.key1+this.key2;
  })
}  */
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
  }

document.getElementById("feedMe").addEventListener("click", geoFindMe);

function geoFindMe() {
    var output = document.getElementById("out");
    var distance = document.getElementById("distance").value;

    if(!navigator.geolocation){
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }
  
    function success(position) { 
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
      findSpots();
    }
      
    function error() {
    output.innerHTML = "Unable to retrieve your location";
    }
    
    output.innerHTML = "<p>Locating…</p>";
  
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function findSpots() {
    alert("WORKS!");
    var places ="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+","+longitude+"&radius="+distance+"&types=restaurant&key=supersecret"
    console.log(places);
  }

 