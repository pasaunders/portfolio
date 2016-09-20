var games = [];

function Game (dataEntry) {
  this.name = dataEntry.name;
  this.medium = dataEntry.medium;
  this.genre = dataEntry.genre;
  this.whyGood = dataEntry.whyGood;
};

Game.prototype.toHtml = function () {
  var source = $('#game-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

gameList.forEach(function(gameEntry) {
  games.push(new Game(gameEntry));
});

games.forEach(function(gameEntry) {
  $('#projects').append(gameEntry.toHtml());
});
