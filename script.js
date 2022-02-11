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
function operate(op){
    if (answer === undefined ){
        answer = displayValue;
        displayValue = undefined;
        return;
    }
    if (op == '+'){
        answer = add(answer, displayValue);
        displayValue = undefined;
    } else if (op == '-'){
        answer = subtract(answer, displayValue);
        displayValue = undefined;
    } else if (op == '*'){
        answer = multiply(answer, displayValue);
        displayValue = undefined;
    } else if (op == '÷'){
        if (displayValue ==0){
             message.textContent = '0 answer found. You can\'t divide by 0!';
            return;
        }
        answer = divide(answer, displayValue);
        displayValue = undefined;
    }
    display.textContent = answer;
}
function populateDisplay(number){
    if (display.textContent.length >= 14){
        return;
    }
    return display.textContent+= number.textContent;
}
function deleteAll(){
    display.textContent = '';
    displayValue = undefined;
    answer =undefined;
    currentOp=undefined;
}

//main

const numberCollection = document.querySelectorAll('.number');
const opCollection = document.querySelectorAll('.operation');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const message = document.querySelector('.notification');
let displayValue;
let answer;
let currentOp;

numberCollection.forEach(number => number.addEventListener('click', () => {
    displayValue = parseFloat(populateDisplay(number));
    
}));

//if you use multiple different operations it doesnt work
opCollection.forEach(operation => operation.addEventListener('click', () => {
    operate(currentOp);
    currentOp = operation.textContent;
    display.textContent ='';
    
}));
clear.addEventListener('click', deleteAll);
equal.addEventListener('click', () => {
    operate(currentOp);
    displayValue =undefined;
});