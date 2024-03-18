import loadSidebar from "./sidebar/sidebar.js";
import loadContent from "./content.js";
import { createProjectModal } from "./sidebar/projects-dom.js";
import { createTaskModal } from "./task/task-dom.js";

function load() {
  loadSidebar();
  loadContent();
  createProjectModal();
  createTaskModal();
}

export default load;
