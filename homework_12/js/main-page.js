"use strict"

//Выделяем активный пункт меню
let menuLinks = document.querySelectorAll('.page-header__link'); 
let currentUrl = document.location.href; 
for (let i = 0; i < menuLinks.length; i++){
    if(currentUrl === menuLinks[i].href) {
        menuLinks[i].classList.add('active-link');
    }
}

//Dropdown категорий в мобильной версии
let blockCategoryTitle = document.querySelector('.content__block-title');
let blockCategoryList = document.querySelector('.content__category-list');

blockCategoryTitle.addEventListener('click', () => {
    blockCategoryList.classList.toggle('open-category');
}); 
  

