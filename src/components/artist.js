import React, {Component} from 'react';

let related = [];

let Artist = React.createClass({
    render: function () {
        let artistUrl = this.props.aristId;
        const url = 'https://api.spotify.com/v1/artists/' + artistUrl + '/related-artists';
        fetch(url)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            let data = json;
            let related = data.artists;
        });
        return (
            <div className='artist'>
                <h1>{this.props.aristId}</h1>
                <RelatedArtists artists={related} />
            </div>
            )
        }
})

let RelatedArtists = React.createClass({
    render: function() {
        let listItems = this.props.artists.map(function(artist, i) {
            return (
                <li key={artist.name}>
                    <a onClick={handleClick.bind(artist, i)} key={i} className=''>{artist.name} / {i}</a>
                </li>
            );
        });
        return (
        <p>
            {listItems},
        </p>
        );
    }
})

export default Artist;
