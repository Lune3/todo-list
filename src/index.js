import './styleSheet.css';
import {projectDialogHandler,projectEmpty,deleteProject} from './project';
import {taskDialogHandler,loadProject,setTaskComplete} from './tasks';

const projectAdd = document.querySelector('.addProject img');
projectAdd.addEventListener("click",() => {
    projectDialogHandler();
});

const taskAdd = document.querySelector('.addTask img');
taskAdd.addEventListener("click" , () => {
    if(!projectEmpty()){
        taskDialogHandler();
    }
    else{
        alert("Please add a project first");
    }
});

const project =(function(){
    const projectList = document.querySelector(".projectList");
    
    
    function projectListener(){
        projectList.addEventListener("click",(e) => {
            let project = e.target;
            const parentLi = project.parentNode.className;
            if(project.tagName === 'P'){
                loadProject(parseInt(parentLi.substring(1)));
            }
            else if(project.tagName === 'IMG'){
                deleteProject(parseInt(parentLi.substring(1)));
                const deletedLi = document.querySelector(`.p${parentLi.substring(1)}`);
                deletedLi.remove();
            }
        })
    }

    return {projectListener};
})();

const task = (function (){
    const taskGrid = document.querySelector(".taskGrid");
    function taskCompletion(){
        taskGrid.addEventListener("click" , (e) => {
            let element = e.target;
            if(element.tagName === "INPUT"){
                setTaskComplete(e.target.parentNode);
            }
        })
    }
    return {taskCompletion};
})();

task.taskCompletion();
project.projectListener();

