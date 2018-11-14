var Draven = function(top, left, timeBetweenSteps) {

  Poro.call(this, top, left, timeBetweenSteps);
  this.left = window.screen.width/2
  this.top = window.screen.height/2
  this.$node.addClass('draven');

};

Draven.prototype = Object.create(Poro.prototype);
Draven.prototype.constructor = Draven;



Draven.prototype.step = function() {
  Poro.prototype.step.call(this);
  
  
  var position = this.$node.position();
  // this.top = window.height/2
  // this.left = window.width/2
  // $('addDravenButton').on('click', function() {
  //   $(this).prop('disabled', true);
  // })
};