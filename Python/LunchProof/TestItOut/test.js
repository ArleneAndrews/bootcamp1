//slider and box match
var slider = document.getElementById('distance');
var box = document.getElementById("box");

slider.onchange = function () {
  box.value = slider.value;
}
box.onkeyup = function () {
  slider.value = box.value;
}

//Radius setting
function territory(far) {
  var far = far;
  var unit = document.getElementById('group1');
  if (unit != "km") {
    var output = document.getElementById("out2");
    var miles = (far * 0.00062137119223733).toFixed(2)
    output.innerHTML = '<p>Radius is ' + miles + ' miles </p>';
  }
  var output = document.getElementById("out2");
  var kms = (far / 1000).toFixed(2)
  output.innerHTML = '<p>Radius is ' + kms + ' km </p>';
}

//finds location
document.getElementById("options").addEventListener("click", findMap);
document.getElementById("feedMe").addEventListener("click", geoFindMe);

function geoFindMe() {
  var output = document.getElementById("out");
  var distance = document.getElementById("distance").value;

  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    if (skeleton == "") {
      findMap(latitude, longitude, distance);
    }
    findSpots(latitude, longitude, distance);


    function error() {
      output.innerHTML = "Unable to retrieve your location";
    }

    output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);
  }

  function findSpots(lat, long, far) {
    var latitude = lat;
    var longitude = long;
    var radius = far;
    var output = document.getElementById("out2");

    territory(radius);
    /*  var places ="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+","+longitude+"&radius="+radius+"&types=restaurant&key="+key;
    return fetch(places, { mode: 'no-cors'})
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
      var listing = myJson;
      console.log(listing);
  
      for(var i = 0, l = listing.length; i < l; i++) {
        var spot = listing[i];
        var div = document.createElement('div');
        div.innerHTML = 'Name ' + spot.name + ' Address ' + spot.addy + 'Open now? ' + spot.opening_hours.open_now ;
        document.body.appendChild(div);
      }
  } )*/
  }
}

function findMap(lat, long, far) {
  var lat = lat;
  var long = long;
  var radius = far;
  var output = document.getElementById("out2");
  territory(radius);
  var img = new Image();
  img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + long + "&zoom=13&size=300x300&sensor=false";

  output.appendChild(img);
}