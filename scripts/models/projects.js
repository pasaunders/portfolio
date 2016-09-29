(function(module){
  var projects = {}; //create a projects object to hold my projects downloaded from github
  projects.allProjects = []; //create an array property to hold the list of projects

  projects.requestProjects = function(timingCheck) {
    $.when(
      $.get('github/users/pasaunders/repos')
      .done(function(data) {
        projects.allProjects = data;
      })
    ).done(timingCheck);
  };

  projects.withTheAttribute = function(myattribute) {
    console.log('filter called');
    return projects.allProjects.filter(function(proj) {
      return proj['language']
    })
  }
  module.projects = projects;
})(window);
