import OPEN_TODO from "./opentodo.js";

const DISPLAY_TODO = (SELECTED_PROJECT) => {

    const TODOS_LIST = document.querySelector('.upper-content');

    TODOS_LIST.innerHTML = '';

    SELECTED_PROJECT.TODOS.forEach(TODO => {

        const TODO_ELEMENT = document.createElement('div');

        TODO_ELEMENT.innerHTML = `
        <h1 class=todo-element-title>${TODO.title}<h1>
        <button class="functionality-button" id="delete-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/>
                </svg>
        </button>
        `;

        TODO_ELEMENT.setAttribute('data-todo-id', TODO.id);

        TODOS_LIST.appendChild(TODO_ELEMENT);

        TODO_ELEMENT.classList.add('todo');

        TODO_ELEMENT.addEventListener('click', () => {

            const TODO_ELEMENT_ID = TODO_ELEMENT.getAttribute('data-todo-id');

            const SELECTED_TODO = SELECTED_PROJECT.TODOS.find(TODO => TODO.id === TODO_ELEMENT_ID);

            OPEN_TODO(SELECTED_TODO);

        });

    });

};

export default DISPLAY_TODO;