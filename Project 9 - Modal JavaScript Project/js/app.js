const lightBox = document.querySelector(".lightbox-container");
const itemImages = document.querySelectorAll(".store-img");
let lightBoxbackground = document.querySelector(".lightbox-item");
const imageList = [];
let currentImageIndex = 0;

itemImages.forEach((image) => {
  //Add images to array
  imageList.push(image.src);

  // Click On Image for Modal to Show up and find index of current image
  image.addEventListener("click", (e) => {
    lightBox.classList.add("show");
    currentImageIndex = imageList.indexOf(image.src);
    lightBoxbackground.style.background = `url(${imageList[currentImageIndex]}) center/cover`;
  });
});

//Click on "X" in Modal to Close
const modalCloseButton = document.querySelector(".lightbox-close");

modalCloseButton.addEventListener("click", () => {
  lightBox.classList.remove("show");
});

// Right and Left Modal Button
const rightmodalButton = document.querySelector(".btnRight");
const leftmodalButton = document.querySelector(".btnLeft");

rightmodalButton.addEventListener("click", (e) => {
  currentImageIndex++;
  changeModalImage();
});

leftmodalButton.addEventListener("click", (e) => {
  currentImageIndex--;
  changeModalImage();
});

const changeModalImage = () => {
  if (currentImageIndex > imageList.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = imageList.length;
  } else {
    lightBoxbackground.style.background = `url(${imageList[currentImageIndex]}) center/cover`;
    console.log(currentImageIndex);
  }
};
