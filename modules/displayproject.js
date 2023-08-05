import projectsArray from "./projectsarray.js";
import OPEN_PROJECT from "./openproject.js";
import DELETE_PROJECT from "./deleteproject.js";
import UPDATE_PROJECTS from "./updateprojects.js";

const DISPLAY_PROJECT = () => {

    const CREATED_PROJECTS = document.getElementById('created-projects');

    const DEFAULT_PROJECTS = document.querySelector('#default-projects');

    DEFAULT_PROJECTS.innerHTML = '';

    CREATED_PROJECTS.innerHTML = '';

    projectsArray.forEach(PROJECT => {

        if (PROJECT.id === '1' || PROJECT.id === '2' || PROJECT.id === '3') {

            const PROJECT_ELEMENT = document.createElement('li');

            PROJECT_ELEMENT.innerHTML = `<h1 class=todo-element-title>${PROJECT.title}</h1>`;

            PROJECT_ELEMENT.setAttribute('data-project-id', PROJECT.id);

            DEFAULT_PROJECTS.appendChild(PROJECT_ELEMENT);

            PROJECT_ELEMENT.classList.add('project');

            UPDATE_PROJECTS();

            PROJECT_ELEMENT.addEventListener('click', () => {

                const PROJECT_ELEMENT_ID = PROJECT_ELEMENT.getAttribute('data-project-id');

                const SELECTED_PROJECT = projectsArray.find(PROJECT => PROJECT.id === PROJECT_ELEMENT_ID);

                OPEN_PROJECT(SELECTED_PROJECT);

            });

        } else {

            const PROJECT_ELEMENT = document.createElement('li');

            PROJECT_ELEMENT.innerHTML = `
            <h1 class=todo-element-title>${PROJECT.title}</h1>
            <button class="functionality-button" id="delete-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/>
                </svg>
            </button>
            `;

            PROJECT_ELEMENT.setAttribute('data-project-id', PROJECT.id);

            CREATED_PROJECTS.appendChild(PROJECT_ELEMENT);

            PROJECT_ELEMENT.classList.add('project');

            UPDATE_PROJECTS();

            DELETE_PROJECT();

            PROJECT_ELEMENT.addEventListener('click', () => {

                const PROJECT_ELEMENT_ID = PROJECT_ELEMENT.getAttribute('data-project-id');

                const SELECTED_PROJECT = projectsArray.find(PROJECT => PROJECT.id === PROJECT_ELEMENT_ID);

                OPEN_PROJECT(SELECTED_PROJECT);

            });

        };

    });

};

export default DISPLAY_PROJECT;