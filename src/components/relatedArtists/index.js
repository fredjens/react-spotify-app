'user strict';

import React from 'react';
import Image from '../image';
import { Link } from 'react-router';

import './style.css';

const RelatedArtists = props => {

    const updateArtist = (id) => {
        props.handleclick(id);
    };

    const related = props.artists.map((artist, index) => {
        return (
            <Link key={index} to={`/artists/${artist.id}`} onClick={updateArtist.bind(this, artist.id)}  className="relatedArtist">
                <h2 className="relatedArtist__title">{artist.name}</h2>
                <Image url={artist.images} />
            </Link>
        );
    });
    return (
        <div>
            <div className="related">
                <h2 className="related__title">Related artists</h2>
                {related}
            </div>
        </div>
    )
};

export default RelatedArtists;
