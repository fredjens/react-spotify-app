'user strict';

import React, {Component} from 'react';
import Search from './search';
import RelatedArtists from './RelatedArtists';

const Main = React.createClass({
    getInitialState: function(){
      return ({
          artistId: null,
          artistName: null,
          artists: []
      });
    },
    setArtist: function(artist) {
        this.setState({
            artistId: artist.id,
            artistName: artist.name,
            artistImage: artist.images[1].url
        });
    },
    render: function() {
        return (
            <div className=''>
                <p>Spotify</p>
                <img src={this.state.artistImage} />
                <h1>{this.state.artistName}</h1>
                <RelatedArtists active={this.setArtist} artist={this.state.artistId} />
                <Search text="Artist" artistHandler={this.setArtist} />
            </div>
        )
    }
});

export default Main;
