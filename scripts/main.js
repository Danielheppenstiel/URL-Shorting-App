// Global Variables
const navBars = document.querySelector('#nav-bars');
const submitBtn = document.querySelector('#shorten-submit-btn');

const urlList = document.querySelector('#url-list');


// Imports
import UI from './userinterface.js';
import GetData from './fetchData.js'

// Instantiated Classes
const ui = new UI();
const getData = new GetData();


// Event Listeners

    // Nav Mobile Menu
navBars.addEventListener('click', (e) => {
    ui.toggleMobileMenu(e);
});


    // URL Form Submit / Error Handling
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


    // Copy Link
urlList.addEventListener('click', (e) => {

    if(e.target.classList.contains('copy-btn')) {
        ui.copyUrl(e.target.previousElementSibling.innerText);
        e.target.classList.add('copied');
        e.target.innerText = 'Copied!';
    } else {
        console.log('target not hit');
    }

});

