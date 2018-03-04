var pro =document.getElementById('pro');
var firebaseHedingRef =firebase.database().ref().child("event-location").child("g1").child("latitude");
firebaseHedingRef.on('value',function(datasnap){
    main_page.innerText = datasnap.val();
});
