
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector(".todo-list");
const filterOptions = document.querySelector(".filter-todo");


todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOptions.addEventListener('click',filterTodo);


function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item')
    newTodo.innerText = todoInput.value

    todoDiv.appendChild(newTodo)


    const completedButton = document.createElement('button')
    completedButton.innerHTML = "<i class = 'fas fa-check' > </i>"
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = "<i class = 'fas fa-trash' > </i>"
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
    todoInput.value = ''
}


function deleteCheck(e) {
    const item = e.target
    const list = item.classList
    const todo = item.parentElement
    
    if (list[0] === 'trash-btn') {
        todo.remove()
    }

    if (list[0] === 'complete-btn') {
        todo.classList.toggle('completed')
    }
}


function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
            case 'all':
                todo.style.display= 'flex';
                break
            case 'completed' :
                if (todo.classList.contains('completed')){
                    todo.style.display ='flex'
                }
                else {
                    todo.style.display ='none'
                }
                break
            
            case 'uncompleted':
                if (todo.classList.contains('completed')===false){
                    todo.style.display = 'flex'
                }
                else{todo.style.display = 'none'}


        }
    })
}