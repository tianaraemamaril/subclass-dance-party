var Draven = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="draven"></span>');
  this.step();
  this.left = window.screen.width/2;
  this.top = window.screen.height/2;
};

Draven.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Draven.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
      

Draven.prototype.breakLineUp = function () {
  this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
};                            