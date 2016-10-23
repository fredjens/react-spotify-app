
import React, { PropTypes } from 'react';
import ReactPlayer from 'react-player';

import styles from './style.css';

const Player = props => {
    if (props.url !== 'undefined') {
        return (
            <ReactPlayer
                className={styles.player}
                url={props.track}
                playing
            />
        );
    }

    return <div>Loading</div>;
};

Player.propTypes = {
    url: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
};

export default Player;
