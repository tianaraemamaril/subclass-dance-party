var BouncyDancer = function(top, left, timeBetweenSteps) {
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;  
  this.$node.addClass('bouncy');

};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.oldStep = BouncyDancer.prototype.step;
BouncyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
}
