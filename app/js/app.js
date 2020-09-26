document.addEventListener("DOMContentLoaded", function() {
  
  const headerStartBtn = document.querySelector('.header__start-btn'),
        body = document.querySelector('body'),
        hero = document.querySelector('.hero'),
        heroInnerBox = document.querySelector('.hero__inner-box'),
        menuList = document.querySelector('.menu__list');


  headerStartBtn.addEventListener('click', () => {

    headerStartBtn.classList.toggle('active');
    menuList.classList.toggle('show');
    body.classList.toggle('no-scroll');
    heroInnerBox.classList.toggle('hide');
})


});