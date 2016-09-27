(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    $('#articles').show();
    $('#about').hide();
  };

  module.articleController = aboutController;
})(window);
