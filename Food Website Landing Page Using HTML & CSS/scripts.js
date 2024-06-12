document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const menuItems = document.getElementById('menuItems');

    menuBtn.addEventListener('click', function () {
        menuItems.classList.toggle('show');
    });
});
