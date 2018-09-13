//Globals, to be adjusted in calculations
var lat = 0;
var lon = 0;
var far = 0;
var zoom = 0;
var buttonmode = "";
var key = "";
var slider = document.getElementById('distance');

//Radius setting
function territory() {
  far = slider.value;
  var output = document.getElementById("out");
  var unit = document.querySelector('input[name="group1"]:checked').value;
  if (unit == "miles") {
    var miles = (far * 0.00062137119223733).toFixed(2)
    output.innerHTML = '<p>Radius is ' + miles + ' miles </p>';
  } else {
    var kms = (far / 1000).toFixed(2)
    output.innerHTML = '<p>Radius is ' + kms + ' km </p>';
  }
}


//finds correct function
function mode() {
  if (buttonmode == 'feedMe') {
    /* if (key === '') {
      console.log("No key!");
      findMap();
    } */
    console.log("Find a spot!");
    findSpots();
  } else {
    console.log("Show 'em all!");
    findMap();
  }
};

function geoFindMe(source) {
  buttonmode = source.id;
  var output = document.getElementById("out");

  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    //output.innerHTML = '<p>Latitude is ' + lat + '° <br>Longitude is ' + lon + '°</p>';
    territory();
    mode();
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
}

function findSpots() {
  console.log("It works thus far!");
  // MOVED CODE STARTS HERE
  var mydiv = document.getElementById('out3');
  while (mydiv.firstChild) {
    mydiv.removeChild(mydiv.firstChild);
  }
  //END MOVED CODE
  var output = document.getElementById("out2");
  output.innerHTML = "<p>Works this far!</p>";
  var places = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lon + "&radius=" + far + "&types=restaurant&key=" + placekey;
  get(places, {
      mode: 'no-cors'
    })
    .then(function (response) {
      //NULL here
      var response =response;
      output.innerHTML = response;
      return response.json()
    })
  /*
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
  var mydiv = document.getElementById('out3');
  while (mydiv.firstChild) {
    mydiv.removeChild(mydiv.firstChild);
  }
  zoom =(far * .0038).toFixed(0);
  var img = new Image();
  var output = document.getElementById("out3");
  img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lon + "&zoom=" + zoom + "&size=300x300&sensor=false";
  output.appendChild(img);
};