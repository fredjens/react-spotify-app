'user strict';

import React from 'react';
import Image from '../image';
import { Link } from 'react-router';
import TypeWriter from 'react-typewriter';

import styles from './style.css';

const RelatedArtists = props => {

    const updateArtist = (id) => {
        props.handleclick(id);
    };

    const related = props.artists.map((artist, index) => {
        return (
            <Link key={index} to={`/artists/${artist.id}`} onClick={updateArtist.bind(this, artist.id)}  className={styles.artist}>
                <h2 className={styles.artistTitle}>
                    {artist.name}
                </h2>
                <Image url={artist.images} />
            </Link>
        );
    });

    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.title}>Related artists</h2>
                {related}
            </div>
        </div>
    )
};

export default RelatedArtists;
