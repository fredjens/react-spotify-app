'user strict';

import React from 'react';
import Search from './search';

const Main = React.createClass({
    render: function() {
        return (
            <div className=''>
                <p>Spotify</p>
                {this.props.children}
                <Search />
            </div>
        )
    }
});

export default Main;
