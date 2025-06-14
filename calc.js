// Add animation later
// do same thing with jquery
let display = document.querySelector('.display');

let currentInput = '';
let previousInput = null;
let operator = null;
let fullExpression = '';
let calculatedValue = '';

document.querySelectorAll('[data-number]').forEach(button =>
{
    button.addEventListener('click', () =>{
            currentInput += button.dataset.number;
            fullExpression += button.dataset.number
            display.value = fullExpression;
        })
}
)

document.querySelectorAll('[data-operator]').forEach(
    button => {
        button.addEventListener('click', ()=>
        {   if (currentInput === '')return;
            if (currentInput && operator && previousInput) calculate();
            operator = button.dataset.operator;
            previousInput = currentInput;
            currentInput = ''
            fullExpression += operator;
            display.value =  fullExpression;
        })
    }
)

document.querySelector('.clear').addEventListener('click',()=>{
    currentInput= '';
    operator = null;
    previousInput = null;
    display.value = '';
})
document.addEventListener('keydown', (event)=>{
    let key = event.key.toLowerCase();
    if (key === 'c'){
        currentInput= '';
        operator = null;
        previousInput = null;
        display.value = '';
        fullExpression = '';
    }
})

document.querySelector('.equals').addEventListener('click',calculate);
document.addEventListener('keydown', calculate);

function calculate(){
    if (!previousInput|| !currentInput||!operator) return;
    let a = parseFloat(previousInput);
    // alternative parseInt()
    let b = parseFloat(currentInput);
    let result;
    switch (operator){
        case '+': result = a + b; break;
        case '-': result = a - b;break;
        case '*': result = a * b; break;
        case 'mod': result = a % b; break;
        case '/':  result = a/b; break;
        default: result = 'error'
    }
    calculatedValue = result.toString();
    display.value = calculatedValue;
    previousInput = null;
    operator = null;
    currentInput = '';
    fullExpression = '';
    
}
