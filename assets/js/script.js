var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event){
    event.preventDefault();
    
    var taskNameInput = document.querySelector("input[name='take-name']").value;
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = taskNameInput;
    tasksToDoEl.appendChild (listItemEl);
};

formEl.addEventListener("click",createTaskHandler);
