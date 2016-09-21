
function Game (dataEntry) {
  this.name = dataEntry.name;
  this.medium = dataEntry.medium;
  this.genre = dataEntry.genre;
  this.whyGood = dataEntry.whyGood;
};
Game.allGames = [];

Game.prototype.toHtml = function () {
  var source = $('#game-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

//new code to use ajax to load data from JSON file
Game.loadData = function(inputData) {
  inputData.forEach(function(data) {
    Game.allGames.push(new Game(data));
    postGamesToHTML();
  });
};

function loadGameDataFromFile () {
  if (localStorage.gameList) {
    Game.loadData(JSON.parse(localStorage.gameList));
  }
  else {
    $.getJSON('data/gamelist.json', function(data) {
      Game.loadData(data);
      localStorage.gameList = JSON.stringify(data);
    });
  };
};

function postGamesToHTML() {
  Game.allGames.forEach(function(gameEntry) {  //wrap this in a function and call it after I finish loading data
    $('#projects').append(gameEntry.toHtml());
  });
};

loadGameDataFromFile();
