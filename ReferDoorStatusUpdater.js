var greenBean = require("green-bean");
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("my_firebase_url");

greenBean.connect("refrigerator", function(refrigerator) {
    refrigerator.doorState.read(function (value) {
        console.log("door state is:", value);
        myFirebaseRef.set({state: value});
    });

    refrigerator.doorState.subscribe(function (value) {
        console.log("door state changed:", value);
        myFirebaseRef.set({state: value});
    });
});
