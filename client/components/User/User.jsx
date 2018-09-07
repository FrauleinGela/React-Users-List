import React, { Component } from 'react';
import UserService from '../../services/UserService.jsx';
import UserDetail from './UserDetail.jsx';
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: false, user: {} };
    }
    componentDidMount() {
        const params = this.props.match.params;
        this.setState({ isLoading: true });
        UserService
            .getUser(params.id)
            .then((data) => {
                this.setState({
                    isLoading: false,
                    user: data
                })
            }).catch((err) => {
                // TODO: show errors
            }
            )
    }

    render() {
        const { isLoading, user } = this.state;
        if (isLoading) {
            // TODO: Add loading component
            return <p> Is loading ...</p>
        }

        return (
            <UserDetail
                user={user}
            />
        )
    }
}
