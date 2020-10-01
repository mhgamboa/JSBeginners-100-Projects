//changes color
const button = document.querySelector(".btn");
const body = document.querySelector("body");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
const getRandomInt = () =>
  Math.floor(Math.random() * Math.floor(colors.length));

button.addEventListener("click", () => {
  body.style.backgroundColor = colors[getRandomInt()];
});
