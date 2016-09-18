var projectView = {};

projectView.menuHandler = function () {
  $('li.nav-item').on('click', function(event) {
    console.log(this);
    event.preventDefault();
    $('.article-entry').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
  });
};

projectView.moreLessHandler = function () {
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

projectView.filterHandler = function () {
  $('article#projects').children('section').not('.template').each(function() {
    console.log(this);
    var gameMedium, gameGenre, optionTag;
    gameMedium = $(this).find('p.medium').text();
    optionTag = '<option value="' + gameMedium + '">' + gameMedium + '</option>';
    $('#medium-filter').append(optionTag);
    gameGenre = $(this).find('p.genre').text();
    optionTag = '<option value="' + gameGenre + '">' + gameGenre + '</option>';
    $('#genre-filter').append(optionTag);
  });
};

projectView.menuHandler();
projectView.moreLessHandler();
projectView.filterHandler();
