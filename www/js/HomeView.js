var HomeView = function() {

  var pages = [{
    id: "welcomePage",
    image: "Welcome.jpg",
    location: "",
    latitude: "0",
    longitude: "0"
  }, {
    id: "stylePage",
    image: "Style.jpg",
    location: "",
    latitude: "0",
    longitude: "0"
  }, {
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

  var iPadPages = [{
    id: "welcomePage",
    image: "iPad/Welcome.jpg",
    location: "",
    latitude: "0",
    longitude: "0"
  }, {
    id: "stylePage",
    image: "iPad/Style.jpg",
    location: "",
    latitude: "0",
    longitude: "0"
  }, {
    id: "BrickLane",
    image: "iPad/BrickLane.jpg"
  }, {
    id: "Camden",
    image: "iPad/Camden.jpg"
  }, {
    id: "Portobello",
    image: "iPad/Portobello.jpg"
  }, {
    id: "Waterloo",
    image: "iPad/Waterloo.jpg"
  }, {
    id: "Shoreditch",
    image: "iPad/Shoreditch.jpg"
  }];

  this.initialize = function() {
    this.$el = $('<div>');
    this.render();
  };

  this.render = function() {
    if (navigator.userAgent.match(/iPad/i) != null) {
      this.$el.html(this.template(iPadPages));
    } else {
      this.$el.html(this.template(pages));
    }
    return this;
  };

  this.initialize();

}
