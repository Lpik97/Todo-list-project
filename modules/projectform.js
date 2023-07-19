const PROJECT_FORM = () => {

    const ADD_PROJECT_BUTTON = document.getElementById('add-project-button');

    ADD_PROJECT_BUTTON.addEventListener('click', () => {

        const LOWER_MAIN_SECTION = document.querySelector('.lower-content');

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
                <div class="current-project-display"></div>
                <div class="buttons-area">
                    <button class="interactive-button" id="cancel-button">Cancel</button>
                    <button class="interactive-button" id="add-todo-button">Add task</button>    
                </div>
            </div>
        </form>
        `;

        LOWER_MAIN_SECTION.appendChild(FORM);

        FORM.classList.add('project-form');

    });

};

export default PROJECT_FORM;