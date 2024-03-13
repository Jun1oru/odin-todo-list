import { projects } from "../sidebar/projects.js";
import { createTaskDom } from "./task-dom.js";

class Task {
    constructor(id, title, description, priority, dueDate, projectId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.project = projectId;
        this.done = false;
    }
    get id() {
        return super.id;
    }
    set id(id) {
        super.id = id;
    }
    get project() {
        return super.project;
    }
    set project(project) {
        super.project = project;
    }
    get done() {
        return super.done;
    }
    set done(done) {
        super.done = done;
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
    const id = projects[projectId].todos.length;
    projects[projectId].todos.push(new Task(id, title, description, priority, dueDate, projectId));

    return createTaskDom(projectId, id, title, priority, dueDate);
}

export function createTaskDebug(id, projectId, taskTitle, taskDescription, taskPriority, taskDueDate) {
    projects[projectId].todos.push(new Task(id, taskTitle, taskDescription, taskPriority, taskDueDate, projectId));
}