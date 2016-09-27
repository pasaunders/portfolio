(function(module) {
  var linksController = {};

  linksController.reveal = function() {
    console.log('linksController called');
    $('#links').show();
    $('#about').hide();
    $('#projects').hide();
  };

  module.linksController = linksController;
})(window);
