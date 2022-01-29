var makeSmartDancer = function(top, left, timeBetweenSteps) {
  // call the dancer superclass and pass in our arguments
  // extend the function to dance prototype
  makeSpinnyDancer.call(this, top, left, timeBetweenSteps);
  // save a copy of the old step function
  this.oldStep = makeDancer.prototype.step;
  this.$node.addClass('candy-dancer');
  $('<img src="https://cdn-icons.flaticon.com/png/512/2331/premium/2331399.png?token=exp=1643487502~hmac=08a18e71acf64d2ce8a8b93fa43a93e6"></img>').appendTo(this.$node);
  this.setPosition(top, left);
  this.step();
};

makeSmartDancer.prototype = Object.create(makeDancer.prototype);
makeSmartDancer.prototype.constructor = makeSmartDancer;

makeSmartDancer.prototype.step = function() {
  // new behavior
  var styleSettings = {
    'animation': 'vibrate-1 0.01s infinite'
  };
  this.$node.css(styleSettings);

  this.find();
  this.oldStep();
};

makeSmartDancer.prototype.find = function() {
  // check window.dancer for other dancers than are close or with a range
  //get the difference between this.left and this.top and dancer.left and dancer.top and do triangle math on it

  // if (window.dancers.length > 0) {
  //   window.dancers.forEach(function(dancer) {
  //     console.log(dancer.style.nodeValue.left);

  //   });
  // }
};

// makeSmartDancer.prototype.triangleMath = function(top, left) {
//   var length = ((top * top) + (left * left)) ^ 0.5;
//   return length;
// };