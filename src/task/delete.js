import { projects } from "../sidebar/projects";
import { deleteTaskDom } from "./task-dom";

export function deleteTask(projectId, id) {
    delete projects[projectId].todos[id];
    return deleteTaskDom(id);
}