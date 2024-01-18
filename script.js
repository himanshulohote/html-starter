// Add responsive behavior, for example, a simple navigation toggle

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('nav ul');

    navToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});
