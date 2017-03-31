import React, { Component, PropTypes } from 'react';
import DropDownLi from './DropDownLi';
import { Link } from 'react-router-dom';

class NavigationLinkList extends Component {
    render() {
        let className;
        if (this.props.orientation === 'horizontal') {
            className = 'navigation__header-list';
        }

        return (
            <ul className={className}>
                <li onClick={this.props.toggleHandler}><Link to="/">Home</Link></li>
                <li>About Us</li>
                <DropDownLi orientation={this.props.orientation}
                            dropDown={['Event 1', 'Event 2']}
                            toggleHandler={this.props.toggleHandler}>
                    Events
                </DropDownLi>
                <li>Collaborations</li>
                <li>Get Involved</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        );
    }
}

NavigationLinkList.propTypes = {
    orientation: PropTypes.string,
    toggleHandler: PropTypes.func
};

export default NavigationLinkList;
