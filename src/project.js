import {createP,createHeading} from './create';

const projects = []

class project{
    constructor(projectName){
        this.projectName = projectName;
    }
}

function projectDialogHandler(){
    const projectDialog = document.querySelector(".projectDialog");
    projectDialog.showModal();
    const projectSubmitButton = document.querySelector(".projectDialog button");
    projectSubmitButton.addEventListener("click" , () => { 
        const userProject = new project(document.querySelector("#projectName").value);
        projects.push(userProject);
        console.log(projects);
        projectDialog.close();
    }) 
}

export {projectDialogHandler};