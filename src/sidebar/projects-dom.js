import projectDetailsMore from "../assets/icons/details-more.svg";
import projectDetailsLess from "../assets/icons/details-less.svg";
import { createProject, editProject } from "./projects.js";
import { loadProjectIntoContent } from "../content.js";
import { format, formatDistance } from "date-fns";

function createProjectsSection() {
  const projects = document.createElement("div");
  projects.id = "projectsDiv";

  projects.appendChild(createProjectsTitle());
  projects.appendChild(createAddButton());
  return projects;
}

function createProjectsTitle() {
  const projectsTitle = document.createElement("p");
  projectsTitle.id = "projectsTitle";
  projectsTitle.textContent = "Projects";

  return projectsTitle;
}

export function createProjectDom(projectId, title, priority, dueDate) {
  const newProject = document.createElement("div");
  newProject.classList.add("project");
  newProject.dataset.projectId = projectId;

  const newProjectTitle = document.createElement("p");
  newProjectTitle.classList.add("projectTitle");
  newProjectTitle.textContent = `${title}`;
  newProjectTitle.addEventListener("click", () => {
    loadProjectIntoContent(projectId);
  });

  const newProjectDetailsImg = document.createElement("img");
  newProjectDetailsImg.classList.add("projectDetailsImg");
  newProjectDetailsImg.src = projectDetailsMore;
  newProjectDetailsImg.alt = "project details";
  newProjectDetailsImg.addEventListener("click", () => {
    newProjectDetailsImg.src === projectDetailsMore
      ? (newProjectDetailsImg.src = projectDetailsLess)
      : (newProjectDetailsImg.src = projectDetailsMore);
    newProjectDetails.classList.toggle("hide");
  });

  const newProjectDetails = document.createElement("div");
  newProjectDetails.classList.add("projectDetails", "hide");

  const newProjectPriority = document.createElement("p");
  newProjectPriority.classList.add("projectPriority", `${priority}`);
  newProjectPriority.textContent = `${priority} priority`;

  const newProjectDueDate = document.createElement("p");
  const formatDate = format(dueDate, "d MMMM yyyy");
  const ago = formatDistance(dueDate, new Date(), { addSuffix: true });
  newProjectDueDate.classList.add("projectDueDate");
  newProjectDueDate.textContent = `Due Date: ${formatDate} (${ago})`;

  newProjectDetails.appendChild(newProjectPriority);
  newProjectDetails.appendChild(newProjectDueDate);

  newProject.appendChild(newProjectTitle);
  newProject.appendChild(newProjectDetailsImg);
  newProject.appendChild(newProjectDetails);
  return newProject;
}

export function editProjectDom(projectId, title, priority, dueDate) {
  /* const projects = document.getElementsByClassName('project');
    const projectsArr = Array.from(projects);
    let myProject;
    projectsArr.forEach((project) => {
        if(project.dataset.projectId === projectId) { myProject = project; }
    }); */
  const myProject = document.querySelector(
    `.project[data-project-id="${projectId}"]`,
  );

  const myProjectTitle = myProject.querySelector(".projectTitle");
  myProjectTitle.textContent = `${title}`;

  const myProjectPriority = myProject.querySelector(".projectPriority");
  myProjectPriority.textContent = `${priority} priority`;
  myProjectPriority.classList.remove("High", "Medium", "Low");
  myProjectPriority.classList.add(`${priority}`);

  const myProjectDueDate = myProject.querySelector(".projectDueDate");
  const formatDate = format(dueDate, "d MMMM yyyy");
  const ago = formatDistance(dueDate, new Date(), { addSuffix: true });
  myProjectDueDate.textContent = `Due Date: ${formatDate} (${ago})`;
}

export function deleteProjectDom(projectId) {
  const myProject = document.querySelector(
    `.project[data-project-id="${projectId}"]`,
  );
  myProject.remove();
}

function createAddButton() {
  const addButtonDiv = document.createElement("div");
  addButtonDiv.id = "addProjectDiv";

  const addButtonHr = document.createElement("hr");
  addButtonHr.id = "addProjectHr";

  const addButton = document.createElement("button");
  addButton.id = "addProjectBtn";
  addButton.textContent = "Add a new project";
  addButton.type = "button";
  addButton.addEventListener("click", () => {
    const dialog = document.getElementById("projectDialog");
    dialog.dataset.dialogType = "create";

    const dialogTitle = dialog.querySelector(".dialogHeader p");
    dialogTitle.textContent = "Add a new project";

    const dialogInputs = document.querySelectorAll(
      "#projectDialog .dialogForm input",
    );
    const dialogInputsArr = Array.from(dialogInputs);
    dialogInputsArr.forEach((input) => {
      if (input.type === "submit" || input.type === "radio") {
        return;
      }
      input.value = "";
    });

    dialog.showModal();
  });

  addButtonDiv.appendChild(addButtonHr);
  addButtonDiv.appendChild(addButton);
  return addButtonDiv;
}

