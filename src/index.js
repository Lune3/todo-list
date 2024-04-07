import './styleSheet.css';
import {projectDialogHandler,projectEmpty} from './project';
import {taskDialogHandler} from './tasks';

const projectAdd = document.querySelector('.addProject img');
projectAdd.addEventListener("click",() => {
    projectDialogHandler();
})

const taskAdd = document.querySelector('.addTask img');
taskAdd.addEventListener("click" , () => {
    if(!projectEmpty()){
        taskDialogHandler();
    }
    else{
        alert("Please add a project first");
    }
})


