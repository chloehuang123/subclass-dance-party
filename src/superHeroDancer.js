var makeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  // call the dancer superclass and pass in our arguments
  // extend the function to dance prototype
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="super-dancer"></span>');
  // save a copy of the old step function
  this.oldStep = makeDancer.prototype.step;
  this.$node.addClass('candy-dancer');
  $('<img src="https://cdn-icons-png.flaticon.com/512/3132/3132705.png"></img>').appendTo(this.$node);
  this.setPosition(top, left);
  this.step();
};

makeSuperHeroDancer.prototype = Object.create(makeDancer.prototype);
makeSuperHeroDancer.prototype.constructor = makeSuperHeroDancer;

makeSuperHeroDancer.prototype.step = function() {
  // new behavior
  var styleSettings = {
    'border-color': 'purple',
    'animation': 'mymove 5s infinite'
  };

  this.$node.css(styleSettings);

  this.oldStep();
};