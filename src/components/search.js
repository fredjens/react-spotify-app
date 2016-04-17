import React, {Component} from 'react';
import 'whatwg-fetch';

let artist = [];
let artists = [];

let Search = React.createClass({
    getInitialState: function() {
        return {
            value: null
        }
    },
    handleChange: function(artist) {
        const url = 'https://api.spotify.com/v1/search?q=' + artist.target.value + '*&type=artist';
        fetch(url)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            let data = json;
            artists = data.artists.items;
        })

        this.setState(artists);
    },
    render: function () {
        return (
            <div className='search'>
                <input
                    type="text"
                    placeholder="search"
                    onChange={this.handleChange}
                    value={this.props.value}
                />
                <SearchResult artists={artists} />
            </div>
        );
    }
});

let SearchResult = React.createClass({
    handleClick: function(artist, i) {
        this.props.artistHandler(artist);
    },
    render: function() {
        const listItems = this.props.artists.map((artist, i) => {
            return (
                <li key={artist.name}>
                    <a onClick={this.handleClick(artist, i)} key={i} className=''>{artist.name} / {i}</a>
                </li>
            );
        });
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
})

export default Search;
