//Globals, to be adjusted in calculations
var lat = 0;
var lon = 0;
var far = 0;
var zoom = 0;
var buttonmode = "";
var key = "AIzaSyDYPbAbZwxr7E13";
var key2 = "PdJ6B_ExhBXbZQiL1Sw";
var slider = document.getElementById('distance');

/* // Cheat for API key
var box1 = document.getElementById("skeleton");
box1.ononchange = function () {
  key = box1.value;
} */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

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
        console.log("Find a spot!");
        findSpots();
    } else {
        console.log("Show 'em all!");
        findMap();
    }
};

/* //set zoom for map
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
} */

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
        call();
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
    var getJSON = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.mode = 'no-cors';
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    };
    getJSON(places, function (err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            var listing = data;
            console.log(listing);
        }
    });
    /* {
       var listing = myJson;
       /*

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

function call() {
    switch (true) {
        case (button == TA):
            //add Trip Advisor stuff  
            break;
        case (button == YP):
            //add Yelp stuff
            GET "https://api.yelp.com/v3/businesses/search?term=restaurants&latitude="+lat+"&longitude=" +lon +"&radius="+radius+"token="+Yelpkey;
            break;
        case (button == ZO):
            //add zomato stuff
            break;
        case (button == OT):
            //add other stuff
            break;
        case (button == ME):
            //add my history stuff
            break;
    }
};
/* /suggested code
switch (idServiceCode) {
    case 1: svc = new PoiServiceArlene()
    case 2: svc = new PoiServiceYelp()
    case 3: svc = new PoiSercieTripAdvisor(LimitSearchItems = 10);
}
//TODO
PointOfInterest[] SearchItems(double searchRadius)
{
    result.add(new PointOfInterest("shady rest", -74, 32);
    result.add(new PointOfInterest("petticoat junction", -74.22, 32.1);
    // other cool places to follow

}
//end suggested code */