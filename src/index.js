import './styleSheet.css';
import {createP,createHeading} from './create';
import {projectDialogHandler} from './project';

const projectAdd = document.querySelector(".addProject > img");
projectAdd.addEventListener("click",() => {
    projectDialogHandler();
})

