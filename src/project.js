import {createP,createImg} from './create';
import {tasksInitialize} from './tasks';


class project{
    static projects = [];
    static projectCounter = -1;
    constructor(projectName){
        this.projectName = projectName;
    }

    static currentProject = 0;

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
    }
}

function projectDialogHandler(){
    const projectDialog = document.querySelector(".projectDialog");
    projectDialog.showModal();
    
    const projectSubmitButton = document.querySelector(".projectForm > button");
    const projectInput = document.querySelector("input");
    
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

function projectListener(){
    project.projects.forEach(project => {
        project.addEventListener("click", () => {
            console.log(4);
        })
    });
}

function deleteProject(projectToBeDeleted){
    project.projects.splice(projectToBeDeleted,1);
    project.projects.forEach((project,i) => {
        project.className = `p${i}`;
    });
    console.log(project.projects);
}

export {projectDialogHandler,getCurrentProject,projectEmpty,projectListener,setCurrentProject,deleteProject};