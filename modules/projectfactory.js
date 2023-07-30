const PROJECT_FACTORY = (title) => {

    return { 

        title,
        id: Date.now().toString(),
        TODOS: [],
        
    };
    
};

export default PROJECT_FACTORY;