export function createProjectModal() {
  const body = document.querySelector("body");

  const dialog = document.createElement("dialog");
  dialog.id = "projectDialog";
  dialog.classList.add("dialog");
  dialog.dataset.dialogType = "create";

  dialog.appendChild(createModalHeader());
  dialog.appendChild(createModalForm());

  body.appendChild(dialog);
}

function createModalHeader() {
  const header = document.createElement("header");
  header.classList.add("dialogHeader");

  const title = document.createElement("p");
  title.textContent = "Add a new project";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.autofocus = true;

  closeBtn.addEventListener("click", () => {
    const dialog = document.getElementById("projectDialog");
    dialog.close();
  });

  header.appendChild(title);
  header.appendChild(closeBtn);

  return header;
}

function createModalForm() {
  const form = document.createElement("form");
  form.classList.add("dialogForm");

  // Project Title
  const divTitle = document.createElement("div");
  divTitle.classList.add("inputDiv");

  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.id = "inputProjectTitle";
  inputTitle.name = "inputProjectTitle";
  inputTitle.required = true;

  const labelTitle = document.createElement("label");
  labelTitle.setAttribute("for", "inputProjectTitle");
  labelTitle.textContent = "Project Title";

  divTitle.appendChild(inputTitle);
  divTitle.appendChild(labelTitle);

  form.appendChild(divTitle);

  // Project Description
  const divDescription = document.createElement("div");
  divDescription.classList.add("inputDiv");

  const inputDescription = document.createElement("input");
  inputDescription.type = "text";
  inputDescription.id = "inputProjectDescription";
  inputDescription.name = "inputProjectDescription";
  inputDescription.required = true;

  const labelDescription = document.createElement("label");
  labelDescription.setAttribute("for", "inputProjectDescription");
  labelDescription.textContent = "Project Description";

  divDescription.appendChild(inputDescription);
  divDescription.appendChild(labelDescription);

  form.appendChild(divDescription);

  // Project Priority

  const ulPriority = document.createElement("ul");
  ulPriority.classList.add("ulPriority");

  // High Priority
  const liCheckboxHigh = document.createElement("li");

  const checkboxHigh = document.createElement("input");
  checkboxHigh.type = "radio";
  checkboxHigh.classList.add("checkboxPriority");
  checkboxHigh.name = "priority";
  checkboxHigh.id = "highPriorityProject";
  checkboxHigh.value = "High";
  checkboxHigh.checked = true;
  checkboxHigh.required = true;

  const labelHigh = document.createElement("label");
  labelHigh.setAttribute("for", "highPriorityProject");
  labelHigh.textContent = "High";

  liCheckboxHigh.appendChild(checkboxHigh);
  liCheckboxHigh.appendChild(labelHigh);

  ulPriority.appendChild(liCheckboxHigh);

  // Mid Priority
  const liCheckboxMid = document.createElement("li");

  const checkboxMid = document.createElement("input");
  checkboxMid.type = "radio";
  checkboxMid.classList.add("checkboxPriority");
  checkboxMid.name = "priority";
  checkboxMid.id = "midPriorityProject";
  checkboxMid.value = "Medium";

  const labelMid = document.createElement("label");
  labelMid.setAttribute("for", "midPriorityProject");
  labelMid.textContent = "Medium";

  liCheckboxMid.appendChild(checkboxMid);
  liCheckboxMid.appendChild(labelMid);

  ulPriority.appendChild(liCheckboxMid);

  // Low Priority
  const liCheckboxLow = document.createElement("li");

  const checkboxLow = document.createElement("input");
  checkboxLow.type = "radio";
  checkboxLow.classList.add("checkboxPriority");
  checkboxLow.name = "priority";
  checkboxLow.id = "lowPriorityProject";
  checkboxLow.value = "Low";

  const labelLow = document.createElement("label");
  labelLow.setAttribute("for", "lowPriorityProject");
  labelLow.textContent = "Low";

  liCheckboxLow.appendChild(checkboxLow);
  liCheckboxLow.appendChild(labelLow);

  ulPriority.appendChild(liCheckboxLow);

  form.appendChild(ulPriority);

  // Project DueDate
  const divDueDate = document.createElement("div");
  divDueDate.classList.add("inputDiv");

  /* const date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1) <= 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let day = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate(); */

  const inputDueDate = document.createElement("input");
  inputDueDate.type = "date";
  // inputDueDate.min = `${year}-${month}-${day}`;
  inputDueDate.id = "inputProjectDueDate";
  inputDueDate.name = "inputProjectDueDate";
  inputDueDate.required = true;

  divDueDate.appendChild(inputDueDate);

  form.appendChild(divDueDate);

  // Submit Button
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.id = "submitProject";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dialog = document.getElementById("projectDialog");
    const content = document.getElementById("content");

    if (dialog.dataset.dialogType === "create") {
      createProject();
    } else if (dialog.dataset.dialogType === "edit") {
      editProject(content.dataset.projectId);
    }

    inputTitle.value = "";
    inputDescription.value = "";
    checkboxHigh.checked = true;
    inputDueDate.value = "";

    dialog.close();
  });

  form.appendChild(submitButton);

  return form;
}

export function loadProjectsSection() {
  return createProjectsSection();
}
