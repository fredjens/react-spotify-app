'user strict';

import React, {Component} from 'react';

let related = [];

const RelatedArtists = React.createClass({
    handleClick: function(artist) {
        this.props.artistHandler(artist);
        this.setState({
            inputValue: ''
        });
    },
    render: function(newProps) {
        if(this.props.artist) {
            let url = 'https://api.spotify.com/v1/artists/' + this.props.artist + '/related-artists';
            fetch(url)
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                let data = json;
                related = data.artists;
            });
            const listItems = related.map((artist) => {
                return (
                    <a onClick={this.handleClick.bind(this, artist)} key={artist.name}>
                        <img src={artist.images[2].url} />
                        <p className=''>{artist.name}</p>
                    </a>
                );
            });
            return (
                <div>
                    <h2>Related artists</h2>
                    {listItems}
                </div>
            );
        }
        return(<h1>Search</h1>);
    }
})

export default RelatedArtists;
