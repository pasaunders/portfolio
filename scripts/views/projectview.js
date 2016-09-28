(function(module) {
  var projectView = {};

  projectView.moreLessHandler = function () {  //uses jQuery to allow the user to expand and contract articles by clicking a div, then changes the div to say more or less
    $('article#projects').on('click', 'a.expand', function(event) {
      var $anchor = $(this);
      event.preventDefault();
      $anchor.siblings('p.whyGood').toggle();
      if ($anchor.hasClass('expanded')) {
        $anchor.html('More &rarr;');
        $anchor.removeClass('expanded');
      }
      else {
        $anchor.html('Less &larr;');
        $anchor.addClass('expanded');
      }
    });
  };

  // projectView.filterHandler = function () { //incomplete handler for filtering articles based on medium and genre properties
    // $('article#projects').children('section').not('.template').each(function() {
    //   console.log(this);
    //   var gameMedium, gameGenre, optionTag;
    //   gameMedium = $(this).find('p.medium').text();
    //   optionTag = '<option value="' + gameMedium + '">' + gameMedium + '</option>';
    //   $('#medium-filter').append(optionTag);
    //   gameGenre = $(this).find('p.genre').text();
    //   optionTag = '<option value="' + gameGenre + '">' + gameGenre + '</option>';
    //   $('#genre-filter').append(optionTag);
    // });
  // };

  module.projectView = projectView;
  projectView.moreLessHandler();
  // projectView.filterHandler();
})(window);
