import { createProjectDom } from './projects-dom.js';

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

export function createProjectDebug(title, description, priority, dueDate) {
    projects.push(new Project(title, description, priority, dueDate));

    let projectId = projects.length - 1;

    const projectsDiv = document.getElementById('projectsDiv');
    return projectsDiv.insertBefore(createProjectDom(projectId, title, priority, dueDate), projectsDiv.lastChild);
}

