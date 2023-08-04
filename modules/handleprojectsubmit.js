import PROJECT_FACTORY from "./projectfactory.js";
import ADD_NEW_PROJECT from "./addnewproject.js";
import DISPLAY_PROJECT from "./displayproject.js";

function HANDLE_PROJECT_SUBMIT (FORM) {

    FORM.addEventListener('submit', (event) => {
        
        event.preventDefault();

        const PROJECT_TITLE = FORM.querySelector('#title').value;

        const PROJECT = PROJECT_FACTORY(PROJECT_TITLE);

        ADD_NEW_PROJECT(PROJECT);

        FORM.reset();

        DISPLAY_PROJECT();
        
    });

};

export default HANDLE_PROJECT_SUBMIT;