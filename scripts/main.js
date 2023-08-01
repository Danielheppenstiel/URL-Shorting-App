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

    // Add items from local storage to the DOM on DOM Load
document.addEventListener('DOMContentLoaded', () => {
   const allLinks =  JSON.parse(localStorage.getItem('links'));
   allLinks.forEach((link) => {
        ui.addLinkToDom(link.fullLink, link.shortLink);
   });
});

    // Nav Mobile Menu
navBars.addEventListener('click', (e) => {
    ui.toggleMobileMenu(e);
});

window.addEventListener('resize', () => {
    const bars = document.querySelectorAll('.bar');
    const dropDownMenu = document.querySelector('#drop-down-menu');
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768) {
        dropDownMenu.style.display = 'none';
        bars.forEach((bar) => {
            bar.classList.remove('open');
        });
    };

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

        setTimeout(() => {
            e.target.classList.remove('copied');
            e.target.innerText = 'Copy';
        }, 3000);

    };

});

    // Delete items
urlList.addEventListener('dblclick', (e) => {

    if (e.target.parentElement.classList.contains('url-list-item')) {
        const fullLink = e.target.parentElement.firstChild.firstChild.innerText;
        const shortLink = e.target.parentElement.lastChild.firstChild.innerText;
        e.target.parentElement.remove();
        getData.removeFromLocalStorage(fullLink, shortLink);
    } else if (e.target.classList.contains('url-list-item')) {
        const fullLink = e.target.firstChild.firstChild.innerText;
        const shortLink = e.target.lastChild.firstChild.innerText;
        e.target.remove();
        getData.removeFromLocalStorage(fullLink, shortLink);
    };

});
