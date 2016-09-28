(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    console.log('articleController called');
    $('#projects').show();
    $('#about').hide();
    $('#links').hide();
  };

  module.articleController = articleController;
})(window);
