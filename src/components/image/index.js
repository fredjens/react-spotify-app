
import React from 'react';

import styles from './style.css';

const Image = props => {
    console.log(props);
    if(typeof props.url === 'undefined') {
        console.log('is undefined');
        return <div>No image...</div>;
    } else {
        return (
            <picture key={props.url[0].url}>
                <img src={props.url[0].url} className={styles.image} />
            </picture>
        )
    }
};

export default Image;
