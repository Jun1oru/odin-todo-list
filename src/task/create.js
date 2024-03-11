import { projects } from "../sidebar/projects.js";

class Task {
    constructor(title, description, priority, dueDate, projectId) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.project = projectId;
    }
    get project() {
        return super.project;
    }
    set project(project) {
        super.project = project;
    }
}

export function createTask(projectId) {
    const title = document.getElementById('inputTaskTitle').value;
    const description = document.getElementById('inputTaskDescription').value;
    const priorityOptions = document.getElementsByClassName('checkboxPriorityTask');
    const priorityOptionsArr = Array.from(priorityOptions);
    let priority;
    priorityOptionsArr.forEach((option) => {
        if(option.checked) { priority = option.value; }
    });
    const dueDate = document.getElementById('inputTaskDueDate').value;
    projects[projectId].todos.push(new Task(title, description, priority, dueDate, projectId));

    console.log(projects[projectId]);
}