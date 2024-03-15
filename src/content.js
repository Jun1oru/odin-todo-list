import { projects, deleteProject } from "./sidebar/projects.js";
import { createTaskDom } from "./task/task-dom.js";
import { deleteAllTasksDom } from "./task/task-dom.js";

function createContent() {
    const content = document.createElement('div');
    content.id = 'content';
    
    const detailsDiv = document.createElement('div');
    detailsDiv.id = 'contentDetailsDiv';

    const contentProjectTitle = document.createElement('p');
    contentProjectTitle.id = 'contentProjectTitle';
    contentProjectTitle.textContent = `Test`;

    const divProjectPriorityDueDate = document.createElement('div');
    divProjectPriorityDueDate.id = 'projectPriorityDueDateDiv';

    const contentProjectPriority = document.createElement('p');
    contentProjectPriority.id = 'contentProjectPriority';
    contentProjectPriority.textContent = 'High Priority';

    const contentProjectDueDate = document.createElement('p');
    contentProjectDueDate.id = 'contentProjectDueDate';
    contentProjectDueDate.textContent = 'Due Date: 2024-03-08';

    divProjectPriorityDueDate.appendChild(contentProjectPriority);
    divProjectPriorityDueDate.appendChild(contentProjectDueDate);

    detailsDiv.appendChild(contentProjectTitle);
    detailsDiv.appendChild(divProjectPriorityDueDate);

    const tasksDiv = document.createElement('div');
    tasksDiv.id = 'tasksDiv';

    const addTaskButton = document.createElement('button');
    addTaskButton.id = 'addTaskBtn';
    addTaskButton.textContent = 'Add a new task';
    addTaskButton.type = 'button';
    addTaskButton.addEventListener('click', () => {
        const dialog = document.getElementById('taskDialog');
        dialog.dataset.dialogType = 'create';

        const dialogTitle = dialog.querySelector('.dialogHeader p');
        dialogTitle.textContent = 'Add a new task';

        const dialogInputs = dialog.querySelectorAll('.dialogForm input');
        const dialogInputsArr = Array.from(dialogInputs);
        dialogInputsArr.forEach((input) => {
            if(input.type === 'submit' || input.type === 'radio') { return; }
            input.value = '';
        });

        dialog.showModal();
    });

    tasksDiv.appendChild(addTaskButton);

    let deleteButton = document.createElement('button');
    deleteButton.id = 'deleteProjectBtn';
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';

    content.appendChild(detailsDiv);
    content.appendChild(tasksDiv);
    content.appendChild(deleteButton);
    return content;
}

export function loadProjectIntoContent(projectId) {
    const content = document.getElementById('content');
    content.dataset.projectId = projectId;

    const projectTitle = projects[projectId].title;
    const projectDescription = projects[projectId].description;
    const projectPriority = projects[projectId].priority;
    const projectDueDate = projects[projectId].dueDate;

    const titleElement = document.getElementById('contentProjectTitle');
    titleElement.textContent = `${projectTitle}`;

    const priorityElement = document.getElementById('contentProjectPriority');
    priorityElement.textContent = `${projectPriority} Priority`;

    const dateElement = document.getElementById('contentProjectDueDate');
    dateElement.textContent = `Due Date: ${projectDueDate}`;

    deleteAllTasksDom();
    const projectTasks = Array.from(projects[projectId].todos);
    projectTasks.forEach((task) => {
        if(task === undefined) { return; };
        createTaskDom(projectId, task.id);
    });

    let detailsDiv = document.getElementById('contentDetailsDiv');
    const refreshDetailsDiv = detailsDiv.cloneNode(true);
    detailsDiv.parentNode.replaceChild(refreshDetailsDiv, detailsDiv);
    detailsDiv = refreshDetailsDiv.cloneNode(true);
    refreshDetailsDiv.parentNode.replaceChild(detailsDiv, refreshDetailsDiv);
    detailsDiv.addEventListener('click', () => {
        const dialog = document.getElementById('projectDialog');
        dialog.dataset.dialogType = 'edit';
        
        const dialogTitle = dialog.querySelector('.dialogHeader p');
        dialogTitle.textContent = 'Edit project';

        const inputTitle = document.getElementById('inputProjectTitle');
        inputTitle.value = `${projectTitle}`;

        const inputDescription = document.getElementById('inputProjectDescription');
        inputDescription.value = `${projectDescription}`;

        const priorityOptions = document.getElementsByClassName('checkboxPriority');
        const priorityOptionsArr = Array.from(priorityOptions);
        priorityOptionsArr.forEach((option) => {
            if(option.value === projectPriority) { option.checked = true; }
            else { option.checked = false; }
        });

        const inputDueDate = document.getElementById('inputProjectDueDate');
        inputDueDate.value = `${projectDueDate}`;

        dialog.showModal();
    });

    let deleteButton = document.getElementById('deleteProjectBtn');

    if(projectId === 0) {
        //if(content.lastChild !== deleteButton) { return; }
        //content.removeChild(content.lastChild);
        deleteButton.classList.add('hide');
    }
    else {
        deleteButton.classList.remove('hide');
        const refreshButton = deleteButton.cloneNode(true);
        deleteButton.parentNode.replaceChild(refreshButton, deleteButton);
        deleteButton = refreshButton.cloneNode(true);
        refreshButton.parentNode.replaceChild(deleteButton, refreshButton);
        deleteButton.addEventListener('click', () => {
            deleteProject(projectId);
        });
    }
}

function loadContent() {
    const body = document.querySelector('body');
    body.appendChild(createContent());
}

export default loadContent;