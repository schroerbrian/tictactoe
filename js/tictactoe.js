$(function() {

  //### 'jquery' UI elements for game manipulation
  //var game              =    // the game container
  //var board             =    // the board  container
  var status_indicators = $('#teams li');   // status bar container

  var tiles = [];                         // all the "tiles"

  var players = [                         // player data
    {
      name:      'Ernie',
      marker:    'X',
      img_url:   'img/ernie.jpg',
      indicator: $(status_indicators[0])
    },
    {
      name:      'Bert',
      marker:    'O',
      img_url:   'img/bert.jpg',
      indicator: $(status_indicators[1])
    }
  ];
  var current_player;                     // player data
  var turns  = 0;                         // elapsed turns

  //### There are eight winning combos, the first two are supplied.
  //### What are the other six? Add 'em.
  var win_combos = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]
  ];

  var initialize = function() {

    //### 1.) Create nine tiles. Each is a div, each needs to be bound to 'handle_click'.
    //### Make sure giving each tile a unique 'id' for targeting. Find tile's 'class' in css.
    //### Append tiles to board.
    var board = $("#board");
    
    for(i=0;i<9;i++) {
      var tileId = "tile" + i;
      var tile = $("<div class='tile' id=" + tileId + "></div>");
      
      board.append(tile);
      tiles.push(tile);
      $("#" + tileId).click(handle_click);
    }
      
    //### 2.) Make first player the current_player
    current_player = players[0];

    //### 3.) Set up the players 'indicators' in UI
    //### - set player image, name, marker
    //### - set player name
    //### - the 'current_player' has a different style (see css '.current')
    var playerImgs = $("img");
    var playerNames = $(".player");
    var teams = $(".team");

    for(i=0;i<players.length;i++) {

      $(playerImgs[i]).attr("src", players[i].img_url);
      $(playerNames[i]).text(players[i].name);
      $(teams[i]).text(players[i].marker);

      if (players[i] === current_player) {
        players[i].indicator.addClass("current");
      }

    }  

    $("#game").fadeIn();
  };

  var handle_click = function() {
    //### this function is bound to a click event for each tile on the board
    $(this).text(current_player.marker).unbind();
    turns++;
    is_win();
    is_tie();
    // tiles[1].text();

  }

  var is_active = function(tile) {
    //### boolean - is tile active?
    if (tile.text() !== "") {
      tile === "active";
    };
  };
  
  var activate_tile = function(tile) {
    //### activate tile
    //### don't forget to up 'turn' count
  };

  var toggle_player = function() {
    //### After each turn, toggle the current player and update player indicators
      if(turns % 2 === 0){
        current_player = players[0];
        players[0].indicator.addClass("current");
        players[1].indicator.removeClass("current");
      }
      else {
        current_player = players[1];
        players[1].indicator.addClass("current");
        players[0].indicator.removeClass("current");
      }

  };


  var is_win = function() {
    // ### whether or not the current player's positions result in a win
    // ### returns boolean
    var xS           = [],
        oS           = [],
        endGameToken = false;

    for(i=0;i<tiles.length;i++) {      
      if(tiles[i].text() === "X") { xS.push(i)}
      else if(tiles[i].text() === "O") { oS.push(i) }
    }

    _.each(win_combos, function(win_combo) {
      if (_.intersection(xS, win_combo).length === 3 )
        {
          handle_win();
          endGameToken = true;
        }
      else if (  _.intersection(oS, win_combo).length === 3 )
        {
          handle_win();
          endGameToken = true;
        }
    }); 
    
    if (endGameToken === false) { toggle_player(); }

  };

  var is_tie = function() {
    //### has the game resulted in a tie?
    //### returns boolean
    if(turns === 9 && endGameToken === false) {
      handle_tie();
    }
  };

  var handle_win = function() {
    //### update the UI to reflect that a win has occurred.
    //### - show results panel
    //### - display winner name and image
    //### - congrats message
    //### - show new_game button
    $(".image").html("<img src='" + current_player.img_url + "'>");
    $("h1").text(current_player.name + " wins!");
    $("#results").fadeIn();
    $("button").click(new_game);
    hide_indicators();

  };

  var handle_tie = function() {
    //### update the UI to reflect that a tie game has occurred.
    //### - show results panel
    //### - display tie and rubber ducky image
    //### - show new_game button
    $(".image").html("<img src='img/rubberduckie.jpg'>");
    $("h1").text("Cat's game!");
    $("#results").fadeIn();
    $("button").click(new_game);
    hide_indicators();
  }

  var hide_indicators = function() {
    console.log("argh!");
    $(".current").removeClass("current");
  };

  var show_combo = function(combo) {
    //### optional: call this to highlight the combination of tiles that resulted in a win
    //### e.g. colors winning XXX or OOO red.
  }

  var new_game = function() {
    // see http://stackoverflow.com/questions/2405117/difference-between-window-location-href-window-location-href-and-window-location
    // nothing to add here
    window.location.href = window.location.href
  };

  // call initialize() to get the party started
  initialize();

});
