import { clients } from './client-reviews.js';

const clientImage = document.querySelector('.client-image');
const clientName = document.querySelector('.client-name');
const starsContainer = document.querySelector('.stars-container');
const clientReview = document.querySelector('.client-review');
const rightArrow = document.querySelector('.fa-chevron-right');
const leftArrow = document.querySelector('.fa-chevron-left');
let totalCustomers = clients.length - 1;
let currentCustomer = 0;

//Function to add stars
const star = document.createElement('i');
star.classList.add('fas', 'fa-star')

const halfStar = document.createElement('i');
halfStar.classList.add('fas', 'fa-star-half');

const createStars = () => {
    starsContainer.innerHTML = '';
    for(let x = clients[currentCustomer].stars; x > 0 ; x--) {
        x == .5 
        ? starsContainer.innerHTML += halfStar.outerHTML
        : starsContainer.innerHTML += star.outerHTML;
    }
}

//Once page loads it will show the first customer

let cycleClients = () => {
    clientImage.style.background = `url('${clients[currentCustomer].image}') center/cover`;
    clientName.textContent = clients[currentCustomer].name;
    createStars();
    clientReview.textContent = clients[currentCustomer].review;
};

cycleClients();

//When I click right Arrows it will go to the next client

rightArrow.addEventListener('click', () => {
    currentCustomer++;
    currentCustomer > totalCustomers ? currentCustomer = 0 : null;

    cycleClients();
})

//When I click left Arrow if will go to the previous client
leftArrow.addEventListener('click', (e) => {
    currentCustomer--;
    currentCustomer < 0 ? currentCustomer = totalCustomers : null;

    cycleClients();
})