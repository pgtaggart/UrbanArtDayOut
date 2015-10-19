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
    image: "BrickLane.jpg",
    location: "Brick Lane",
    latitude: "51.523951",
    longitude: "-0.071509"
  }, {
    id: "Camden",
    image: "Camden.jpg",
    location: "Camden",
    latitude: "51.541922",
    longitude: "-0.139424"
  }, {
    id: "Portobello",
    image: "Portobello.jpg",
    location: "Portobello",
    latitude: "51.518429",
    longitude: "-0.206360"
  }, {
    id: "Waterloo",
    image: "Waterloo.jpg",
    location: "Waterloo",
    latitude: "51.502445",
    longitude: "-0.113520"
  }, {
    id: "Shoreditch",
    image: "Shoreditch.jpg",
    location: "Shoreditch",
    latitude: "51.523274",
    longitude: "-0.074916"
  }];

  this.initialize = function() {
    this.$el = $('<div>');
    this.render();
  };

  this.render = function() {
    console.log('Hello there');
    this.$el.html(this.template(pages));
    return this;
  };

  this.initialize();
}
