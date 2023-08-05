import CANCEL_FORM from "./cancelform.js";
import HANDLE_TODO_SUBMIT from "./handletodosubmit.js";

const TODO_FORM = (SELECTED_PROJECT) => {

    const FORM_SECTION = document.querySelector('.lower-content');

    FORM_SECTION.innerHTML = '';

    const FORM = document.createElement('form');

    FORM.innerHTML = `
    <form>
        <input type="text" name="title" id="title" placeholder="Task name">
        <input type="text" name="description" id="description" placeholder="Description">
        <fieldset class="interactive-inputs">
            <div class="due-date-input">
                <legend>Due date:</legend>
                <input type="date" name="dueDate" id="dueDate">
            </div>
            <div class="priority-input">
                <legend>Priority</legend>
                <select name="priority" id="priority">
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
                <button class="interactive-button" id="add-todo-button">Add task</button>    
            </div>
        </div>
    </form>
    `;

    FORM_SECTION.appendChild(FORM);

    FORM.classList.add('todo-form');

    CANCEL_FORM(FORM);

    HANDLE_TODO_SUBMIT(FORM, SELECTED_PROJECT);

};

export default TODO_FORM;