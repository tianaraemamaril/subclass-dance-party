var HappyPoro = function(top, left, timeBetweenSteps) {
  
  Poro.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('happy');

};

HappyPoro.prototype = Object.create(Poro.prototype);
HappyPoro.prototype.constructor = HappyPoro;


HappyPoro.prototype.step = function() {
  Poro.prototype.step.call(this);
  var randY = $("body").height() / 3 * (2 * Math.random() - 1);
  var randX = $("body").width() / 3 * (2 * Math.random() - 1);
 
  setTimeout(function() {
    var currentY = this.$node.position().top;
    var currentX = this.$node.position().left;

    Poro.prototype.setPosition.call(this, currentY + randY, currentX + randX);

}.bind(this), 0);

  var $nodeNewX = this.$node.position().left + 50;
  var $nodeNewY = this.$node.position().top + 50;

  window.poros.forEach(function(poro) {
    if (poro instanceof HappyPoro) {
      var poroNewX = poro.$node.position().left + 50;
      var poroNewY = poro.$node.position().top + 50;
      var dist = Math.sqrt(Math.pow(($nodeNewX = poroNewX), 2) + Math.pow(($nodeNewY - poroNewY), 2));
      var poroCollision = dist !== 0 && dist <= 100;

      var wallCollision =
        poroNewX - 50 <= 0 ||
        poroNewX + 50 >= $("body").width() ||
        poroNewY - 50 <= 0 ||
        poroNewY + 50 >= $("body").height();

      if (poroCollision) {
          $('.collision-sound').attr('src', 'boing.mp3');
          randY = -3 * randY;
          randX = -3 * randX;
      }

      if (wallCollision) {
        poro.setPosition(
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
$('.happy').on('mouseover', function() {
  var styleSettings = {
    height: 600,
    width: 600
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
