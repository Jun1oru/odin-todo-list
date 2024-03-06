import loadSidebar from './sidebar/sidebar.js';
import loadContent from './content.js';
import { createProjectModal } from './sidebar/projects-dom.js';

function load() {
    loadSidebar();
    loadContent();
    createProjectModal();
}

export default load;