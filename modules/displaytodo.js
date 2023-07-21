import PROJECTS_ARRAY from "./projectsarray.js";

const DISPLAY_TODO = () => {

    const TODOS_SECTION = document.querySelector('.upper-content');

    TODOS_SECTION.innerHTML = '';

    const PROJECT = PROJECTS_ARRAY.PROJECTS[INDEX];

    PROJECT.TODOS.forEach((TODO) => {

        const TODO_ELEMENT = document.createElement('div');

        TODO_ELEMENT.innerText = TODO.title;

        TODOS_SECTION.appendChild(TODO_ELEMENT);

    });

};

export default DISPLAY_TODO;