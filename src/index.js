import './styleSheet.css';
import {createP,createHeading} from './create';
import {projectDialogHandler} from './project';

const projectAdd = document.querySelector('img[src="https://www.svgrepo.com/show/251946/plus.svg"]');
projectAdd.addEventListener("click",() => {
    projectDialogHandler();
})

