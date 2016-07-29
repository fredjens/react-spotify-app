'user strict';

import React from 'react';
import { Link } from 'react-router';
import { getArtist, getRelatedArtists } from '../services';
import Image from './image';
import RelatedArtists from './relatedArtists';

class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: '',
            related: []
        };
    }

    componentDidMount() {
        this.getData(this.props.params.artistId);
    }

    getData(id) {
        getArtist(id).then(artist => {
            this.setState({ artist })
        });
        getRelatedArtists(id).then(artists => {
            this.setState({ related: artists })
        });
    }

    render() {
        const artist = this.state.artist;
        return (
            <div>
                <Link to="/">Search</Link>
                <Image url={artist.images} />
                <h1>{artist.name}</h1>
                <h2>Related artists</h2>
                <RelatedArtists artists={this.state.related} handleclick={this.getData.bind(this)} />
            </div>
        );
    }
};

export default Artist;
