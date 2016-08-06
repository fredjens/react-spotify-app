'user strict';

import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import { getArtist, getRelatedArtists, getArtistTopTracks } from '../../services';
import Image from '../../components/image';
import RelatedArtists from '../../components/relatedArtists';
import Player from '../../components/player';
import TypeWriter from 'react-typewriter';

import styles from './style.css';
let cx = classNames.bind(styles);

class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: {},
            loading: true,
            related: [{
                loading: true
            }],
            track: null
        };
    }

    componentDidMount() {
        this.getData(this.props.params.artistId);
    }

    getData(id) {
        this.setState({
            related: [],
            track: '',
            loading: true
        });

        getArtist(id).then(artist => {
            this.setState({ artist, loading: false })
        });

        getRelatedArtists(id).then(artists => {
            this.setState({ related: artists, loading: false  })
        });

        getArtistTopTracks(id).then(tracks => {
            this.setState({
                track: tracks[0].preview_url,
                loading: false
            })
        });
    }

    render() {
        const artist = this.state.artist;

        const imageClass = cx({
          'image': true,
          'image--loading': this.state.loading,
          'image--animate': !this.state.loading
        });

        return (
            <div key={this.props.params.artistId}>
                <div className={imageClass}>
                    <Image url={artist.images} key={artist.images} />
                 </div>
                <h1 className={styles.title}>
                    <TypeWriter typing={1}>{artist.name}</TypeWriter>
                </h1>
                <div className={styles.genres}>
                    {artist.genres}
                </div>
                <Player track={this.state.track} />
                <RelatedArtists
                    artists={this.state.related}
                    handleclick={this.getData.bind(this)}
                />
            </div>
        );
    }
};

export default Artist;
