const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){   
if (inputBox.value === ""){
    alert("Please Add Any Tasks")
}else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u274C"
    li.appendChild(span)
}
inputBox.value=""
saveData();
}
    
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false); 


function saveData(){
localStorage.setItem("data",listContainer.innerHTML)
}
    
function show(){
listContainer.innerHTML = localStorage.getItem("data")
}
    
    show()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //     let taskInput = document.getElementById('task-input');
    //     let addTaskBtn = document.getElementById('add-task-btn');
    //     let taskList = document.getElementById('task-list');
    //     // Initialize task array and load from localStorage
    //     let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    //     // Display tasks on page load
    //     displayTasks();
    //     // Add task button click event
    //     addTaskBtn.addEventListener('click', addTask);
    //     // Task input key press event (enter key)
    //     taskInput.addEventListener('keypress', (e) => {
    //         if (e.key === 'Enter') {
    //             addTask();
    //         }
    //     });
    //     // Functions
    //     function addTask() {
    //         let taskText = taskInput.value.trim();
    //         if (taskText) {
    //             tasks.push({ text: taskText, completed: false });
    //             localStorage.setItem('tasks', JSON.stringify(tasks));
    //             displayTasks();
    //             taskInput.value = '';
    //         }
    //     }
    //     function displayTasks() {
    //         taskList.innerHTML = '';
    //         tasks.forEach((task, index) => {
    //             let taskHtml = `
    //   <li>
    //     <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
    //     <span ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.text}</span>
    //     <button onclick="deleteTask(${index})">Delete</button>
    //   </li>
    // `;
    //             taskList.insertAdjacentHTML('beforeend', taskHtml);
    //         });
    //     }
    //     function toggleTask(index) {
    //         tasks[index].completed = !tasks[index].completed;
    //         localStorage.setItem('tasks', JSON.stringify(tasks));
    //         displayTasks();
    //     }
    //     function deleteTask(index) {
    //         tasks.splice(index, 1);
    //         localStorage.setItem('tasks', JSON.stringify(tasks));
    //         displayTasks();
    //     }
