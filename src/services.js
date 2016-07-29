
export const getRelatedArtists = function(id) {
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

export const getArtist = function(id) {
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

export const searchArtists = function(query) {
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
