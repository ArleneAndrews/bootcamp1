document.getElementById("feedMe").addEventListener("click", geoFindMe());


function geoFindMe() {
    var output = document.getElementById("out");
    const distance = document.getElementById("distance").value;

    if(!navigator.geolocation){
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }
  
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      
      nearby();
  
      /* output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
  
      var img = new Image();
      img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom="+ distance + "&size=200x200&scale=2&sensor=false";
  
      output.appendChild(img);*/
    }
  
    function error() {
      output.innerHTML = "Unable to retrieve your location";
    }
  
    output.innerHTML = "<p>Locating…</p>";
  
    navigator.geolocation.getCurrentPosition(success, error);
  }

  //google place API key AIzaSyABQrtrls3Uqy1tHAbT4jepSdyLqoTNooM
  function nearby()
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABQrtrls3Uqy1tHAbT4jepSdyLqoTNooM&libraries=places&callback=initMap" async defer>
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  var map;
var service;
var infowindow;

function initialize() {
  var pyrmont = new google.maps.LatLng(latitude,longitude);

  map = new google.maps.Map(document.getElementById('out'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: distance,
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}