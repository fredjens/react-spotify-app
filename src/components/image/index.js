
import React from 'react';

import styles from './style.css';

const Image = props => {
    if (!props.url || !props.url[0] || !props.url[0].url) {
        return <div>No image...</div>;
    }

    return (
        <picture key={props.url[0].url}>
            <img src={props.url[0].url} className={styles.image} />
        </picture>
    )
};

export default Image;
