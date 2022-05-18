const burger = document.querySelector('.burger');
const nav = document.querySelector('#navlinks');

burger.addEventListener('click', () => {
    nav.classList.toggle('show');
    burger.classList.toggle('close');
})