import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGetUsersAdmin } from '../actions/users';
import { currentUser } from '../actions/currentUser';
import searchUsers from '../selectors/searchUsers';
import UserFilter from './UserFilter';

export class UsersPage extends React.Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			render: false,
		};
	}

	componentDidMount = () => {
		this._isMounted = true;

		if (this._isMounted) {
			this.props.startGetUsersAdmin().then(() => {
				if (this._isMounted) {
					this.setState({ render: true });
				}
			});
		}
	};

	componentWillUnmount = () => {
		this._isMounted = false;
	};

	getUsers = () => {
		let users = [];
		for (let i = 0; i < this.props.users.length; i++) {
			users.push(
				<div id="studentText" key={this.props.users[i].id}>
					<Link
						onClick={() => this.props.currentUser(this.props.users[i])}
						to={`/studentsAdmin/${this.props.users[i].id}`}
					>
						{this.props.users[i].info.email}
					</Link>
					<br />
				</div>
			);
		}

		return users;
	};
	render() {
		return (
			<div>
				<div id="studentsWrapper">
					<h2 id="studentPageH2">Student/Parent Emails</h2>
					<UserFilter />
					{this.state.render ? (
						<div>{this.getUsers()}</div>
					) : (
						<div>Loading...</div>
					)}
				</div>
			</div>
		);
	}
}

const maptDispatchToProps = (dispatch) => {
	return {
		startGetUsersAdmin: () => dispatch(startGetUsersAdmin()),
		currentUser: (user) => dispatch(currentUser(user)),
	};
};

const mapStateToProps = (state) => {
	return {
		users: searchUsers(state.users, state.userFilter)
	};
};

export default connect(mapStateToProps, maptDispatchToProps)(UsersPage);
