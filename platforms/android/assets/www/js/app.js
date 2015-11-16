// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function() {

  /* ---------------------------------- Local Variables ---------------------------------- */

  //compile prototypes
  HomeView.prototype.template = Handlebars.compile($("#home-template").html());

  //create service
  var service = new ApplicationService();

  //initialise service with function
  service.initialize().done(function() {

    //first route goes to home screen
    router.addRoute('', function() {
      $('body').html(new HomeView(service).render().$el);
    });

    router.start();
  });

  /* --------------------------------- Event Registration -------------------------------- */
  document.addEventListener('deviceready', function() {

    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByHexString('#00000');
    StatusBar.styleDefault();
    FastClick.attach(document.body);

  }, false);

  /* ---------------------------------- Local Functions ---------------------------------- */
  var firstChild = $("#mainslider li:first-child").clone();
  var lastChild = $("#mainslider li:last-child").clone();

  var container = $("#mainslider ul");

  firstChild.appendTo(container);

  //initialise drag interface
  new Dragend($("#mainslider").get(0), {

    onSwipeEnd: function() {

      var last = this.pages[this.pages.length - 1];

      if (last === this.activeElement) {
        this.jumpToPage(1);
      }

      //get which page is active
      var pageName = $(this.activeElement).attr("name");

      //set the images button value
      $("#ButtonOfImages").attr("data-id", pageName);

      //turn off the modal if it's not a page that should have one
      //and hide the buttons on pages that they wont be active
      if (pageName == "welcomePage" || pageName == "stylePage") {
        $("#InfoModal").removeClass("active");
        $("#ButtonsDiv").fadeOut(200);
      } else {
        document.getElementById("modal-content").innerHTML = service.getInfo(pageName);
        $("#ButtonsDiv").fadeIn(200);
        var location = service.getLocation(pageName);
        if (navigator.userAgent.match(/android/i) != null) {
          $("#ButtonOfMaps").attr('href', 'geo:0,0?q=' + location[0] + ',' + location[1] + '(' + pageName + ')');
        } else {
          $("#ButtonOfMaps").attr('href', "maps://?q=" + location[0] + "," + location[1]);
        }

      }
    },

    afterInitialize: function() {
      $("#mainslider").css("visibility", "visible");
    }
  });

}());
