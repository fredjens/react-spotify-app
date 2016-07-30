
const getRelatedArtists = function(id) {
    console.log('GET RELEATED ARTISTS');
    let url = 'https://api.spotify.com/v1/artists/' + id + '/related-artists';
    return fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {
        return json.artists;
    })
    .catch(function(err) {
        console.log('ERR' + err);
    });
};

export default getRelatedArtists;
