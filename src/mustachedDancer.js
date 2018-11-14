var MustachedDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('mustached');
};

MustachedDancer.prototype = Object.create(Dancer.prototype);
MustachedDancer.prototype.constructor = MustachedDancer;



MustachedDancer.prototype.step = function() {
  // Dancer.prototype.step.call(this);
  // this._t += 0.05;
  // this.left = this._initLeft + this._radius*Math.cos(this._t);
  // this.top = this._initTop + this._radius*Math.sin(this._t);
  // this.setPosition(this.top, this.left)
  Dancer.prototype.step.call(this);
  var randX = $("body").width() / 3 * (2 * Math.random() - 1);
 
  setTimeout(function() {
    var currentX = this.$node.position().left;

    Dancer.prototype.setPosition.call(this, currentX + randX);

}.bind(this), 0);

  var $nodeNewX = this.$node.position().left + 50;

  window.dancers.forEach(function(dancer) {
    if (dancer instanceof MustachedDancer) {
      var dancerNewX = dancer.$node.position().left + 50;
      var dist = Math.sqrt(Math.pow(($nodeNewX - dancerNewX), 2));
      var dancerCollision = dist !== 0 && dist <= 100;

      var wallCollision =
        dancerNewX - 50 <= 0 ||
        dancerNewX + 50 >= $("body").width();

      if (dancerCollision) {
          $('.collision-sound').attr('src', 'boing.mp3');
          randX = -3 * randX;
      }

      if (wallCollision) {
        dancer.setPosition(
          Math.random() * $("body").width(),
        );
      }
    }
  });


var styleSettings = {
  height: 100,
  width: 100
};
this.$node.css(styleSettings);

}