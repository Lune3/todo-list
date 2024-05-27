import {createP,createImg} from './create';
import {tasksInitialize,loadProject,deleteTask} from './tasks';


class project{
    static projects = [];
    static projectCounter = -1;
    static currentProject = 0;

    constructor(projectName){
        this.projectName = projectName;
    }

    static counterIncrement(){
        this.projectCounter++;
        return this.projectCounter;
    }

    static projectCreate(projectName){
        const projectList = document.querySelector(".projectList");
        const li = document.createElement('li');
        li.className = `p${project.counterIncrement()}`;
        li.append(createP(projectName),createImg('https://www.svgrepo.com/show/463489/delete-alt.svg'));
        projectList.append(li);
        project.projects.push(li);
        console.log(project.projects);
        this.currentProject = this.projectCounter;
        tasksInitialize();
        loadProject(this.currentProject);
    }
}

function projectDialogHandler(){
    const projectDialog = document.querySelector(".projectDialog");
    projectDialog.showModal();
    
    const projectSubmitButton = document.querySelector(".projectForm button");
    const projectInput = document.querySelector("#projectName");
     
    projectSubmitButton.addEventListener("click" , (e) => { 
        e.preventDefault();
        document.querySelector(".projectForm").checkValidity();
        if(document.querySelector(".projectForm").reportValidity()){
            project.projectCreate(projectInput.value);
            projectInput.value = "";
            projectDialog.close();
        }
    },{once : true});
}

function getCurrentProject(){
    return project.currentProject;
}

function setCurrentProject(current){
    project.currentProject = current;
}

function projectEmpty(){
    if(project.projects.length == 0){
        return true;
    }
    else{
        return false;
    }
}


function deleteProject(projectToBeDeleted){
    project.projects.splice(projectToBeDeleted,1);
    deleteTask(projectToBeDeleted);
    project.projects.forEach((project,i) => {
        project.className = `p${i}`;
    });
    project.projectCounter = project.projects.length - 1;
    if(project.projects.length > 0){
        loadProject(0);
    }
}

export {projectDialogHandler,getCurrentProject,projectEmpty,setCurrentProject,deleteProject};