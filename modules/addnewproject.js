import projectsArray from "./projectsarray.js"
import UPDATE_PROJECTS from "./updateprojects.js";

const ADD_NEW_PROJECT = (PROJECT) => {

    projectsArray.push(PROJECT);

    UPDATE_PROJECTS();

};

export default ADD_NEW_PROJECT;