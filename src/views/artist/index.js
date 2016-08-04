'user strict';

import React from 'react';
import { Link } from 'react-router';
import { getArtist, getRelatedArtists, getArtistTopTracks } from '../../services';
import Image from '../../components/image';
import RelatedArtists from '../../components/relatedArtists';
import classNames from 'classnames/bind';
import Player from '../../components/player';

import styles from './style.css';
let cx = classNames.bind(styles);

class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: '',
            loading: true,
            related: [{
                loading: true
            }],
            toptracks: [{
                loading: true
            }],
            track: ''
        };
    }

    componentDidMount() {
        this.getData(this.props.params.artistId);
    }

    getData(id) {
        this.setState({related: [], loading: true});
        getArtist(id).then(artist => {
            this.setState({ artist, loading: false })
        });
        getRelatedArtists(id).then(artists => {
            this.setState({ related: artists, loading: false  })
        });
        getArtistTopTracks(id).then(tracks => {
            console.log(tracks);
            this.setState({
                toptracks: tracks,
                track: tracks[0].preview_url,
                loading: false
            })
        });
    }

    render() {
        console.log(this.state);
        const artist = this.state.artist;

        const artistImageClass = cx({
          'artistImage': true,
          'artistImage--loading': this.state.loading,
          'artistImage--animate': !this.state.loading
        });

        return (
            <div key={this.props.params.artistId}>
                <div className={styles.searchAgain}>
                    <Link to="/">Search</Link>
                </div>
                <div className={artistImageClass}>
                    <Image url={artist.images} key={artist.images} />
                 </div>
                <h1 className={styles.artistName}>{artist.name}</h1>
                <div className={styles.genres}>
                    {artist.genres}
                </div>
                <Player track={this.state.track} />
                <RelatedArtists artists={this.state.related} handleclick={this.getData.bind(this)} />
            </div>
        );
    }
};

export default Artist;
