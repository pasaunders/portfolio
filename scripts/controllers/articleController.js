(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    $('#projects').show();
    $('#about').hide();
    $('#links').hide();
  };

  module.articleController = articleController;
})(window);
