import ADD_NEW_TODO from "./addnewtodo.js";
import DISPLAY_TODO from "./displaytodo.js";
import TODO_FACTORY from "./todofactory.js";

function HANDLE_TODO_SUBMIT(FORM) {

    FORM.addEventListener('submit', (event) => {
        
        event.preventDefault();

        const TODO_TITLE = FORM.querySelector('#title').value;

        const TODO_DESCRIPTION = FORM.querySelector('#description').value;

        const TODO_DUE_DATE = FORM.querySelector('#dueDate').value;

        const TODO_PRIORITY = FORM.querySelector('#priority').value;

        const PROJECT = document.getElementById('selected');

        const TODO = TODO_FACTORY(TODO_TITLE, TODO_DESCRIPTION, TODO_DUE_DATE, TODO_PRIORITY);

        ADD_NEW_TODO(TODO);

        DISPLAY_TODO(PROJECT);

    });

};

export default HANDLE_TODO_SUBMIT