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

  var PageInfo = [{
    id: 'BrickLane',
    Information: "Once you’ve seen the art, try our top three things to do!<ul><li>1. Have one of over 30 types of cereal at the Cereal Café.</li><li>2. Visit Whitechapel Gallery.</li><li>3. Shop at the Vintage Clothes Market.</li></ul>"
  }, {
    id: 'Camden',
    Information: "Visit Camden, spot the art and enjoy shopping & food at the markets.<ol><li>1. Eat, watch performance, join the Roundhouse.</li><li>2. Shop and eat at Camden Lock.</li><li>3. More shopping and eating at Camden Market.</li></ol>"
  }, {
    id: 'Portobello',
    Information: "Mix a day of spotting art with making your own art, shopping & eating.<ol><li>1. Have a workshop at the Graffik Gallery.</li><li>2. Shop at Portobello Market.</li><li>3. Eat at Acklam Village.</li></ol>"
  }, {
    id: 'Waterloo',
    Information: "You can spend the whole day around the Southbank soaking in art.<ol><li>1. Walk through or paint at the Graffiti Tunnel.</li><li>2. Hang out and watch skaters/artists at the Skate Park.</li><li>3. Visit the Southbank Centre/ Festival Village for food & art.</li></ol>"
  }, {
    id: 'Shoreditch',
    Information: "Not just a hotspot for urban art, there’s lots to do in Shoreditch!<ol><li>1. Have amazing food at Ely's Yard Street Food.</li><li>2. Eat at the Canvas Café on Hanbury Street & draw on walls!</li><li>3. Visit Pure Evil graffiti gallery.</li></ol>"
  }];

  var galleryCollection = [{
    id: 'BrickLane',
    name: 'Brick Lane',
    items: [{
      src: './assets/pictures/BrickLane/DSC00092.jpeg',
      w: 1000,
      h: 750,
      title: 'Look at this layered stencil work from Endless!'
    }, {
      src: './assets/pictures/BrickLane/DSC00095.jpeg',
      w: 750,
      h: 1000,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00099.jpeg',
      w: 750,
      h: 1000,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00100.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00102.jpeg',
      w: 1000,
      h: 739,
      title: 'Intervention pieces will often intervene with somethings original purpose.'
    }, {
      src: './assets/pictures/BrickLane/DSC00108.jpeg',
      w: 1000,
      h: 750,
      title: 'This is a piece by the artist Invader. Space Invader mosaics are part street art and part urban intervention. Invaders pieces are in 60 cities across 30 countries!'
    }, {
      src: './assets/pictures/BrickLane/DSC001082.jpeg',
      w: 640,
      h: 480,
      title: 'Tagging is a simple a quick way of leaving your mark and getting your name out there. All you need is a pen and off you go...'
    }, {
      src: './assets/pictures/BrickLane/DSC00109.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00110.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00111.jpeg',
      w: 1000,
      h: 750,
      title: 'The coolest urban sculpture I’ve seen is the bow and arrows. At first I thought it was just the bow but then someone told me to turn around and there were the arrows!'
    }, {
      src: './assets/pictures/BrickLane/DSC00113.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00115.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00116.jpeg',
      w: 640,
      h: 480,
      title: 'There are small sculptures dotted all over the place attached to all parts of buildings. It teaches you to be observant and makes you appreciate little pieces of urban art as well as big murals.'
    }, {
      src: './assets/pictures/BrickLane/DSC00119.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00126.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00129.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00132.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00133.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00137.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/DSC00173.jpeg',
      w: 1000,
      h: 750,
      title: 'This piece is by an artist Phlegm who is actually an illustrator and cartoonist rather than a street artist. He produces his own comic book and his paintings often depict its characters.'
    }, {
      src: './assets/pictures/BrickLane/DSC00198.jpeg',
      w: 640,
      h: 480,
      title: 'Wheatpasting is incredibly popular as it allows an artist to paste their work onto a wall really quickly.'
    }, {
      src: './assets/pictures/BrickLane/DSC00227.jpeg',
      w: 1000,
      h: 667,
      title: 'Look at this amazing mural Jim Vision and Dr Zadok painted in memory of  the late author Terry Pratchett!'
    }, {
      src: './assets/pictures/BrickLane/IMG_1603.jpeg',
      w: 1000,
      h: 667,
      title: 'If you look closely at this Phlegm piece you might spot a TV falling from a window. A decade ago Banksy stencilled a TV through a smashed window onto the same wall. Phlegm included it in this new piece in homage to the famous stencil artist, how cool!'
    }, {
      src: './assets/pictures/BrickLane/Urban-26.jpeg',
      w: 1000,
      h: 739,
      title: ''
    }, {
      src: './assets/pictures/BrickLane/Urban-35.jpeg',
      w: 1000,
      h: 667,
      title: 'Roa, a street art superstar, painted this crane for the Bangladeshi Community of Brick Lane. The crane is a sacred symbol in their religion.'
    }, {
      src: './assets/pictures/BrickLane/Urban-41.jpeg',
      w: 1000,
      h: 739,
      title: 'Yarnbombing, also known as graffiti knitting, is a type of art that involves colourful crochet made to fit urban objects.'
    }, {
      src: './assets/pictures/BrickLane/Urban-84.jpeg',
      w: 517,
      h: 700,
      title: 'We loved this satirical mask sculpted by Gregoz. We managed to find one in Shoreditch but there are many others around London so keep your eyes peeled!'
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
      src: './assets/pictures/Camden/DSC00160.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00161.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00163.jpeg',
      w: 1000,
      h: 750,
      title: 'Zabou is a female graffiti artist known for her satirical pieces, such as this one ‘Disconnected’'
    }, {
      src: './assets/pictures/Camden/DSC00165.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00166.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00169.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00284.jpeg',
      w: 1000,
      h: 750,
      title: 'This was a favourite piece of ours. We like the combination of image and text. The reflection of the person in the eyes and the tears almost pop off the wall and show the power of street art to change your sense of perspective.'
    }, {
      src: './assets/pictures/Camden/DSC00288.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00293.jpeg',
      w: 1000,
      h: 750,
      title: 'Camden’s creative heritage is rich. You can see art blend seamlessly into the shops here with urban interventions above the shop fronts.'
    }, {
      src: './assets/pictures/Camden/DSC00298.jpeg',
      w: 1000,
      h: 750,
      title: 'Camden is well known for association with musicians. It’s interesting to see how street artists reflect this on the walls with many an icon popping up.'
    }, {
      src: './assets/pictures/Camden/DSC00300.jpeg',
      w: 750,
      h: 1000,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00301.jpeg',
      w: 616,
      h: 742,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00307.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00309.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00313.jpeg',
      w: 1000,
      h: 750,
      title: 'Can you believe these amazing Otto Schade ribbon pieces are actually created with a stencil? He sketches them and scans them into his computer and creates large detailed stencils with a laser!'
    }, {
      src: './assets/pictures/Camden/DSC00314.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00315.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00317.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00325.jpeg',
      w: 1000,
      h: 750,
      title: 'Once Schade paints his stencils he goes over the ribbons with a black pen to create the complex definition you can see. His pieces can take days to complete!'
    }, {
      src: './assets/pictures/Camden/DSC00326.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00336.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00337.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00345.jpeg',
      w: 1000,
      h: 750,
      title: 'Surfaces in public spaces are not a canvas owned by an artist and so over time, pieces will be painted or created and then continue to be changed. They will become just another layer to a continuous cycle of tagging, painting and creating.'
    }, {
      src: './assets/pictures/Camden/DSC00346.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Camden/DSC00358.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }]
  }, {
    id: 'Portobello',
    name: 'Portobello',
    items: [{
      src: './assets/pictures/Portobello/DSC00405.jpeg',
      w: 1000,
      h: 750,
      title: 'Check out this Banksy stencil in Portobello. A simple technique that allows street artists to quickly leave their mark.'
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
      title: 'Most graffiti is created entirely with spray cans. The intricacy in the detail must be so difficult to achieve.'
    }, {
      src: './assets/pictures/Portobello/DSC00428.jpeg',
      w: 1000,
      h: 1333,
      title: 'Artists create an adhesive liquid made up of vegetable starch or flour with water. It is called wheatpaste and can be just as strong as ordinary glue.'
    }, {
      src: './assets/pictures/Portobello/DSC00438.jpeg',
      w: 750,
      h: 1000,
      title: 'Stickers can be printed up in large quantities and at a very low cost - and when stuck in the streets can survive most weather conditions for long periods of time!'
    }, {
      src: './assets/pictures/Portobello/DSC00475.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00485.jpeg',
      w: 1000,
      h: 1333,
      title: ''
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
      title: ''
    }, {
      src: './assets/pictures/Portobello/DSC00509.jpeg',
      w: 750,
      h: 1000,
      title: 'We love this Stik mosaic at Acklam Village just off Portobello Road. Mosaics date back thousands of years so we like the way they its been used to create some urban art!'
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
      title: ''
    }, {
      src: './assets/pictures/Portobello/IMG_1420.jpeg',
      w: 1000,
      h: 667,
      title: ''
    }]
  }, {
    id: 'Waterloo',
    name: 'Waterloo',
    items: [

      {
        src: './assets/pictures/Waterloo/DSC00312.jpeg',
        w: 1000,
        h: 750,
        title: 'Leake Street is also known as the “Banksy Tunnel” or “Graffiti Tunnel” under the platforms of Waterloo Station. Banksy organized a “Cans Festival” in 2008 and it led to the tunnel becoming a legal place to paint.'
      },

      {
        src: './assets/pictures/Waterloo/DSC00176.jpeg',
        w: 640,
        h: 480,
        title: 'Quicker then sticking them up, stickers can be sent worldwide via social media. This means they can be printed and stuck places the artist hasn’t even visited!'
      }, {
        src: './assets/pictures/Waterloo/DSC00302.jpeg',
        w: 1000,
        h: 750,
        title: 'Check out the Graffiti tunnel under Waterloo for some amazing graffiti! I like the combination of background and lettering here, especially the way all the letters are connected. '
      }, {
        src: './assets/pictures/Waterloo/DSC00317.jpeg',
        w: 1000,
        h: 750,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/DSC00319.jpeg',
        w: 1000,
        h: 750,
        title: 'Graffiti is arguably the most well known expression of street art, and a lot of street artists start out here.'
      }, {
        src: './assets/pictures/Waterloo/DSC00350.jpeg',
        w: 1000,
        h: 750,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/DSC00381.jpeg',
        w: 1000,
        h: 750,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/DSC00385.jpeg',
        w: 1000,
        h: 750,
        title: 'Sometimes intervention art makes things a lot more enjoyable to look at, like abandoned mattresses. '
      }, {
        src: './assets/pictures/Waterloo/DSC00393.jpeg',
        w: 1000,
        h: 750,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/DSC00394.jpeg',
        w: 1000,
        h: 750,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/DSC_0373.jpeg',
        w: 1000,
        h: 755,
        title: 'The Undercroft is known as the birthplace of British skateboarding and has been home to skateboarders and graffiti artists for over 40 years.'
      }, {
        src: './assets/pictures/Waterloo/DSC_0377.jpeg',
        w: 1000,
        h: 950,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/DSC_0388.jpeg',
        w: 1000,
        h: 602,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/DSC_0394.jpeg',
        w: 1000,
        h: 654,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/DSC_0401.jpeg',
        w: 1000,
        h: 834,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/DSC_0407.jpeg',
        w: 1000,
        h: 920,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/DSC_0408.jpeg',
        w: 1000,
        h: 450,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/IMG_0882.jpeg',
        w: 1000,
        h: 667,
        title: 'The art of tagging can be dated back as far as the 18th and 19th century to the ‘grandfather of modern graffiti’ Joseph Kyselak who travelled Vienna and other surrounding countries tagging his name on various buildings and surfaces. He wrote his name in so many places and became so well known he was called by the Austrian Emperor to promise to stop immediately.'
      }, {
        src: './assets/pictures/Waterloo/IMG_0883.jpeg',
        w: 1000,
        h: 667,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/IMG_0884.jpeg',
        w: 1000,
        h: 667,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/IMG_0885.jpeg',
        w: 1000,
        h: 1500,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/IMG_0886.jpeg',
        w: 1000,
        h: 1500,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/IMG_0887.jpeg',
        w: 1000,
        h: 667,
        title: 'Often urban artists will create their work as a form of activism in order to protest against issues they feel strongly about.  The “Je Suis Charlie’ posters here are a good example of a protest of free speech and freedom of the press.'
      }, {
        src: './assets/pictures/Waterloo/IMG_0895.jpeg',
        w: 1000,
        h: 1500,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/IMG_0898.jpeg',
        w: 1000,
        h: 667,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/IMG_0899.jpeg',
        w: 1000,
        h: 667,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/IMG_0926.jpeg',
        w: 1000,
        h: 667,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/IMG_0937.jpeg',
        w: 1000,
        h: 667,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/leakeyooct13.jpeg',
        w: 1000,
        h: 708,
        title: ''
      }, {
        src: './assets/pictures/Waterloo/IMG_0134.jpeg',
        w: 1000,
        h: 667,
        title: 'There are many more surfaces than walls, Ben Wilson has been painting bubble gum on the Millennium Bridge, WOW!'
      }
    ]
  }, {
    id: 'Shoreditch',
    name: 'Shoreditch',
    items: [{
      src: './assets/pictures/Shoreditch/DSC00010.jpeg',
      w: 640,
      h: 480,
      title: ''
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
      title: 'People in London don’t look up enough. It’s actually rather interesting seeing 3D sculptures on top of buildings.'
    }, {
      src: './assets/pictures/Shoreditch/DSC00030.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00033.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00036.jpeg',
      w: 640,
      h: 480,
      title: ''
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
      title: 'Writer Ben Eine has perfected the art of lettering and has left a trail of words around Shoreditch, each piece is a must see! '
    }, {
      src: './assets/pictures/Shoreditch/DSC00062.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00063.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00066.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC000681.jpeg',
      w: 1000,
      h: 572,
      title: 'We loved the way this burst of colour hit us as we turned right out of Shoreditch Station. Writers Gary MSK and Lilly Lou really got excited for the rest of the day.'
    }, {
      src: './assets/pictures/Shoreditch/DSC000682.jpeg',
      w: 640,
      h: 480,
      title: 'Artists use materials like papers and cardboard & draw onto them and cut precise markings into them to make a stencil. Boom! This is the result.'
    }, {
      src: './assets/pictures/Shoreditch/DSC00071.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00073.jpeg',
      w: 640,
      h: 480,
      title: ''
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
      title: 'A tag is individual, autonomous and perfected over time by artists so that they can leave a consistent and instantly recognisable mark on their work. '
    }, {
      src: './assets/pictures/Shoreditch/DSC00083.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00087.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00108.jpeg',
      w: 640,
      h: 480,
      title: 'This is a piece by the artist Invader. Space Invader mosaics are part street art and part urban intervention. Invaders pieces are in 60 cities across 30 countries!'
    }, {
      src: './assets/pictures/Shoreditch/DSC00268.jpeg',
      w: 640,
      h: 480,
      title: 'Spotted in Shoreditch! A great example showing how graffiti artists reinvent letters.'
    }, {
      src: './assets/pictures/Shoreditch/DSC00555.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/DSC00557.jpeg',
      w: 640,
      h: 480,
      title: ''
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
      title: ''
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
      title: 'We liked these punchy posters that were straight to the point! Keep an eye out for them wheatpasted all over the city!'
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
      title: 'The artist Roa is famed for painting large animals in cities worldwide, we spotted plenty here in Shoreditch!'
    }, {
      src: './assets/pictures/Shoreditch/DSC00587.jpeg',
      w: 640,
      h: 480,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/east.june2015.jpeg',
      w: 1000,
      h: 750,
      title: ''
    }, {
      src: './assets/pictures/Shoreditch/IMG_1459.jpeg',
      w: 640,
      h: 427,
      title: 'Ooh another Ben Eine, did you know David Cameron gave Obama a piece of his work as a gift when he visted?!'
    }]
  }];

}
