import CLEAN_CONTENT from "./cleancontent.js";
import TODO_EDIT from "./todoedit.js";

const OPEN_TODO = (SELECTED_TODO, SELECTED_PROJECT) => {

    CLEAN_CONTENT();

    const UPPER_CONTENT = document.querySelector('.upper-content');

    const EXPANDED_TODO = document.createElement('div');

    EXPANDED_TODO.innerHTML = `
    <div class="expanded-todo">
        <div class="expanded-todo-upper-container">
            <h1 class="expanded-todo-title">${SELECTED_TODO.title}</h1>
            <button id="edit-expanded-todo-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                    <path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/>
                </svg>
            </button>
        </div>
        <hr>
        <p class="expanded-todo-description">${SELECTED_TODO.description}</p>
        <div class="expanded-todo-bottom-container">
            <div class="expanded-todo-dueDate">Due date: ${SELECTED_TODO.dueDate}</div>
            <div class="expanded-todo-priority">${SELECTED_TODO.priority} priority</div>
        </div>
        
    </div>
    `;

    UPPER_CONTENT.appendChild(EXPANDED_TODO);

    TODO_EDIT(EXPANDED_TODO, SELECTED_TODO, SELECTED_PROJECT);

};

export default OPEN_TODO;