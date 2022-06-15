// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');




// EVENT LISTENERS
document.addEventListener('DOMContentLoaded' , gettodos)
todoButton.addEventListener('click' , addTodo);
todoList.addEventListener('click' , deleteCheck);
filterOption.addEventListener('click' , filterTodo);




// FUNCTIONS

        // ADD FUNCTION
        function addTodo(event){

            // Prevent Default
            event.preventDefault();


            // Create Todo Div
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo');
            // Create Li
            const newTodo = document.createElement('li');
            newTodo.classList.add('todo-item');
            newTodo.innerHTML = todoInput.value.italics();

            // ADD TODO TO LOCAL STORAGE
            savelocalTodos(todoInput.value);
    
            todoDiv.appendChild(newTodo);
            // Check mark button
            const completedButton = document.createElement('button');
            completedButton.innerHTML = '<i class="fas fa-check"></i>';
            completedButton.classList.add('complete-btn');
            todoDiv.appendChild(completedButton);
            // Delete button
            const trashButton = document.createElement('button');
            trashButton.innerHTML = '<i class="fas fa-trash"></i>';
            trashButton.classList.add('trash-btn');
            todoDiv.appendChild(trashButton);
            // Append div to ul
            todoList.appendChild(todoDiv);

            //inputun icini sifirlamaq
            todoInput.value = "";
            
        }

        // DELETE FUNCTION
        function deleteCheck(e){
            const item = e.target;
            if(item.classList[0] === 'trash-btn')
            {
                const todo = item.parentElement;
                // ADD ANIMATION FOR DELETE
                todo.classList.add('fall')
                removelocalTodos(todo)
                // ADD EVENT AFTER TRANSITION FINISHED
                todo.addEventListener('transitionend' , function(){
                    todo.remove();
                })
            }

            //CHECK FUNCTION
            if(item.classList[0] === 'complete-btn')
            {
                const todo = item.parentElement;
                todo.classList.toggle('completed');
            }
        }



        // FILTER FUNCTION
        function filterTodo(e){
            const todos = todoList.childNodes;
            todos.forEach(function(todo){
                switch(e.target.value){
                    case 'all':
                        todo.style.display = 'flex';
                        break;
                    case 'completed':
                        if(todo.classList.contains('completed')){
                            todo.style.display = 'flex'
                        }else{
                            todo.style.display = 'none'
                        };
                        break;

                    case 'uncompleted':
                        if(!todo.classList.contains('completed')){
                            todo.style.display = 'flex'
                        }else{
                            todo.style.display = 'none'
                        };
                }
            })
        }

        //LOKAL STORAGEYE TODOLARI ELAVE ETMEK
        function savelocalTodos(todo){
            let todos;
            if(localStorage.getItem('todos') === null){
                todos = [];
            }
            else{
                todos = JSON.parse(localStorage.getItem('todos'));
            }
            todos.push(todo);
            localStorage.setItem('todos' , JSON.stringify(todos))
        }

        //LOCAL STORAGEDEKILERI UI-A ELAVE ETMEK
        function gettodos(){
            let todos;
            if(localStorage.getItem('todos') === null){
                todos = [];
            }
            else{
                todos = JSON.parse(localStorage.getItem('todos'));
            }

            todos.forEach(function(todo){
                    // Create Todo Div
                    const todoDiv = document.createElement('div');
                    todoDiv.classList.add('todo');
                    // Create Li
                    const newTodo = document.createElement('li');
                    newTodo.classList.add('todo-item');
                    newTodo.innerHTML = todo;
                    todoDiv.appendChild(newTodo);
                    // Check mark button
                    const completedButton = document.createElement('button');
                    completedButton.innerHTML = '<i class="fas fa-check"></i>';
                    completedButton.classList.add('complete-btn');
                    todoDiv.appendChild(completedButton);
                    // Delete button
                    const trashButton = document.createElement('button');
                    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
                    trashButton.classList.add('trash-btn');
                    todoDiv.appendChild(trashButton);
                    // Append div to ul
                    todoList.appendChild(todoDiv);
            });

        }

        // LOKAL STORAGEDEN UI VASITESI ILE SILME
        function removelocalTodos(todo){
            let todos;
            if(localStorage.getItem('todos') === null){
                todos = [];
            }
            else{
                todos = JSON.parse(localStorage.getItem('todos'));
            }

            const todoIndex = todo.children[0].innerText;
            todos.splice(todos.indexOf(todoIndex) , 1)
            localStorage.setItem('todos' , JSON.stringify(todos))

        }
