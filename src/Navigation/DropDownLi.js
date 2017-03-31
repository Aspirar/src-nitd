import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './DropDownLi.css';

class DropDownLi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropDownOpen: false
        };

        this.toggleDropDownOpen = this.toggleDropDownOpen.bind(this);
    }

    toggleDropDownOpen() {
        this.setState({ dropDownOpen: !this.state.dropDownOpen });
    }

    render() {
        let onMouseEnter, onMouseLeave, onClick;
        let dropDownClass;
        if (this.props.orientation === 'horizontal') {
            onMouseEnter = this.toggleDropDownOpen;
            onMouseLeave = this.toggleDropDownOpen;
            dropDownClass = 'drop-down__overlay';
        } else {
            onClick = this.toggleDropDownOpen;
            dropDownClass = 'drop-down__inline';
        }

        let dropDownElement;
        if (this.state.dropDownOpen) {
            dropDownElement = (
                <ul className={dropDownClass}>
                    {this.props.dropDown.map((element, index) => {
                        return (
                            <li key={index} onClick={this.props.toggleHandler}>
                                <Link to={'/event/' + element.split(' ').join('-')}>{element}</Link>
                            </li>
                        );
                    })}
                </ul>
            );
        }

        return (
            <li className="drop-down__wrap" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div onClick={onClick}>{this.props.children}</div>
                {dropDownElement}
            </li>
        );
    }
}

DropDownLi.propTypes = {
    dropDown: PropTypes.array.isRequired,
    orientation: PropTypes.string.isRequired,
    toggleHandler: PropTypes.func
};

export default DropDownLi;
