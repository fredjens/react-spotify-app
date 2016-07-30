
const searchArtists = function(query) {
    console.log('SEARCH ARTIST');
    let url = 'https://api.spotify.com/v1/search?q=' + query + '*&type=artist';
    return fetch(url)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        return json.artists.items;
    })
    .catch(function(err) {
        console.log('ERR' + err);
    });
};

export default searchArtists;
