const clientID = '3b89c7bf24184e59a19251a7f9c4b255';
const clientSecret = 'ebf8c1bb9c164faab2b604fb014ac9e6';

// Get Token from spotify API
export default function getApiToken(){
    return fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${btoa(clientID + ':' + clientSecret)}`,
        },
        body: "grant_type=client_credentials"
    })
        .then(res => res.json())
        .then(res => res.access_token);
}
