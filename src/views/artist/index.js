'user strict';

import React from 'react';
import { Link } from 'react-router';
import { getArtist, getRelatedArtists } from '../../services';
import Image from '../../components/image';
import RelatedArtists from '../../components/relatedArtists';

import './style.css';

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
                <div className="searchAgain">
                    <Link to="/">Search</Link>
                </div>
                <div className="artistImage">
                    <Image url={artist.images} />
                </div>
                <h1 className="artistName">{artist.name}</h1>
                <div className="genres">
                    {artist.genres}
                </div>
                <RelatedArtists artists={this.state.related} handleclick={this.getData.bind(this)} />
            </div>
        );
    }
};

export default Artist;
