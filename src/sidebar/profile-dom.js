import notificationsImage from '../assets/icons/notifications.svg'

function createProfile () {
  const profile = document.createElement('div')
  profile.id = 'profileDiv'

  profile.appendChild(createProfileName())
  profile.appendChild(createProfileNotifications())
  return profile
}

function createProfileName () {
  const name = document.createElement('p')
  name.id = 'profileName'
  name.textContent = 'Fake Account'

  return name
}

function createProfileNotifications () {
  const notifications = document.createElement('img')
  notifications.id = 'profileNotifications'
  notifications.src = notificationsImage
  notifications.alt = 'notifications'

  return notifications
}

function loadProfile () {
  return createProfile()
}

export default loadProfile
