    let todolist = [];

     renderTodoList();

    function renderTodoList(){
            let todoListElement = '';
            for(let i = 0; i < todolist.length; i++){
                let todo = todolist[i];
                let html = `
                <p>
                ${todo} 
                <button onclick ="
                 todolist.splice(${i}, 1);
                 renderTodoList();
                ">Delete</button>
                </p>`;
                todoListElement += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListElement;
    }


    function addTodo(){
        const inputElement= document.querySelector('.js-Todo-List');
        const name = inputElement.value;
        todolist.push(name);
        console.log(todolist);

        renderTodoList();
    }