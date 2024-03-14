import { createTask } from "./create.js";
import { editTask } from "./edit.js";
import { projects } from "../sidebar/projects.js";

export function createTaskModal() {
    const body = document.querySelector('body');

    const dialog = document.createElement('dialog');
    dialog.id = 'taskDialog';
    dialog.classList.add('dialog');

    dialog.appendChild(createModalHeader());
    dialog.appendChild(createModalForm());

    body.appendChild(dialog);
}

function createModalHeader() {
    const header = document.createElement('header');
    header.classList.add('dialogHeader');

    const title = document.createElement('p');
    title.textContent = 'Add a new task';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.autofocus = true;

    closeBtn.addEventListener('click', () => {
        const dialog = document.getElementById('taskDialog');
        dialog.close();
    })

    header.appendChild(title);
    header.appendChild(closeBtn);

    return header;
}

function createModalForm() {
    const form = document.createElement('form');
    form.classList.add('dialogForm');

    const divTitle = document.createElement('div');
    divTitle.classList.add('inputDiv');

    // Task Title
    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'inputTaskTitle';
    inputTitle.name = 'inputTaskTitle';
    inputTitle.required = true;

    const labelTitle = document.createElement('label');
    labelTitle.setAttribute('for', 'inputTaskTitle');
    labelTitle.textContent = 'Task Title';

    divTitle.appendChild(inputTitle);
    divTitle.appendChild(labelTitle);

    form.appendChild(divTitle);

    // Task Description
    const divDescription = document.createElement('div');
    divDescription.classList.add('inputDiv');

    const inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    inputDescription.id = 'inputTaskDescription';
    inputDescription.name = 'inputTaskDescription';
    inputDescription.required = true;

    const labelDescription = document.createElement('label');
    labelDescription.setAttribute('for', 'inputTaskDescription');
    labelDescription.textContent = 'Task Description';

    divDescription.appendChild(inputDescription);
    divDescription.appendChild(labelDescription);

    form.appendChild(divDescription);


    // Task Priority

    const ulPriority = document.createElement('ul');
    ulPriority.classList.add('ulPriority');

    // High Priority
    const liCheckboxHigh = document.createElement('li');

    const checkboxHigh = document.createElement('input');
    checkboxHigh.type = 'radio';
    checkboxHigh.classList.add('checkboxPriorityTask');
    checkboxHigh.name = 'priority';
    checkboxHigh.id = 'highPriorityTask';
    checkboxHigh.value = 'High';
    checkboxHigh.checked = true;
    checkboxHigh.required = true;

    const labelHigh = document.createElement('label');
    labelHigh.setAttribute('for', 'highPriorityTask');
    labelHigh.textContent = 'High';

    liCheckboxHigh.appendChild(checkboxHigh);
    liCheckboxHigh.appendChild(labelHigh);

    ulPriority.appendChild(liCheckboxHigh);

    // Mid Priority
    const liCheckboxMid = document.createElement('li');

    const checkboxMid = document.createElement('input');
    checkboxMid.type = 'radio';
    checkboxMid.classList.add('checkboxPriorityTask');
    checkboxMid.name = 'priority';
    checkboxMid.id = 'midPriorityTask';
    checkboxMid.value = 'Medium';

    const labelMid = document.createElement('label');
    labelMid.setAttribute('for', 'midPriorityTask');
    labelMid.textContent = 'Medium';

    liCheckboxMid.appendChild(checkboxMid);
    liCheckboxMid.appendChild(labelMid);

    ulPriority.appendChild(liCheckboxMid);

    // Low Priority
    const liCheckboxLow = document.createElement('li');

    const checkboxLow = document.createElement('input');
    checkboxLow.type = 'radio';
    checkboxLow.classList.add('checkboxPriorityTask');
    checkboxLow.name = 'priority';
    checkboxLow.id = 'lowPriorityTask';
    checkboxLow.value = 'Low';

    const labelLow = document.createElement('label');
    labelLow.setAttribute('for', 'lowPriorityTask');
    labelLow.textContent = 'Low';

    liCheckboxLow.appendChild(checkboxLow);
    liCheckboxLow.appendChild(labelLow);

    ulPriority.appendChild(liCheckboxLow);

    form.appendChild(ulPriority);

    // Project DueDate
    const divDueDate = document.createElement('div');
    divDueDate.classList.add('inputDiv');

    /*const date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1) <= 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let day = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate();*/

    const inputDueDate = document.createElement('input');
    inputDueDate.type = 'date';
    //inputDueDate.min = `${year}-${month}-${day}`;
    inputDueDate.id = 'inputTaskDueDate';
    inputDueDate.name = 'inputTaskDueDate';
    inputDueDate.required = true;

    divDueDate.appendChild(inputDueDate);

    form.appendChild(divDueDate);

    // Submit Button
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitButton.id = 'submitTask';


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const dialog = document.getElementById('taskDialog');
        const content = document.getElementById('content');

        if(dialog.dataset.dialogType === 'create') {
            createTask(content.dataset.projectId);
        }
        else if(dialog.dataset.dialogType === 'edit') {
            editTask(content.dataset.projectId, form.dataset.taskId);
        }

        inputTitle.value = '';
        inputDescription.value = '';
        checkboxHigh.checked = true;
        inputDueDate.value = '';
        
        dialog.close();
    });

    form.appendChild(submitButton);

    return form;
}

