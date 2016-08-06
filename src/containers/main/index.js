'user strict';

import React from 'react';
import { Link } from 'react-router';

import './global.css';
import styles from './style.css';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Link to="/" className={styles.title}>Spotify Machine</Link>
                <Link to="/" className={styles.search}>Search</Link>
                {this.props.children}
            </div>
        )
    }
};

export default Main;
