(function() {
  'use strict';

  // YOUR CODE HERE
  var stopButton = document.getElementById("stopButton");
  var slowButton = document.getElementById("slowButton");
  var goButton = document.getElementById("goButton");
  var trafficLight = document.getElementById("stopLight");
  var slowLight = document.getElementById("slowLight");
  var goLight = document.getElementById("goLight");

  stopButton.addEventListener("click", function () {
    trafficLight.classList.toggle("stop");
    // if (stopButton:hover) {
    //   console.log("Entered stopButton button.")
    // }
  });

  slowButton.addEventListener("click", function () {
    slowLight.classList.toggle("slow");
  });

  goButton.addEventListener("click", function () {
    goLight.classList.toggle("go");
  });

})();
