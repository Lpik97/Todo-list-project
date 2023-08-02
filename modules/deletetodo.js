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

            };

            TODO_ELEMENT.remove();

        };

    });

};

export default DELETE_TODO;