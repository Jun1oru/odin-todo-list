//import profileImage from './assets/images/profileImg.jpeg';
//import notificationsImage from  './assets/images/notifications.svg';


function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';


    sidebar.appendChild(createProfile());
    sidebar.appendChild(createMainButtons());
    return sidebar;
}

function createProfile() {
    const profile = document.createElement('div');
    profile.id = 'profileDiv';

    profile.appendChild(createProfileName());
    profile.appendChild(createProfileButtons());
    return profile;
}

function createProfileName() {
    const nameImgDiv = document.createElement('div');
    nameImgDiv.id = 'profileNameImageDiv';

    const name = document.createElement('p');
    name.id = 'profileName';
    name.textContent = 'Name';

    const image = document.createElement('img');
    image.id = 'profileImage';
    //image.src = profileImage;
    image.alt = 'profileImage';

    nameImgDiv.appendChild(name);
    nameImgDiv.appendChild(image);

    return nameImgDiv;
}

function createProfileButtons() {
    const profileButtonsDiv = document.createElement('div');
    profileButtonsDiv.id = 'profileButtonsDiv';

    const notifications = document.createElement('img');
    notifications.id = 'profileNotifications';
    //notifications.src = notificationsImage;
    notifications.alt = 'notifications';

    const sidebarButton = document.createElement('img');
    sidebarButton.id = 'sidebarButton';
    //sidebarButton.src = sidebarImage;
    sidebarButton.alt = 'sidebarButton';

    profileButtonsDiv.appendChild(notifications);
    profileButtonsDiv.appendChild(sidebarButton);

    return profileButtonsDiv;
}

function createMainButtons() {
    const mainButtons = document.createElement('div');
    mainButtons.id = 'mainButtons';

    return mainButtons;
}

function loadSidebar() {
    const body = document.querySelector('body');
    body.appendChild(createSidebar());
}

export default loadSidebar;