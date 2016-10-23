
import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
        this.loaded = this.loaded.bind(this);
    }

    loaded() {
        this.setState({
            loading: false,
        });
    }

    render() {
        const imageClass = cx({
            image: true,
            loading: this.state.loading,
        });

        if (!this.props.url || !this.props.url[0] || !this.props.url[0].url) {
            return <div>No image...</div>;
        }

        const url = this.props.url[0].url;

        return (
            <picture key={url} className={imageClass}>
                <img
                    src={url}
                    alt={url}
                    onLoad={this.loaded}
                />
            </picture>
        );
    }
}

Image.propTypes = {
    url: PropTypes.array,
};

export default Image;
