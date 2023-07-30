import PROJECT_FACTORY from "./projectfactory.js";
import ADD_NEW_PROJECT from "./addnewproject.js";
import DISPLAY_PROJECT from "./displayproject.js";
import save from "./save.js";

function HANDLE_PROJECT_SUBMIT (FORM) {

    FORM.addEventListener('submit', (event) => {
        
        event.preventDefault();

        const PROJECT_TITLE = FORM.querySelector('#title').value;

        const NEW_PROJECT = PROJECT_FACTORY(PROJECT_TITLE);

        ADD_NEW_PROJECT(NEW_PROJECT);

        save();

        DISPLAY_PROJECT();
        
    });

};

export default HANDLE_PROJECT_SUBMIT;