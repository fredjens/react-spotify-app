'user strict';

import React, {Component} from 'react';
import Search from './search';
import Artist from './artist';

let Main = React.createClass({
    getInitialState: function(){
      return ({
          artistId: null,
          artistName: null,
          artists: []
      });
    },
    setArtist: function(artist) {
        console.log(artist);
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
                <Search text="Artist" artistHandler={this.setArtist} />
                <img src={this.state.artistImage} />
                <h1>{this.state.artistName}</h1>
                <Artist artist={this.state.artistId} />
            </div>
        )
    }
});

export default Main;
