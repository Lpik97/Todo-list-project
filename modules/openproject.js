import TODO_FORM from "./todoform.js";

const OPEN_PROJECT = (PROJECT) => {

    const TODOS_SECTION = document.querySelector('.upper-content');

    TODOS_SECTION.innerHTML = PROJECT.TODOS.toString();

    if (PROJECT.TODOS.lenght <= 15) {

        const FORM_SECTION = document.querySelector('.lower-content');

        const ADD_TODO = document.createElement('div');

        ADD_TODO.innerHTML = `
        <button class="add-todo-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z"/>                                
            </svg>
        </button>
        <h1 class="add-todo-h1">Create a <em>new</em> task</h1>
        `;

        FORM_SECTION.appendChild(ADD_TODO);

        ADD_TODO.addEventListener('click', () => {

            TODO_FORM();

        });

    } else {

        return;

    }

};

export default OPEN_PROJECT;