import PROJECTS_ARRAY from "./projectsarray.js";
import OPEN_PROJECT from "./openproject.js";

const DISPLAY_PROJECT = () => {

    const CREATED_PROJECTS = document.getElementById('created-projects');

    CREATED_PROJECTS.innerHTML = '';

    PROJECTS_ARRAY.forEach(PROJECT => {

        const PROJECT_ELEMENT = document.createElement('li');

        PROJECT_ELEMENT.innerHTML = `
        <h1 class=todo-element-title>${PROJECT.title}<h1>
        <button class="functionality-button" id="delete-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/>
                </svg>
        </button>
        `;

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