const TODO_FACTORY = (title, description, dueDate, priority) => {

    return { 

        title,
        description,
        dueDate,
        priority,
        id: Date.now().toString(),
    
    };

};

export default TODO_FACTORY;