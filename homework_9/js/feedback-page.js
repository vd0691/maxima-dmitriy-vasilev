"use strict"

//Выделяем активный пункт меню
let menuLinks = document.querySelectorAll('.page-header__link'); 
let currentUrl = document.location.href; 
for (let i = 0; i < menuLinks.length; i++){
    if(currentUrl === menuLinks[i].href) {
        menuLinks[i].classList.add('active-link');
    }
}

//Добавляем класс active-label при фокусе на input 
let inputField = document.querySelectorAll('.feedback-form__input');

for(let i = 0; i < inputField.length; i++ ) {
    inputField[i].addEventListener('focus', (e) => {
        let nameLabel = document.querySelector(`[for="${e.target.id}"]`);
        nameLabel.classList.add('active-label');
    });

    inputField[i].addEventListener('focusout', (e) => {
        if(inputField[i].value === '') {
            let inputLabel = document.querySelector(`[for="${e.target.id}"]`);
            inputLabel.classList.remove('active-label');
        }    
    }); 
}

//Добавляем класс active-label при фокусе на textarea 
let textareaField = document.querySelector('textarea');
 
textareaField.addEventListener('focus', (e) => {
    let textareaLabel = document.querySelector(`[for="${e.target.id}"]`);
    textareaLabel.classList.add('active-label');
});

textareaField.addEventListener('focusout', (e) => {
    if(textareaField.value === '') {
        let textareaLabel = document.querySelector(`[for="${e.target.id}"]`);
        textareaLabel.classList.remove('active-label');
    }

});    


//Select 
let selectMenu = document.querySelector('select');
let selectMenuIcon = document.querySelector('.icon');

selectMenu.addEventListener('change', () => {
    let selSpan = document.querySelector('.topic');
    selSpan.innerHTML = selectMenu.options[selectMenu.selectedIndex].text;
});

selectMenu.addEventListener('focus', (e) => {
    let selectLabel = document.querySelector(`[for="${e.target.id}"]`);
    selectLabel.classList.add('active-label');
});
selectMenu.addEventListener('focusout', (e) => {
    if(selectMenu.value === '') {
        let selectLabel = document.querySelector(`[for="${e.target.id}"]`);
        selectLabel.classList.remove('active-label');
    }
    
});
selectMenu.addEventListener('click', () => {
    selectMenuIcon.classList.toggle('rotate')
});



//Обводим поле загрузки файлов при фокусе
let filesUploadField = document.querySelector('.feedback-form__file-input');
let filesUploadLabel = document.querySelector('.feedback-form__file-label');
filesUploadField.addEventListener('focus', () => {
    filesUploadLabel.classList.add('border')
});

filesUploadField.addEventListener('focusout', () => {
    filesUploadLabel.classList.remove('border')
});

//Выводим список выбранных файлов
let filesUploadContainer = document.querySelector('.feedback-form__file-cont');
let filesNameList = document.querySelector('.feedback-form__file-names');

const processSelectedFiles = function(filesUploadField) {
    let files = filesUploadField.files;
    for (let i = 0; i < files.length; i++) {
        let spanElem = document.createElement('span');
        spanElem.innerHTML +=  files[i].name;
        filesNameList.appendChild(spanElem);
    }
};

filesUploadContainer.addEventListener('change', () => {
    processSelectedFiles(filesUploadField);
});


//Выводим галочку на checkbox
let checkboxInput = document.querySelector('.feedback-form__checkbox-input');

checkboxInput.addEventListener('click', () => {
   checkboxInput.classList.value.includes('active-checkbox') ? checkboxInput.classList.remove('active-checkbox') : checkboxInput.classList.add('active-checkbox') 
});
