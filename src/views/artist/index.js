'user strict';

import React from 'react';
import { Link } from 'react-router';
import { getArtist, getRelatedArtists } from '../../services';
import Image from '../../components/image';
import RelatedArtists from '../../components/relatedArtists';
import classNames from 'classnames';

import styles from './style.css';
let cx = classNames.bind(styles);

class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: '',
            loading: true,
            related: []
        };
    }

    componentDidMount() {
        this.getData(this.props.params.artistId);
    }

    getData(id) {
        this.setState({related: [], loading: true});
        console.log('loading');
        getArtist(id).then(artist => {
            this.setState({ artist, loading: false })
            console.log('loading done');
        });
        getRelatedArtists(id).then(artists => {
            this.setState({ related: artists, loading: false  })
            console.log('loading done');
        });
    }

    render() {
        const artist = this.state.artist;
        const artistImageClass = cx({
          'artistImage':true,
          'artistImage--loading': this.state.loading,
          'artistImage--animate': !this.state.loading
        });
        return (
            <div>
                <div className="searchAgain">
                    <Link to="/">Search</Link>
                </div>
                <div className={artistImageClass}>
                    <Image url={artist.images} key={artist.images} />
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
