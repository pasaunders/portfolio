(function(module) {
  var linksController = {};

  linksController.reveal = function() {
    $('#links').show();
    $('#about').hide();
    $('#projects').hide();
  };

  module.linksController = linksController;
})(window);
