$(function() {

  //### 'jquery' UI elements for game manipulation
  //var game              =    // the game container
  //var board             =    // the board  container
  var status_indicators = $('#teams li');   // status bar container

  var tiles = [];                         // all the "tiles"

  var players = [                         // player data
    {
      name:      'Ernie',
      marker:    '&times;',
      img_url:   'img/ernie.jpg',
      indicator: $(status_indicators[0])
    },
    {
      name:      'Bert',
      marker:    '&oslash;',
      img_url:   'img/bert.jpg',
      indicator: $(status_indicators[1])
    }
  ];

  var current_player;                     // player data
  var turns  = 0;                         // elapsed turns

  //### There are eight winning combos, the first two are supplied.
  //### What are the other six? Add 'em.
  var win_combos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];

  var initialize = function() {
    //### ready the board for game play

    //### 1.) Create nine tiles. Each is a div, each needs to be bound to 'handle_click'.
    //### Make sure giving each tile a unique 'id' for targeting. Find tile's 'class' in css.
    //### Append tiles to board.
    var board = $("#board");
    for(i=0;i<9;i++) {
      board.append("<div class='tile' id='tile" + i + "'> </div>")
    }
      
    //### 2.) Make first player the current_player
    current_player = players[0];

    //### 3.) Set up the players 'indicators' in UI
    //### - set player image, name, marker
    //### - set player name
    //### - the 'current_player' has a different style (see css '.current')
    var playerImgs = $("img");
    $(playerImgs[0]).attr("src", "img/bert.jpg");
    console.log(playerImgs,    $(playerImgs[0]).attr("src", "img/bert.jpg")
);

    $(playerImgs[1]).attr("src", "img/ernie.jpg");

    //### 4.) fade in the game
    $("#game").fadeIn();
  };

  var handle_click = function() {
    //### this function is bound to a click event for each tile on the board
  }

  var is_active = function(tile) {
    //### boolean - is tile active?
  };
  
  var activate_tile = function(tile) {
    //### activate tile
    //### don't forget to up 'turn' count
  };

  var toggle_player = function() {
    //### After each turn, toggle the current player and update player indicators
  };


  var is_win = function() {
    // ### whether or not the current player's positions result in a win
    // ### returns boolean
  };

  var is_tie = function() {
    //### has the game resulted in a tie?
    //### returns boolean
  };

  var handle_win = function() {
    //### update the UI to reflect that a win has occurred.
    //### - show results panel
    //### - display winner name and image
    //### - congrats message
    //### - show new_game button

  };

  var handle_tie = function() {
    //### update the UI to reflect that a tie game has occurred.
    //### - show results panel
    //### - display tie and rubber ducky image
    //### - show new_game button
  }

  var hide_indicators = function() {
    //### optional: call this to hide the "status" container after detecting a win or a tie
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
