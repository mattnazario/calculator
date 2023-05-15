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

function operate(a, b, operator){
    switch(operator){
        case '-':
            return subtract(a,b);
        case '+':
            return add(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

let n1;
let operator;
let n2;