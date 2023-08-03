import projectsArray from "./projectsarray.js"
import LOCAL_STORAGE_PROJECT_KEY from "./localstorage.js";

const ADD_NEW_PROJECT = (PROJECT) => {

    projectsArray.push(PROJECT);

    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectsArray));

};

export default ADD_NEW_PROJECT;