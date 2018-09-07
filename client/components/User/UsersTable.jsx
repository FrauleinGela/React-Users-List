import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class UsersTable extends Component {

    render() {
        let rows = [];
        this.props.users.forEach((user) => {
            rows.push(
                <tr className="users-table__row users-table__row-hovered" key={user.id}>
                    <td data-label="Name">{user.name}</td>
                    <td data-label="Username">{user.username}</td>
                    <td data-label="Email">{user.email}</td>
                    <td data-label="Phone">{user.phone}</td>
                    <td data-label="Company">{user.company.name}</td>
                    <td data-label="Show"><Link to={`/user/${user.id}`}><FontAwesomeIcon icon="eye" /></Link></td>
                </tr>
            );
        });
        return (
            <section className="container">
                <table className="users-table">
                    <thead>
                        <tr className="users-table__row">
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Company</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </section>
        )
    }

}
UsersTable.propTypes = {
    users: PropTypes.array
};
UsersTable.defaultTypes = {
    users: []
}
