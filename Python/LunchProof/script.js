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
      
      function initMap() {
        alert("WORKS!");
        var pyrmont = {lat: latitude, lng: longitude};
    
        map = new google.maps.Map(document.getElementById('out'), {
          center: pyrmont,
          zoom: 15
        });
    
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: 500,
          type: ['store']
        }, callback);
      }
    
      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }
    
      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
    
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
    }
  
    function error() {
      output.innerHTML = "Unable to retrieve your location";
    }
  
    output.innerHTML = "<p>Locating…</p>";
  
    navigator.geolocation.getCurrentPosition(success, error);
  }

 