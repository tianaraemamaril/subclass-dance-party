var SleepyPoro = function(top, left, timeBetweenSteps) {
    
  Poro.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sleepy');
};

SleepyPoro.prototype = Object.create(Poro.prototype);
SleepyPoro.prototype.constructor = SleepyPoro;



SleepyPoro.prototype.step = function() {
  Poro.prototype.step.call(this);
  var randY = $("body").height() / 3 * (2 * Math.random() - 1);
 
  setTimeout(function() {
    var currentY = this.$node.position().top;

    Poro.prototype.setPosition.call(this, currentY + randY);

}.bind(this), 0);

  var $nodeNewY = this.$node.position().top + 50;

  window.poros.forEach(function(poro) {
    if (poro instanceof SleepyPoro) {
      var poroNewY = poro.$node.position().top + 50;
      var dist = Math.sqrt(Math.pow(($nodeNewY - poroNewY), 2));
      var poroCollision = dist !== 0 && dist <= 100;

      var wallCollision =
        poroNewY - 50 <= 0 ||
        poroNewY + 50 >= $("body").height();

      if (poroCollision) {
          // $('.collision-sound').attr('src', 'boing.mp3');
          randY = -3 * randY;
      }

      if (wallCollision) {
        poro.setPosition(
          Math.random() * $("body").height(),
        );
      }
    }
  });


var styleSettings = {
  height: 100,
  width: 100
};
this.$node.css(styleSettings);

var shrink = this;
$('.sleepy').on('mouseover', function(){
    var styleSettings = {
      height: 50,
      width: 50,
    };
    shrink.$node.css(styleSettings);
});

}  

