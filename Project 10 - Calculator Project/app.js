/*
NOTE:

I added the class "symbol-button" to the buttons "-", "+", "/", "*"

I added the class "num-button" to buttons with the numbers 0-9 and the decimal
*/

const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".num-button");
let screenLength = 0;
let mathOperator;
let [x, y] = [0, 0];

// Click on Number/decimal button and display on screen
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    screen.value = screen.value.concat(button.dataset.num);
  });
});

//Click on plus/division/Multiplicaiton/Subtraction symbol to set value of first number
const symbolButtons = document.querySelectorAll(".symbol-button");

symbolButtons.forEach((symbolButton) => {
  symbolButton.addEventListener("click", () => {
    x = Number(screen.value);
    screen.value = screen.value.concat(symbolButton.dataset.num);
    screenLength = screen.value.length;
    mathOperator = symbolButton.dataset.num;
  });
});

//Clear Screen When Ren Button is Pressed
const clearButton = document.querySelector(".btn-clear");

clearButton.addEventListener("click", (e) => {
  screen.value = "";
  [x, y] = [0, 0];
});

//Solve Equation When Equal Button is Pressed
const equalButton = document.querySelector(".btn-equal");

equalButton.addEventListener("click", () => {
  y = Number(screen.value.slice(screenLength));
  screen.value = solve(x, y, mathOperator);
});

const solve = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
  }
};
