import LOCAL_STORAGE_PROJECT_KEY from "./projectslocalstorage.js";
import projectsArray from "./projectsarray.js";

const UPDATE_PROJECTS = () => {

    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectsArray));

};

export default UPDATE_PROJECTS;