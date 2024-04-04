const tasks = [];

function tasksInitialize(){
    tasks.push(-1);
}

function taskDialogHandler(){
    const taskDialog = document.querySelector(".taskDialog");
    taskDialog.showModal();
    
    const taskSubmit = document.querySelector("taskDialog > ul > button");

    taskSubmit.addEventListener("click" , (e) => {
        e.preventDefault();

        document.querySelector("form").checkValidity();
        if(document.querySelector("form").reportValidity()){
            taskDialog.close();
        }
    })
}

export {tasksInitialize,taskDialogHandler};