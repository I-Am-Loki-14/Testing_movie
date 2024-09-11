const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
        menuIcon.src = "./img/Close.svg";
    } else {
        menuIcon.src = "./img/Menu.svg";
        
    }
});