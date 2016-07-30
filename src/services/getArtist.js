
const getArtist = function(id) {
    console.log('GET ARTIST');
    let url = 'https://api.spotify.com/v1/artists/' + id;
    return fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {
        return json;
    })
    .catch(function(err) {
        console.log('ERR' + err);
    });
};

export default getArtist;
