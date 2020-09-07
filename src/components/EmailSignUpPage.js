import React from 'react';
import { connect } from 'react-redux';
import { startSignUpEmail } from '../actions/auth';

export class EmailSignUpPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			error: '',
			repassword: '',
			passcode: '',
		};
	}

	onEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};

	onPasswordChange = (e) => {
		this.setState({ password: e.target.value });
	};

	onRePasswordChange = (e) => {
		this.setState({ repassword: e.target.value });
	};

	onPasscodeChange = (e) => {
		this.setState({ passcode: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.email || !this.state.password) {
			this.setState({ error: 'Please input email and password' });
		} else if (this.state.password !== this.state.repassword) {
			this.setState({ error: 'Passwords do not match' });
		} else if (this.state.passcode !== 'accelerando') {
			this.setState({ error: 'Incorrect passcode' });
		} else {
			this.setState({ error: '' });
			this.props
				.startSignUpEmail(this.state.email, this.state.password)
				.catch((err) => {
					this.setState({ error: err.message });
				});
		}
	};

	render() {
		return (
			<div id="loginBanner">
				<form className="loginForm" onSubmit={this.onSubmit}>
					<h2>Create an Account</h2>
					{this.state.error ? <h3>{this.state.error}</h3> : ''}
					<input
						autoFocus
						className="inputField"
						type="text"
						placeholder="email"
						onChange={this.onEmailChange}
					/>

					<input
						className="inputField"
						type="password"
						placeholder="password"
						onChange={this.onPasswordChange}
					/>

					<input
						className="inputField"
						type="password"
						placeholder="retype password"
						onChange={this.onRePasswordChange}
					/>

					<input
						className="inputField"
						type="text"
						placeholder="passcode"
						onChange={this.onPasscodeChange}
					/>

					<button className="button">Create Account</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		startSignUpEmail: (email, password) =>
			dispatch(startSignUpEmail(email, password)),
	};
};

export default connect(undefined, mapDispatchToProps)(EmailSignUpPage);
