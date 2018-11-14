var DerpyPoro = function(top, left, timeBetweenSteps) {

  Poro.call(this, top, left, timeBetweenSteps);
  this.speed = ([-1, 1][Math.floor(Math.random() *2)]) * 500 * Math.random();
  this.$node.addClass('derpy');
};

DerpyPoro.prototype = Object.create(Poro.prototype);
DerpyPoro.prototype.constructor = DerpyPoro;



DerpyPoro.prototype.step = function() {
  Poro.prototype.step.call(this);
  var angle = 0;
  setInterval(function(){
    angle+=3;
  $('.derpy').rotate(angle);
  },50);

  var position = this.$node.position();
  if (position.left < $(window).width() && position.left > 0) {
    this.$node.animate({
      left: '+=' + this.speed + 'px'
    });
    return;
  } else {
      this.speed = -1 * this.speed;
      this.$node.animate({
        left: '+=' + this.speed + 'px'
      });
    }
};
//   var randX = $("body").width() / 3 * (2 * Math.random() - 1);
 
//   setTimeout(function() {
//     var currentX = this.$node.position().left;

//     Poro.prototype.setPosition.call(this, currentX + randX);

// }.bind(this), 0);

//   var $nodeNewX = this.$node.position().left + 50;

//   window.poros.forEach(function(poro) {
//     if (poro instanceof DerpyPoro) {
//       var poroNewX = poro.$node.position().left + 50;
//       var dist = Math.sqrt(Math.pow(($nodeNewX - poroNewX), 2));
//       var poroCollision = dist !== 0 && dist <= 100;

//       var wallCollision =
//         poroNewX - 50 <= 0 ||
//         poroNewX + 50 >= $("body").width();

//       if (poroCollision) {
//           $('.collision-sound').attr('src', 'boing.mp3');
//           randX = -3 * randX;
//       }

//       if (wallCollision) {
//         poro.setPosition(
//           Math.random() * $("body").width(),
//         );
//       }
//     }
//   });


// var styleSettings = {
//   height: 100,
//   width: 100
// };
// this.$node.css(styleSettings);

// }