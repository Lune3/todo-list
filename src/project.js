import {createP,createHeading,createImg} from './create';

const projects = []

class project{
    static projectCounter = 0;
    constructor(projectName){
        this.projectName = projectName;
    }

    static counterIncrement(){
        this.projectCounter++;
        return this.projectCounter;
    }
}

function projectDialogHandler(){
    const projectDialog = document.querySelector(".projectDialog");
    projectDialog.showModal();
    
    const projectSubmitButton = document.querySelector("form > button");
    const projectInput = document.querySelector("input");

    projectSubmitButton.addEventListener("click" , () => { 
        console.log(4);
        projectInput.value = '';
        projectDialog.close();

    }) 


}

function projectCreate(projectName){
    const projectList = document.querySelector(".projectList");
    const li = document.createElement('li');
    li.className = `p${project.counterIncrement()}`;
    li.textContent = `${projectName}`;
    li.append(createImg('https://www.svgrepo.com/show/463489/delete-alt.svg'));
    projectList.append(li);
}

export {projectDialogHandler};