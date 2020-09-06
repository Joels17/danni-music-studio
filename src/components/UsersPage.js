import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGetUsersAdmin } from '../actions/users';
import { currentUser } from '../actions/currentUser';

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
				{this.state.render ? (
					<div id="studentsWrapper">
						<h2 id="studentPageH2">Users</h2>
						<div>	
						{this.getUsers()}
						</div>
					</div>
				) : (
					<div>Loading...</div>
				)}
			</div>
		);
	}
}

const maptDispatchToProps = (dispatch) => {
	return {
        startGetUsersAdmin: () => dispatch(startGetUsersAdmin()),
        currentUser: (user) => dispatch(currentUser(user))
	};
};

const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, maptDispatchToProps)(UsersPage);
