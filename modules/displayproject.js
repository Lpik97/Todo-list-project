import ProjectsArray from "./projectsarray.js";
import OPEN_PROJECT from "./openproject.js";
import save from "./save.js";
import selectedProjectId from "./selectedprojectid.js";

const DISPLAY_PROJECT = () => {

    const CREATED_PROJECTS = document.querySelector('[data-created-projects]');

    CREATED_PROJECTS.innerHTML = '';

    ProjectsArray.forEach(PROJECT => {

        const PROJECT_ELEMENT = document.createElement('li');

        PROJECT_ELEMENT.dataset.projectState = PROJECT.state;

        PROJECT_ELEMENT.innerText = PROJECT.title;

        PROJECT_ELEMENT.classList.add('project');

        CREATED_PROJECTS.appendChild(PROJECT_ELEMENT);

        CREATED_PROJECTS.addEventListener('click', e => {

            if (e.target.tagName.toLowerCase() === 'li') {
                
                selectedProjectId = e.target.dataset.projectId;

                save();

            };

            if (PROJECT.id === selectedProjectId) {

                PROJECT_ELEMENT.classList.add('active-project');
    
            };

            OPEN_PROJECT(PROJECT);

        });

    });

};

export default DISPLAY_PROJECT;