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
  return num1 / num2;
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
      case "%":
          return divide(num1, 100);
      case "+ / -":
          return multiply(num1, -1);
  }
};


const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");

const display = document.querySelector(".display");

let prevNumDisplay = [];
let nextNumDisplay = [];
let prevNum = "";
let nextNum = "";
let operator = "";

digits.forEach(button => {
  button.addEventListener("click", () => {
      let displayText = button.innerText;
      prevNumDisplay.push(displayText);
      display.innerText = prevNumDisplay.join("");
  });
});