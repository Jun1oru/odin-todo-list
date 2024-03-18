import { projects, createProjectDebug } from "./sidebar/projects";

import { createTaskDebug } from "./task/create";
import { loadProjectIntoContent } from "./content";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMexception &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === "QuotaExceededError" ||
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      storage &&
      storage.length !== 0
    );
  }
}

export function saveInStorage(where, what) {
  if (storageAvailable("localStorage")) {
    localStorage.setItem(where, JSON.stringify(what));
  }
}

export function loadProjects() {
  if (!localStorage.getItem("projects")) {
    return loadDefaultStorage();
  } else {
    const projectsArr = Array.from(
      JSON.parse(localStorage.getItem("projects")),
    );
    projectsArr.forEach((project) => {
      if (project === null || project === undefined) {
        return;
      }
      createProjectDebug(
        project.title,
        project.description,
        project.priority,
        project.dueDate,
      );
      project.todos.forEach((todo) => {
        if (todo === null || todo === undefined) {
          return;
        }
        createTaskDebug(
          todo.project,
          todo.title,
          todo.description,
          todo.priority,
          todo.dueDate,
          todo.done,
        );
      });
    });
    loadProjectIntoContent(0);
  }
}

function loadDefaultStorage() {
  createProjectDebug("Default", "Description", "High", "2024-03-08");
  createTaskDebug(0, "Title", "Description", "High", "2024-03-08", false);
  createTaskDebug(0, "Title2", "Descriptiuon2", "Low", "2024-03-08", false);
  localStorage.setItem("projects", JSON.stringify(projects));
  console.log(projects);
  loadProjectIntoContent(0);
}
