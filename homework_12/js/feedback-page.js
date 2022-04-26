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
    usersDataOutputInConsole(usersArray);
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

function usersDataOutputInConsole(users) {
    users.forEach((user) => {
       console.log(user.last_name);
    });

    console.log('----------------------')

    console.log('Данные всех пользователей фамилии которых начинаются на F:')
    users.forEach(user => {
        if(user.last_name[0] === 'F') {
            console.log(`ID пользователя: ${user.id}, имя: ${user.first_name}, фамилия: ${user.last_name}, e-mail: ${user.email}, аватарка: ${user.avatar}`)
        }
    });
    console.log('----------------------');
    let usersFullNameList = users.reduce((prev, user) =>  {
        prev += user.first_name + ' ' + user.last_name + ', ';
        return prev;
    }, '');
    console.log('Наша база содержит данные следующих пользователей: ' + usersFullNameList);

    console.log('----------------------');
   
    
    console.log('Ключи объекта: ' + Object.keys(users[0]).join(', '));
  
}

