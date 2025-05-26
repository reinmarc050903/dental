// js/index.js

function toggleSidenav() {
    const sidenav = document.getElementById('sidenav');
    const container = document.getElementById('container');
    sidenav.classList.toggle('visible');
    container.classList.toggle('shifted');
}
