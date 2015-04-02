var greenBean = require("green-bean")
var Firebase = require("firebase");

var myFirebaseRef = new Firebase("my_firebase_url");


greenBean.connect("range", function(range) {

    myFirebaseRef.on('value', function(dataSnapshot) {

      var doorSnapshot = dataSnapshot.child('state/doorState');
      var doorState = doorSnapshot.val();

      if (doorState=='0')
      {
        console.log("Door Closed");
        range.fctMode.write(0); // exit fct mode
      }
      else if (doorState=='33')
      {
        console.log("Door Open");
        range.fctMode.write(1); // enter fct mode
        range.buzzerTone.write(5);
      }
    });
});
