const todoInput = document.querySelector(".todo");
const addBtn = document.querySelector('.addTodo-btn');
const todoDiv = document.querySelector('.todo-div');

const todoArr = [];


addBtn.addEventListener("click", ()=> {
    const todoInputValue =  todoInput.value;

    if(todoInputValue !== ''){
        todoArr.push(todoInputValue);
        loadTodos(); 
        todoInput.value = "";   
    }else {
        alert("ewrw");
    }

  
})

const loadTodos = () => {
    let html = '';
    todoArr.forEach((todo, index) => {
        html += `<div class="inner-div">
                        <p>${todo}</p>
                        <button class = "deleteBtn" data-index="${index}">Delete</button>
                </div>`;   
    });

    todoDiv.innerHTML = html; 

    const deleteBtns = document.querySelectorAll('.deleteBtn');

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', ()=> {
            console.log("as");
            
            const index = btn.getAttribute('data-index');
            todoArr.splice(index, 1);
            loadTodos();
        })
    }) 
};


   
