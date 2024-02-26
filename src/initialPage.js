import loadSidebar from './sidebar/sidebar.js';
import { createProjectModal } from './sidebar/projects-dom.js';

function load() {
    loadSidebar();
    createProjectModal();
}

export default load;