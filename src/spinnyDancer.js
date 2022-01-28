var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  // call the dancer superclass and pass in our arguments
  // extend the function to dance prototype
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="spinny-dancer"></span>');
  // save a copy of the old step function
  this.oldStep = makeDancer.prototype.step;
  this.setPosition(top, left);
  this.step();
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  // new behavior
  var styleSettings = {
    'border-color': 'blue',
    'border-bottom-color': 'red',
    'transform': 'rotate(angle: 0, animateTo: 360)',

  };

  this.$node.css(styleSettings);

  this.oldStep();
};

