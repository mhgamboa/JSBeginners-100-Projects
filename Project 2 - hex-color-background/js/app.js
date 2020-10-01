const hexArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

document.querySelector(".btn").addEventListener("click", () => {
  let hex = "#";
  let hexNumber = () => Math.floor(Math.random() * Math.floor(hexArray.length));

  for (x = 0; x < 6; x++) {
    hex += hexArray[hexNumber()];
  }
  document.querySelector("body").style.backgroundColor = hex;
  document.querySelector("#hex-value").textContent = hex;
});
