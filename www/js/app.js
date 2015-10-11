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
    StatusBar.backgroundColorByHexString('#a3c0d0');
    StatusBar.styleDefault();

    FastClick.attach(document.body);

    handleExternalURLs();

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

      //turn off the modal if it's not a page that shou;ld have one
      if (pageName == "welcomePage" || pageName == "stylePage") {
        $("#InfoModal").removeClass("active");
      } else {
        document.getElementById("modal-content").innerHTML = service.getInfo(pageName);
      }

      //now we have to figure out the info button


    },

    afterInitialize: function() {
      $("#mainslider").css("visibility", "visible");
    }
  });

  $(".ImageButton").each(function() {

    $(this).on("click", function() {

      var pswpElement = document.querySelectorAll('.pswp')[0];

      // build items array
      var items = service.getItems($(this).attr("data-id"));

      // define options (if needed)
      var options = {

        //history & focus options are disabled on CodePen
        history: false,
        focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0,
        bgOpacity: 0.9
      };

      var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();

    });
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
