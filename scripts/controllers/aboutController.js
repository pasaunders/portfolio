(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    console.log('aboutController called');
    $('#about').show();
    $('#projects').hide();
    $('#links').hide();
  };

  module.aboutController = aboutController;
})(window);
