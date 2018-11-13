var DizzyDancer = function(top, left, timeBetweenSteps) {
    
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;  
  this.$node.addClass('dizzy');
};

DizzyDancer.prototype = Object.create(Dancer.prototype);
DizzyDancer.prototype.constructor = DizzyDancer;

DizzyDancer.prototype.oldStep = DizzyDancer.prototype.step;
DizzyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
}
