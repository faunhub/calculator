function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

// function operate(){

// }

const plus = document.querySelector('.add');
const minus = document.querySelector('.subtract');
const times = document.querySelector('.multiply');
const over = document.querySelector('.divide');
const allNumber = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
let currentTotal =0;

allNumber.forEach(number => number.addEventListener('click',
    () => {
        if (display.textContent.length >= 14){
            return;
        }
        display.textContent += number.textContent;
    }));
clear.addEventListener('click', () => display.textContent ="");