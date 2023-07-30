import LOCAL_STORAGE_PROJECTS_KEY from "./storage.js";

let ProjectsArray =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];

export default ProjectsArray;