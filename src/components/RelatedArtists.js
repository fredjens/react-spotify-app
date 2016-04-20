'user strict';

import React from 'react';
import { Router, Link } from 'react-router';

let related = [];

const RelatedArtists = React.createClass({
    getInitialState: function() {
        return {
            artistsId: 'hei'
        }
    },
    render: function() {
        let artistsId = this.props.params.artistId;
        let url = 'https://api.spotify.com/v1/artists/' + artistsId + '/related-artists';
        console.log(url);
        fetch(url)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            let data = json;
            related = data.artists;
        });
        const listItems = related.map((artist) => {
            return (
                <div key={artist.name}>
                <Link onClick={this.handleClick} to={`/artists/${artist.id}`}>
                    <h2>{artist.name}</h2>
                    <img src={artist.images[2].url} />
                </Link>
                </div>
            );
        });

        return (
            <div>
                <h2>Related artists</h2>
                {listItems}
            </div>
        );
    }
})

export default RelatedArtists;
