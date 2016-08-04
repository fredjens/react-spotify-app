'user strict';

import React from 'react';
import { Router, Link } from 'react-router';
import { searchArtists } from '../../services';
import SearchResult from '../searchResult';

import styles from './style.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            inputValue: ''
        };
    }

    handleChange(event) {
        searchArtists(event.target.value).then(artists => {
            this.setState({
                artists
            });
        });
        this.setState({inputValue: event.target.value });
    }

    render() {
        return (
            <div className='search'>
                <input
                    type="text"
                    className={styles.largeInput}
                    placeholder="Search Artist"
                    value={this.state.inputValue}
                    onChange={this.handleChange.bind(this)}
                    autoFocus
                />
                <SearchResult artists={this.state.artists} />
            </div>
        );
    }
}

export default Search;
