// Global Variables
const navBars = document.querySelector('#nav-bars');

// Imports
import UI from './userinterface.js';
import GetData from './fetchData.js'

// Instantiated Classes
const ui = new UI();
const getData = new GetData();


// Event Listeners

navBars.addEventListener('click', (e) => {
    ui.toggleMobileMenu(e);
})

getData.shortenUrl('https://github.com/Danielheppenstiel/URL-Shorting-App');
    