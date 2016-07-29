'user strict';

import React from 'react';
import Search from './search';
import { Router, Link } from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div className=''>
                <Link to="/">Spotify Machine</Link>
                <Search />
            </div>
        )
    }
}

export default Home;
