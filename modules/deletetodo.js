import CLEAN_CONTENT from "./cleancontent.js";
import DISPLAY_TODO from "./displaytodo.js";
import UPDATE_PROJECTS from "./updateprojects.js";

const DELETE_TODO = (SELECTED_PROJECT) => {

    const TODOS_LIST = document.querySelector('.upper-content');

    TODOS_LIST.addEventListener('click', (event) => {

        const BUTTON = event.target.closest('.functionality-button');

        if (BUTTON) {

            const TODO_ELEMENT = BUTTON.parentNode;

            const PARENT_ELEMENT_ID = TODO_ELEMENT.getAttribute('data-todo-id');

            const TODO_OBJECT = SELECTED_PROJECT.TODOS.find(TODO => TODO.id === PARENT_ELEMENT_ID);

            const TODO_OBJECT_INDEX = SELECTED_PROJECT.TODOS.indexOf(TODO_OBJECT);

            if (TODO_OBJECT_INDEX !== -1) {

                SELECTED_PROJECT.TODOS.splice(TODO_OBJECT_INDEX, 1);

                UPDATE_PROJECTS();

            };

            TODO_ELEMENT.remove();

            CLEAN_CONTENT();

            DISPLAY_TODO(SELECTED_PROJECT);

        };

    });

};

export default DELETE_TODO;