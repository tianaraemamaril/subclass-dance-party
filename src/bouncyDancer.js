var BouncyDancer = function(top, left, timeBetweenSteps) {
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy');

};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;


BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var randY = $("body").height() / 3 * (2 * Math.random() - 1);
  var randX = $("body").width() / 3 * (2 * Math.random() - 1);
 
  setTimeout(function() {
    var currentY = this.$node.position().top;
    var currentX = this.$node.position().left;

    Dancer.prototype.setPosition.call(this, currentY + randY, currentX + randX);

}.bind(this), 0);

  var $nodeNewX = this.$node.position().left + 50;
  var $nodeNewY = this.$node.position().top + 50;

  window.dancers.forEach(function(dancer) {
    if (dancer instanceof BouncyDancer) {
      var dancerNewX = dancer.$node.position().left + 50;
      var dancerNewY = dancer.$node.position().top + 50;
      var dist = Math.sqrt(Math.pow(($nodeNewX = dancerNewX), 2) + Math.pow(($nodeNewY - dancerNewY), 2));
      var dancerCollision = dist !== 0 && dist <= 100;

      var wallCollision =
        dancerNewX - 50 <= 0 ||
        dancerNewX + 50 >= $("body").width() ||
        dancerNewY - 50 <= 0 ||
        dancerNewY + 50 >= $("body").height();

      if (dancerCollision) {
          $('.collision-sound').attr('src', 'boing.mp3');
          randY = -3 * randY;
          randX = -3 * randX;
      }

      if (wallCollision) {
        dancer.setPosition(
          Math.random() * $("body").height(),
          Math.random() * $("body").width()
        );
      }
    }
  });


var styleSettings = {
  height: 100,
  width: 100
};
this.$node.css(styleSettings);

var grow = this;
$('.bouncy').on('mouseover', function() {
  var styleSettings = {
    height: 200,
    width: 200
  };
  grow.$node.css(styleSettings);
});
}


// anime({
//   targets: '.bouncy',
//   translateY: [
//     {value: 300, duration: 1500},
//     {value: 0; duration:1500}
//   ],
// });
