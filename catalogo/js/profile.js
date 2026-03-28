const profileLink = document.querySelector('.kids-link');
const profileAvatar = document.querySelector('.profile-icon');

const activeProfileRaw = localStorage.getItem('activeProfile');
const activeProfile = activeProfileRaw ? JSON.parse(activeProfileRaw) : null;

if (activeProfile) {
    if (profileLink) {
        profileLink.textContent = activeProfile.name;
    }
    if (profileAvatar) {
        profileAvatar.src = activeProfile.image;
        profileAvatar.alt = `Perfil de ${activeProfile.name}`;
    }
}
