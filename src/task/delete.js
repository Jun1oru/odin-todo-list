import { projects } from '../sidebar/projects'
import { deleteTaskDom } from './task-dom'
import { saveInStorage } from '../storageManager'

export function deleteTask (projectId, id) {
  delete projects[projectId].todos[id]
  saveInStorage('projects', projects)
  return deleteTaskDom(id)
}
