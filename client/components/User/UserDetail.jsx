import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default function UserDetail(props) {
    return (
        <section className="container">
            <div className="user-card">
                <strong className="user-card__header">{props.user.name}</strong>
                <div className="user-card__block">
                    <strong>Details:</strong>
                    <p className="user-card__detail">{props.user.username}</p>
                    <p className="user-card__detail">{props.user.email}</p>
                    <p className="user-card__detail">{props.user.phone}</p>
                    <p className="user-card__other">
                        {props.user.company && props.user.company.name}
                    </p>
                </div>
            </div>
        </section>
    )
}
UserDetail.propTypes = {
    user: PropTypes.object
};
UserDetail.defaultTypes = {
    user: {}
}
