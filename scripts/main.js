// Global Variables
const navBars = document.querySelector('#nav-bars');
const submitBtn = document.querySelector('#shorten-submit-btn');
const copyBtn = document.querySelectorAll('.copy-btn');


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
    
    const input = document.querySelector('#shorten-input');
    let inputValue = input.value;

    if(inputValue === '') {
        ui.showError();
    } else {
        getData.shortenUrl(inputValue);
        ui.removeError();
        setTimeout(() => {
            input.value = '';
            input.placeholder = 'Shorten another URL..';
        }, 500);
    };

});


