
const getArtistTopTracks = function(id) {
    console.log('GET ARTIST TOP TRACKS');
    let url = 'https://api.spotify.com/v1/artists/' + id + '/top-tracks?country=NO';
    return fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {
        return json.tracks;
    })
    .catch(function(err) {
        console.log('ERR' + err);
    });
};

export default getArtistTopTracks;
