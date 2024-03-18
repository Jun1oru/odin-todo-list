import { projects } from "../sidebar/projects";
import { editTaskDom } from "./task-dom";
import { saveInStorage } from "../storageManager";

export function editTask(projectId, id) {
  const title = document.getElementById("inputTaskTitle").value;
  const description = document.getElementById("inputTaskDescription").value;
  const priorityOptions = document.getElementsByClassName(
    "checkboxPriorityTask",
  );
  const priorityOptionsArr = Array.from(priorityOptions);
  let priority;
  priorityOptionsArr.forEach((option) => {
    if (option.checked) {
      priority = option.value;
    }
  });
  const dueDate = document.getElementById("inputTaskDueDate").value;

  projects[projectId].todos[id].title = title;
  projects[projectId].todos[id].description = description;
  projects[projectId].todos[id].priority = priority;
  projects[projectId].todos[id].dueDate = dueDate;

  saveInStorage("projects", projects);

  return editTaskDom(id, title, description, priority, dueDate, projectId);
}
