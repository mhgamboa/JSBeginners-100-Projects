let count = document.querySelector("#count");
let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");
let resetButton = document.querySelector("#reset");

count.textContent = 0;

subtractButton.addEventListener("click", () => {
  count.textContent--;
  if (count.textContent < 0) {
    count.style.color = "red";
  }
  if (count.textContent == 0) {
    count.style.color = "black";
  }
});

addButton.addEventListener("click", () => {
  count.textContent++;
  if (count.textContent > 0) {
    count.style.color = "green";
  }
  if (count.textContent == 0) {
    count.style.color = "black";
  }
});

resetButton.addEventListener("click", () => {
  count.textContent = 0;
  count.style.color = "black";
});
