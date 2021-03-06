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

//set zoom for map
function zoomLevel() {
  switch (true) {
    case (far < 1500):
      zoom = 20;
      break;
    case (far < 5000):
      zoom = 19;
      break;
    case (far < 10000):
      zoom = 18;
      break;
    case (far < 15000):
      zoom = 17;
      break;
    case (far < 20000):
      zoom = 16;
      break;
    case (far < 25000):
      zoom = 15;
      break;
    case (far < 30000):
      zoom = 14;
      break;
    case (far < 35000):
      zoom = 13;
      break;
    case (far < 40000):
      zoom = 12;
      break;
    case (far < 45000):
      zoom = 11;
      break;
    case (far < 40000):
      zoom = 10;
      break;
  }
}

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
  /*  zoomLevel();
   var img = new Image();
   var output = document.getElementById("out3");
   img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lon + "&zoom=" + zoom + "&size=300x300&sensor=false";
   output.appendChild(img); 
   place = AIzaSyDYPbAbZwxr7E13PdJ6B_ExhBXbZQiL1Sw */
  //END MOVED CODE
  var output = document.getElementById("out2");
  output.innerHTML = "<p>Works this far!</p>";
  var places = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lon + "&radius=" + far + "&types=restaurant&key=" + key;
  
    fetch(places, {mode: 'no-cors',  credentials: 'include'  })
    .then(response => {
      return response.json();
    }).then(data => {
      // Work with JSON data here
      console.log(data);
    }).catch(err => {
      // Do something for an error here
    });
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
  zoomLevel();
  var img = new Image();
  var output = document.getElementById("out3");
  img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lon + "&zoom=" + zoom + "&size=300x300&sensor=false";
  output.appendChild(img);
};