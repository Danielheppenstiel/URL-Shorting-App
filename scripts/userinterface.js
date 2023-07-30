class UI {
    constructor() {
        this.mobileNavBars = document.querySelector('#nav-bars');
        this.dropDownMenu = document.querySelector('#drop-down-menu');
    }

    toggleMobileMenu(e) {
        const barsArr = Array.from(this.mobileNavBars.children);
        barsArr.forEach((bar) => {
            bar.classList.toggle('open');
        });
        
        if (this.dropDownMenu.style.display === 'none' || this.dropDownMenu.style.display === '') {
            this.dropDownMenu.style.display = 'flex'
        } else {
            this.dropDownMenu.style.display = 'none'
        };

    };



};

export default UI;