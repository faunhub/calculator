function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}
function operate(a, b, op){
    if (op == '+'){
        displayValue = add(a,b);
    } else if (op == '-'){
        displayValue = subtract(a,b);
    } else if (op == '*'){
        displayValue = multiply(a,b);
    } else if (op == '÷'){
        displayValue = divide(a,b);
    }
    display.textContent = displayValue;
}
function populateDisplay(number){
    if (display.textContent.length >= 14){
        return;
    }
    return display.textContent+= number.textContent;
}
function deleteAll(){
    display.textContent = '';
    displayValue = 0;
}

//main

const numberCollection = document.querySelectorAll('.number');
const opCollection = document.querySelectorAll('.operation');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
let displayValue;
let firstValue;
let currentOp;

numberCollection.forEach(number => number.addEventListener('click', () => {
    populateDisplay(number);
    displayValue = display.textContent;
    console.log(displayValue);
}));
opCollection.forEach(operation => operation.addEventListener('click', () => {
    firstValue = displayValue;
    currentOp = operation.textContent;
    deleteAll();
}));
clear.addEventListener('click', deleteAll);
equal.addEventListener('click', () => operate(firstValue, displayValue, currentOp));