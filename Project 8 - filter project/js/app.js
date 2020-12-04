const filterButtonsContainer = document.querySelector(".sortBtn");
const storeItems = document.querySelectorAll(".store-item");

//Filter for the Store Buttons
const filterItems = (filterWord) => {
  storeItems.forEach((storeItem) => {
    storeItem.dataset.item == filterWord || filterWord == "all"
      ? storeItem.classList.remove("hidden")
      : storeItem.classList.add("hidden");
  });
};

filterButtonsContainer.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    let filterParameter = e.target.dataset.filter;
    filterItems(filterParameter);
  }
});

// Filter for the Search Box
const searchInput = document.querySelector(".form-control");

searchInput.addEventListener("keyup", (e) => {
  let regex = new RegExp(e.target.value.toLowerCase());
  console.log(regex);
  storeItems.forEach((storeItem) => {
    regex.test(storeItem.dataset.item)
      ? storeItem.classList.remove("hidden")
      : storeItem.classList.add("hidden");
  });
});
