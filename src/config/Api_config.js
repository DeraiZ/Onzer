import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: {q: 'rock'},
    headers: {
        'X-RapidAPI-Key': 'ac5f356cc2msh9c9fe8fc0dd12a2p18a8dajsn73ab3417daf3',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});