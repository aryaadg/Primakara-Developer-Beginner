let num1 ="";
let num2 ="";
let operation = "";
let result ="";


const inputDisplay = document.getElementById("inputDisplay");

function displayOutput(){
    inputDisplay.value = `${num1} ${operation} ${num2}`;
}

function inputNumber(input){
    if (operation === ""){
        if (num1 === ""){
            num1 = String(input);
        } else {
        num1 = num1+String(input);
    }
        
    } else {
        if (num2 === ""){
        num2 = String(input);
        }   else{
            num2 = num2 + String(input);
            }
    }
    displayOutput();

}

function inputOperation(action){
    if(action === "=") {
        calculate();
    } else if (action === "c") {
        clearDisplay();
    } else if (action === "del") {
        deleteInput();
    } else if (action !== "") {
        operation = action;
        displayOutput();
    }
}



function clearDisplay(){
    num1 = "";
    num2 = "";
    operation = "";
    displayOutput();
}

console.log("num1,operation,num2");