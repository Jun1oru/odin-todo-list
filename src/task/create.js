import { projects } from "../sidebar/projects.js";
import { createTaskDom } from "./task-dom.js";

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

    return createTaskDom(title, priority, dueDate);
}

export function createTaskDebug(projectId, taskTitle, taskDescription, taskPriority, taskDueDate) {
    projects[projectId].todos.push(new Task(taskTitle, taskDescription, taskPriority, taskDueDate, projectId));
}