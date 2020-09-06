import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmail } from '../actions/auth';
import { history } from '../routers/AppRouter';

export class EmailLoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			error: '',
		};
	}

	onEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};

	onPasswordChange = (e) => {
		this.setState({ password: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.email || !this.state.password) {
			this.setState({ error: 'Please input email and password' });
		} else {
			this.setState({ error: '' });
			this.props
				.startLoginEmail(this.state.email, this.state.password).then(() => {
					history.push('/loading');
				})
				.catch((err) => {
					this.setState({ error: err.message });
				});
		}
	};

	render() {
		return (
			<div id="loginBanner">
				<form className="loginForm" onSubmit={this.onSubmit}>
					<h2>Login</h2>
					<div id="error">
						{this.state.error ? <h3>{this.state.error}</h3> : ''}
					</div>

					<input
						autoFocus
						className="inputField"
						type="text"
						placeholder="Email"
						onChange={this.onEmailChange}
					/>

					<input
						className="inputField"
						type="password"
						placeholder="password"
						onChange={this.onPasswordChange}
					/>

					<button className="button">Login</button>
					<Link to="/emailSignUp">
						<button className="button">Create an Account</button>
					</Link>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		startLoginEmail: (email, password) =>
			dispatch(startLoginEmail(email, password)),
	};
};

export default connect(undefined, mapDispatchToProps)(EmailLoginPage);
