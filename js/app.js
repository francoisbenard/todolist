
// <div class="todo">
//   <p>Lorem ipsum dolor sit amet.</p>
//   <button>&times;</button>
// </div>

class Todo {
    constructor(txt) {
        this.txt = txt;
        this.done = false;
       //console.log(this);
    }
}

let todos = [];

if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
    for (let todo of todos) {
        createTodoTag(todo.txt);
    }
}

function createTodoTag(text) {
    // DECLARATIONS et CREATION DES ELEMENT HTML
    const todoContainerTag = document.createElement("div");
    const labelTag = document.createElement("p");
    const btCloseTag = document.createElement("button");

    // CONFIGURATIONS des ELEMENTS  HTML (contenu et ou classe)
    todoContainerTag.className = "todo";
    labelTag.innerText = text;
    btCloseTag.innerHTML = "&times;";
    btCloseTag.addEventListener('click', function () {
       todoContainerTag.remove();
    });

    // IMBRICATIONS des ELEMENTS DANS Le DIV container
    todoContainerTag.appendChild(labelTag);
    todoContainerTag.appendChild(btCloseTag);

    // INJECTIONS DANS LE DOM
    document.querySelector(".todos").appendChild(todoContainerTag);
}

document.formTodo.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = document.formTodo.inputTodo.value;
    if (userInput.length > 3) {
        const todo = new Todo(userInput);
        createTodoTag(todo.txt);
        todos.push(todo);
        // console.log(todos);
        // console.log(JSON.stringify(todos));
        localStorage.setItem("todos", JSON.stringify(todos));
        document.formTodo.reset();
    }
});
