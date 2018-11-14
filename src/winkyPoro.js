// var makeWinkyPoro = function(top, left, timeBetweenSteps) {
//   var blinkyPoro = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

//////////////////////////////////////////////////////////////

var WinkyPoro = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;  
  Poro.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('winky');
};

WinkyPoro.prototype = Object.create(Poro.prototype);
WinkyPoro.prototype.constructor = WinkyPoro;

WinkyPoro.prototype.oldStep = WinkyPoro.prototype.step;
WinkyPoro.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
}

