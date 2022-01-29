var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  // call the dancer superclass and pass in our arguments
  // extend the function to dance prototype
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="spinny-dancer"></span>');
  // save a copy of the old step function
  this.oldStep = makeDancer.prototype.step;
  this.setPosition(top, left);
  this.step();
  this.$node.mouseover(function(e) {
    console.log('moused');
    $('e.target').css('width', '150px');
    // console.log('do it work?');
  });
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  // new behavior
  var styleSettings = {
    'border-color': 'red white red white',
    'outline': '2px solid black',
    'animation': 'rotation 1s infinite linear'
  };
  this.$node.css(styleSettings);

  this.oldStep();
};

