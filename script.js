var menu = document.querySelector('nav ul');

var menuBar = document.querySelector('nav .menu-icon');

var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function(){
    if (iconMenu.getAttribute("src") == 'imgs/menu.png') {
        iconMenu.setAttribute("src", "imgs/close.png")
    } else {
        iconMenu.setAttribute("src", "imgs/menu.png")
    }

    menu.classList.toggle('active');
})