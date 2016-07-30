'user strict';

import React from 'react';
import { Router, Link } from 'react-router';
import { searchTrack } from '../../services';
import SearchResult from '../searchResult';
import annyang from 'annyang';

class SearchTrack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            total: ''
        };
    }

    handleChange(event) {
        searchTrack(event.target.value).then(tracks => {
            this.setState({
                tracks: tracks.items,
                total: tracks.total
            });
        });
        this.setState({inputValue: event.target.value });
    }

    render() {



        /*var getVoice = function(artist) {
          console.log(artist);
        };

        var commands = {
            'listen to *artist': getVoice,
            'play *artist': getVoice,
            'hello': function() { console.log('Hello world!'); }
        };

        var msg = new SpeechSynthesisUtterance('Hvilken artist liker du?');
        window.speechSynthesis.speak(msg);

        annyang.addCommands(commands);
        annyang.start();*/

        return (
            <div className='search'>
                <input
                    type="text"
                    placeholder="Search Track"
                    value={this.state.inputValue}
                    onChange={this.handleChange.bind(this)}
                    autoFocus
                />
                {this.state.total}
                <SearchResult artists={this.state.tracks} />
            </div>
        );
    }
}

export default SearchTrack;
