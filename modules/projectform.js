import CLEAN_CONTENT from "./cleancontent.js";
import HANDLE_PROJECT_SUBMIT from "./handleprojectsubmit.js";

const PROJECT_FORM = () => {

    const ADD_PROJECT = document.getElementById('add-project');

    ADD_PROJECT.addEventListener('click', () => {

        CLEAN_CONTENT();

        const LOWER_CONTENT = document.querySelector('.lower-content');

        const FORM = document.createElement('form');

        FORM.innerHTML = `
        <form>
            <input type="text" name="title" id="title" placeholder="Project name">
            <hr>
            <div class="lower-form">
                <div class="buttons-area">
                    <button class="interactive-button" id="cancel-button">Cancel</button>
                    <button class="interactive-button" id="add-project-button">Add project</button>    
                </div>
            </div>
        </form>
        `;

        LOWER_CONTENT.appendChild(FORM);

        FORM.classList.add('project-form');

        HANDLE_PROJECT_SUBMIT(FORM);

    });

};

export default PROJECT_FORM;