const CANCEL_FORM = (FORM) => {

    const CANCEL_BUTTON = FORM.querySelector('#cancel-button');

    CANCEL_BUTTON.addEventListener('click', (event) => {

        event.preventDefault();

        FORM.remove();

    });

};

export default CANCEL_FORM;