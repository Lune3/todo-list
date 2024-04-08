import './styleSheet.css';
import {projectDialogHandler,projectEmpty} from './project';
import {taskDialogHandler,loadProject} from './tasks';

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

const project =(function(){
    const projectList = document.querySelector(".projectList");
    
    
    function projectListener(){
        projectList.addEventListener("click",(e) => {
            let project = e.target;
            if(project.tagName === 'P'){
                const parentLi = project.parentNode.className;
                loadProject(parseInt(parentLi.substring(1)));
            }
        })
    }

    return {projectListener};
})();

project.projectListener();

