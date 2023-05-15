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
            return subtract(Number(a),Number(b));
        case '+':
            return add(Number(a),Number(b));
        case '*':
            return multiply(Number(a),Number(b));
        case '/':
            return divide(Number(a),Number(b));
        default:
            return;
    }
}

function allClear(){
    opNumber = 0;
    n1 = "";
    n2 = "";
    operator = '';
    console.log("CLEAR");
    screenText.textContent = " ";
}
function screenClear(){
    screenText.textContent = " ";
}

function clickedButton(e){
    if(e.target.textContent === "CLEAR"){
        allClear();
        return;
    }
    if(e.target.textContent === "="){
        n1 = operate(n1,n2,operator);
        screenText.textContent = n1;
        n2 = 0;
        opNumber = 0;
        operator = '';
        return; 
    }
    if(e.target.textContent === '+' | e.target.textContent === '-' | e.target.textContent=== '*' | e.target.textContent === '/')
    {
        opNumber++;
        operator = e.target.textContent;
    }else{
        if(opNumber === 0){
            n1+= e.target.textContent;
        }
        if(opNumber === 1){
            n2+= e.target.textContent;
        }
    }
    console.log(`n1 = ${n1}`);
    console.log(`n2 = ${n2}`);
    console.log(`operator = ${operator}`);

    screenText.textContent+=e.target.textContent;
}
buttons = document.querySelectorAll("button");
buttons.forEach( btn => btn.addEventListener("click", clickedButton));
console.log(buttons);

let screenText = document.querySelector(".screen");
let opNumber = 0;
let n1 = "";
let operator = ""
let n2 = "";