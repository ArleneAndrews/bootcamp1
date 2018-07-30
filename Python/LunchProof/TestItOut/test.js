//Globals
var key = document.getElementById("skeleton").value;
var far = document.getElementById("distance").value;
var lat;
var long;

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
function territory() {
  var output2 = document.getElementById("out2");
  var unit = document.querySelector('input[name="group1"]:checked').value;
  if (unit === "miles") {
    var miles = (far * 0.00062137119223733).toFixed(2)
    output2.innerHTML = '<p>Radius is ' + miles + ' miles </p>';
  }
  var kms = (far / 1000).toFixed(2)
  output2.innerHTML = '<p>Radius is ' + kms + ' km </p>';
}

//finds location
document.getElementById("options").addEventListener("click", findMap);
document.getElementById("feedMe").addEventListener("click", findSpots);

function geoFindMe() {
  console.log(key);
  var output = document.getElementById("out");

  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    output.innerHTML = '<p>Latitude is ' + lat + '° <br>Longitude is ' + long + '°</p>';
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
}

function findSpots() {
  if (key == "") {
    findMap()
    return;
  }
  geoFindMe();
  territory();

  var output = document.getElementById("out2");
  output.innerHTML = "<p>Works this far!</p>";
  /*var places =  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=" + far + "&types=restaurant&key=" + key;
  return fetch(places, {
      mode: 'no-cors'
    })
    .then(function (response) {
      return response.json()
    })
    .then(function (myJson) {
      var listing = myJson;
      console.log(listing);

      for (var i = 0, l = listing.length; i < l; i++) {
        var spot = listing[i];
        var div = document.createElement('div');
        div.innerHTML = 'Name ' + spot.name + ' Address ' + spot.addy + 'Open now? ' + spot.opening_hours.open_now;
        document.body.appendChild(div);
      }
    }) */
}


function findMap() {
  var output = document.getElementById("out2");
  var img = new Image();
  
  geoFindMe()
  .then
  img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + long + "&zoom=13&size=300x300&sensor=false";

  output.appendChild(img);
}