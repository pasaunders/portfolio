(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('#about').show();
    $('#articles').hide();
  };

  module.aboutController = aboutController;
})(window);
