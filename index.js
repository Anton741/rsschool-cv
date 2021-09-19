let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu__list')
let menu_items = document.querySelectorAll('.menu__link');

console.log(menu_items);

burger.addEventListener('click', () => {
    console.log('jkhjkhkjhkjh');
    menu.classList.toggle('active__menu')
    burger.classList.toggle('active__burger')
})

menu_items.forEach(item => item.addEventListener('click', () => {
    menu.classList.remove('active__menu');
    burger.classList.remove('active__burger');
}))