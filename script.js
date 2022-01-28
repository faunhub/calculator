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

function currentNumber(number){
    if (display.textContent.length >= 14){
        return;
    }
    display.textContent += number.textContent;
    currentInt = display.textContent;
    return display.textContent;
}

function operate(){
    let a;
    let b;
    if (typeof(currentEquation[length-1]) == 'number'){
        a = currentEquation[0];
        b = currentEquation[length-1];
        if (currentEquation[1] == 'add'){
            currentEquation =[];
            return add(a,b);
        }
    } else {
        return;
    }
}

//main
const allOperation = document.querySelectorAll('.operation');
const plus = document.querySelector('.add');
const minus = document.querySelector('.subtract');
const times = document.querySelector('.multiply');
const over = document.querySelector('.divide');
const allNumber = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
let currentInt =0;
let currentEquation = [];
let result =0;

allNumber.forEach(number => number.addEventListener('click', () =>{
    currentNumber(number);
} ));
allOperation.forEach(operation => operation.addEventListener('click',
(operation) => {
    // result = operate();
    currentInt =0;
    display.innerText ="";
    currentEquation.push(operation.target.classList.item(1));
    console.log(currentEquation);
} 
));

clear.addEventListener('click', () => display.textContent ="");
