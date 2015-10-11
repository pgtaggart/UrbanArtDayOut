var HomeView = function() {

  var pages = [{
    id: "BrickLane",
    image: "BrickLane.jpg"
  }, {
    id: "Camden",
    image: "Camden.jpg"
  }, {
    id: "Portobello",
    image: "Portobello.jpg"
  }, {
    id: "Waterloo",
    image: "Waterloo.jpg"
  }, {
    id: "Shoreditch",
    image: "Shoreditch.jpg"
  }];

  this.initialize = function() {
    this.$el = $('<div>');
    this.render();
  };

  this.render = function() {
    this.$el.html(this.template(pages));
    return this;
  };

  this.initialize();

}
