let num1 = null;
let num2 = null;
let operator = null;

const add = function(num1, num2) {
    return num1 + num2;
}
const subtract = function(num1, num2) {
    return num1 - num2;
}
const multiply = function(num1, num2) {
    return num1 * num2;
}
const divide = function(num1, num2) {
    return num1 / num2;
}
const operate = function(num1, num2, operator) {
    clearDisplay();
    switch (operator) {
        case "+":
            return (add(num1, num2).toString());
        case "-":
            return (subtract(num1, num2).toString());
        case "*":
            return (multiply(num1, num2).toString());
        case "/":
            return (divide(num1, num2).toString());
    }
}
let screencontent = document.querySelector("#screencontent");
const clearDisplay = function () {
    screencontent.textContent = "";
    num1 = null;
    num2 = null;
    operator = null;
}
const addToDisplay = function(string) {
    console.log("BEFORE");
    console.log("num1: " + num1);
    console.log("num2: " + num2);
    console.log("operator: " + operator);
    if (parseInt(string) || string == "0") {
        if (num1 == null) {
            num1 = parseInt(string);
            screencontent.textContent = string;
        } else if (num2 == null) {
            if (operator == null) {
                num1 = parseInt(num1.toString() + string);
                screencontent.textContent += string;
            } else {
                num2 = parseInt(string);
                screencontent.textContent += (" " + string);
            }
        } else {
            num2 = parseInt(num2.toString() + string);
            screencontent.textContent += string;
        }
    } else {
        if (num1 != null) {
            if (num2 == null) {
                operator = string;
                screencontent.textContent += (" " + string);
            } else {
                num1 = parseInt(operate(num1, num2, operator));
                operator = string;
                screencontent.textContent = num1 + " " + operator;
            }
        }
    }
    console.log("AFTER");
    console.log("num1: " + num1);
    console.log("num2: " + num2);
    console.log("operator: " + operator);
}

const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");
const btn0 = document.querySelector("#zero");
const btneq = document.querySelector("#eq");
const btnplus = document.querySelector("#plus");
const btnsub = document.querySelector("#sub");
const btnmult = document.querySelector("#mult");
const btndiv = document.querySelector("#div");

btn1.addEventListener("click", () => {addToDisplay("1");})
btn2.addEventListener("click", () => {addToDisplay("2");})
btn3.addEventListener("click", () => {addToDisplay("3");})
btn4.addEventListener("click", () => {addToDisplay("4");})
btn5.addEventListener("click", () => {addToDisplay("5");})
btn6.addEventListener("click", () => {addToDisplay("6");})
btn7.addEventListener("click", () => {addToDisplay("7");})
btn8.addEventListener("click", () => {addToDisplay("8");})
btn9.addEventListener("click", () => {addToDisplay("9");})
btn0.addEventListener("click", () => {addToDisplay("0");})
btneq.addEventListener("click", () => {addToDisplay(operate(num1, num2, operator));})
btnplus.addEventListener("click", () => {addToDisplay("+");})
btnsub.addEventListener("click", () => {addToDisplay("-");})
btnmult.addEventListener("click", () => {addToDisplay("*");})
btndiv.addEventListener("click", () => {addToDisplay("/");})