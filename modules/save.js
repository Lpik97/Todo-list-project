import ProjectsArray from "./projectsarray.js";
import LOCAL_STORAGE_PROJECTS_KEY from "./storage.js";

function save () {

    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(ProjectsArray));

}

export default save;