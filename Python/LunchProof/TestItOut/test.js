//slider and box match
var slider = document.getElementById('distance');
var box = document.getElementById("box");

slider.onchange = function () {
  box.value = slider.value;
}
box.onkeyup = function () {
  slider.value = box.value;
}

var far = document.getElementById("distance").value

//Radius setting
function territory() {
  var output2 = document.getElementById("out2");
  var unit = document.querySelector('input[name="group1"]:checked').value;
  console.log(unit);
  if (unit === "miles") {
    var miles = (far * 0.00062137119223733).toFixed(2)
    output2.innerHTML = '<p>Radius is ' + miles + ' miles </p>';
  }
  var kms = (far / 1000).toFixed(2)
  output2.innerHTML = '<p>Radius is ' + kms + ' km </p>';
}

//finds location
document.getElementById("options").addEventListener("click", findMap);
document.getElementById("feedMe").addEventListener("click", geoFindMe);

function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
  }
  if (skeleton == "") {
    var lat = lat;
    var long = long;
    var output = document.getElementById("out2");
    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);;
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

function findSpots(lat, long, far) {
  var latitude = lat;
  var longitude = long;
  var output = document.getElementById("out2");
  territory();
  var places = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," + longitude + "&radius=" + far + "&types=restaurant&key=" + key;
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
    })
}


function findMap(lat, long) {
  geoFindMe();
  var lat = lat;
  var long = long;
  var output = document.getElementById("out2");
  var img = new Image();
  img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + long + "&zoom=13&size=300x300&sensor=false";

  output.appendChild(img);
}