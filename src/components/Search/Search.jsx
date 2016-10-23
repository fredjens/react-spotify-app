'user strict';

import React from 'react';
import { searchArtists } from '../../services';
import SearchResult from '../SearchResult';

import styles from './style.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            inputValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        searchArtists(event.target.value).then(artists => {
            this.setState({
                artists,
            });
        });
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    className={styles.largeInput}
                    placeholder="Search Artist"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    autoFocus
                />
                <SearchResult artists={this.state.artists} />
            </div>
        );
    }
}

export default Search;
