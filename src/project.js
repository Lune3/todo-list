import {createP,createImg} from './create';
import {tasksInitialize} from './tasks';


class project{
    static projects = [];
    static projectCounter = -1;
    constructor(projectName){
        this.projectName = projectName;
    }

    static currentProject = 1;

    static counterIncrement(){
        this.projectCounter++;
        return this.projectCounter;
    }

    static projectCreate(projectName){
        const projectList = document.querySelector(".projectList");
        const li = document.createElement('li');
        li.className = `p${project.counterIncrement()}`;
        li.append(createP(projectName));
        li.append(createImg('https://www.svgrepo.com/show/463489/delete-alt.svg'));
        projectList.append(li);
        project.projects.push(li);
        console.log(project.projects);
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

export {projectDialogHandler,getCurrentProject,projectEmpty,projectListener};