'user strict';

import React from 'react';
import Image from './image';
import { Link } from 'react-router';

class RelatedArtists extends React.Component {
    updateArtist(id) {
        this.props.handleclick(id);
    }

    render() {
        const related = this.props.artists.map((artist) => {
            return (
                <div key={artist.name} className="grid__item">
                    <Link to={`/artists/${artist.id}`} onClick={this.updateArtist.bind(this, artist.id)}>
                        <Image url={artist.images} />
                        <h2>{artist.name}</h2>
                    </Link>
                </div>
            );
        });
        return (
            <div>
                {related}
            </div>
        )
    }
};

export default RelatedArtists;
