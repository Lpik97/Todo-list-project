import PROJECTS_ARRAY from "./projectsarray.js";

const ADD_NEW_TODO = (TODO) => {

    const PROJECT = document.getElementById('selected');

    if (PROJECT) {

        const CURRENT_PROJECT_INDEX = PROJECTS_ARRAY.findIndex(

            (PROJECT) => PROJECT.title === PROJECT.innerText

        );
        
        if (CURRENT_PROJECT_INDEX !== -1) {

            PROJECTS_ARRAY[CURRENT_PROJECT_INDEX].TODOS.push(TODO);

        };

    };

};

export default ADD_NEW_TODO;