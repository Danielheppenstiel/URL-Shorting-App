class UI {

    constructor() {
            // Mobile Nav
        this.mobileNavBars = document.querySelector('#nav-bars');
        this.dropDownMenu = document.querySelector('#drop-down-menu');

        // Shorten Links
        this.urlList = document.querySelector('#url-list');

        // URL input
        this.urlInput = document.querySelector('#shorten-input');
        // this.copyBtn = document.querySelector('.copy-btn');
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

    addLinkToDom(linkData) {

        // URL list item
        const liItem = document.createElement('li');
            liItem.classList.add('url-list-item');
            
            // Full link display
        const fullLinkContainerDiv = document.createElement('div');
            fullLinkContainerDiv.classList.add('inital-link-container');
        
        const fullLinkAnchor = document.createElement('a');
            fullLinkAnchor.classList.add('full-link');
                fullLinkAnchor.setAttribute('href', linkData.result.original_link);
                    fullLinkAnchor.innerText = linkData.result.original_link;

        fullLinkContainerDiv.appendChild(fullLinkAnchor);

            // Shorten link display
        const shortLinkContainerDiv = document.createElement('div');
            shortLinkContainerDiv.classList.add('shorten-link-container');
        const shortLinkAnchor = document.createElement('a');
            shortLinkAnchor.classList.add('shorten-link');
                shortLinkAnchor.setAttribute('href', linkData.result.short_link);
                    shortLinkAnchor.innerText = linkData.result.short_link;
        const copyBtn = document.createElement('button');
            copyBtn.classList.add('copy-btn');
                copyBtn.innerText = 'Copy';
        
        shortLinkContainerDiv.appendChild(shortLinkAnchor);
        shortLinkContainerDiv.appendChild(copyBtn);

        // Append to Url List / DOM
        liItem.appendChild(fullLinkContainerDiv);
        liItem.appendChild(shortLinkContainerDiv);

        this.urlList.appendChild(liItem);

    };

    showError() {
        this.urlInput.classList.add('error');
        this.urlInput.placeholder = 'Please enter valid url..'
    };

    removeError() {
        this.urlInput.classList.remove('error');
        this.urlInput.placeholder = 'Shorten a link here..'
    };

    copyUrl(url) {
        navigator.clipboard.writeText(url)
        .then(() => {
            console.log('url successfully copied');
        })
        .catch((error) => {
            console.log(error);
        });

        // this.copyBtn.classList.add('copied');
        
    };


};

export default UI;