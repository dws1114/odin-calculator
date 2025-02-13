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

function clearAll() {
  numDisplay = [];
  num = null;
  prevNum = null;
  nextNum = null;
  operator = null;
  display.innerText = "";
};

const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display")
const decimalBtn = document.querySelector("#decimal");
const negativeBtn = document.querySelector("#negative");
const percentBtn = document.querySelector("#percent");
const backBtn = document.querySelector("#back");
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");

let numDisplay = [];
let num = null;
let prevNum = null;
let nextNum = null;
let operator = null;

digits.forEach(button => {
  button.addEventListener("click", () => {
      if (operator === "=") {
        clearAll();
      }

      let displayText = button.innerText;
      numDisplay.push(displayText);
      display.innerText = numDisplay.join("");
      num = parseInt(numDisplay.join(""));
      equalsBtn.disabled = false;
  });
});

operators.forEach(button => {
  button.addEventListener("click", () => {
    if (prevNum == null) {
      prevNum = num;
      operator = button.innerText;
      numDisplay.splice(0);
      display.innerText = prevNum;
    } else if (operator === "=") {
      operator = button.innerText;
    } else {
      nextNum = num;
      num = operate(operator, prevNum, nextNum);
      prevNum = num;
      operator = button.innerText;
      display.innerText = prevNum;
      numDisplay.splice(0);
    }
  });
});

equalsBtn.addEventListener("click", () => {
  nextNum = num;
  num = operate(operator, prevNum, nextNum);
  prevNum = num;
  display.innerText = prevNum;
  nextNum = null;
  operator = "="
  numDisplay.splice(0);
  equalsBtn.disabled = true;
});

decimalBtn.addEventListener("click", () => {
  alert("Decimal button currently inoperable. Coming soon.")
});

negativeBtn.addEventListener("click", () => {
  num = multiply(num, -1);
  display.innerText = num;
});

percentBtn.addEventListener("click", () => {
  num = divide(num, 100);
  display.innerText = num;
});

backBtn.addEventListener("click", () => {
  numDisplay.splice(-1, 1);
  num = parseInt(numDisplay.join(""));
  display.innerText = num;
});

clearBtn.addEventListener("click", clearAll);