const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-theme');
        themeToggle.textContent = '🌙';
        themeToggle.setAttribute('aria-label', 'Alternar para modo escuro');
    } else {
        body.classList.remove('light-theme');
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('aria-label', 'Alternar para modo claro');
    }
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : preferredTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

document.querySelectorAll('.profile-link').forEach(link => {
    link.addEventListener('click', () => {
        const activeProfile = {
            name: link.dataset.name,
            image: link.dataset.img,
        };
        localStorage.setItem('activeProfile', JSON.stringify(activeProfile)); // salva o perfil ativo para uso no catálogo
    });
});

window.addEventListener('DOMContentLoaded', initTheme);
