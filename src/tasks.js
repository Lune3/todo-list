import {createP,createHeading} from './create';
import {format,formatDistance} from "date-fns";
import { getCurrentProject,setCurrentProject} from './project';

const tasks = [];

class task{
    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    createTask(){
        const taskGrid = document.querySelector(".taskGrid");
        const newTask = document.createElement("div");
        const date = format(this.dueDate, 'yyyy/MM/dd');
        const today = format(new Date(), 'yyyy/MM/dd');
        const input = document.createElement("input");
        input.type = "checkbox";
        newTask.append(createHeading(2,this.title),createP(this.description),createP(formatDistance(date,today)),createP(this.priority),input);
        let index = getCurrentProject();
        tasks[index].push(newTask);
        console.log(tasks);
        taskGrid.append(newTask);
    }
}

function tasksInitialize(){
    tasks.push([]);
}

function taskDialogHandler(){
    const taskDialog = document.querySelector(".taskDialog");
    taskDialog.showModal();
    
    const taskSubmit = document.querySelector(".taskSubmit");

    taskSubmit.addEventListener("click" , (e) => {
        e.preventDefault();

        document.querySelector(".taskForm").checkValidity();
        if(document.querySelector(".taskForm").reportValidity()){
            const values = [];
            const inputs = document.querySelectorAll(".taskDialog input");
            inputs.forEach(input => {
                values.push(input.value);
            });
            const newTask = new task(...values);
            newTask.createTask();
            taskDialog.close();
        }
    },{once: true});
}

function loadProject(current){
    setCurrentProject(current);
    const taskGrid = document.querySelector(".taskGrid");
    taskGrid.textContent = "";
    taskGrid.append(...tasks[current]);
}

function deleteTask(taskArrToBeDeleted){
    tasks.splice(taskArrToBeDeleted,1);
}

function setTaskComplete(target,taskGrid){
    let current = getCurrentProject();
    tasks[current].forEach((task,i) => {
        if(target == task){
            tasks[current].splice(i,1);
            target.remove();
        }
    });
}



export {tasksInitialize,taskDialogHandler,loadProject,deleteTask,setTaskComplete};