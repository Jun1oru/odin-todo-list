import { projects } from "../sidebar/projects.js";

class Task {
    constructor(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.project;
    }
    get project() {
        return super.project;
    }
    set project(project) {
        super.project = project;
    }
}

export function createTask() {
    console.log(projects);
    console.log(projects[0].title);
    console.log(projects[0].id);
}