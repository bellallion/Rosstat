// для реализации верхней навигации
var cur_path = window.location.pathname;
const links = document.getElementsByClassName('dropdown-item');

Array.from(links).forEach(link => {
    if (link.getAttribute('href') == cur_path) {
        // link.classList.add('active');
        link.style.color = 'white';
        link.style.backgroundColor='#adb4ed';

    }});