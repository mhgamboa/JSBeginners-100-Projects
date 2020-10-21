import { clients } from './client-reviews.js';

const clientImage = document.querySelector('.client-image');
const clientName = document.querySelector('.client-name');
const clientStars = document.querySelector('.client-stars');
const clientReview = document.querySelector('.client-review');
let totalCustomers = clients.length;
let currentCustomer = 0;

//Once page loads it will show the first customer

clientImage.style.background = `url('${clients[0].image}')`;
clientName.textContent = clients[0].name;
//clientStars = ??? 
clientReview.textContent = clients[0].review;