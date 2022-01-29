var makeCandyDancer = function(top, left, timeBetweenSteps) {
  // call the dancer superclass and pass in our arguments
  // extend the function to dance prototype
  makeSpinnyDancer.call(this, top, left, timeBetweenSteps);
  // save a copy of the old step function
  this.oldStep = makeDancer.prototype.step;
  this.$node.addClass('candy-dancer');
  $('<img src="https://cdn-icons.flaticon.com/png/512/3692/premium/3692809.png?token=exp=1643420226~hmac=c3f2c4f2418c7104bd36abc17816c5b2"></img>').appendTo(this.$node);
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

