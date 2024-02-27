import projectDetailsMore from '../assets/icons/details-more.svg';
import projectDetailsLess from '../assets/icons/details-less.svg';

function createProjectsSection() {
    const projects = document.createElement('div');
    projects.id = 'projectsDiv';

    projects.appendChild(createProjectsTitle());
    projects.appendChild(createAddButton());
    return projects;
}

function createProjectsTitle() {
    const projectsTitle = document.createElement('p');
    projectsTitle.id = 'projectsTitle';
    projectsTitle.textContent = 'Projects';

    return projectsTitle;
}

export function createProjectDom() {
    const newProject = document.createElement('div');
    newProject.classList.add('project');

    const newProjectTitle = document.createElement('p');
    newProjectTitle.classList.add('projectTitle');
    newProjectTitle.textContent = 'Test Project';

    const newProjectDetails = document.createElement('img');
    newProjectDetails.classList.add('projectDetails');
    newProjectDetails.src = projectDetailsMore;
    newProjectDetails.alt = 'project details';

    newProject.appendChild(newProjectTitle);
    newProject.appendChild(newProjectDetails);
    return newProject;
}

function createAddButton() {
    const addButtonDiv = document.createElement('div');
    addButtonDiv.id = 'addProjectDiv';

    const addButtonHr = document.createElement('hr');
    addButtonHr.id = 'addProjectHr';

    const addButton = document.createElement('button');
    addButton.id = 'addProjectBtn';
    addButton.textContent = 'Add a new project';
    addButton.type = 'button';
    addButton.addEventListener('click', () => {
        const dialog = document.querySelector('dialog');
        dialog.showModal();
        //const projectsDiv = document.getElementById('projectsDiv');
        //projectsDiv.insertBefore(createProjectDom(), projectsDiv.lastChild);
    });

    addButtonDiv.appendChild(addButtonHr);
    addButtonDiv.appendChild(addButton);
    return addButtonDiv;
}

export function createProjectModal() {
    const body = document.querySelector('body');

    const dialog = document.createElement('dialog');
    dialog.id = 'projectDialog';
    dialog.classList.add('dialog');

    dialog.appendChild(createModalHeader());
    dialog.appendChild(createModalForm());

    body.appendChild(dialog);
}

function createModalHeader() {
    const header = document.createElement('header');
    header.classList.add('dialogHeader');

    const title = document.createElement('p');
    title.textContent = 'Add a new project';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.autofocus = true;

    closeBtn.addEventListener('click', () => {
        const dialog = document.getElementById('projectDialog');
        dialog.close();
    })

    header.appendChild(title);
    header.appendChild(closeBtn);

    return header;
}

function createModalForm() {
    const form = document.createElement('form');
    form.classList.add('dialogForm');

    // Project Title
    const divTitle = document.createElement('div');
    divTitle.classList.add('inputDiv');

    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'inputProjectTitle';
    inputTitle.name = 'inputProjectTitle';
    inputTitle.required = true;

    const labelTitle = document.createElement('label');
    labelTitle.setAttribute('for', 'inputProjectTitle');
    labelTitle.textContent = 'Project Title';

    divTitle.appendChild(inputTitle);
    divTitle.appendChild(labelTitle);

    form.appendChild(divTitle);

    // Project Description
    const divDescription = document.createElement('div');
    divDescription.classList.add('inputDiv');

    const inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    inputDescription.id = 'inputProjectDescription';
    inputDescription.name = 'inputProjectDescription';
    inputDescription.required = true;

    const labelDescription = document.createElement('label');
    labelDescription.setAttribute('for', 'inputProjectDescription');
    labelDescription.textContent = 'Project Description';

    divDescription.appendChild(inputDescription);
    divDescription.appendChild(labelDescription);

    form.appendChild(divDescription);

    // Project Priority

    const ulPriority = document.createElement('ul');
    ulPriority.classList.add('ulPriority');

    // High Priority
    const liCheckboxHigh = document.createElement('li');

    const checkboxHigh = document.createElement('input');
    checkboxHigh.type = 'radio';
    checkboxHigh.classList.add('checkboxPriority');
    checkboxHigh.name = 'priority';
    checkboxHigh.id = 'highPriorityProject';
    checkboxHigh.value = 'highPriorityProject';
    checkboxHigh.checked = true;
    checkboxHigh.required = true;

    const labelHigh = document.createElement('label');
    labelHigh.setAttribute('for', 'highPriorityProject');
    labelHigh.textContent = 'High';

    liCheckboxHigh.appendChild(checkboxHigh);
    liCheckboxHigh.appendChild(labelHigh);

    ulPriority.appendChild(liCheckboxHigh);

    // Mid Priority
    const liCheckboxMid = document.createElement('li');

    const checkboxMid = document.createElement('input');
    checkboxMid.type = 'radio';
    checkboxMid.classList.add('checkboxPriority');
    checkboxMid.name = 'priority';
    checkboxMid.id = 'midPriorityProject';
    checkboxMid.value = 'midPriorityProject';

    const labelMid = document.createElement('label');
    labelMid.setAttribute('for', 'midPriorityProject');
    labelMid.textContent = 'Mid';

    liCheckboxMid.appendChild(checkboxMid);
    liCheckboxMid.appendChild(labelMid);

    ulPriority.appendChild(liCheckboxMid);

    // Low Priority
    const liCheckboxLow = document.createElement('li');

    const checkboxLow = document.createElement('input');
    checkboxLow.type = 'radio';
    checkboxLow.classList.add('checkboxPriority');
    checkboxLow.name = 'priority';
    checkboxLow.id = 'lowPriorityProject';
    checkboxLow.value = 'lowPriorityProject';

    const labelLow = document.createElement('label');
    labelLow.setAttribute('for', 'lowPriorityProject');
    labelLow.textContent = 'Low';

    liCheckboxLow.appendChild(checkboxLow);
    liCheckboxLow.appendChild(labelLow);

    ulPriority.appendChild(liCheckboxLow);

    form.appendChild(ulPriority);

    // Project DueDate
    const divDueDate = document.createElement('div');
    divDueDate.classList.add('inputDiv');

    const inputDueDate = document.createElement('input');
    inputDueDate.type = 'date';
    inputDueDate.id = 'inputProjectDueDate';
    inputDueDate.name = 'inputProjectDueDate';
    inputDueDate.required = true;

    //const labelDueDate = document.createElement('label');
    //labelDueDate.setAttribute('for', 'inputProjectDueDate');
    //labelDueDate.textContent = 'Project Due Date';

    divDueDate.appendChild(inputDueDate);
    //divDueDate.appendChild(labelDueDate);

    form.appendChild(divDueDate);

    return form;
}

export function loadProjectsSection() {
    return createProjectsSection();
}
