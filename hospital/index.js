
var rootRef = firebase.database().ref().child("event_happened");
rootRef.on("child_added", snap =>{
var dates = snap.child("1").child("date").val();
$("#main_page").append(dates);
});
