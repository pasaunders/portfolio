(function(module){
  function Game (dataEntry) {
    this.name = dataEntry.name;
    this.medium = dataEntry.medium;
    this.genre = dataEntry.genre;
    this.whyGood = dataEntry.whyGood;
  };

  Game.allGames = [];

  Game.prototype.toHtml = function () { //takes a loaded game object and applies it to a handlebars template
    var source = $('#game-template').html();
    var template = Handlebars.compile(source);
    return template(this);
  };

  Game.loadData = function(inputData) {
    inputData.forEach(function(data) {
      Game.allGames.push(new Game(data));
    });
    postGamesToHTML();
  };

  function loadGameDataFromFile () { //loads data from gamelist.json
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

  function postGamesToHTML() { //a function that loops through my loaded game data and calls .tohtml for each one, then appends the result to the html with jQuery
    Game.allGames.forEach(function(gameEntry) {
      $('#about').append(gameEntry.toHtml());
    });
  };

  function buildFilters() {
    populateFilters('medium');
    populateFilters('genre');
  };

  function populateFilters(property) { // a function that takes data from Game.allGames, and pushes the unique properties into arrays. I'm trying to set it up to accept different paramaters to call different properties.
    return Game.allGames.map(function(element){
      return element[property];
    })
    .reduce(function(acc, next, idx, array) {
      if (acc.indexOf(next) === -1) {
        acc.push(next);
      }
      return acc;
    }, []);
  };

  loadGameDataFromFile();
  buildFilters();
  module.Game = Game;
  module.populateFilters = populateFilters;
})(window);
