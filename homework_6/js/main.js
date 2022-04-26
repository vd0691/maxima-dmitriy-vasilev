let menu = document.querySelectorAll('.page-header__links'); //Получаем ссылки в нашем меню
let currentUrl = document.location.href; //Текущий URL
for (let i = 0; i < menu.length; i++){
    if(currentUrl === menu[i].href) {
        menu[i].classList.add('active');
    }
}

/**Добавляем класс active-label при фокусе на input */
let input = document.querySelectorAll('.feedback-form__input');
    for(let i = 0; i < input.length; i++ ) {
        input[i].addEventListener('focus', (e) => {
            let label = document.querySelector(`[for="${e.target.id}"]`);
            label.classList.add('active-label');
          
        });

        input[i].addEventListener('focusout', (e) => {
            if(input[i].value === '') {
                let label = document.querySelector(`[for="${e.target.id}"]`);
                label.classList.remove('active-label');
            }
            
        }); 
    }

/**Добавляем класс active-label при фокусе на textarea */
let textarea = document.querySelector('textarea');
 
textarea.addEventListener('focus', (e) => {
    let label = document.querySelector(`[for="${e.target.id}"]`);
    label.classList.add('active-label');
});

textarea.addEventListener('focusout', (e) => {
    if(textarea.value === '') {
        let label = document.querySelector(`[for="${e.target.id}"]`);
        label.classList.remove('active-label');
    }

});    


/**Selected */

let select = document.querySelector('select');
let arrowIcon = document.querySelector('.icon');

select.addEventListener('change', () => {
    let selSpan = document.querySelector('.topic');
    selSpan.innerHTML = select.options[select.selectedIndex].text;
});

select.addEventListener('focus', (e) => {
    let label = document.querySelector(`[for="${e.target.id}"]`);
    label.classList.add('active-label');
});
select.addEventListener('focusout', (e) => {
    if(select.value === '') {
        let label = document.querySelector(`[for="${e.target.id}"]`);
        label.classList.remove('active-label');
    }
    
});
select.addEventListener('click', () => {
    arrowIcon.classList.toggle('rotate')
});



/**Выводим список выбранных файлов */
let fileInputs = document.querySelector('.feedback-form__file-input')
let fileLabel = document.querySelector('.feedback-form__file-label')
let filesCont = document.querySelector('.feedback-form__file-cont')
let filesNameCont = document.querySelector('.feedback-form__file-names')


fileInputs.addEventListener('focus', () => {
    fileLabel.classList.add('border')
})
fileInputs.addEventListener('focusout', () => {
    fileLabel.classList.remove('border')
})

function processSelectedFiles(fileInput) {
    let files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
        let spanElem = document.createElement('span');
        spanElem.innerHTML +=  files[i].name;
        filesNameCont.appendChild(spanElem);
    }
  }

 filesCont.addEventListener('change', () => {
    processSelectedFiles(fileInputs)
 });


 /**Класс для чекбокса */

let checkboxInput = document.querySelector('.feedback-form__checkbox-input');


checkboxInput.addEventListener('click', () => {
   checkboxInput.classList.value.includes('active-checkbox') ? checkboxInput.classList.remove('active-checkbox') : checkboxInput.classList.add('active-checkbox') 
})


