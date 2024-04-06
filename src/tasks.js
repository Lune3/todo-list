const tasks = [];

class task{
    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }


}

function tasksInitialize(){
    tasks.push([]);
}

function taskDialogHandler(){
    const taskDialog = document.querySelector(".taskDialog");
    taskDialog.showModal();
    
    const taskSubmit = document.querySelector(".taskSubmit");

    taskSubmit.addEventListener("click" , (e) => {
        e.preventDefault();

        document.querySelector(".taskForm").checkValidity();
        if(document.querySelector(".taskForm").reportValidity()){
            const values = [];
            const inputs = document.querySelectorAll(".taskDialog input");
            inputs.forEach(input => {
                values.push(input.value);
            });
            const newTask = new task(...values);
            tasks.push(newTask);
            taskDialog.close();
        }
    },{once: true});
}

export {tasksInitialize,taskDialogHandler};