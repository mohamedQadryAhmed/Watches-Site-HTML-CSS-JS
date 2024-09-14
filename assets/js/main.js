const menuBtn = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-icon');
const menu = document.querySelector('.nav-menu');

if(menuBtn){
    menuBtn.addEventListener('click', () =>{
        menu.classList.add('show-menu')
    })
}

if(closeBtn){
    closeBtn.addEventListener('click', () =>{
        menu.classList.remove('show-menu')
    })
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => link.addEventListener('click', () =>{
    menu.classList.remove('show-menu');
}));
