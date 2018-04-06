//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
//preloaders.net
/* function clearBox(results) {
    document.getElementById("results").innerHTML = "";
  } */
  
  /* function geoFindMe() {
    var output = document.getElementById("detail");
    if (!navigator.geolocation) {
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }
  
    function success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      
      output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
  return latitude;
      function error() {
        output.innerHTML = "Unable to retrieve your location";
      }
      //output.innerHTML = "<p>Locating…</p>";
  
      navigator.geolocation.getCurrentPosition(success, error);
    }
  } */
  
  function myWeatherC() {
    /*    console.log("above clearBox function");
    clearBox(); */
   console.log("geoFindMe");
   function geoFindMe() {
     var output = document.getElementById("detail");
   
     if (!navigator.geolocation){
       output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
       return;
     }
   
     function success(position) {
       var latitude  = position.coords.latitude;
       var longitude = position.coords.longitude;
   
 console.log('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');
   
      /*  var img = new Image();
       img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
   
       output.appendChild(img); */
     }
   
     function error() {
       output.innerHTML = "Unable to retrieve your location";
     }
   
     output.innerHTML = "<p>Locating…</p>";
   
     navigator.geolocation.getCurrentPosition(success, error);
   
    
   console.log("after geoFindMe, before myWeather");
   
   
       var url =
         "https://fcc-weather-api.glitch.me/api/current?lat=" +
         latitude +
         "&lon=" +
         longitude;
       return fetch(url)
         .then(function(response) {
           return response.json();
         })
         .then(function(myJson) {
           var currentConditions = myJson;
   
           var temp = currentConditions.main.temp;
          
           document.getElementById("temp").innerHTML = temp;
           var main = currentConditions.weather[0].main;
           document.getElementById("main").innerHTML = main;
   
           var img = new Image();
           img.addEventListener(
             "load",
             function() {
               document.getElementById("icon").removeChild();
               document.getElementById("icon").appendChild(img);
             },
             false
           );
           img.src = currentConditions.weather[0].icon; // Set source path
         });
         console.log("after myWeather, button1.onclick function complete");
     }
   }
   
   
   function myWeatherF() {
     console.log("above clearBox function");
    // clearBox();
    console.log("after clearBox, before geoFindMe");
     geoFindMe();
    console.log("after geoFindMe, before myWeather");
     myWeather();
    console.log("after myWeather, button1.onclick function complete");
     var url =
       "https://fcc-weather-api.glitch.me/api/current?lat=" +
       latitude +
       "&lon=" +
       longitude;
     return fetch(url)
       .then(function(response) {
         return response.json();
       })
       .then(function(myJson) {
         var currentConditions = myJson;
 
         var temp = currentConditions.main.temp;
         temp = math.round(temp * 1.8 + 32)
         document.getElementById("temp)").innerHTML = temp;
         var main = currentConditions.weather[0].main;
         document.getElementById("main").innerHTML = main;
 
         var img = new Image();
         img.addEventListener(
           "load",
           function() {
             document.getElementById("icon").removeChild(img);
             document.getElementById("icon").appendChild(img);
           },
           false
         );
         img.src = currentConditions.weather[0].icon; // Set source path
       });
   }
  /*  var button1 = document.getElementById("button1");
   var button2 = document.getElementById("button2");
   
   button1.onclick = function() {
   
   
   console.log("above clearBox function");
    clearBox();
   console.log("after clearBox, before geoFindMe");
    geoFindMe();
   console.log("after geoFindMe, before myWeather");
    myWeather();
   console.log("after myWeather, button1.onclick function complete");
    };
   button2.onclick = function() { console.log("clicked I been clicked!"); }; */