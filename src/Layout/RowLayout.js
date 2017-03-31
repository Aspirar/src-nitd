import React, { Component, PropTypes } from 'react';
import './RowLayout.css';

class RowLayout extends Component {
    render() {
        return (
            <div className="row">
                <p>{this.props.content}</p>
            </div>
        );
    }
}

RowLayout.propTypes = {
    content: PropTypes.string.isRequired
};

export default RowLayout;
