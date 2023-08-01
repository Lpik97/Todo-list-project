import TODO_FORM from "./todoform.js";

const OPEN_PROJECT = (SELECTED_PROJECT) => {

    const TODOS_SECTION = document.querySelector('.upper-content');

    const FORM_SECTION = document.querySelector('.lower-content');

    FORM_SECTION.innerHTML = '';

    TODOS_SECTION.innerHTML = SELECTED_PROJECT.TODOS.toString();

    if (SELECTED_PROJECT.TODOS.length >= 15) {

        return;

    } else {

        const ADD_TODO = document.createElement('div');

        ADD_TODO.innerHTML = `
        <div class="add-todo-div">
            <button class="add-todo-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                    <path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z"/>                                
                </svg>
            </button>
            <h1 class="add-todo-h1">Create a <em>new</em> task</h1>
        </div>
        `;

        FORM_SECTION.appendChild(ADD_TODO);

        ADD_TODO.classList.add('add-todo-container');

        ADD_TODO.addEventListener('click', () => {

            TODO_FORM(SELECTED_PROJECT);

        });

    };

};

export default OPEN_PROJECT;