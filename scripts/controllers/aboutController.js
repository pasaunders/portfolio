(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('#about').show();
    $('#projects').hide();
    $('#links').hide();
  };

  module.aboutController = aboutController;
})(window);
