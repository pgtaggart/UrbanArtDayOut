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

    console.log('started yall');

    router.start();
  });

  /* --------------------------------- Event Registration -------------------------------- */
  document.addEventListener('deviceready', function() {

    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByHexString('#00000'); //XXX: This will need to change
    StatusBar.styleDefault();
    FastClick.attach(document.body);
    handleExternalURLs();

  }, false);

  function getPPI(){
    // create an empty element
    var div = document.createElement("div");
    // give it an absolute size of one inch
    div.style.width="1in"// append it to the body
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(div);
    // read the computed width
    var ppi = document.defaultView.getComputedStyle(div, null).getPropertyValue('width');
    // remove it again
    body.removeChild(div);
    // and return the value
    return parseFloat(ppi);
  }

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
        $("#ButtonOfMaps").attr('href', "maps://?q=" + location[0] + "," + location[1]);
      }
    },

    afterInitialize: function() {
      $("#mainslider").css("visibility", "visible");
    }
  });

  function handleExternalURLs() {

    // Handle click events for all external URLs
    if (device.platform.toUpperCase() === 'ANDROID') {
      $(document).on('click', 'a[href^="http"]', function(e) {
        var url = $(this).attr('href');
        navigator.app.loadUrl(url, {
          openExternal: true
        });
        e.preventDefault();
      });
    } else if (device.platform.toUpperCase() === 'IOS') {
      $(document).on('click', 'a[href^="http"]', function(e) {
        var url = $(this).attr('href');
        window.open(url, '_system');
        e.preventDefault();
      });
    } else {
      // Leave standard behaviour
    }
  }

}());
