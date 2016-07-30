'user strict';

import React from 'react';
import { Link } from 'react-router';

import './style.css';

class Main extends React.Component {
    render() {
        return (
            <div className=''>
                <Link to="/" className="title">Spotify Machine</Link>
                {this.props.children}
            </div>
        )
    }
};

export default Main;
