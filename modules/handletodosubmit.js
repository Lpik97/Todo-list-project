import DISPLAY_TODO from "./displaytodo.js";
import TODO_FACTORY from "./todofactory.js";

function HANDLE_TODO_SUBMIT(FORM, SELECTED_PROJECT) {

    FORM.addEventListener('submit', (event) => {
        
        event.preventDefault();

        if (SELECTED_PROJECT.TODOS.length >= 15) {

            return;

        } else {

            const TODO_TITLE = FORM.querySelector('#title').value;
    
            const TODO_DESCRIPTION = FORM.querySelector('#description').value;
    
            const TODO_DUE_DATE = FORM.querySelector('#dueDate').value;
    
            const TODO_PRIORITY = FORM.querySelector('#priority').value;
    
            const TODO = TODO_FACTORY(TODO_TITLE, TODO_DESCRIPTION, TODO_DUE_DATE, TODO_PRIORITY);
    
            SELECTED_PROJECT.TODOS.push(TODO);
    
            console.log("Updated Project:", SELECTED_PROJECT);
    
            DISPLAY_TODO(SELECTED_PROJECT);

        };

    });

};

export default HANDLE_TODO_SUBMIT