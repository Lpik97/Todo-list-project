const CURRENT_PROJECT = () => {

    const CREATED_PROJECTS = document.querySelectorAll('#created-projects li.project');

    let currentProject = null;

    CREATED_PROJECTS.forEach(PROJECT => {

      PROJECT.addEventListener('click', handleProjectClick);
  
    });
  
    function handleProjectClick(event) {
        
      const PROJECT_NAME = event.target.textContent;

      currentProject = PROJECT_NAME;

      console.log(currentProject);
    };

};

export default CURRENT_PROJECT;
  