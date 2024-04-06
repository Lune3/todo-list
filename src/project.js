import {createP,createImg} from './create';
import {tasksInitialize} from './tasks';

const projects = [];

class project{
    static projectCounter = 0;
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
        li.append(createP(projectName));
        li.append(createImg('https://www.svgrepo.com/show/463489/delete-alt.svg'));
        projectList.append(li);
        projects.push(li);
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




export {projectDialogHandler};