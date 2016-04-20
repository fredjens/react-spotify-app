'user strict';

import React from 'react';
import { Router, Link } from 'react-router';
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
    cleanSearch: function() {
       this.setState({
           inputValue: ' '
       });
       artists = [ ];
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
                <Searchresult artists={artists} searchHandler={this.cleanSearch}  />
            </div>
        );
    }
});

const Searchresult = React.createClass({
    handleClick: function(artist) {
       this.props.searchHandler();
    },
    render: function() {
        const listItems = this.props.artists.map((artist) => {
            return (
                <li key={artist.name}>
                    <Link onClick={this.handleClick} to={`/artists/${artist.id}`}>{artist.name}</Link>
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
});


export default Search;
