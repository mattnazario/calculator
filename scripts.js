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
            return a;
    }
}

function allClear(){
    opNumber = 0;
    n1 = "0";
    n2 = "";
    operator = '';
    console.log("CLEAR");
    screenText.textContent = " ";
    updateScreen();
}

function updateScreen(){
    screenText.textContent = `${n1} ${operator} ${n2}`;
}

function equalsButton(){
    n1 = operate(n1,n2,operator);
    screenText.textContent = n1;
    n2 = "";
    opNumber = 0;
    operator = '';
}

function clickedButton(e){
    if(e.target.textContent === "AC"){
        allClear();
        return;
    }
    if(e.target.textContent === "="){
        equalsButton();
        return; 
    }
    if(e.target.textContent === '+' | e.target.textContent === '-' | e.target.textContent=== '*' | e.target.textContent === '/')
    {
        if(n1 === ''){
            return;
        }
        if(n1 !== "" && n2 !== ""){
            equalsButton();
        }
        if(opNumber === 0) opNumber++;
        operator = e.target.textContent;
    }else{
        if(opNumber === 0){
            if(n1==="" | n1==="0") n1 = e.target.textContent;
            else{
                n1+= e.target.textContent;
            }            
        }
        if(opNumber === 1){
            if(n2==="") n2 = e.target.textContent;
            else{
                n2+= e.target.textContent;
            }
            
        }
    }
 

    updateScreen();
}
buttons = document.querySelectorAll("button");
buttons.forEach( btn => btn.addEventListener("click", clickedButton));
console.log(buttons);

let screenText = document.querySelector(".screen");
let opNumber = 0;
let n1 = "";
let operator = ""
let n2 = "";