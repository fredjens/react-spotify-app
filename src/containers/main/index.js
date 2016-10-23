'user strict';

import React from 'react';
import { Link } from 'react-router';

import './global.css';
import styles from './style.css';

const Main = () =>
    <div>
        <Link to="/" className={styles.title}>Spotify Machine</Link>
        <Link to="/" className={styles.search}>Search</Link>
        {this.props.children}
    </div>
;

export default Main;
