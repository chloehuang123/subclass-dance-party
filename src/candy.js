var makeCandyDancer = function(top, left, timeBetweenSteps) {
  // call the dancer superclass and pass in our arguments
  // extend the function to dance prototype
  makeSpinnyDancer.call(this, top, left, timeBetweenSteps);
  // save a copy of the old step function
  this.oldStep = makeDancer.prototype.step;
  this.$node.addClass('candy-dancer');
  $('<img src="https://cdn0.iconfinder.com/data/icons/christmas-3/500/ball_celebration_christmas_decoration_holiday_new_year_ornament_red-512.png"></img>').appendTo(this.$node);
  this.setPosition(top, left);
  this.step();
};

makeCandyDancer.prototype = Object.create(makeDancer.prototype);
makeCandyDancer.prototype.constructor = makeCandyDancer;

makeCandyDancer.prototype.step = function() {
  // new behavior
  var styleSettings = {

    'animation': 'rotation 1s infinite linear'
  };
  this.$node.css(styleSettings);

  this.oldStep();
};

