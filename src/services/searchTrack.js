
const searchTrack = function(query) {
    console.log('SEARCH TRACK');
    let url = 'https://api.spotify.com/v1/search?q=' + query + '*&type=track';
    return fetch(url)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        return json.tracks;
    })
    .catch(function(err) {
        console.log('ERR' + err);
    });
};

export default searchTrack;
