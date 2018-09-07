import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <nav className="navheader">
                    <div className="navheader-center">
                        <Link to={`/users`}> {this.props.title} </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string
};

Header.defaultProps = {
    title: 'Users'
};
