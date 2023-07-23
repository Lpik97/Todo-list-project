import PROJECTS_ARRAY from "./projectsarray.js";
import OPEN_PROJECT from "./openproject.js";

const DISPLAY_PROJECT = () => {

    const CREATED_PROJECTS = document.getElementById('created-projects');

    CREATED_PROJECTS.innerHTML = '';

    PROJECTS_ARRAY.forEach(PROJECT => {

        const PROJECT_ELEMENT = document.createElement('li');

        PROJECT_ELEMENT.innerText = PROJECT.title;

        CREATED_PROJECTS.appendChild(PROJECT_ELEMENT);

        PROJECT_ELEMENT.classList.add('project')

        PROJECT_ELEMENT.addEventListener('click', () => {

            OPEN_PROJECT(PROJECT);

        });

    });

};

export default DISPLAY_PROJECT;