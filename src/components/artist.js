'user strict';

import React, {Component} from 'react';

let related = [];

let Artist = React.createClass({
    render: function () {
        if(this.props.artist !== null) {
            let url = 'https://api.spotify.com/v1/artists/' + this.props.artist + '/related-artists';
            fetch(url)
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                let data = json;
                related = data.artists;
            });
        }
        const listItems = related.map((artist, i) => {
            return (
                <div key={artist.name}>
                    <img src={artist.images[2].url} />
                    <a className=''>{artist.name}</a>
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

export default Artist;
