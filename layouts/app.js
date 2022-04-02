const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
// Display do mobile menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    /*.toggle verifica nas classes se esta ativo ou não "active or not active" */
    menuLinks.classList.toggle('active');
}
menu.addEventListener('click', mobileMenu)
/* O segundo paramento('' , mobileMenu) é a função criada a cima */