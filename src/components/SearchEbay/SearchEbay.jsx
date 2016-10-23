'user strict';

import React from 'react';
import { getRecords } from '../../services';

class SearchEbay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        getRecords(event.target.value);
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    placeholder="Search Ebay"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    autoFocus
                />
                {this.state.total}
            </div>
        );
    }
}

export default SearchEbay;
