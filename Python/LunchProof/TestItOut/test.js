//Globals
var lat = 0;
var lon = 0;
var far = 0;
var buttonmode = "";
var key = "";

var box1=document.getElementById("skeleton");
box1.onkeyup = function () {
key = box1.value;
}


//slider and box match
var slider = document.getElementById('distance');
var box = document.getElementById("box");

slider.onchange = function () {
  box.value = slider.value;
}
box.onkeyup = function () {
  slider.value = box.value;
}

//finds correct function
function mode(){
  if (mode == 'feedMe') {
    if(key === '') {
      console.log ("No key!");
      findMap();
    }
    console.log ("Find a spot!");
    findSpots();
  }
  else {
    console.log ("Show 'em all!");
    findMap();
  }
};


//Radius setting
function territory() {
  far = slider.value;
  var output2 = document.getElementById("out2");
  var unit = document.querySelector('input[name="group1"]:checked').value;
  if (unit === "miles") {
    var miles = (far * 0.00062137119223733).toFixed(2)
    output2.innerHTML = '<p>Radius is ' + miles + ' miles </p>';
  }
  var kms = (far / 1000).toFixed(2)
  output2.innerHTML = '<p>Radius is ' + kms + ' km </p>';
  mode();
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
    output.innerHTML = '<p>Latitude is ' + lat + '° <br>Longitude is ' + lon + '°</p>';
    territory();
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
}

function findSpots() {
  console.log("It works thus far!");
};
  /*if (key == "") {
    findMap()
    return;
  }
  geoFindMe();
  territory();
  //TODO: change these to match incoming 
  lat = position[0];
  lon = position[1];

  var output = document.getElementById("out2");
  output.innerHTML = "<p>Works this far!</p>";*/
  /*var places =  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lon + "&radius=" + far + "&types=restaurant&key=" + key;
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
}*/

function findMap() {
  var mydiv = document.getElementById('out3');
while(mydiv.firstChild) {
  mydiv.removeChild(mydiv.firstChild);
}
  var img = new Image();
  var output = document.getElementById("out3");
  img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lon + "&zoom=13&size=300x300&sensor=false";

  output.appendChild(img);
};