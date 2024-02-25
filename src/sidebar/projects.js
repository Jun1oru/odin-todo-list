import projectDetails from '../assets/icons/details-more.svg';

function createProjectsSection() {
    const projects = document.createElement('div');
    projects.id = 'projectsDiv';

    projects.appendChild(createProjectsTitle());
    projects.appendChild(createProject());
    return projects;
}

function createProjectsTitle() {
    const projectsTitle = document.createElement('p');
    projectsTitle.id = 'projectsTitle';
    projectsTitle.textContent = 'Projects';

    return projectsTitle;
}

function createProject() {
    const newProject = document.createElement('div');
    newProject.id = 'testProject';

    const newProjectTitle = document.createElement('p');
    newProjectTitle.id = 'testProjectTitle';
    newProjectTitle.textContent = 'Test Project';

    const newProjectDetails = document.createElement('img');
    newProjectDetails.id = 'testProjectDetails';
    newProjectDetails.src = projectDetails;
    newProjectDetails.alt = 'project details';

    newProject.appendChild(newProjectTitle);
    newProject.appendChild(newProjectDetails);
    return newProject;
}



function loadProjectsSection() {
    return createProjectsSection();
}

export default loadProjectsSection;