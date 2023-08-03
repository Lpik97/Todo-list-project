import LOCAL_STORAGE_PROJECTS_KEY from "./localstorage.js";

let projectsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];

export default projectsArray;