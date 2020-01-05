var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  window.location = 'https://www.google.com/maps/dir/'+position.coords.latitude+','+position.coords.longitude+'/-31.735050,-60.522094'  
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;

}

function getConstantLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showConstantPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showConstantPosition(position){
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}
