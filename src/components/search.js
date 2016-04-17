'user strict';

import React, {Component} from 'react';
import 'whatwg-fetch';

let artists = [];

const Search = React.createClass({
    getInitialState: function() {
        return {
            inputValue: ''
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
        this.setState({
            inputValue: artist.target.value
        });
    },
    render: function () {
        return (
            <div className='search'>
                <input
                    type="text"
                    placeholder="search"
                    onChange={this.handleChange}
                    value={this.state.inputValue}
                />
                <SearchResult artists={artists} />
            </div>
        );
    }
});

const SearchResult = React.createClass({
    handleClick: function(artist) {
        return function() {
            return this.props.artistHandler(artist);
        };
    },
    render: function() {
        const listItems = this.props.artists.map((artist, i) => {
            return (
                <li key={artist.name}>
                    <a onClick={this.handleClick(artist)} key={i}>{artist.name} / {i}</a>
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
