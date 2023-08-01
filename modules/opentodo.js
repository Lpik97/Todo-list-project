import CLEAN_CONTENT from "./cleancontent.js";

const OPEN_TODO = (SELECTED_TODO) => {

    CLEAN_CONTENT();

    const UPPER_CONTENT = document.querySelector('.upper-content');

    const EXPANDED_TODO = document.createElement('div');

    EXPANDED_TODO.innerHTML = `
    <div class="expanded-todo">
        <h1 class="expanded-todo-title">${SELECTED_TODO.title}</h1>
        <p class="expanded-todo-description">${SELECTED_TODO.description}</p>
        <div class="expanded-todo-dueDate">${SELECTED_TODO.dueDate}</div>
        <div class="expanded-todo-priority">${SELECTED_TODO.priority}</div>
    </div>
    `;

    UPPER_CONTENT.appendChild(EXPANDED_TODO);

};

export default OPEN_TODO;