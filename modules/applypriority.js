const APPLY_PRIORITY = (TODO, TODO_ELEMENT) => {

    if (TODO.priority === 'High') {

        TODO_ELEMENT.setAttribute('id', 'high-priority-todo');

    } else if (TODO.priority === 'Medium') {

        TODO_ELEMENT.setAttribute('id', 'medium-priority-todo');

    } else {

        TODO_ELEMENT.setAttribute('id', 'low-priority-todo');

    };  
    
    return TODO_ELEMENT;

};

export default APPLY_PRIORITY;