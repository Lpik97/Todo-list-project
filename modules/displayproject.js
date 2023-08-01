import PROJECTS_ARRAY from "./projectsarray.js";
import OPEN_PROJECT from "./openproject.js";

const DISPLAY_PROJECT = () => {

    const CREATED_PROJECTS = document.getElementById('created-projects');

    CREATED_PROJECTS.innerHTML = '';

    PROJECTS_ARRAY.forEach(PROJECT => {

        const PROJECT_ELEMENT = document.createElement('li');

        PROJECT_ELEMENT.innerText = PROJECT.title;

        PROJECT_ELEMENT.setAttribute('data-project-id', PROJECT.id);

        CREATED_PROJECTS.appendChild(PROJECT_ELEMENT);

        PROJECT_ELEMENT.classList.add('project');

        PROJECT_ELEMENT.addEventListener('click', () => {

            const PROJECT_ELEMENT_ID = PROJECT_ELEMENT.getAttribute('data-project-id');

            const SELECTED_PROJECT = PROJECTS_ARRAY.find(PROJECT => PROJECT.id === PROJECT_ELEMENT_ID);

            OPEN_PROJECT(SELECTED_PROJECT);

        });

    });

};

export default DISPLAY_PROJECT;