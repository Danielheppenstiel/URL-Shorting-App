import UI from './userinterface.js';
const ui = new UI();

class GetData {
    constructor() {
        this.apiUrl = 'https://api.shrtco.de/v2';
    }

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
                    ui.addLinkToDom(linkData);
                })
                .catch((error) => {
                    alert(error);
                    ui.showError();
                });
    };


};

export default GetData;