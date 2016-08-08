'user strict';

import React from 'react';
import { Router, Link } from 'react-router';
import { getRecords } from '../../services';
import SearchResult from '../searchResult';

class SearchEbay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleChange(event) {
        getRecords(event.target.value);
        this.setState({inputValue: event.target.value });
    }

    render() {

        return (
            <div className='search'>
                <input
                    type="text"
                    placeholder="Search Ebay"
                    value={this.state.inputValue}
                    onChange={this.handleChange.bind(this)}
                    autoFocus
                />
                {this.state.total}
            </div>
        );
    }
}

export default SearchEbay;
