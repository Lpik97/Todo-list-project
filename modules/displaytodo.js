import OPEN_TODO from "./opentodo.js";

const DISPLAY_TODO = (PROJECT) => {

    const TODOS_LIST = document.querySelector('.upper-content');

    const TODOS_ARRAY = PROJECT.TODOS;

    TODOS_LIST.innerHTML = '';

    TODOS_ARRAY.forEach((TODO) => {

        const TODO_ELEMENT = document.createElement('li');

        TODO_ELEMENT.innerText = TODO.title;

        TODOS_LIST.appendChild(TODO_ELEMENT);

        TODO_ELEMENT.classList.add('todo');

        TODO_ELEMENT.addEventListener('click', () => {

            OPEN_TODO(TODO);

        });

    });

};

export default DISPLAY_TODO;