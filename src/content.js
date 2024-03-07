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

    const task = document.createElement('div');
    task.classList.add('task', 'highTask');

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('taskTitle');
    taskTitle.textContent = 'Test Task';

    const taskDate = document.createElement('p');
    taskDate.classList.add('taskDate');
    taskDate.textContent = '2024-03-07';

    task.appendChild(taskTitle);
    task.appendChild(taskDate);

    const task2 = document.createElement('div');
    task2.classList.add('task', 'highTask');

    const taskTitle2 = document.createElement('p');
    taskTitle2.classList.add('taskTitle');
    taskTitle2.textContent = 'Test Task';

    const taskDate2 = document.createElement('p');
    taskDate2.classList.add('taskDate');
    taskDate2.textContent = '2024-03-07';

    task2.appendChild(taskTitle2);
    task2.appendChild(taskDate2);

    const addTaskButton = document.createElement('button');
    addTaskButton.id = 'addTaskBtn';
    addTaskButton.textContent = 'Add a new task';
    addTaskButton.type = 'button';
    addTaskButton.addEventListener('click', () => {
        //
    });

    tasksDiv.appendChild(task);
    tasksDiv.appendChild(task2);
    tasksDiv.appendChild(addTaskButton);

    content.appendChild(detailsDiv);
    content.appendChild(tasksDiv);
    return content;
}

export function loadProjectIntoContent(projectTitle, projectPriority, projectDueDate) {
    const titleElement = document.getElementById('contentProjectTitle');
    titleElement.textContent = `${projectTitle}`;

    const priorityElement = document.getElementById('contentProjectPriority');
    priorityElement.textContent = `${projectPriority} Priority`;

    const dateElement = document.getElementById('contentProjectDueDate');
    dateElement.textContent = `Due Date: ${projectDueDate}`;
}

function loadContent() {
    const body = document.querySelector('body');
    body.appendChild(createContent());
}

export default loadContent;