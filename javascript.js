let num1 = null;
let num2 = null;
let operator = null;
let num1HasDec = false;
let num2HasDec = false;

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
const operate = function() {
    const num1copy = parseInt(num1);
    const num2copy = parseInt(num2);
    console.log("num1copy: " + num1copy);
    console.log("num2copy: " + num2copy);
    const operatorcopy = operator;
    let ans;
    clearDisplay();
    if (num2copy == 0 && operatorcopy == "/") {return "Don't do that."}
    switch (operatorcopy) {
        case "+":
            ans = add(num1copy, num2copy).toFixed(2);
            if (ans.includes(".")) {num1HasDec = true;} else {num1HasDec = false;}
            return ans;
        case "-":
            ans = subtract(num1copy, num2copy).toFixed(2);
            if (ans.includes(".")) {num1HasDec = true;} else {num1HasDec = false;}
            return ans;
        case "*":
            ans = multiply(num1copy, num2copy).toFixed(2);
            if (ans.includes(".")) {num1HasDec = true;} else {num1HasDec = false;}
            return ans;
        case "/":
            ans = divide(num1copy, num2copy).toFixed(2);
            if (ans.includes(".")) {num1HasDec = true;} else {num1HasDec = false;}
            return ans;
    }
}
let screencontent = document.querySelector("#screencontent");
const clearDisplay = function () {
    num1HasDec = false;
    num2HasDec = false;
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
    console.log("num1HasDec: " + num1HasDec);
    console.log("num2HasDec: " + num2HasDec);
    if (screencontent.textContent == "Don't do that.") {clearDisplay();}
    //Divide by zero check
    if (string == "Don't do that.") {clearDisplay(); screencontent.textContent = string;} else {
        //If Number or decimal point
        if (parseInt(string) || string == "0" || string == ".") {
            //If nothing on screen
            if (num1 == null) {
                if (string != ".") {
                    num1 = string;
                    screencontent.textContent = string;
                }
            //If number 2 empty
            } else if (num2 == null) {
                //If operator empty
                if (operator == null) {
                    if (string == ".") {
                         if (!num1HasDec) {
                            num1 = num1 + string;
                            screencontent.textContent += string;
                            num1HasDec = true;
                         }
                    } else {
                        num1 = num1 + string;
                        screencontent.textContent += string;
                    }
                //If has operator
                } else if (string != ".") {
                    num2 = string;
                    screencontent.textContent += (" " + string);
                }
            //If everything full
            } else {
                if (string == ".") {
                    if (!num2HasDec) {
                        num2 = num2 + string;
                        screencontent.textContent += string;
                        num2HasDec == true;
                    }
                } else {
                    num2 = num2 + string;
                    screencontent.textContent += string;
                }
            }
        //If operator
        } else {
            //If number 1 full
            if (num1 != null) {
                //If number 2 empty
                if (num2 == null) {
                    operator = string;
                    screencontent.textContent += (" " + string);
                //If number 2 full
                } else {
                    //Divide by zero check
                    const ans = operate();
                    if (ans == "Don't do that.") {
                        clearDisplay();
                        screencontent.textContent = "Don't do that.";
                    } else {
                        if (ans.includes(".")) {num1HasDec = true;} else {num1HasDec = false;}
                        num1 = ans;
                        operator = string;
                        screencontent.textContent = num1 + " " + operator;
                    }
                }
            }
        }
    }
    console.log("AFTER");
    console.log("num1: " + num1);
    console.log("num2: " + num2);
    console.log("operator: " + operator);
    console.log("num1HasDec: " + num1HasDec);
    console.log("num2HasDec: " + num2HasDec);
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
const btndec = document.querySelector('#dec');
const btnclear = document.querySelector("#clear");
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
btndec.addEventListener("click", () => {addToDisplay(".");})
btnclear.addEventListener("click", () => {clearDisplay();})
btneq.addEventListener("click", () => {if (num1 != null && num2 != null && operator != null) {addToDisplay(operate());}})
btnplus.addEventListener("click", () => {addToDisplay("+");})
btnsub.addEventListener("click", () => {addToDisplay("-");})
btnmult.addEventListener("click", () => {addToDisplay("*");})
btndiv.addEventListener("click", () => {addToDisplay("/");})

const calculator = document.querySelector("body");

calculator.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "1":
            addToDisplay("1");
            break;
        case "2":
            addToDisplay("2");
            break;
        case "3":
            addToDisplay("3");
            break;
        case "4":
            addToDisplay("4");
            break;
        case "5":
            addToDisplay("5");
            break;
        case "6":
            addToDisplay("6");
            break;
        case "7":
            addToDisplay("7");
            break;
        case "8":
            addToDisplay("8");
            break;
        case "9":
            addToDisplay("9");
            break;
        case "0":
            addToDisplay("0");
            break;
        case ".":
            addToDisplay(".");
            break;
        case "Enter":
            if (num1 != null && num2 != null && operator != null) {addToDisplay(operate());}
            break;
        case "+":
            addToDisplay("+");
            break;
        case "-":
            addToDisplay("-");
            break;
        case "*":
            addToDisplay("*");
            break;
        case "/":
            addToDisplay("/");
            break;
    }
})