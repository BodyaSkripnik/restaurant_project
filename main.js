// Set left navigation
let welcomeSection = document.getElementById('welcome-section')
let leftNavigation = document.getElementById('left-navigation')

let welcomeSectionHeight = welcomeSection.offsetHeight;
leftNavigation.style.height = welcomeSectionHeight - 1 + 'px'




let menuNavigation = document.getElementsByClassName('menu')[0]

function getAcliveModal(){
    let modalWindow = document.getElementById('modal-window');
    let container = document.getElementsByClassName('container')[0];
    container.style.display = 'none'
    modalWindow.classList.add('active');
}

menuNavigation.addEventListener('click',getAcliveModal)