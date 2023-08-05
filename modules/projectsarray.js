import LOCAL_STORAGE_PROJECT_KEY from "./projectslocalstorage.js";

let projectsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [
    { title: "Inbox", id: "1", TODOS: [] },
    { title: "Today", id: "2", TODOS: [] },
    { title: "Upcoming", id: "3", TODOS: [] },
  ];

export default projectsArray;