// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // call the dancer superclass and pass in our arguments
  // extend the function to dance prototype
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="blinky-dancer"></span>');
  // save a copy of the old step function
  this.oldStep = makeDancer.prototype.step;
  this.setPosition(top, left);
  this.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  this.$node.toggle();
  this.oldStep();
};