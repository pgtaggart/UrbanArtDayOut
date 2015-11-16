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
      title: '‘Lizzy Vuitton’ - Endless- Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00094.jpeg',
      w: 1000,
      h: 750,
      title: 'Paul Don Smith - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00095.jpeg',
      w: 750,
      h: 1000,
      title: '‘Lupus Rider’ - DS - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00099.jpeg',
      w: 750,
      h: 1000,
      title: 'Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00100.jpeg',
      w: 1000,
      h: 750,
      title: 'Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00102.jpeg',
      w: 1000,
      h: 739,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00108.jpeg',
      w: 1000,
      h: 750,
      title: 'Invader - Dray Walk'
    }, {
      src: './assets/pictures/BrickLane/DSC001082.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00109.jpeg',
      w: 1000,
      h: 750,
      title: '‘Rolling Fool’ - Dr Cream - Dray Walk'
    }, {
      src: './assets/pictures/BrickLane/DSC00110.jpeg',
      w: 1000,
      h: 750,
      title: 'Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00111.jpeg',
      w: 1000,
      h: 750,
      title: '‘Car& Winged Bomb Sculpture’ D*Face & Bow&Arrow-‘Gifts from the Olympic God’s’- Installed for London 2012 by the Mayor - Grey Eagle Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00113.jpeg',
      w: 1000,
      h: 750,
      title: '‘Joker&James’ - Taosuz - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00115.jpeg',
      w: 1000,
      h: 750,
      title: 'Crisp - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00116.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00118.jpeg',
      w: 1000,
      h: 750,
      title: 'Yazz, Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00119.jpeg',
      w: 1000,
      h: 750,
      title: '‘Brand Wars’ - Endless - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00126.jpeg',
      w: 1000,
      h: 750,
      title: '‘Crunchy’ - Ronzo - Grey Eagle Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00129.jpeg',
      w: 1000,
      h: 750,
      title: 'Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00132.jpeg',
      w: 1000,
      h: 750,
      title: '‘Lupus ‘ - DS - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00133.jpeg',
      w: 1000,
      h: 750,
      title: '‘Love Birds’ - Paul Don Smith - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00136.jpeg',
      w: 1000,
      h: 750,
      title: '‘Gifts from the Olympic God’s’- Installed for London 2012 by the Mayor'
    }, {
      src: './assets/pictures/BrickLane/DSC00137.jpeg',
      w: 1000,
      h: 750,
      title: '‘Guy Fawkes’ - Gee - Hanbury Street'
    }, {
      src: './assets/pictures/BrickLane/DSC00173.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00198.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00227.jpeg',
      w: 1000,
      h: 667,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/IMG_1603.jpeg',
      w: 1000,
      h: 667,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/Urban-26.jpeg',
      w: 1000,
      h: 739,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/Urban-35.jpeg',
      w: 1000,
      h: 667,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/Urban-41.jpeg',
      w: 1000,
      h: 739,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/Urban-84.jpeg',
      w: 517,
      h: 700,
      title: ''
    }]
  }, {
    id: 'Camden',
    name: 'Camden',
    items: [{
      src: './assets/pictures/Camden/DSC00134.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00153.jpeg',
      w: 1000,
      h: 750,
      title: '‘John Lennon Mural’- Gnasher - Camden High Street'
    }, {
      src: './assets/pictures/Camden/DSC00160.jpeg',
      w: 1000,
      h: 750,
      title: 'JXC- Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00161.jpeg',
      w: 1000,
      h: 750,
      title: '‘Original Riots’- Airborne Mark - Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00163.jpeg',
      w: 1000,
      h: 750,
      title: 'Zabou- Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00165.jpeg',
      w: 1000,
      h: 750,
      title: 'Sr.X- Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00166.jpeg',
      w: 1000,
      h: 750,
      title: 'China Girl - Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00169.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00284.jpeg',
      w: 1000,
      h: 750,
      title: 'My Dog Sighs - Stucley Place'
    }, {
      src: './assets/pictures/Camden/DSC00288.jpeg',
      w: 1000,
      h: 750,
      title: 'My Dog Sighs - Stucley Place'
    }, {
      src: './assets/pictures/Camden/DSC00293.jpeg',
      w: 1000,
      h: 750,
      title: 'Shop Fronts- Camden High Street'
    }, {
      src: './assets/pictures/Camden/DSC00298.jpeg',
      w: 1000,
      h: 750,
      title: '‘John Lennon Mural’- Gnasher - Camden High Street'
    }, {
      src: './assets/pictures/Camden/DSC00300.jpeg',
      w: 750,
      h: 1000,
      title: 'Camden High Street'
    }, {
      src: './assets/pictures/Camden/DSC00301.jpeg',
      w: 616,
      h: 742,
      title: 'Camden High Street'
    }, {
      src: './assets/pictures/Camden/DSC00307.jpeg',
      w: 1000,
      h: 750,
      title: 'Camden Lock'
    }, {
      src: './assets/pictures/Camden/DSC00309.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00313.jpeg',
      w: 1000,
      h: 750,
      title: '‘Rhino Zero’- Otto Schade- Hawley Street'
    }, {
      src: './assets/pictures/Camden/DSC00314.jpeg',
      w: 1000,
      h: 750,
      title: '‘Last Trip to Wonderland’- Trip. iCON- Hawley Street'
    }, {
      src: './assets/pictures/Camden/DSC00315.jpeg',
      w: 1000,
      h: 750,
      title: 'Camden Lock'
    }, {
      src: './assets/pictures/Camden/DSC00317.jpeg',
      w: 1000,
      h: 750,
      title: 'Leake Street tunnels'
    }, {
      src: './assets/pictures/Camden/DSC00325.jpeg',
      w: 1000,
      h: 750,
      title: '‘Amy Whinehouse’- Otto Schade- Hawley Street'
    }, {
      src: './assets/pictures/Camden/DSC00326.jpeg',
      w: 1000,
      h: 750,
      title: 'Zadok and Dotmasters- Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00336.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00337.jpeg',
      w: 1000,
      h: 750,
      title: '’Tribute to the muppets’  Gnasher- Hawley Mews'
    }, {
      src: './assets/pictures/Camden/DSC00345.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00346.jpeg',
      w: 1000,
      h: 750,
      title: 'Simoni Fontana- Hartland Road'
    }, {
      src: './assets/pictures/Camden/DSC00358.jpeg',
      w: 1000,
      h: 750,
      title: '‘Amy Whinehouse’-Pegasus- Camden High Street'
    }]
  }, {
    id: 'Portobello',
    name: 'Portobello',
    items: [{
      src: './assets/pictures/Portobello/DSC00405.jpeg',
      w: 1000,
      h: 750,
      title: '‘Made you look’- Banksy- Portobello Road'
    }, {
      src: './assets/pictures/Portobello/DSC00406.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00417.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00425.jpeg',
      w: 1000,
      h: 750,
      title: 'Portobello Road'
    }, {
      src: './assets/pictures/Portobello/DSC00428.jpeg',
      w: 1000,
      h: 1333,
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00438.jpeg',
      w: 750,
      h: 1000,
      title: 'Portobello Road'
    }, {
      src: './assets/pictures/Portobello/DSC00475.jpeg',
      w: 1000,
      h: 750,
      title: 'Acklam Village- Portobello Road'
    }, {
      src: './assets/pictures/Portobello/DSC00485.jpeg',
      w: 1000,
      h: 1333,
      title: 'Pure Evil- Acklam Village'
    }, {
      src: './assets/pictures/Portobello/DSC00496.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00498.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00499.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00505.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00508.jpeg',
      w: 1000,
      h: 750,
      title: 'Stik - Acklam Village'
    }, {
      src: './assets/pictures/Portobello/DSC00509.jpeg',
      w: 750,
      h: 1000,
      title: 'Stik- Acklam Village'
    }, {
      src: './assets/pictures/Portobello/DSC00511.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00514.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00515.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00516.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Portobello/IMG_1412.jpeg',
      w: 1000,
      h: 667,
      title: ''
    }, {
      src: './assets/pictures/Portobello/IMG_1418.jpeg',
      w: 1000,
      h: 667,
      title: 'Graffik Gallery'
    }, {
      src: './assets/pictures/Portobello/IMG_1420.jpeg',
      w: 1000,
      h: 667,
      title: 'Various including mural from Jay Kaes,Portobello Road'
    }]
  }, {
    id: 'Waterloo',
    name: 'Waterloo',
    items: [{
      src: './assets/pictures/Waterloo/DSC00176.jpeg',
      w: 640,
      h: 480,
      title: 'Smot - Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/DSC00302.jpeg',
      w: 1000,
      h: 750,
      title: 'Leake Street tunnels'
    }, {
      src: './assets/pictures/Waterloo/DSC00312.jpeg',
      w: 1000,
      h: 750,
      title: 'Leake Street tunnels'
    }, {
      src: './assets/pictures/Waterloo/DSC00317.jpeg',
      w: 1000,
      h: 750,
      title: 'Leake Street tunnels'
    }, {
      src: './assets/pictures/Waterloo/DSC00319.jpeg',
      w: 1000,
      h: 750,
      title: 'Leake Street tunnels'
    }, {
      src: './assets/pictures/Waterloo/DSC00350.jpeg',
      w: 1000,
      h: 750,
      title: '‘Letgo’ Pad - Leake Street tunnels'
    }, {
      src: './assets/pictures/Waterloo/DSC00381.jpeg',
      w: 1000,
      h: 750,
      title: 'Leake Street tunnels'
    }, {
      src: './assets/pictures/Waterloo/DSC00385.jpeg',
      w: 1000,
      h: 750,
      title: 'Leake Street tunnels'
    }, {
      src: './assets/pictures/Waterloo/DSC00393.jpeg',
      w: 1000,
      h: 750,
      title: 'Leake Street tunnels'
    }, {
      src: './assets/pictures/Waterloo/DSC00394.jpeg',
      w: 1000,
      h: 750,
      title: 'Leake Street tunnels'
    }, {
      src: './assets/pictures/Waterloo/DSC_0373.jpeg',
      w: 1000,
      h: 755,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/DSC_0377.jpeg',
      w: 1000,
      h: 950,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/DSC_0388.jpeg',
      w: 1000,
      h: 602,
      title: 'From Femme Fierce Takeover- Leake Street tunnels'
    }, {
      src: './assets/pictures/Waterloo/DSC_0394.jpeg',
      w: 1000,
      h: 654,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/DSC_0401.jpeg',
      w: 1000,
      h: 834,
      title: 'Southbank'
    }, {
      src: './assets/pictures/Waterloo/DSC_0407.jpeg',
      w: 1000,
      h: 920,
      title: 'Remed & Saner - Southbank'
    }, {
      src: './assets/pictures/Waterloo/DSC_0408.jpeg',
      w: 1000,
      h: 450,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/IMG_0134.jpeg',
      w: 1000,
      h: 667,
      title: 'Ben Wilson - Millenium Bridge'
    }, {
      src: './assets/pictures/Waterloo/IMG_0882.jpeg',
      w: 1000,
      h: 667,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/IMG_0883.jpeg',
      w: 1000,
      h: 667,
      title: 'Bustart- Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/IMG_0884.jpeg',
      w: 1000,
      h: 667,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/IMG_0885.jpeg',
      w: 1000,
      h: 1500,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/IMG_0886.jpeg',
      w: 1000,
      h: 1500,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/IMG_0887.jpeg',
      w: 1000,
      h: 667,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/IMG_0895.jpeg',
      w: 1000,
      h: 1500,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/IMG_0898.jpeg',
      w: 1000,
      h: 667,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/IMG_0899.jpeg',
      w: 1000,
      h: 667,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/IMG_0926.jpeg',
      w: 1000,
      h: 667,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/IMG_0937.jpeg',
      w: 1000,
      h: 667,
      title: 'Southbank Skate park'
    }, {
      src: './assets/pictures/Waterloo/leakey.jpeg',
      w: 1000,
      h: 708,
      title: 'Leake Street tunnels'
    }]
  }, {
    id: 'Shoreditch',
    name: 'Shoreditch',
    items: [{
      src: './assets/pictures/Shoreditch/DSC00010.jpeg',
      w: 640,
      h: 480,
      title: '’The Cycle of Futility’- INSA- Redchurch Street'
    }, {
      src: './assets/pictures/Shoreditch/DSC00013.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00015.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00020.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00029.jpeg',
      w: 640,
      h: 480,
      title: '‘Mushroom’ Christiaan Nagel'
    }, {
      src: './assets/pictures/Shoreditch/DSC00030.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00033.jpeg',
      w: 640,
      h: 480,
      title: 'Lounge Lover- Whitby Street'
    }, {
      src: './assets/pictures/Shoreditch/DSC00036.jpeg',
      w: 640,
      h: 480,
      title: '‘Toddler with Phone’ Clolus- Whitby Street'
    }, {
      src: './assets/pictures/Shoreditch/DSC00047.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00057.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00061.jpeg',
      w: 640,
      h: 480,
      title: '’Scary’- Ben Eine- Rivington Street'
    }, {
      src: './assets/pictures/Shoreditch/DSC00062.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00063.jpeg',
      w: 640,
      h: 480,
      title: '‘Don’t shoot’- Bambi- Irvington Street'
    }, {
      src: './assets/pictures/Shoreditch/DSC00066.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC000681.jpeg',
      w: 1000,
      h: 572,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC000682.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00071.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00073.jpeg',
      w: 640,
      h: 480,
      title: 'Stik - Bash Street'
    }, {
      src: './assets/pictures/Shoreditch/DSC00074.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00075.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00080.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00083.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00087.jpeg',
      w: 640,
      h: 480,
      title: '‘You call it God…’ Meme'
    }, {
      src: './assets/pictures/Shoreditch/DSC00108.jpeg',
      w: 640,
      h: 480,
      title: 'Invader - Dray Walk'
    }, {
      src: './assets/pictures/Shoreditch/DSC00268.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00555.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00557.jpeg',
      w: 640,
      h: 480,
      title: '‘Shoplifters Welcome’ Shepard Fairey- Ebor Street'
    }, {
      src: './assets/pictures/Shoreditch/DSC00558.jpeg',
      w: 480,
      h: 640,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00560.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00561.jpeg',
      w: 640,
      h: 480,
      title: 'James Bullough - Club Row'
    }, {
      src: './assets/pictures/Shoreditch/DSC00565.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00566.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00567.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00568.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00579.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00581.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00582.jpeg',
      w: 640,
      h: 480,
      title: 'Roa and Phlegm, Old Street'
    }, {
      src: './assets/pictures/Shoreditch/DSC00587.jpeg',
      w: 640,
      h: 480,
      title: '‘Sexy Girl’ Otto Schade - Corner of Pitfield & Old Street'
    }, {
      src: './assets/pictures/Shoreditch/east.june2015.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/IMG_1459.jpeg',
      w: 640,
      h: 427,
      title: ''
    }]
  }];

}
