'user strict';

import React, {Component} from 'react';
import Search from './search';
import Artist from './artist';

let Main = React.createClass({
    getInitialState: function(){
      return ({
          artistId: '1dQNpgaoBQTyrZu61CX3NP',
          artistName: 'Whatever'
      });
    },
    setArtist: function(i) {
        let name = artists[i].name;
        let id = artists[i].id;
        artist.push(id);
        console.log(name, id);
        this.setState({
            artistId: id,
            artistName: name
        });
    },
    render: function() {
        return (
            <div className=''>
                <p>Spotify</p>
                <h1>{this.state.artistName}</h1>
                <Search artistHandler={this.setArtist} />
            </div>
        )
    }
});

export default Main;
