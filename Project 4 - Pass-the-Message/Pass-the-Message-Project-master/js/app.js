const form = document.querySelector("#message-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const h5 = document.querySelector("h5");
  const userInput = document.querySelector("#message");
  const messageContent = document.querySelector(".message-content");

  //Relaying back the input
  if (userInput.value === "") {
    h5.classList.add("show");
    setTimeout(function () {
      h5.classList.remove("show");
    }, 3000);
  } else {
    messageContent.textContent = userInput.value;
  }
  userInput.value = "";
});