export function createTaskDom(projectId, id) {
    const title = projects[projectId].todos[id].title;
    const description = projects[projectId].todos[id].description;
    const priority = projects[projectId].todos[id].priority;
    const dueDate = projects[projectId].todos[id].dueDate;

    const tasksDiv = document.getElementById('tasksDiv');

    const task = document.createElement('div');
    task.classList.add('task');
    task.dataset.taskId = id;
    if(priority === 'High') { task.classList.add('highTask'); }
    else if(priority === 'Medium') { task.classList.add('mediumTask'); }
    else if(priority === 'Low') { task.classList.add('lowTask'); }
    task.addEventListener('click', () => {
        const dialog = document.getElementById('taskDialog');
        dialog.dataset.dialogType = 'edit';

        const form = dialog.querySelector('form');
        form.dataset.taskId = id;
        
        const dialogTitle = dialog.querySelector('.dialogHeader p');
        dialogTitle.textContent = 'Edit task';

        const inputTitle = document.getElementById('inputTaskTitle');
        //projects[projectId].todos[projectId].title
        inputTitle.value = `${title}`;

        const inputDescription = document.getElementById('inputTaskDescription');
        inputDescription.value = `${description}`;

        const priorityOptions = document.getElementsByClassName('checkboxPriorityTask')
        const priorityOptionsArr = Array.from(priorityOptions);
        priorityOptionsArr.forEach((option) => {
            if(option.value === priority) { option.checked = true; }
            else { option.checked = false; }
        });

        const inputDueDate = document.getElementById('inputTaskDueDate');
        inputDueDate.value = `${dueDate}`;

        dialog.showModal();
    });

    const taskDone = document.createElement('input');
    taskDone.type = 'checkbox';
    if(projects[projectId].todos[id].done) { taskDone.checked = true; }
    taskDone.classList.add('taskDone');
    taskDone.addEventListener('click', (e) => {
        e.stopPropagation();
        return projects[projectId].todos[id].done = !projects[projectId].todos[id].done;
    });

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('taskTitle');
    taskTitle.textContent = `${title}`;

    const taskDate = document.createElement('p');
    taskDate.classList.add('taskDate');
    taskDate.textContent = `${dueDate}`;

    task.appendChild(taskDone);
    task.appendChild(taskTitle);
    task.appendChild(taskDate);

    tasksDiv.insertBefore(task, tasksDiv.lastChild);
}

export function editTaskDom(id, title, description, priority, dueDate, projectId) {
    let myTask = document.querySelector(`.task[data-task-id="${id}"]`);
    myTask.classList.remove('highTask', 'mediumTask', 'lowTask');
    myTask.classList.add(`${priority.toLowerCase()}Task`);

    const myTaskTitle = myTask.querySelector('.taskTitle');
    myTaskTitle.textContent = `${title}`;

    const myTaskDueDate = myTask.querySelector('.taskDate');
    myTaskDueDate.textContent = `${dueDate}`;

    const refreshMyTask = myTask.cloneNode(true);
    myTask.parentNode.replaceChild(refreshMyTask, myTask);
    myTask = refreshMyTask.cloneNode(true);
    refreshMyTask.parentNode.replaceChild(myTask, refreshMyTask);
    myTask.addEventListener('click', () => {
        const dialog = document.getElementById('taskDialog');
        dialog.dataset.dialogType = 'edit';

        const form = dialog.querySelector('form');
        form.dataset.taskId = id;
        
        const dialogTitle = dialog.querySelector('.dialogHeader p');
        dialogTitle.textContent = 'Edit task';

        const inputTitle = document.getElementById('inputTaskTitle');
        //projects[projectId].todos[projectId].title
        inputTitle.value = `${title}`;

        const inputDescription = document.getElementById('inputTaskDescription');
        inputDescription.value = `${description}`;

        const priorityOptions = document.getElementsByClassName('checkboxPriorityTask')
        const priorityOptionsArr = Array.from(priorityOptions);
        priorityOptionsArr.forEach((option) => {
            if(option.value === priority) { option.checked = true; }
            else { option.checked = false; }
        });

        const inputDueDate = document.getElementById('inputTaskDueDate');
        inputDueDate.value = `${dueDate}`;

        dialog.showModal();
    });

    const taskDone = myTask.querySelector('.taskDone');
    if(projects[projectId].todos[id].done) { taskDone.checked = true; }
    taskDone.classList.add('taskDone');
    taskDone.addEventListener('click', (e) => {
        e.stopPropagation();
        return projects[projectId].todos[id].done = !projects[projectId].todos[id].done;
    });
}

export function deleteAllTasksDom() {
    const tasks = document.getElementsByClassName('task');
    if(tasks.length === 0) { return; }
    const tasksArr = Array.from(tasks);
    return tasksArr.forEach((task) => {
        task.remove();
    });
}