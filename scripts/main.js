// Global Variables
const navBars = document.querySelector('#nav-bars');

// Imports
import UI from './userinterface.js';

// Instantiated Classes
const ui = new UI();


// Event Listeners


navBars.addEventListener('click', (e) => {
    ui.toggleMobileMenu(e);
})
    