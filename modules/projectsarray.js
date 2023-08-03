import LOCAL_STORAGE_PROJECT_KEY from "./localstorage.js"

let projectsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

export default projectsArray;