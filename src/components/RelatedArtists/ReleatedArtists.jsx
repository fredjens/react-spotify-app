import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Image from '../Image';

import styles from './style.css';

const RelatedArtists = props => {
    const updateArtist = (id) => {
        props.handleclick(id);
    };

    const related = props.artists.map((artist, index) =>
        <Link
            key={index}
            to={`/artists/${artist.id}`}
            onClick={updateArtist(artist.id)}
            className={styles.artist}
        >
            <h2 className={styles.artistTitle}>
                {artist.name}
            </h2>
            <Image url={artist.images} />
        </Link>
    );

    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.title}>Related artists</h2>
                {related}
            </div>
        </div>
    );
};


RelatedArtists.propTypes = {
    artists: PropTypes.array.isRequired,
    url: PropTypes.array.isRequired,
};

export default RelatedArtists;
