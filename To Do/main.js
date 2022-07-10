let addTaskButton = document.querySelector('.add-task');
let taskMaker = document.getElementById('input-task');
let tasks = document.querySelector('.tasks');
let tasksContainer = document.querySelector('.tasks-container')
let completedTasksCount = document.querySelector('#completed-tasks-no');
let completedTasks = document.querySelector('.completed-tasks-container .tasks');
let tasksCount =document.querySelector('#tasks-no');


window.onload =() => taskMaker.focus();

addTaskButton.addEventListener('click', function addTask(){
    console.log(taskMaker.value);
    if(taskMaker.value !== '' && taskMaker.value !== null) {
        let noTasksDiv = document.querySelector('.no-tasks-msg');

        if(document.body.contains(document.querySelector('.no-tasks-msg'))){
            noTasksDiv.remove();
        }
        
        let fragment = document.createDocumentFragment();
        let task = document.createElement('li');
        task.classList.add('task');
        task.innerHTML = `${taskMaker.value} <span class="done">&check;</span> <span class="delete">X</span>`;
        fragment.append(task);
        tasks.appendChild(fragment);
        taskMaker.value = '';
        tasksCount.textContent = parseInt(tasksCount.textContent) +1;
        deleteTask();
        CompleteTask();
        taskMaker.focus();
        
    }
})


function deleteTask(){ 
    
    let removeTaskBtns = Array.from(document.querySelectorAll('.delete'));
    removeTaskBtns.forEach(btn=>{btn.addEventListener('click' ,function deleteTask(e) {
        e.currentTarget.parentNode.remove();
        tasksCount.textContent = parseInt(tasksCount.textContent) -1;
        noTasks();
    })})
    
    
    
}

function CompleteTask(){
    let CompleteTaskBtns = Array.from(document.querySelectorAll('.done'));
    let fragment = document.createDocumentFragment();
    CompleteTaskBtns.forEach(btn=>{btn.addEventListener('click' ,function completeTask(e) {
        let fragment = document.createDocumentFragment();
        let task = document.createElement('li');
        task.classList.add('task');
        task.textContent = `${String(e.currentTarget.parentNode.firstChild.data)}`;
        fragment.append(task);
        completedTasks.appendChild(fragment);
        e.currentTarget.parentNode.remove();
        tasksCount.textContent = parseInt(tasksCount.textContent) -1;
        completedTasksCount.textContent = parseInt(completedTasksCount.textContent) +1;

        noTasks();
    })})
    
}

function noTasks(){
    if(tasks.childElementCount == 0){
        let noTasksDiv = document.createElement('div');
        noTasksDiv.classList.add('no-tasks-msg');
        noTasksDiv.textContent='You Have No Tasks';
        tasksContainer.appendChild(noTasksDiv);
    }
}