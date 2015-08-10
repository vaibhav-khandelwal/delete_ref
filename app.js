'use strict';

var Firebase =require('firebase');
var prompt = require('prompt');
var t = require('exectimer');
var tick = new t.Tick("TIMER");


var onComplete = function(error) {
  if (error) {
    console.log('Synchronization deletion failed');
  } else {
  	tick.stop();
    console.log('Synchronization deletion succeeded');
    var myTimer = t.timers.TIMER; 
	console.log("Deleting a ref took: " + myTimer.duration()/1000000000.0 + ' seconds');
	setTimeout(process.exit(),2000);
  }
};

prompt.start();
prompt.get(['firebase_ref'], function (err, result) {

	if(err){
		console.log('Error occurred. Please run the program again.');
	}
	else{
		console.log('Ref entered: ' + result.firebase_ref);
		var fredRef = new Firebase(result.firebase_ref);
		tick.start();
		fredRef.remove(onComplete);
	}	

});