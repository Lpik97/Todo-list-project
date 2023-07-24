const SET_CURRENT_PROJECT = () => {

  const CREATED_PROJECTS = document.querySelectorAll('#created-projects li.project');

  CREATED_PROJECTS.forEach((PROJECT) => {

    PROJECT.addEventListener('click', () => {

      CREATED_PROJECTS.forEach(PROJECT => PROJECT.removeAttribute('id'));
      
      PROJECT.setAttribute('id', 'selected');
    });

  });

};

export default SET_CURRENT_PROJECT;
  