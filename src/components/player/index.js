
import React from 'react';

const Player = props => {
        return (
            <audio autoPlay>
                <source src={props.track}
                type='audio/mpeg' />
            </audio>
        )
};

export default Player;
