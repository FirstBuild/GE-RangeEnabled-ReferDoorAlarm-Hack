# GE-RangeEnabled-ReferDoorAlarm-Hack
This is a fun hack to demonstrate green bean connectivity to a refrigerator and a range over a firebase database.  Application A will push the state of the refrigerator door to firebase.  Application B will sound the range's tone when the door is opened.


## Setup Requirements
 1. 2 laptops (could use other means but this is easiest)
 2. 2 green bean setups
 3. Firebase url

## Installation Instructions
To install, execute the following on each laptop:
``````
git clone https://github.com/Schecky/GE-RangeEnabled-ReferDoorAlarm-Hack.git
cd ./GE-RangeEnabled-ReferDoorAlarm-Hack
npm install
``````

## Setup and Execute the Refer Door Status Updater
 1. Open ReferDoorStatusUpdater.js on laptop A
 2. Replace "my_firebase_url" with your personal firebase url
 3. Connect your green bean to laptop A and the refrigerator and do the following:
 ``````
 node ./ReferDoorStatusUpdater.js
 ``````

## Setup and Execute the Refer Door State Monitor
 1. Open ReferDoorStatusMonitorAlarm.js on laptop B
 2. Replace "my_firebase_url" with your personal firebase url
 3. Connect your green bean to laptop B and the range and do the following:
 ``````
 node ./ReferDoorStatusMonitorAlarm.js
 ``````
