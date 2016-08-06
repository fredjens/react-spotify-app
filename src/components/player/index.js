
import React from 'react';
import ReactPlayer from 'react-player';

import styles from './style.css';

const Player = props => {
    if(props.url !== 'undefined') {
        return (
            <ReactPlayer
                className={styles.player}
                url={props.track}
                playing
            />
        )
    }
};

export default Player;
