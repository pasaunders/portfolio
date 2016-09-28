(function(module){
  var projects = {}; //create a projects object to hold my projects downloaded from github
  projects.allProjects = []; //create an array property to hold the list of projects

  projects.requestProjects = function(timingCheck) {
    $.ajax({
      url: 'https://api.github.com/users/pasaunders/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data, message, xhr) {
        projects.allProjects = data;
        timingCheck();
      }
    });
  };

  projects.withTheAttribute = function(myattribute) {
    console.log('filter called');
    return projects.allProjects.filter(function(proj) {
      return proj['']
    })
  }

})(window);
