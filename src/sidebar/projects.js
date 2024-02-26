import { createProjectDom } from './projects-dom.js';

let projects = [];

class Project {
    constructor(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.todos = [];
    }
    get title() {
        return super.title;
    }
    set title(title) {
        super.title = title;
    }
};

function createProject(title, description, priority, dueDate) {
    projects.push(new Project(title, description, priority, dueDate));
    createProjectDom(title, description, priority, dueDate);
}

console.log(projects);
createProject('Test', 'Salut', 'ok', 'yup');
console.log(projects);