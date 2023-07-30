// Global Variables
const navBars = document.querySelector('#nav-bars');
const submitBtn = document.querySelector('#shorten-submit-btn');

// Imports
import UI from './userinterface.js';
import GetData from './fetchData.js'

// Instantiated Classes
const ui = new UI();
const getData = new GetData();


// Event Listeners

navBars.addEventListener('click', (e) => {
    ui.toggleMobileMenu(e);
});


submitBtn.addEventListener('click', () => {
    const inputValue = document.querySelector('#shorten-input').value;
    getData.shortenUrl(inputValue);
})
    