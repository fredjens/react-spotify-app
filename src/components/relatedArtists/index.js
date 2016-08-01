'user strict';

import React from 'react';
import Image from '../image';
import { Link } from 'react-router';

import './style.css';

class RelatedArtists extends React.Component {
    updateArtist(id) {
        this.props.handleclick(id);
    }

    render() {
        const related = this.props.artists.map((artist) => {
            return (
                    <Link key={artist.id} to={`/artists/${artist.id}`} onClick={this.updateArtist.bind(this, artist.id)}  className="relatedArtist">
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
    }
};

export default RelatedArtists;
