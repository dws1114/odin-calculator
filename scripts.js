// Operater functions

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
  }
};


const digits = document.querySelectorAll(".digit");

let display = document.querySelector(".display");

let prevNumDisplay = [];

digits.forEach(button => {
  button.addEventListener("click", () => {
      let displayText = button.innerText;
      prevNumDisplay.push(displayText);
      display.innerText = prevNumDisplay.join("");
  });
});

let prevNum = parseInt(prevNumDisplay.join(""));