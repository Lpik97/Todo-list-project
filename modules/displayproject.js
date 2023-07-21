import PROJECTS_ARRAY from "./projectsarray.js";

const DISPLAY_PROJECT = () => {

    const CREATED_PROJECTS = document.getElementById(created-projects);

    CREATED_PROJECTS.innerHTML = '';

    PROJECTS_ARRAY.forEach((PROJECT, INDEX) => {

        const PROJECT_ELEMENT = document.createElement('div');

        PROJECT_ELEMENT.innerText = PROJECT.title;

        PROJECT_ELEMENT.addEventListener('click', () => {

            DISPLAY_TODO(INDEX);

        });

        CREATED_PROJECTS.appendChild(PROJECT_ELEMENT);

    });

};

export default DISPLAY_PROJECT;