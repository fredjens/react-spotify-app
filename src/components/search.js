'user strict';

import React, {Component} from 'react';
import 'whatwg-fetch';

let artist = {};
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
    handleClick: function(artist) {
        this.props.artistHandler(artist);
        artists = [];
        this.setState({
            inputValue: ''
        });
    },
    render: function () {
        const listItems = artists.map((artist) => {
            return (
                <li key={artist.name}>
                    <a onClick={this.handleClick.bind(this, artist)}
                     className=''>{artist.name}</a>
                </li>
            );
        });
        return (
            <div className='search'>
                <input
                    type="text"
                    placeholder="search"
                    onChange={this.handleChange}
                    value={this.state.inputValue}
                />
                <div>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </div>
        );
    }
});


export default Search;
