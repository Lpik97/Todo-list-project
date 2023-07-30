import OPEN_TODO from "./opentodo";

const DISPLAY_TODO = () => {

    const TODOS_LIST = document.querySelector('.upper-content');

    TODOS_LIST.innerHTML = '';

    TODOS_LIST.forEach(TODO => {

        const TODO_ELEMENT = document.createElement('div');

        TODO_ELEMENT.innerText = TODO.title;

        TODOS_LIST.appendChild(TODO_ELEMENT);

        TODO_ELEMENT.classList.add('todo');

        TODO_ELEMENT.addEventListener('click', () => {

            OPEN_TODO(TODO);

        });

    });

};

export default DISPLAY_TODO;