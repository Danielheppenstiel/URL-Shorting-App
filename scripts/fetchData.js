import UI from './userinterface.js';
const ui = new UI();

class GetData {

    constructor() {
        this.apiUrl = 'https://api.shrtco.de/v2';
    };

    shortenUrl(url) {
        fetch(`${this.apiUrl}/shorten?url=${url}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong')
                } else {
                    return response.json();
                };
            })
                .then((linkData) => {
                    ui.addLinkToDom(linkData.result.original_link, linkData.result.short_link);
                    this.addToLocalStorage(linkData.result.original_link, linkData.result.short_link);
                })
                .catch((error) => {
                    alert(error);
                    ui.showError();
                });
    };

    // add to Local Storage
 addToLocalStorage(fullLink, shortLink) {

    let arrayOfLinks = [];

    const existingLinks = localStorage.getItem('links');

    if (existingLinks) {
        arrayOfLinks = JSON.parse(existingLinks);
    }

    // will return true || false
    const isDuplicate = arrayOfLinks.some((link) => {
       return link.fullLink === fullLink || link.shortLink === shortLink
    });

    if(!isDuplicate) {
        const linkObject = {fullLink, shortLink};
        arrayOfLinks.push(linkObject);
        const updatedArrayOfLinks = JSON.stringify(arrayOfLinks);
        localStorage.setItem('links', updatedArrayOfLinks);
    } else {
        console.log('Duplicate link found. Not adding to ls')
    };

};

};

export default GetData;