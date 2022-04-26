let numberContainer = document.querySelector('.fibonacci-numbers');
let buttonStart = document.querySelector('#start');

function makeFibonacciFunction() {
    let number = 0;
    let nextNumber = function() {
        let number1 = 0;
        let number2 = 1;
        for (let i = 1; i <= number; i++) {
            let number3 = number1 + number2;
            number1 = number2;
            number2 = number3;
        }
        number += 1;
        
        let spanElem = document.createElement('span');
        spanElem.innerHTML +=  number2;
        numberContainer.appendChild(spanElem);
        
        return number2;
    }
    return nextNumber;
}

const fibonacci = makeFibonacciFunction();

buttonStart.addEventListener('click', fibonacci);

