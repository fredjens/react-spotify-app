
import React from 'react';
import { Router, Link } from 'react-router';

import './style.css';

class SearchResult extends React.Component{
    render() {
        const listItems = this.props.artists.map((artist) => {
            return (
                <li key={artist.name}>
                    <Link to={`/artists/${artist.id}`}>
                        {artist.name}
                    </Link>
                </li>
            )
        });
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default SearchResult;
