const burger = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-menu--active');
    document.querySelector('main').classList.toggle("main--inactiv");
    document.querySelector('.head').classList.toggle("head--activ");
    document.querySelector('.head__menu').classList.toggle("active");
});