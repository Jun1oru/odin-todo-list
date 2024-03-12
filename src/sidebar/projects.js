import { createProjectDom } from './projects-dom.js';
import { loadProjectIntoContent } from '../content.js';
import { createTaskDebug } from '../task/create.js';

export let projects = [];

class Project {
    constructor(title, description, priority, dueDate) {
        this.id = projects.length;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.todos = [];
    }
    get id() {
        return super.id;
    }
    set id(id) {
        super.id = id;
    }
    get title() {
        return super.title;
    }
    set title(title) {
        super.title = title;
    }
};

export function createProject() {
    const title = document.getElementById('inputProjectTitle').value;
    const description = document.getElementById('inputProjectDescription').value;
    const priorityOptions = document.getElementsByClassName('checkboxPriority');
    const priorityOptionsArr = Array.from(priorityOptions);
    let priority;
    priorityOptionsArr.forEach((option) => {
        if(option.checked) { priority = option.value; }
    });
    const dueDate = document.getElementById('inputProjectDueDate').value;
    projects.push(new Project(title, description, priority, dueDate));

    let projectId = projects.length - 1;

    const projectsDiv = document.getElementById('projectsDiv');
    return projectsDiv.insertBefore(createProjectDom(projectId, title, priority, dueDate), projectsDiv.lastChild);
}

export function editProject(projectId) {
    const title = document.getElementById('inputProjectTitle').value;
    const description = document.getElementById('inputProjectDescription').value;
    const priorityOptions = document.getElementsByClassName('checkboxPriority');
    const priorityOptionsArr = Array.from(priorityOptions);
    let priority;
    priorityOptionsArr.forEach((option) => {
        if(option.checked) { priority = option.value; }
    });
    const dueDate = document.getElementById('inputProjectDueDate').value;
    
    projects[projectId].title = title;
    projects[projectId].description = description;
    projects[projectId].priority = priority;
    projects[projectId].dueDate = dueDate;

    editProjectDom(projectId, title, priority, dueDate);
    return loadProjectIntoContent(projectId, title, priority, dueDate);
}

export function createProjectDebug(title, description, priority, dueDate) {
    projects.push(new Project(title, description, priority, dueDate));

    let projectId = projects.length - 1;

    const projectsDiv = document.getElementById('projectsDiv');
    projectsDiv.insertBefore(createProjectDom(projectId, title, priority, dueDate), projectsDiv.lastChild);

    createTaskDebug(projectId, "Title", "Description", "High", "2024-03-08");
    createTaskDebug(projectId, "Title2", "Descriptiuon2", "Low", "2024-03-08");

    return loadProjectIntoContent(projectId, title, priority, dueDate);
}

