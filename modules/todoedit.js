import CLEAN_CONTENT from "./cleancontent.js";
import OPEN_TODO from "./opentodo.js";
import UPDATE_PROJECTS from "./updateprojects.js";

const TODO_EDIT = (EXPANDED_TODO, SELECTED_TODO, SELECTED_PROJECT) => {

    const EDIT_EXPANDED_BUTTON = EXPANDED_TODO.querySelector('#edit-expanded-todo');

    EDIT_EXPANDED_BUTTON.addEventListener('click', () => {

        const FORM_SECTION = document.querySelector('.lower-content');

        CLEAN_CONTENT();

        const FORM = document.createElement('form');

        FORM.innerHTML = `
        <form>
            <input type="text" name="title" id="title" placeholder="${SELECTED_TODO.title}" required>
            <input type="text" name="description" id="description" placeholder="${SELECTED_TODO.description}" required>
            <fieldset class="interactive-inputs">
                <div class="due-date-input">
                    <legend>Due date:</legend>
                    <input type="date" name="dueDate" id="dueDate" required>
                </div>
                <div class="priority-input">
                    <legend>Priority</legend>
                    <select name="priority" id="priority" required>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>   
                </div>
            </fieldset>
            <hr>
            <div class="lower-form">
                <div class="current-project-display">${SELECTED_PROJECT.title}</div>
                <div class="buttons-area">
                    <button class="interactive-button" id="cancel-button">Cancel</button>
                    <button class="interactive-button" id="add-todo-button">Edit task</button>    
                </div>
            </div>
        </form>
        `;

        FORM_SECTION.appendChild(FORM);

        FORM.classList.add('edit-todo-form');

        FORM.addEventListener('submit', (event) => {
            
            event.preventDefault();

            SELECTED_TODO.title = FORM.querySelector('#title').value;

            SELECTED_TODO.description = FORM.querySelector('#description').value;

            SELECTED_TODO.dueDate = FORM.querySelector('#dueDate').value;

            SELECTED_TODO.priority = FORM.querySelector('#priority').value;

            UPDATE_PROJECTS();

            CLEAN_CONTENT();

            OPEN_TODO(SELECTED_TODO, SELECTED_PROJECT);
        
        });

    });

};

export default TODO_EDIT;