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
      findSpots(latitude,longitude,distance);
    }
      
    function error() {
    output.innerHTML = "Unable to retrieve your location";
    }
    
    output.innerHTML = "<p>Locating…</p>";
  
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function findSpots(lat, long, far) {
    var latitude = lat;
    console.log(latitude);
    var longitude = long;
    var radius = far;
    var output = document.getElementById("out2");
    output.innerHTML = '<p>and radis is '+far+'km </p>';
    var places ="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+","+longitude+"&radius="+radius+"&types=restaurant&key=secret";
    return fetch(places, {mode: 'no-cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      var listing = myJson;
      console.log(listing);
      
      var lists = JSON.parse(listing);

      for(var i = 0, l = lists.length; i < l; i++) {
          var spot = lists[i];
          var div = document.createElement('div');
          div.innerHTML = 'Hello ' + spot.name + ' your Id is: ' + spot.addy + 'and your message is: ' + spot.opening_hours.open_now ;
          document.body.appendChild(div);
      }
    })
  }

 