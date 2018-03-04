var c=0;
var x = document.getElementById("demo");
var firebaseRef = firebase.database().ref();
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
var as= position.coords.latitude;
var ay= position.coords.longitude;
    firebaseRef.child("event-location").child("g"+c).set({
      "latitude" :as,
      "longitude":ay
    });
    c++;
}

}
