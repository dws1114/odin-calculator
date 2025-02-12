//Operator functions

function add(num1, num2) {
  return num1 + num2;
};

function subtract(num1, num2) {
  return num1 - num2;
};

function multiply(num1, num2) {
  return num1 * num2;
};

function divide(num1, num2) {
  if (num2 === 0) {
    alert("Silly... You cannot divide by zero!");
    return null;
  } else {
    return num1 / num2;
  }
};

function operate(operaterFunction, num1, num2) {
  switch(operaterFunction) {
      case "+":
          return add(num1, num2);
      case "-":
          return subtract(num1, num2);
      case "*":
          return multiply(num1, num2);
      case "/":
          return divide(num1, num2);
  }
};


function debugText() {
  console.log(`Num Display:${numDisplay}, num:${num}, prevNum:${prevNum}, nextNum:${nextNum}, operator:${operator}`);
}

const digits = document.querySelectorAll(".digit");

const operators = document.querySelectorAll(".operator");

const display = document.querySelector(".display");

let numDisplay = [];
let num = null;
let prevNum = null;
let nextNum = null;
let operator = null;

digits.forEach(button => {
  button.addEventListener("click", () => {
      let displayText = button.innerText;
      numDisplay.push(displayText);
      display.innerText = numDisplay.join("");
      num = parseInt(numDisplay.join(""));
      debugText();
  });
});

operators.forEach(button => {
  button.addEventListener("click", () => {
    if (prevNum == null) {
      prevNum = num;
      operator = button.innerText;
      numDisplay.splice(0);
      display.innerText = prevNum;
      debugText();
    } else {
      nextNum = num;
      num = operate(operator, prevNum, nextNum);
      prevNum = num;
      operator = button.innerText;
      display.innerText = prevNum;
      numDisplay.splice(0);
      debugText();
    }
  });
});