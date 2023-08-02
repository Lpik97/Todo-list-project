import CLEAN_CONTENT from "./cleancontent.js";
import ProjectsArray from "./projectsarray.js";

const DELETE_PROJECT = () => {
    
    const CREATED_PROJECTS = document.getElementById('created-projects');

    CREATED_PROJECTS.addEventListener('click', (event) => {

        const BUTTON = event.target.closest('.functionality-button');

        if (BUTTON) {

            const PROJECT_ELEMENT = BUTTON.parentNode;

            const PARENT_ELEMENT_ID = PROJECT_ELEMENT.getAttribute('data-project-id');

            const PROJECT_OBJECT = ProjectsArray.find(TODO => TODO.id === PARENT_ELEMENT_ID);

            const PROJECT_OBJECT_INDEX = ProjectsArray.indexOf(PROJECT_OBJECT);

            if (PROJECT_OBJECT_INDEX !== -1) {

                ProjectsArray.splice(PROJECT_OBJECT_INDEX, 1);

            };

            PROJECT_ELEMENT.remove();

            CLEAN_CONTENT();
        };

    });

};

export default DELETE_PROJECT;
