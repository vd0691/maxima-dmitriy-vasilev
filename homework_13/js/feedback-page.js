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



//Getting data from the server and displaying it on the contact page
let userContent = document.querySelector('.users-content');
getUsers();

async function getUsers() {
    let usersArray;
    try {
        let response = await fetch('https://reqres.in/api/users?per_page=12');
        let data = await response.json();
        usersArray = data.data;

    } catch (e) {
        console.log(e);
    }
    usersDataOutput(usersArray);
}

function usersDataOutput(users) {
    users.forEach((user) => {
        userContent.innerHTML += `<div class="users-content__card">
                                      <div class="users-content__title">${user.first_name} ${user.last_name}</div>
                                      <div class="user-content__email">${user.email}</div>
                                      <div class="users-content__avatar"><img src="${user.avatar}"></div>
                                   </div>`
    });
}


//Form validation

const form = document.querySelector('form');
const userNameField = document.querySelector('#user-name');
const userEmailField = document.querySelector('#user-email');
const userGenderField = document.querySelector('.feedback-form__radio-cont');
const userAgreementField = document.querySelector('#user-agreement');
const formLabel = document.querySelector('.feedback-form__label');


function checkUserName() {
    let validation = false;
    const userName = userNameField.value.trim();

    if (!isRequired(userName)) {
        showError(userNameField, 'Вы должны ввести свое имя');
    } else {
        removeError(userNameField);
        validation = true;
    }

    return validation;
}

function checkUserEmail() {
    let validation = false;
    const userEmail = userEmailField.value.trim();

    if (!isRequired(userEmail)) {
        showError(userEmailField, 'Поле E-mail не может быть пустым');
    } else if (!isEmailValid(userEmail)) {
        showError(userEmailField, 'Вы ввели неверный формат E-mail');
    } else {
        removeError(userEmailField);
        validation = true;
    }
    return validation;
}

function checkUserAgreement() {
    let validation = true;

    if (!userAgreementField.checked) {
        showError(userAgreementField, 'Вы не приняли условия Пользовательского соглашения');
    } else {
        removeError(userAgreementField);
        validation = true;
    }
    return validation;
}

function checkUserGender() {
    const radioValue = form.elements.gender.value;
    let validation = false;
    if (!isRequired(radioValue)) {
        showError(userGenderField, 'Вы не указали Ваш пол');
    } else {
        removeError(userGenderField);
        validation = true;
    }
    return validation;
}

function isRequired(input) {
    if (input === '') {
        return false;
    }
    return true;
}

function isEmailValid(input) {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(input);
}

function showError(input, message) {
    const formField = input.parentElement;
    const error = formField.querySelector('.error');

    formField.classList.add('error');
    error.textContent = message;
}

function removeError(input) {
    const formField = input.parentElement;
    const error = formField.querySelector('.error');

    formField.classList.remove('error');
    error.textContent = '';
}



function debounce(call, timeout = 800) {

    return function perform(...args) {

        let previousCall = this.lastCall;

        this.lastCall = Date.now();

        if (previousCall && this.lastCall - previousCall <= timeout) {
            clearTimeout(this.lastCallTimer);
        }

        this.lastCallTimer = setTimeout(() => call(...args), timeout);

    };
}
form.addEventListener('submit', (e) => {

    e.preventDefault();

    let userName = checkUserName();
    let userEmail = checkUserEmail();
    let userGender = checkUserGender();
    let userAgreement = checkUserAgreement();

    if (userName && userEmail && userAgreement && userGender) {
        form.submit();
    }

});

form.addEventListener('input', debounce( (e) => {
    switch (e.target.id) {
        case 'user-name':
            checkUserName();
            break;
        case 'user-email':
            checkUserEmail();
            break;
        case 'user-gender-man':
            checkUserGender();
            break;
        case 'user-gender-woman':
            checkUserGender();
            break;
        case 'user-agreement':
            checkUserAgreement();
            break;
    }
}));



