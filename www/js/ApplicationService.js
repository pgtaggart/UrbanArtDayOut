var ApplicationService = function() {

  this.initialize = function() {
    // No Initialization required
    var deferred = $.Deferred();
    deferred.resolve();
    return deferred.promise();
  }

  this.getItems = function(id) {
    var gallery = null;
    var l = galleryCollection.length;

    for (var i = 0; i < l; i++) {
      if (galleryCollection[i].id == id) {
        gallery = galleryCollection[i].items;
        break;
      }
    }

    return gallery;
  }

  this.getInfo = function(id) {
    var info = null;
    var l = PageInfo.length;

    for (var i = 0; i < l; i++) {
      if (PageInfo[i].id == id) {
        info = PageInfo[i].Information;
        break;
      }
    }

    return info;
  }

  this.getLocation = function(id) {
    var info = null;
    var l = locations.length;
    var location = new Object();

    for (var i = 0; i < l; i++) {
      if (locations[i].id == id) {
        location[0] = locations[i].latitude;
        location[1] = locations[i].longitude;
        break;
      }
    }
    return location;
  }

  var PageInfo = [{
    id: 'BrickLane',
    Information: "Brick Lane attracts artists from all over the UK. There are some great examples of iconic street art, which celebrates and embraces the cultural identity of the community. These include the Crane by Roa to celebrate the Bangladeshi community & the Two Stiks holding hands on Princelet Street depicting a burka clad Stik holding hands with a non-burka wearing Stik."
  }, {
    id: 'Camden',
    Information: "Camden’s heritage includes a rich mix of artists and musicians who celebrate countercultures, to which the street artists can pay homage. Combined with this, the local architecture of railway lines, bridges and canals are bursting with opportunity for urban artists to brighten the area."
  }, {
    id: 'Portobello',
    Information: "Portobello Road in the iconic area of Noting Hill and is famous for its market. It also houses a wealth of street art. Along the road, you can spot various murals including a Banksy preserved behind glass, which demonstrates the growing financial value of street art. Further down there is a chance to sample fine foods from the markets and see work in Acklam Village."
  }, {
    id: 'Waterloo',
    Information: "Underneath the station is Leake Street, a legal place to paint. Walk onto the Southbank and you will see the skate park – home to urban artists for over 40 years. Further down the Thames over Millennium Bridge, Ben Wilson has painted chewing gum showing how urban art can brighten the smallest of forgotten spaces."
  }, {
    id: 'Shoreditch',
    Information: "Shoreditch may host the greatest concentration of techniques and styles of urban art across London, making It a mecca for some of the world’s greatest street artists, who are safe in the knowledge they will attract an appreciative audience. Coming out of the station, you’ll see a Ben Eine piece – a formerly unknown street artist whose work has made it all the way to the White House."
  }];

  var locations = [{
    id: "BrickLane",
    location: "Brick Lane",
    latitude: "51.523951",
    longitude: "-0.071509"
  }, {
    id: "Camden",
    location: "Camden",
    latitude: "51.541922",
    longitude: "-0.139424"
  }, {
    id: "Portobello",
    location: "Portobello",
    latitude: "51.518429",
    longitude: "-0.206360"
  }, {
    id: "Waterloo",
    location: "Waterloo",
    latitude: "51.502445",
    longitude: "-0.113520"
  }, {
    id: "Shoreditch",
    location: "Shoreditch",
    latitude: "51.523274",
    longitude: "-0.074916"
  }];

  var galleryCollection = [{
    id: 'BrickLane',
    name: 'Brick Lane',
    items: [{
      src: './assets/pictures/BrickLane/DSC00092.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00092 :X:  ‘Lizzy Vuitton’ - Endless- Hanbury Street '
    }, {
      src: './assets/pictures/BrickLane/DSC00095.jpeg',
      w: 750,
      h: 1000,
      title: 'DSC00095 :X:  ‘Lupus Rider’ - DS - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00099.jpeg',
      w: 750,
      h: 1000,
      title: 'DSC00099 :X:  Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00100.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00100 :X:  Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00102.jpeg',
      w: 1000,
      h: 739,
      title: 'DSC00102'
    }, {
      src: './assets/pictures/BrickLane/DSC00108.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00108 :X:  Invader - Dray Walk'
    }, {
      src: './assets/pictures/BrickLane/DSC001082.jpeg',
      w: 640,
      h: 480,
      title: 'DSC001082'
    }, {
      src: './assets/pictures/BrickLane/DSC00109.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00109'
    }, {
      src: './assets/pictures/BrickLane/DSC00110.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00110 :X:  Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00111.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00111 :X:  ‘Car& Winged Bomb Sculpture’ D*Face & Bow&Arrow-‘Gifts from the Olympic God’s’- Installed for London 2012 by the Mayor - Grey Eagle Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00113.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00113 :X:  ‘Joker&James’ - Taosuz - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00115.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00115 :X:  Crisp - Hanbury Street '
    }, {
      src: './assets/pictures/BrickLane/DSC00116.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00116'
    }, {
      src: './assets/pictures/BrickLane/DSC00119.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00119 :X:  ‘Brand Wars’ - Endless - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00126.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00126 :X:  ‘Crunchy’ - Ronzo - Grey Eagle Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00129.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00129 :X:  Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00132.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00132 :X:  ‘Lupus ‘ - DS - Hanbury Street '
    }, {
      src: './assets/pictures/BrickLane/DSC00133.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00133 :X:  ‘Love Birds’ - Paul Don Smith - Hanbury Street '
    }, {
      src: './assets/pictures/BrickLane/DSC00137.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00137 :X:  ‘Guy Fawkes’ - Gee - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00173.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00173'
    }, {
      src: './assets/pictures/BrickLane/DSC00198.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00198'
    }, {
      src: './assets/pictures/BrickLane/DSC00227.jpeg',
      w: 1000,
      h: 667,
      title: 'DSC00227'
    }, {
      src: './assets/pictures/BrickLane/IMG_1603.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_1603'
    }, {
      src: './assets/pictures/BrickLane/Urban-26.jpeg',
      w: 1000,
      h: 739,
      title: 'Urban-26'
    }, {
      src: './assets/pictures/BrickLane/Urban-35.jpeg',
      w: 1000,
      h: 667,
      title: 'Urban-35'
    }, {
      src: './assets/pictures/BrickLane/Urban-41.jpeg',
      w: 1000,
      h: 739,
      title: 'Urban-41'
    }, {
      src: './assets/pictures/BrickLane/Urban-84.jpeg',
      w: 517,
      h: 700,
      title: 'Urban-84'
    }]
  }, {
    id: 'Camden',
    name: 'Camden',
    items: [{
      src: './assets/pictures/Camden/DSC00134.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00134'
    }, {
      src: './assets/pictures/Camden/DSC00160.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00160 :X:  JXC- Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00161.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00161 :X:  ‘Original Riots’- Airborne Mark - Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00163.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00163 :X:  Zabou- Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00165.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00165 :X:  Sr.X- Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00166.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00166 :X:  China Girl - Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00169.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00169'
    }, {
      src: './assets/pictures/Camden/DSC00284.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00284 :X:  My Dog Sighs - Stucley Place'
    }, {
      src: './assets/pictures/Camden/DSC00288.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00288 :X:  My Dog Sighs - Stucley Place'
    }, {
      src: './assets/pictures/Camden/DSC00293.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00293 :X:  Shop Fronts- Camden High Street'
    }, {
      src: './assets/pictures/Camden/DSC00298.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00298 :X:  ‘John Lennon Mural’- Gnasher - Camden High Street'
    }, {
      src: './assets/pictures/Camden/DSC00300.jpeg',
      w: 750,
      h: 1000,
      title: 'DSC00300 :X:  Camden High Street'
    }, {
      src: './assets/pictures/Camden/DSC00301.jpeg',
      w: 616,
      h: 742,
      title: 'DSC00301'
    }, {
      src: './assets/pictures/Camden/DSC00307.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00307 :X:  Camden Lock '
    }, {
      src: './assets/pictures/Camden/DSC00309.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00309'
    }, {
      src: './assets/pictures/Camden/DSC00313.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00313 :X:  ‘Rhino Zero’- Otto Schade- Hawley Street'
    }, {
      src: './assets/pictures/Camden/DSC00314.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00314 :X:  ‘Last Trip to Wonderland’- Trip. iCON- Hawley Street'
    }, {
      src: './assets/pictures/Camden/DSC00315.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00315 :X:  Camden Lock'
    }, {
      src: './assets/pictures/Camden/DSC00317.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00317'
    }, {
      src: './assets/pictures/Camden/DSC00325.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00325 :X:  ‘Amy Whinehouse’- Otto Schade- Hawley Street '
    }, {
      src: './assets/pictures/Camden/DSC00326.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00326 :X:  Zadok and Dotmasters- Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00336.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00336'
    }, {
      src: './assets/pictures/Camden/DSC00337.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00337 :X:  ’Tribute to the muppets’  Gnasher- Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00345.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00345'
    }, {
      src: './assets/pictures/Camden/DSC00346.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00346 :X:  Simoni Fontana- Hartland Road'
    }, {
      src: './assets/pictures/Camden/DSC00358.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00358 :X:  ‘Amy Whinehouse’-Pegasus- Camden High Street'
    }]
  }, {
    id: 'Portobello',
    name: 'Portobello',
    items: [{
      src: './assets/pictures/Portobello/DSC00405.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00405 :X:  ‘Made you look’- Banksy- Portobello Road'
    }, {
      src: './assets/pictures/Portobello/DSC00406.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00406'
    }, {
      src: './assets/pictures/Portobello/DSC00417.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00417'
    }, {
      src: './assets/pictures/Portobello/DSC00425.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00425'
    }, {
      src: './assets/pictures/Portobello/DSC00428.jpeg',
      w: 1000,
      h: 1333,
      title: 'DSC00428'
    }, {
      src: './assets/pictures/Portobello/DSC00438.jpeg',
      w: 750,
      h: 1000,
      title: 'DSC00438'
    }, {
      src: './assets/pictures/Portobello/DSC00475.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00475'
    }, {
      src: './assets/pictures/Portobello/DSC00485.jpeg',
      w: 1000,
      h: 1333,
      title: 'DSC00485'
    }, {
      src: './assets/pictures/Portobello/DSC00496.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00496'
    }, {
      src: './assets/pictures/Portobello/DSC00498.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00498'
    }, {
      src: './assets/pictures/Portobello/DSC00499.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00499'
    }, {
      src: './assets/pictures/Portobello/DSC00505.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00505'
    }, {
      src: './assets/pictures/Portobello/DSC00508.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00508 :X:  Stik- Acklam Village'
    }, {
      src: './assets/pictures/Portobello/DSC00509.jpeg',
      w: 750,
      h: 1000,
      title: 'DSC00509 :X:  Stik- Acklam Village'
    }, {
      src: './assets/pictures/Portobello/DSC00511.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00511'
    }, {
      src: './assets/pictures/Portobello/DSC00514.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00514'
    }, {
      src: './assets/pictures/Portobello/DSC00515.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00515'
    }, {
      src: './assets/pictures/Portobello/DSC00516.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00516'
    }, {
      src: './assets/pictures/Portobello/IMG_1412.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_1412'
    }, {
      src: './assets/pictures/Portobello/IMG_1418.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_1418 :X:  Graffik Gallery '
    }, {
      src: './assets/pictures/Portobello/IMG_1420.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_1420'
    }]
  }, {
    id: 'Waterloo',
    name: 'Waterloo',
    items: [{
      src: './assets/pictures/Waterloo/DSC00176.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00176'
    }, {
      src: './assets/pictures/Waterloo/DSC00302.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00302 :X: Check out the Graffiti tunnel under Waterloo for some amazing graffiti! I like the combination of background and lettering here, especially the way all the letters are connected.'
    }, {
      src: './assets/pictures/Waterloo/DSC00312.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00312'
    }, {
      src: './assets/pictures/Waterloo/DSC00317.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00317'
    }, {
      src: './assets/pictures/Waterloo/DSC00319.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00319 :X: Graffiti is arguably the most well known expression of street art, and a lot of street artists start out here.'
    }, {
      src: './assets/pictures/Waterloo/DSC00350.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00350'
    }, {
      src: './assets/pictures/Waterloo/DSC00381.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00381'
    }, {
      src: './assets/pictures/Waterloo/DSC00385.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00385'
    }, {
      src: './assets/pictures/Waterloo/DSC00393.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00393'
    }, {
      src: './assets/pictures/Waterloo/DSC00394.jpeg',
      w: 1000,
      h: 750,
      title: 'DSC00394'
    }, {
      src: './assets/pictures/Waterloo/DSC_0373.jpeg',
      w: 1000,
      h: 755,
      title: 'DSC_0373'
    }, {
      src: './assets/pictures/Waterloo/DSC_0377.jpeg',
      w: 1000,
      h: 950,
      title: 'DSC_0377'
    }, {
      src: './assets/pictures/Waterloo/DSC_0388.jpeg',
      w: 1000,
      h: 602,
      title: 'DSC_0388'
    }, {
      src: './assets/pictures/Waterloo/DSC_0394.jpeg',
      w: 1000,
      h: 654,
      title: 'DSC_0394'
    }, {
      src: './assets/pictures/Waterloo/DSC_0401.jpeg',
      w: 1000,
      h: 834,
      title: 'DSC_0401'
    }, {
      src: './assets/pictures/Waterloo/DSC_0407.jpeg',
      w: 1000,
      h: 920,
      title: 'DSC_0407'
    }, {
      src: './assets/pictures/Waterloo/DSC_0408.jpeg',
      w: 1000,
      h: 450,
      title: 'DSC_0408'
    }, {
      src: './assets/pictures/Waterloo/IMG_0134.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_0134'
    }, {
      src: './assets/pictures/Waterloo/IMG_0882.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_0882'
    }, {
      src: './assets/pictures/Waterloo/IMG_0883.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_0883'
    }, {
      src: './assets/pictures/Waterloo/IMG_0884.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_0884'
    }, {
      src: './assets/pictures/Waterloo/IMG_0885.jpeg',
      w: 1000,
      h: 1500,
      title: 'IMG_0885'
    }, {
      src: './assets/pictures/Waterloo/IMG_0886.jpeg',
      w: 1000,
      h: 1500,
      title: 'IMG_0886'
    }, {
      src: './assets/pictures/Waterloo/IMG_0887.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_0887'
    }, {
      src: './assets/pictures/Waterloo/IMG_0895.jpeg',
      w: 1000,
      h: 1500,
      title: 'IMG_0895'
    }, {
      src: './assets/pictures/Waterloo/IMG_0898.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_0898'
    }, {
      src: './assets/pictures/Waterloo/IMG_0899.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_0899'
    }, {
      src: './assets/pictures/Waterloo/IMG_0926.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_0926'
    }, {
      src: './assets/pictures/Waterloo/IMG_0937.jpeg',
      w: 1000,
      h: 667,
      title: 'IMG_0937'
    }, {
      src: './assets/pictures/Waterloo/leakeyooct13.jpeg',
      w: 1000,
      h: 708,
      title: 'leakeyooct13'
    }]
  }, {
    id: 'Shoreditch',
    name: 'Shoreditch',
    items: [{
      src: './assets/pictures/Shoreditch/DSC00010.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00010 :X:  ’The Cycle of Futility’- INSA- Redchurch Street '
    }, {
      src: './assets/pictures/Shoreditch/DSC00013.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00013'
    }, {
      src: './assets/pictures/Shoreditch/DSC00015.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00015'
    }, {
      src: './assets/pictures/Shoreditch/DSC00020.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00020'
    }, {
      src: './assets/pictures/Shoreditch/DSC00029.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00029 :X:  ‘Mushroom’ Christiaan Nagel'
    }, {
      src: './assets/pictures/Shoreditch/DSC00030.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00030'
    }, {
      src: './assets/pictures/Shoreditch/DSC00033.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00033 :X:  Jimmy C- Whitby Street '
    }, {
      src: './assets/pictures/Shoreditch/DSC00036.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00036'
    }, {
      src: './assets/pictures/Shoreditch/DSC00047.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00047'
    }, {
      src: './assets/pictures/Shoreditch/DSC00057.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00057'
    }, {
      src: './assets/pictures/Shoreditch/DSC00061.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00061 :X:  ’Scary’- Ben Eine- Rivington Street'
    }, {
      src: './assets/pictures/Shoreditch/DSC00062.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00062'
    }, {
      src: './assets/pictures/Shoreditch/DSC00063.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00063 :X:  ‘Don’t shoot’- Bambi- Irvington Street'
    }, {
      src: './assets/pictures/Shoreditch/DSC00066.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00066'
    }, {
      src: './assets/pictures/Shoreditch/DSC000681.jpeg',
      w: 1000,
      h: 572,
      title: 'DSC000681'
    }, {
      src: './assets/pictures/Shoreditch/DSC000682.jpeg',
      w: 640,
      h: 480,
      title: 'DSC000682'
    }, {
      src: './assets/pictures/Shoreditch/DSC00071.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00071'
    }, {
      src: './assets/pictures/Shoreditch/DSC00073.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00073'
    }, {
      src: './assets/pictures/Shoreditch/DSC00074.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00074'
    }, {
      src: './assets/pictures/Shoreditch/DSC00075.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00075'
    }, {
      src: './assets/pictures/Shoreditch/DSC00080.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00080'
    }, {
      src: './assets/pictures/Shoreditch/DSC00083.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00083'
    }, {
      src: './assets/pictures/Shoreditch/DSC00087.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00087'
    }, {
      src: './assets/pictures/Shoreditch/DSC00108.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00108 :X:  Invader - Dray Walk'
    }, {
      src: './assets/pictures/Shoreditch/DSC00268.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00268 :X: Spotted in Shoreditch! A great example showing how graffiti artists reinvent letters.'
    }, {
      src: './assets/pictures/Shoreditch/DSC00555.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00555'
    }, {
      src: './assets/pictures/Shoreditch/DSC00557.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00557 :X:  ‘Shoplifters Welcome’ Shepard Fairey- Ebor Street'
    }, {
      src: './assets/pictures/Shoreditch/DSC00558.jpeg',
      w: 480,
      h: 640,
      title: 'DSC00558'
    }, {
      src: './assets/pictures/Shoreditch/DSC00560.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00560'
    }, {
      src: './assets/pictures/Shoreditch/DSC00561.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00561 :X:  James Bullough- Club Row'
    }, {
      src: './assets/pictures/Shoreditch/DSC00565.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00565'
    }, {
      src: './assets/pictures/Shoreditch/DSC00566.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00566'
    }, {
      src: './assets/pictures/Shoreditch/DSC00567.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00567'
    }, {
      src: './assets/pictures/Shoreditch/DSC00568.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00568'
    }, {
      src: './assets/pictures/Shoreditch/DSC00579.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00579'
    }, {
      src: './assets/pictures/Shoreditch/DSC00581.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00581'
    }, {
      src: './assets/pictures/Shoreditch/DSC00582.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00582 :X:  Roa'
    }, {
      src: './assets/pictures/Shoreditch/DSC00587.jpeg',
      w: 640,
      h: 480,
      title: 'DSC00587'
    }, {
      src: './assets/pictures/Shoreditch/east.june2015.jpeg',
      w: 1000,
      h: 750,
      title: 'east.june2015'
    }, {
      src: './assets/pictures/Shoreditch/IMG_1459.jpeg',
      w: 640,
      h: 427,
      title: 'IMG_1459'
    }]
  }];
}
