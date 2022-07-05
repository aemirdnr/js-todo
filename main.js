
function catchEnter(e){
    if (e.keyCode == 13) { // Enter Keycode = 13
        createTodo()
    }
}

function createTodo() {
    let todoList = document.getElementById("todo-list")
    let todoText = document.getElementById("addTodo")
    
    //Check the input is empty or not
    if (todoText.value.length != 0) {

        //Create the To-do object
        const todoItem = document.createElement("li")
        todoItem.classList.add("container", "list-unstyled", "my-3")

        const row = document.createElement("div")
        row.classList.add("row", "todo-box")
        todoItem.appendChild(row)

        const topCol = document.createElement("div")
        topCol.classList.add("col-12", "col-md-10")
        row.appendChild(topCol)

        const bottomCol = document.createElement("div")
        bottomCol.classList.add("col-12", "col-md-2", "mt-3", "mt-md-0")
        row.appendChild(bottomCol)

        const para = document.createElement("p")
        para.classList.add("todo-text", "m-0", "text-break")
        para.addEventListener('click', function finishTodo(event) {
            para.classList.add("todo-text-done")
            para.classList.remove("todo-text")
            todoList.after(todoItem)
        })
        topCol.appendChild(para)

        let text = document.createTextNode(todoText.value)
        para.appendChild(text)

        const buttons = document.createElement("div")
        buttons.classList.add("d-flex", "align-items-center", "justify-content-center", "gap-4")
        bottomCol.appendChild(buttons)

        const deleteButton = document.createElement("i")
        deleteButton.classList.add("todo-icon", "bi-x-square")
        buttons.appendChild(deleteButton)

        todoList.append(todoItem)

        todoText.value = "" //Clear #addTodo input
    } else {
        alert("You can't leave the input is empty.")
    }
}