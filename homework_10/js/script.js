"use strict"

let userFirstName = document.querySelector('#first-name');
let userLastName = document.querySelector('#last-name');
let userAge = document.querySelector('#age');
let printButton = document.querySelector('#print-button');
let textParagraph = document.querySelector('.text');

//Age plural
let ageWords = ['год', 'года', 'лет'];
function agePlural(number, ageTitles) {  
    let cases = [2, 0, 1, 1, 1, 2];  
    return ageTitles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];  
}

//Fields validation
let firstNameString = document.querySelector('.text_first-name');
let lastNameString = document.querySelector('.text_last-name');
let ageString = document.querySelector('.text_age');

function fieldsValidation() {
    if (/[0-9]/.test(userFirstName.value)) {
        firstNameString.innerHTML = 'Имя не может содержать цифры';
        userFirstName.style.border = 'solid 2px red';
    } else {
        firstNameString.innerHTML = '';
        userFirstName.removeAttribute('style');
    } 

    if (/[0-9]/.test(userLastName.value)) {
        lastNameString.innerHTML = 'Фамилия не может содержать цифры';
        userLastName.style.border = 'solid 2px red';
    } else {
        lastNameString.innerHTML = '';
        userLastName.removeAttribute('style');
    } 
    if (/[a-zA-Zа-яА-Я]/.test(userAge.value)) {
        ageString.innerHTML = 'Возраст не может содержать буквы';
        userAge.style.border = 'solid 2px red';
    } else {
        ageString.innerHTML  = '';
        userAge.removeAttribute('style');
    }
}

userFirstName.addEventListener('focusout', fieldsValidation);
userLastName.addEventListener('focusout', fieldsValidation);
userAge.addEventListener('focusout', fieldsValidation);
   
//Message output
function messageOutput() {
    if (userFirstName.value === '' || userLastName.value === '' || userAge.value === '') {
        textParagraph.innerHTML ='Необходимо заполнить все поля';
    } else {
        textParagraph.innerHTML = 'Привет! Меня зовут ' + userFirstName.value + ' ' + userLastName.value + ' мне ' + userAge.value + ' ' + agePlural(userAge.value, ageWords) +  ' .';
        console.log(`Привет! Меня зовут ${userFirstName.value} ${userLastName.value}, мне ${userAge.value} ${agePlural(userAge.value, ageWords)}.`);  
    }
    
}
printButton.addEventListener('click', messageOutput);


const firstNumberField = document.querySelector('.first-number');
const secondNumberField = document.querySelector('.second-number');
const additionButton = document.querySelector('#button1');
const subtractionButton = document.querySelector('#button2');
const multiplicationButton = document.querySelector('#button3');
const divisionButton = document.querySelector('#button4');
const resultField = document.querySelector('.text2');

function additionNumbers() {
   resultField.innerHTML = `Результат: ${Number(firstNumberField.value) + Number(secondNumberField.value)}`; 
   console.log(`Результа: ${Number(firstNumberField.value) + Number(secondNumberField.value)}`);
}

function subtractionNumbers() {
    resultField.innerHTML = `Результат: ${Number(firstNumberField.value) - Number(secondNumberField.value)}`; 
    console.log(`Результа: ${Number(firstNumberField.value) - Number(secondNumberField.value)}`);
}

function multiplicationNumbers() {
    resultField.innerHTML = `Результат: ${Number(firstNumberField.value) * Number(secondNumberField.value)}`; 
    console.log(`Результа: ${Number(firstNumberField.value) * Number(secondNumberField.value)}`);
}

function divisionNumbers() {
    resultField.innerHTML = `Результат: ${Number(firstNumberField.value) / Number(secondNumberField.value)}`; 
    console.log(`Результа: ${Number(firstNumberField.value) / Number(secondNumberField.value)}`);
}

additionButton.addEventListener('click', additionNumbers);
subtractionButton.addEventListener('click', subtractionNumbers);
multiplicationButton.addEventListener('click', multiplicationNumbers);
divisionButton.addEventListener('click', divisionNumbers);

      
