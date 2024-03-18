import loadProfile from "./profile-dom.js";
import { loadProjectsSection } from "./projects-dom.js";

function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  sidebar.appendChild(loadProfile());
  sidebar.appendChild(createMainButtons());
  return sidebar;
}

function createMainButtons() {
  const mainButtons = document.createElement("div");
  mainButtons.id = "mainButtons";

  mainButtons.appendChild(loadProjectsSection());
  return mainButtons;
}

function loadSidebar() {
  const body = document.querySelector("body");
  body.appendChild(createSidebar());
}

export default loadSidebar;
