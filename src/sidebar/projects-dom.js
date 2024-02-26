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
    dialog.classList.add('dialog');
    
    const header = document.createElement('header');
    header.classList.add('dialogHeader');

    const title = document.createElement('p');
    title.textContent = 'Add a new project';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.autofocus = true;

    closeBtn.addEventListener('click', () => {
        dialog.close();
    })

    header.appendChild(title);
    header.appendChild(closeBtn);

    const form = document.createElement('form');
    form.class = 'dialogForm';

    const p = document.createElement('p');
    p.textContent = 'Test paragraph';

    dialog.appendChild(header);
    dialog.appendChild(p);

    body.appendChild(dialog);
}

export function loadProjectsSection() {
    return createProjectsSection();
}
