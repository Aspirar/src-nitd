import React, { Component } from 'react';
import './Navigation.css';
import NavigationLinkList from './NavigationLinkList';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            collapsed: true,
            scrollTop: true
        };

        this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }

    componentDidMount() {
        this.resizeListener = window.addEventListener('resize', (e) => {
            this.setState({ width: e.target.innerWidth });
        }, false);

        this.scrollListener = window.addEventListener('scroll', (e) => {
            if (window.scrollY > 0) {
                this.setState({ scrollTop: false });
            } else {
                this.setState({ scrollTop: true });
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener(this.resizeListener);
        window.removeEventListener(this.scrollListener);
    }

    toggleCollapsed() {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        let headerList, sidebar;
        if (this.state.width > 750) {
            headerList = <NavigationLinkList orientation="horizontal" />
        } else {
            headerList = <ul className="navigation__header-list navigation__icon" onClick={this.toggleCollapsed}>
                             <li>&#x2261;</li>
                         </ul>
            if (this.state.collapsed === false) {
                sidebar = <nav className="navigation__sidebar">
                              <NavigationLinkList orientation="vertical" toggleHandler={this.toggleCollapsed} />
                          </nav>
            }
        }

        return (
            <header className={this.state.scrollTop ? "navigation" : "navigation navigation__fixed"}>
                <div className="navigation__logo">
                    SRC NITD
                </div>
                {headerList}
                {sidebar}
            </header>
        );
    }
}

export default Navigation;
