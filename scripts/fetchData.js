class GetData {
    constructor() {
        this.apiUrl = 'https://api.shrtco.de/v2';
    }

    shortenUrl(url) {
        fetch(`${this.apiUrl}/shorten?url=${url}`)
            .then(response => response.json())
                .then((data) => {
                    console.log(data)
                })
                .catch((error) => {
                    console.log(error)
                });
    };


};

export default GetData;