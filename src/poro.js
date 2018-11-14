// Creates and returns a new Poro object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };


var Poro = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="poro"></span>');
  this.step();
  this.setPosition(top, left);
};

Poro.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Poro.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Poro.prototype.lineUp = function(i) {
    var styleSettings = {
      // top: window.screen.height/6,
      // left: (window.screen.width / window.poros.length) * i + 100,
      left: 0
    };
    this.$node.css(styleSettings);
  };

// Poro.prototype.Draven = function() {

//     var styleSettings = {
//       left: window.screen.width/2,
//       top: window.screen.height/2
//     };
//     this.$node.css(styleSettings);
//   };


Poro.prototype.breakLineUp = function () {
  this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
};

// Poro.prototype.lineUp = function(yValue) {
//   this.setPosition(yValue,10);
// };

