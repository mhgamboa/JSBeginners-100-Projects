rightButton = document.querySelector('#right-button');
leftButton = document.querySelector('#left-button');


leftButton.addEventListener('click', function() {
    rightButton.classList.toggle("transform-right")
});

// centerButton.addEventListener('mouseout', function() {
//     rightButton.classList.toggle("transform-right")
// });