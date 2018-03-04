var c=1;
  function fnc() {


    $('.button1').click(function() {
      var d=0;
           d = $(this).data('datac');



    var firebaseRef = firebase.database().ref();
      firebaseRef.child("event_no").child("e"+c).set({
        "event_no":d


      });
      c++;
          });
  }



fnc();
