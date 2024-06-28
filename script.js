const taskArray = []

let addTask = (ele) => {
    if (event.keyCode === 13) {

        taskArray.push(ele.value)
        addTaskTolist()
    }

}
let addTaskTolist = () => {
    let listDiv = document.getElementById("taskContainer")
    listDiv.innerHTML = ""
    for(let task of taskArray){
        let newTask = document.createElement("task")
        newTask.innerHTML = `<input type="checkbox" class="task">${task}</input>`
        listDiv.appendChild(newTask)
    }
}
