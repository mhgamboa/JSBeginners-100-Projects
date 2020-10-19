//Arrow transitions
const rightArrow = document.querySelector('.fa-angle-right');
const leftArrow = document.querySelector('.fa-angle-left');
const rightHoverArea = document.querySelector('.right-hover-area');
const leftHoverArea = document.querySelector('.left-hover-area');

//Mousever/Mouseout for right arrow
rightHoverArea.addEventListener('mouseover', function() {
    rightArrow.classList.toggle("transform");
});

rightHoverArea.addEventListener('mouseout', function() {
    rightArrow.classList.toggle("transform");
});


//Mouseover/Mouseout for left arrow
leftHoverArea.addEventListener('mouseover', function() {
    leftArrow.classList.toggle("transform");
});

leftHoverArea.addEventListener('mouseout', () => {
    leftArrow.classList.toggle("transform");
})
//End Arrow Transitions

//Image transitions when arrow(areas) are clicked
let currentImage = 0;
const numberOfImages = 4; //total number of images starting at 0. Please name accordingly in the img folder (EX: contBCG-x.jpeg)
document.body.style.background = `url("img/contBcg-${currentImage}.jpeg") center/cover`;


//Right arrow
rightHoverArea.addEventListener('click', () => {
    currentImage++;
    currentImage > numberOfImages ? currentImage = 0 : null;
    document.body.style.background = `url("img/contBcg-${currentImage}.jpeg") center/cover`;
})

//left Arrow
//Right arrow
leftHoverArea.addEventListener('click', () => {
    currentImage--;
    currentImage < 0 ? currentImage = numberOfImages : null;
    document.body.style.background = `url("img/contBcg-${currentImage}.jpeg") center/cover`;
})