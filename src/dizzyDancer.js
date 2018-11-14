var DizzyDancer = function(top, left, timeBetweenSteps) {
    
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('dizzy');
};

DizzyDancer.prototype = Object.create(Dancer.prototype);
DizzyDancer.prototype.constructor = DizzyDancer;



DizzyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var randY = $("body").height() / 3 * (2 * Math.random() - 1);
 
  setTimeout(function() {
    var currentY = this.$node.position().top;

    Dancer.prototype.setPosition.call(this, currentY + randY);

}.bind(this), 0);

  var $nodeNewY = this.$node.position().top + 50;

  window.dancers.forEach(function(dancer) {
    if (dancer instanceof DizzyDancer) {
      var dancerNewY = dancer.$node.position().top + 50;
      var dist = Math.sqrt(Math.pow(($nodeNewY - dancerNewY), 2));
      var dancerCollision = dist !== 0 && dist <= 100;

      var wallCollision =
        dancerNewY - 50 <= 0 ||
        dancerNewY + 50 >= $("body").height();

      if (dancerCollision) {
          // $('.collision-sound').attr('src', 'boing.mp3');
          randY = -3 * randY;
      }

      if (wallCollision) {
        dancer.setPosition(
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

var spin = this;
$('.dizzy').on('mouseover', function(){
    var styleSettings = {
      height: 1000,
      width: 1000,
      duration: 5000
    };
    spin.$node.css(styleSettings);
});

}  

// var spin = this;
// $('.dizzy').on('mouseover', rotate({bind:{
//   click: function(){
//     $(this).rotate({
//       duration:5000,
//       angle: 0,
//       animateTo:100
//       })
//     }
//   }
// });
