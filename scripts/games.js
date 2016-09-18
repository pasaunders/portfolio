var games = [];

function Game (dataEntry) {
  this.name = dataEntry.name;
  this.medium = dataEntry.medium;
  this.genre = dataEntry.genre;
  this.whyGood = dataEntry.whyGood;
};

Game.prototype.toHtml = function () {
  var $newGame = $('section.template').clone();
  $newGame.find('h3').text(this.name);
  $newGame.find('p.medium').text(this.medium);
  $newGame.find('p.genre').text(this.genre);
  $newGame.find('p.whyGood').text(this.whyGood);
  $newGame.removeClass('template');
  return $newGame;
};

gameList.forEach(function(gameEntry) {
  games.push(new Game(gameEntry));
});

games.forEach(function(gameEntry) {
  $('#projects').append(gameEntry.toHtml());
});
