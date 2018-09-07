import React, { Component } from 'react';
import UserService from '../../services/UserService.jsx';
import UsersTable from './UsersTable.jsx';
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: false, users: [] };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        UserService
            .get()
            .then((data) => {
                this.setState({
                    isLoading: false,
                    users: data
                })
            }).catch((err) => {
                // TODO: show errors
            }
            )
    }

    render() {
        const { isLoading, users } = this.state;
        // TODO: Add loading component
        if (isLoading) {
            return <p> Is loading ...</p>
        }

        return (
            <UsersTable
                users={users}
            />
        )
    }
}
