(function(module){
  var projectView = {};

  var projectCompile = Handebars.compile($('#project-template').html());

  projectView.showProject = function() {
    $('#projects .gitProjects').empty().append(
      projects.withTheAttribute('name').map(projectCompile)
    );
  };
  projects.requestProjects(projectView.showProject);
  module.projectView = projectView
})(window);
