let todoList = document.getElementById("todo-list")
let todoText = document.getElementById("addTodo")
let tasks = JSON.parse(localStorage.getItem('tasks'))

let localList = []

window.addEventListener('load', function load() {
    tasks.forEach(task => {
        createTodo(task.task)
    })
})

function catchEnter(e){
    if (e.keyCode == 13) { // Enter Keycode = 13
        if (todoText.value.length != 0) {
            createTodo(todoText.value)
        } else {
            alert("You can't leave the input is empty.")
        }
    } 
}

function createTodo(text) {

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

    let textPara = document.createTextNode(text)
    para.appendChild(textPara)

    const buttons = document.createElement("div")
    buttons.classList.add("d-flex", "align-items-center", "justify-content-center", "gap-4")
    bottomCol.appendChild(buttons)

    //Set object to localStorage
    let liItem = {'task': text}
    localList.push(liItem)
    localStorage.setItem('tasks', JSON.stringify(localList))

    const deleteButton = document.createElement("i")
    deleteButton.classList.add("todo-icon", "bi-x-circle")
    deleteButton.addEventListener('click', function deleteTodo(event) {
        let listItems = document.querySelectorAll(".todo-text")
        localList = []

        //Add all li items to localList except removed li item
        listItems.forEach(item => {
            if (text != item.innerHTML) {
                let listItem = {'task': item.innerHTML}
                localList.push(listItem)
            }
        })

        localStorage.setItem('tasks', JSON.stringify(localList))
        todoItem.remove()
    })
    buttons.appendChild(deleteButton)

    todoList.append(todoItem) //Insert in UL

    todoText.value = "" //Clear #addTodo input
}