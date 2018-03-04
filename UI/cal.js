var c=0;
 var pre=0;
function calculate() {
     var dt = new Date();
     var h= dt.getHours();
     var s=0;

 if (h>=0 && h<6) {
s=(10*h)/6;
  pre =40+s;
}
else if (h>=6 && h<9) {
s=((h-6)^2)*1.11
  pre =s+50;
}
else if (h>=9 && h<11) {
  s=(h-9)*10;
  pre =60+s;
}
else if (h>=11 && h<13) {
s=(h-13)*5;
  pre =40+s;
}
else if (h>=15 && h<18) {
  pre =100;
}
else if (h>=18 && h<22) {
   s=(h-18)*12.5
  pre =s+50;
}
else if (h>=22 && h<24) {
   s=((h-22)*5);
  pre =50-s;
}

    var firebaseRef = firebase.database().ref();
      firebaseRef.child("event_pre").child("e"+c).set({
        "event_chance":pre


      });
      c++;
}
calculate();
