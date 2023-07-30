import UI from './userinterface.js';
const ui = new UI();

class GetData {
    constructor() {
        this.apiUrl = 'https://api.shrtco.de/v2';
    }

    shortenUrl(url) {
        fetch(`${this.apiUrl}/shorten?url=${url}`)
            .then(response => response.json())
                .then((linkData) => {
                    ui.addLinkToDom(linkData);
                })
                .catch((error) => {
                    console.log(error)
                });
    };


};

export default GetData;