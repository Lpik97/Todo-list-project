const DISPLAY_TODO = (SELECTED_PROJECT) => {

    const TODOS_LIST = document.querySelector('.upper-content');

    TODOS_LIST.innerHTML = '';

    SELECTED_PROJECT.TODOS.forEach(TODO => {

        const TODO_ELEMENT = document.createElement('div');

        TODO_ELEMENT.innerText = TODO.title;

        TODO_ELEMENT.setAttribute('data-project-id', TODO.id);

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