
var mainText = document.getElementById('mainText');
var cno=1;
var btnc = document.getElementById('btnc');
var x = document.getElementById("demo");
var y = document.getElementById("de");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}


function cliCked() {
    var selectedVal = "";

  var selected = $("input[type='radio'][name='eve']:checked");
  if (selected.length > 0) {
      selectedVal = selected.val();
  }
     var dt = new Date();
     var day = dt.getDate();
     var month = dt.getMonth();
     var year = dt.getFullYear();
    var h= dt.getHours();
    var min =dt.getMinutes();
    var sec =dt.getSeconds();
    var time = h+ ":" +min  + ":" +sec ;
var firebaseRef = firebase.database().ref();
var message = mainText.value;
function calculate(){
  //calculate here
if (h>2) {
  window.alert("dad");
}






//cal;ulation end here

firebaseRef.child("event_happened").child(cno).set({
  "message" : message,
  "value i get ": selectedVal,
  "time ": time,
  "date":day+":"+month+":"+year
});

cno++;

}


calculate();
}
