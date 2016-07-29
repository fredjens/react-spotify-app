'user strict';

import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div className=''>
                {this.props.children}
            </div>
        )
    }
};

export default Main;
