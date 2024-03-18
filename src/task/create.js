import { projects } from '../sidebar/projects.js'
import { createTaskDom } from './task-dom.js'
import { saveInStorage } from '../storageManager.js'

class Task {
  constructor (title, description, priority, dueDate, projectId, done) {
    this.id =
    this.title = title
    this.description = description
    this.priority = priority
    this.dueDate = dueDate
    this.project = projectId
    this.done = done
  }

  get id () {
    return super.id
  }

  set id (id) {
    super.id = id
  }

  get project () {
    return super.project
  }

  set project (project) {
    super.project = project
  }

  get done () {
    return super.done
  }

  set done (done) {
    super.done = done
  }
}

export function createTask (projectId) {
  const title = document.getElementById('inputTaskTitle').value
  const description = document.getElementById('inputTaskDescription').value
  const priorityOptions = document.getElementsByClassName('checkboxPriorityTask')
  const priorityOptionsArr = Array.from(priorityOptions)
  let priority
  priorityOptionsArr.forEach((option) => {
    if (option.checked) { priority = option.value }
  })
  const dueDate = document.getElementById('inputTaskDueDate').value
  const taskId = projects[projectId].todos.length
  projects[projectId].todos.push(new Task(title, description, priority, dueDate, projectId, false))
  projects[projectId].todos[taskId].id = taskId

  saveInStorage('projects', projects)

  return createTaskDom(projectId, taskId)
}

export function createTaskDebug (projectId, taskTitle, taskDescription, taskPriority, taskDueDate, taskDone) {
  projects[projectId].todos.push(new Task(taskTitle, taskDescription, taskPriority, taskDueDate, projectId, taskDone))

  const taskId = projects[projectId].todos.length - 1
  projects[projectId].todos[taskId].id = taskId
}
