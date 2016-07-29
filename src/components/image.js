
import React from 'react';

const Image = props => {
    if(typeof props.url === 'undefined') {
        return <div>No image...</div>;
    } else {
        return <picture><img src={props.url[0].url} /></picture>
    }
};

export default Image;
