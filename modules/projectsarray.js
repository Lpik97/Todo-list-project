import LOCAL_STORAGE_PROJECT_KEY from "./projectslocalstorage.js"

let projectsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

export default projectsArray;