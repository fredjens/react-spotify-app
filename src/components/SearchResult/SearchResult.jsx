
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './style.css';

const SearchResult = props => {
    const listItems = props.artists.map((artist) =>
        <li key={artist.name} className={styles.item}>
            <Link to={`/artists/${artist.id}`}>
                {artist.name}
            </Link>
        </li>
    );

    return (
        <div>
            <ul className={styles.container}>
                {listItems}
            </ul>
        </div>
    );
};

SearchResult.propTypes = {
    artists: PropTypes.array.isRequired,
};

export default SearchResult;
