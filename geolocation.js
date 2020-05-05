var x = document.getElementById("demo");
var destino = document.getElementById("destino");
function getLocation(data) {
  if (navigator.geolocation && data != "cliente") {
    destino.innerHTML = data;
    navigator.geolocation.getCurrentPosition(showPosition);
  } else if (navigator.geolocation && data =="cliente" ) {
    navigator.geolocation.getCurrentPosition(showClientPosition);
  }else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    //window.location = 'https://www.google.com/maps/dir/'+position.coords.latitude+','+position.coords.longitude+'/-31.735050,-60.522094'
    var page = 'https://www.google.com/maps/dir/'+position.coords.latitude+','+position.coords.longitude+'/'+destino.innerHTML
    window.open(page, '_blank', 'width=800, height=600 , location=no');
    //google.script.host.close();
    
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }
  

  function showClientPosition(position) {
    clientLat = document.getElementById("clientLat");
    clientLon = document.getElementById("clientLon");
    clientLat.value = position.coords.latitude;
    clientLon.value = position.coords.longitude;
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
      var data =[1,position.coords.latitude,position.coords.longitude];
      google.script.run.insertDirection(data);
  }
