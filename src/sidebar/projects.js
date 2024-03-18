import { createProjectDom, editProjectDom, deleteProjectDom } from './projects-dom.js'
import { loadProjectIntoContent } from '../content.js'
import { saveInStorage } from '../storageManager.js'

export const projects = []

export class Project {
  constructor (title, description, priority, dueDate) {
    this.id = projects.length
    this.title = title
    this.description = description
    this.priority = priority
    this.dueDate = dueDate
    this.todos = []
  }

  get id () {
    return super.id
  }

  set id (id) {
    super.id = id
  }

  get title () {
    return super.title
  }

  set title (title) {
    super.title = title
  }
};

export function createProject () {
  const title = document.getElementById('inputProjectTitle').value
  const description = document.getElementById('inputProjectDescription').value
  const priorityOptions = document.getElementsByClassName('checkboxPriority')
  const priorityOptionsArr = Array.from(priorityOptions)
  let priority
  priorityOptionsArr.forEach((option) => {
    if (option.checked) { priority = option.value }
  })
  const dueDate = document.getElementById('inputProjectDueDate').value
  projects.push(new Project(title, description, priority, dueDate))

  const projectId = projects.length - 1

  const projectsDiv = document.getElementById('projectsDiv')
  projectsDiv.insertBefore(createProjectDom(projectId, title, priority, dueDate), projectsDiv.lastChild)

  saveInStorage('projects', projects)
}

export function editProject (projectId) {
  const title = document.getElementById('inputProjectTitle').value
  const description = document.getElementById('inputProjectDescription').value
  const priorityOptions = document.getElementsByClassName('checkboxPriority')
  const priorityOptionsArr = Array.from(priorityOptions)
  let priority
  priorityOptionsArr.forEach((option) => {
    if (option.checked) { priority = option.value }
  })
  const dueDate = document.getElementById('inputProjectDueDate').value

  projects[projectId].title = title
  projects[projectId].description = description
  projects[projectId].priority = priority
  projects[projectId].dueDate = dueDate

  editProjectDom(projectId, title, priority, dueDate)
  loadProjectIntoContent(projectId)
  return saveInStorage('projects', projects)
}

export function deleteProject (projectId) {
  delete projects[projectId]
  deleteProjectDom(projectId)
  saveInStorage('projects', projects)
  return loadProjectIntoContent(0)
}

export function createProjectDebug (title, description, priority, dueDate) {
  projects.push(new Project(title, description, priority, dueDate))

  const projectId = projects.length - 1

  const projectsDiv = document.getElementById('projectsDiv')
  return projectsDiv.insertBefore(createProjectDom(projectId, title, priority, dueDate), projectsDiv.lastChild)
  // return loadProjectIntoContent(projectId);
}
